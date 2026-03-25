
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Process from './pages/Process';
import IPR from './pages/IPR';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import LeadPopup from './components/LeadPopup';
import VoiceAgents from './pages/VoiceAgents';

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.02 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const Logo: React.FC<{ className?: string, dark?: boolean }> = ({ className = "w-10 h-10", dark = false }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="48">
        <stop offset="0%" stopColor="#7c3aed" />
        <stop offset="100%" stopColor="#4f46e5" />
      </linearGradient>
      <linearGradient id="grad2" x1="0" y1="0" x2="48" y2="0">
        <stop offset="0%" stopColor="#7c3aed" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    <rect x="4" y="6" width="4" height="36" rx="2" fill="url(#grad1)" />
    <path d="M8 24h10" stroke="url(#grad2)" strokeWidth="3" strokeLinecap="round" />
    <circle cx="21" cy="24" r="3" fill="#06b6d4" />
    <path d="M26 14l10 10l-10 10" stroke="url(#grad2)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M34 14l10 10l-10 10" stroke="url(#grad2)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Voice Agents', path: '/voice-agents' },
    { name: 'The Process', path: '/process' },
    { name: 'FAQ', path: '/faq' },
    { name: 'About', path: '/about' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Lead Generation Popup */}
      <LeadPopup />

      {/* Permanent Fixed Header */}
      <header className="fixed top-0 w-full z-50 bg-white border-b border-slate-100 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform shadow-lg shadow-indigo-100/50">
                <Logo className="w-8 h-8" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">
                  Edge
                </span>
                <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-slate-400 mt-1">Innovate. Accelerate. Prevail.</span>
              </div>
            </Link>
            
            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link text-[11px] font-black uppercase tracking-widest transition-colors ${
                    location.pathname === link.path ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-950'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-slate-950 text-white px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all transform active:scale-95 shadow-xl shadow-slate-100"
              >
                Contact
              </Link>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-slate-950"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-8 shadow-2xl z-50"
            >
              <div className="flex flex-col space-y-6">
                {[...navLinks, { name: 'Contact', path: '/contact' }].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-[12px] font-black uppercase tracking-widest px-4 transition-colors ${
                      location.pathname === item.path ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow pt-20">
        {children}
      </main>

      <footer className="bg-slate-950 text-slate-300 pt-32 pb-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/5">
                  <Logo className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                   <span className="text-xl font-extrabold tracking-tighter text-white uppercase">Edge</span>
                   <span className="text-[7px] font-bold uppercase tracking-widest text-slate-500">Legal Services</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-400 mb-8 font-light">
                Architecting professional resolution strategies through technology-led financial consultancy.
              </p>
              <div className="space-y-4 text-xs font-semibold tracking-wide text-indigo-400">
                <a href="mailto:settleedge@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                  <span className="p-2 bg-white/5 rounded-lg text-white">@</span> settleedge@gmail.com
                </a>
                <a href="tel:+917291009145" className="flex items-center gap-3 hover:text-white transition-colors">
                  <span className="p-2 bg-white/5 rounded-lg text-white">#</span> +91 7291009145
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 text-[11px] uppercase tracking-widest opacity-40">Expertise</h4>
              <ul className="space-y-4 text-[13px] font-medium">
                <li><Link to="/services" className="hover:text-white transition-colors">Loan Settlement</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">MSME Debt Strategy</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Foreclosure Removal</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">IPR Documentation</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 text-[11px] uppercase tracking-widest opacity-40">Company</h4>
              <ul className="space-y-4 text-[13px] font-medium">
                <li><Link to="/about" className="hover:text-white transition-colors">Our Ethos</Link></li>
                <li><Link to="/process" className="hover:text-white transition-colors">The Process</Link></li>
                <li><Link to="/faq" className="hover:text-white transition-colors">Knowledge Base</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Get Evaluation</Link></li>
              </ul>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
              <h4 className="text-white font-bold mb-4 text-[11px] uppercase tracking-widest">Consultancy Notice</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed italic">
                Edge Legal Services operates strictly as a consultancy. We are not a lender or recovery agent. Professional representation is facilitated through our advocate panel.
              </p>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] font-bold text-slate-600">
            <p>&copy; {new Date().getFullYear()} Edge Legal Services Pvt Ltd.</p>
            <div className="flex space-x-10 mt-6 md:mt-0">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
          <Route path="/voice-agents" element={<PageWrapper><VoiceAgents /></PageWrapper>} />
          <Route path="/process" element={<PageWrapper><Process /></PageWrapper>} />
          <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="/privacy" element={<PageWrapper><Privacy /></PageWrapper>} />
          <Route path="/terms" element={<PageWrapper><Terms /></PageWrapper>} />
          <Route path="/cookies" element={<PageWrapper><Cookies /></PageWrapper>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
