
// Dit is een eenvoudig JavaScript-bestand voor eventuele interacties op de pagina
document.addEventListener('DOMContentLoaded', function() {
  // Voeg smooth scrolling toe voor anker links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // 80px offset voor de sticky header
          behavior: 'smooth'
        });
      }
    });
  });

  // Voeg een klasse toe aan de header bij scrollen
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Voeg een simpele mobile menu toggle toe
  const createMobileMenu = () => {
    const nav = document.querySelector('.nav');
    const logoSection = document.querySelector('.logo');
    
    if (window.innerWidth < 768) {
      // Maak een menu button voor mobiel
      if (!document.querySelector('.menu-toggle')) {
        const menuToggle = document.createElement('button');
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        `;
        
        document.querySelector('.nav-container').appendChild(menuToggle);
        
        // Voeg CSS toe voor mobiel menu
        const style = document.createElement('style');
        style.textContent = `
          .menu-toggle {
            background: transparent;
            border: none;
            color: var(--primary);
            cursor: pointer;
            display: block;
            padding: 0.5rem;
          }
          
          .nav.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: rgba(15, 23, 42, 0.95);
            backdrop-filter: blur(8px);
            padding: 1rem;
            border-bottom: 1px solid var(--border-color);
          }
          
          .nav.active a {
            padding: 0.75rem 0;
            display: block;
            width: 100%;
          }
          
          .header.scrolled {
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          }
        `;
        document.head.appendChild(style);
        
        // Voeg event listener toe voor toggle
        menuToggle.addEventListener('click', () => {
          nav.classList.toggle('active');
        });
        
        // Sluit menu wanneer op een link wordt geklikt
        nav.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => {
            nav.classList.remove('active');
          });
        });
      }
    } else {
      // Verwijder mobile menu als scherm groter wordt
      const menuToggle = document.querySelector('.menu-toggle');
      if (menuToggle) {
        menuToggle.remove();
      }
      nav.classList.remove('active');
    }
  };

  // Roep createMobileMenu aan bij laden en resize
  createMobileMenu();
  window.addEventListener('resize', createMobileMenu);
});
