
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'

// Using HashRouter instead of BrowserRouter for GitHub Pages compatibility
// HashRouter uses URL fragments (#) which work better with GitHub Pages
createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <App />
  </HashRouter>
);
