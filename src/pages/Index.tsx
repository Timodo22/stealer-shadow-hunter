
import React from 'react';
import { Shield, Search, Lock, Eye, Server, AlertTriangle } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-purple-400" />
              <h1 className="text-2xl font-bold text-white">CyberSec Research</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#orientation" className="text-purple-300 hover:text-white transition-colors">Oriëntatie</a>
              <a href="#research" className="text-purple-300 hover:text-white transition-colors">Onderzoek</a>
              <a href="#conclusion" className="text-purple-300 hover:text-white transition-colors">Conclusie</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
              Stealer Malware
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Detectie & Preventie Research
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
              Een diepgaand onderzoek naar stealer malware, detectiemethoden en preventieve maatregelen 
              om organisaties te beschermen tegen credential harvesting aanvallen.
            </p>
          </div>
          <div className="text-purple-300">
            <p className="mb-2"><strong>Onderzoeker:</strong> Timo van der Steen</p>
            <p className="mb-2"><strong>Periode:</strong> Semester 6</p>
            <p><strong>Datum:</strong> 19/03/2024</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-20">
        
        {/* Orientation Section */}
        <section id="orientation" className="mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 p-8">
            <div className="flex items-center mb-6">
              <Search className="h-8 w-8 text-purple-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">Oriëntatie</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-purple-300 mb-4">Trending Onderwerpen</h3>
                <ul className="space-y-2 text-purple-100">
                  <li className="flex items-start"><span className="text-purple-400 mr-2">•</span>AI-gedreven Cyberdreigingen</li>
                  <li className="flex items-start"><span className="text-purple-400 mr-2">•</span>Zero Trust Architectuur</li>
                  <li className="flex items-start"><span className="text-purple-400 mr-2">•</span>Quantum Computing Risico's</li>
                  <li className="flex items-start"><span className="text-purple-400 mr-2">•</span>Uitbreiding van het Aanvalsoppervlak</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-purple-300 mb-4">State-of-the-Art Technologie</h3>
                <ul className="space-y-2 text-purple-100">
                  <li className="flex items-start"><span className="text-purple-400 mr-2">•</span>Extended Detection and Response (XDR)</li>
                  <li className="flex items-start"><span className="text-purple-400 mr-2">•</span>Automatisering en AI in Incident Response</li>
                  <li className="flex items-start"><span className="text-purple-400 mr-2">•</span>Threat Intelligence Platforms</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Research Questions */}
        <section id="research" className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Onderzoeksvragen</h2>
          
          {/* Research Question 1 */}
          <div className="mb-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 p-6">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Welke patronen zijn te herkennen in bestaande stealer malware?</h3>
              
              <div className="space-y-4 text-purple-100">
                <p className="text-sm text-purple-300 font-medium">DOT: Field – analyse van bestaande malware</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-purple-300 mb-3">Veelvoorkomende Patronen:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start"><span className="text-purple-400 mr-2">1.</span>Gebruik van bekende binaries (Living off the Land)</li>
                      <li className="flex items-start"><span className="text-purple-400 mr-2">2.</span>Exfiltratie via standaardprotocollen</li>
                      <li className="flex items-start"><span className="text-purple-400 mr-2">3.</span>Targeten van specifieke applicaties</li>
                      <li className="flex items-start"><span className="text-purple-400 mr-2">4.</span>Minimalistische werking</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-purple-300 mb-3">Doelwitten:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start"><span className="text-purple-400 mr-2">•</span>Browsers: Chrome, Firefox, Edge</li>
                      <li className="flex items-start"><span className="text-purple-400 mr-2">•</span>VPN- en RDP-software</li>
                      <li className="flex items-start"><span className="text-purple-400 mr-2">•</span>Cryptowallets: Metamask, Exodus</li>
                      <li className="flex items-start"><span className="text-purple-400 mr-2">•</span>Gaming platforms: Steam, Epic Games</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Research Question 2 */}
          <div className="mb-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 p-6">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Hoe werkt stealer malware en welke technieken worden gebruikt?</h3>
              
              <div className="space-y-4 text-purple-100">
                <p className="text-sm text-purple-300 font-medium">DOT: Lab – POC / Computer Simulation</p>
                
                <div className="bg-slate-900/50 rounded-lg p-6 border border-purple-500/30">
                  <h4 className="font-semibold text-purple-300 mb-4">Proof of Concept: Microsoft Edge Password Extraction</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                      <div>
                        <h5 className="font-medium text-purple-200">Sleutel ophalen</h5>
                        <p className="text-sm text-purple-100">Encryptiesleutel uit "Local State" bestand ophalen en ontsleutelen via DPAPI</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                      <div>
                        <h5 className="font-medium text-purple-200">Database kopiëren</h5>
                        <p className="text-sm text-purple-100">SQLite-database "Login Data" kopiëren om toegangsfouten te voorkomen</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                      <div>
                        <h5 className="font-medium text-purple-200">Wachtwoorden ontsleutelen</h5>
                        <p className="text-sm text-purple-100">AES-GCM decryptie gebruiken om versleutelde wachtwoorden leesbaar te maken</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                      <div>
                        <h5 className="font-medium text-purple-200">Gegevens exfiltreren</h5>
                        <p className="text-sm text-purple-100">Data versturen via HTTP, Telegram, Discord of email naar aanvaller</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Research Question 3 */}
          <div className="mb-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 p-6">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Welke detectiemethoden kunnen worden toegepast?</h3>
              
              <div className="space-y-4 text-purple-100">
                <p className="text-sm text-purple-300 font-medium">DOT: Showroom – Vergelijkingen tussen EDR's</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full bg-slate-900/50 rounded-lg border border-purple-500/30">
                    <thead>
                      <tr className="border-b border-purple-500/30">
                        <th className="text-left p-4 text-purple-300 font-semibold">EDR-oplossing</th>
                        <th className="text-left p-4 text-purple-300 font-semibold">Sterke punten</th>
                        <th className="text-left p-4 text-purple-300 font-semibold">Zwakke punten</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-purple-500/20">
                        <td className="p-4 font-medium text-purple-200">Microsoft Defender</td>
                        <td className="p-4 text-sm">Windows integratie, DPAPI detectie</td>
                        <td className="p-4 text-sm">Beperkt op non-Windows</td>
                      </tr>
                      <tr className="border-b border-purple-500/20">
                        <td className="p-4 font-medium text-purple-200">CrowdStrike Falcon</td>
                        <td className="p-4 text-sm">Cloud-based AI, script detectie</td>
                        <td className="p-4 text-sm">Black box AI beslissingen</td>
                      </tr>
                      <tr className="border-b border-purple-500/20">
                        <td className="p-4 font-medium text-purple-200">SentinelOne</td>
                        <td className="p-4 text-sm">Autonome AI, automatische rollback</td>
                        <td className="p-4 text-sm">False positives bij custom scripts</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Research Question 4 */}
          <div className="mb-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 p-6">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Welke wachtwoordmanagers zijn "goed" voor preventieve maatregelen?</h3>
              
              <div className="space-y-4 text-purple-100">
                <p className="text-sm text-purple-300 font-medium">DOT: Showroom – Vergelijkingen tussen password managers</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-900/30 rounded-lg p-6 border border-green-500/30">
                    <div className="flex items-center mb-4">
                      <Lock className="h-6 w-6 text-green-400 mr-2" />
                      <h4 className="font-semibold text-green-300">Aanbevolen: MindYourPass</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li>✓ AES-256 encryptie + MFA</li>
                      <li>✓ AVG/NIS2 compliant</li>
                      <li>✓ SSO/AD integratie</li>
                      <li>✓ Lokale aanbieder (Eindhoven)</li>
                      <li>✓ €5,50 per maand</li>
                      <li>✓ 0 security breaches</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-900/30 rounded-lg p-6 border border-blue-500/30">
                    <div className="flex items-center mb-4">
                      <Shield className="h-6 w-6 text-blue-400 mr-2" />
                      <h4 className="font-semibold text-blue-300">Runner-up: NordPass</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li>✓ AES-256 encryptie + MFA</li>
                      <li>✓ AVG/NIS2 compliant</li>
                      <li>✓ SSO integratie</li>
                      <li>✓ Gebruiksvriendelijk</li>
                      <li>✓ €6,00 per maand</li>
                      <li>✓ 0 security breaches</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-red-900/30 rounded-lg p-4 border border-red-500/30">
                  <div className="flex items-center mb-2">
                    <AlertTriangle className="h-5 w-5 text-red-400 mr-2" />
                    <h5 className="font-medium text-red-300">Te vermijden</h5>
                  </div>
                  <p className="text-sm text-red-100">LastPass (2 breaches), Bitwarden (3 breaches op één dag), Keeper (beperkte integratie)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section id="conclusion" className="mb-16">
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-xl border border-purple-500/20 p-8">
            <div className="flex items-center mb-6">
              <Eye className="h-8 w-8 text-purple-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">Conclusie</h2>
            </div>
            
            <div className="space-y-6 text-purple-100">
              <p className="text-lg leading-relaxed">
                Dit onderzoek heeft aangetoond dat <strong className="text-purple-300">stealer malware een serieuze dreiging</strong> vormt 
                voor organisaties vanwege de gerichte en vaak geavanceerde methoden waarmee gevoelige gegevens worden gestolen.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-800/50 rounded-lg p-6 border border-purple-500/20">
                  <h4 className="font-semibold text-purple-300 mb-3">Detectie</h4>
                  <p className="text-sm">Technieken zoals obfuscatie en encryptie kunnen worden opgespoord door statische en dynamische analyse, gedragssignaturen en tooling zoals YARA.</p>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-6 border border-purple-500/20">
                  <h4 className="font-semibold text-purple-300 mb-3">Preventie</h4>
                  <p className="text-sm">Wachtwoordmanagers, MFA, en veilige netwerkconfiguraties dragen bij aan het verkleinen van het aanvalsoppervlak.</p>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-6 border border-purple-500/20">
                  <h4 className="font-semibold text-purple-300 mb-3">Aanpak</h4>
                  <p className="text-sm">Een proactieve beveiligingsaanpak waarin technische detectiemethoden, bewustwording en goede tooling hand in hand gaan.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Union Mention */}
        <section className="mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 p-8">
            <div className="flex items-center mb-6">
              <Server className="h-8 w-8 text-purple-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">Security Union Experience</h2>
            </div>
            
            <div className="space-y-4 text-purple-100">
              <p className="text-lg">
                Tijdens dit onderzoek heb ik ook ervaring opgedaan met <strong className="text-purple-300">Security Union</strong>, 
                een krachtige SIEM-tool die realtime data analysis mogelijk maakt.
              </p>
              
              <div className="bg-slate-900/50 rounded-lg p-6 border border-purple-500/30">
                <h4 className="font-semibold text-purple-300 mb-3">Bevindingen:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start"><span className="text-purple-400 mr-2">•</span>Meeste DNS requests gingen naar ubuntu.com (updates) en fontysict.nl (school netwerk)</li>
                  <li className="flex items-start"><span className="text-purple-400 mr-2">•</span>TCP protocol wordt het vaakst gebruikt voor web traffic</li>
                  <li className="flex items-start"><span className="text-purple-400 mr-2">•</span>Enorme hoeveelheid data beschikbaar voor filtering en analyse</li>
                  <li className="flex items-start"><span className="text-purple-400 mr-2">•</span>Mogelijkheid voor custom queries per IP, regio, en poort</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-sm border-t border-purple-500/20 py-8">
        <div className="container mx-auto px-6 text-center text-purple-300">
          <p>&copy; 2024 Timo van der Steen - Specialisatie Research Semester 6</p>
          <p className="mt-2 text-sm text-purple-400">Cybersecurity Research - Stealer Malware Detection & Prevention</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
