
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import AiImage from '../components/AiImage';

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [loanType, setLoanType] = useState('Personal Loan');
  const [otherLoanType, setOtherLoanType] = useState('');
  const [loanAmount, setLoanAmount] = useState<number>(500000); // Default 5L
  const [amountInput, setAmountInput] = useState('5,00,000');
  const [showResult, setShowResult] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  const springConfig = { damping: 25, stiffness: 700 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  const formatCurrencyLabel = (val: number) => {
    if (val >= 10000000) {
      return (val / 10000000).toFixed(2) + ' Cr';
    } else if (val >= 100000) {
      return (val / 100000).toFixed(2) + ' L';
    }
    return val.toLocaleString('en-IN');
  };

  const handleAmountChange = (val: string) => {
    // Keep only numbers
    const numeric = val.replace(/[^0-9]/g, '');
    const numVal = parseInt(numeric) || 0;
    // Limit to 100 Crores (1,00,00,00,000)
    const clampedVal = Math.min(numVal, 1000000000);
    setLoanAmount(clampedVal);
    setAmountInput(clampedVal.toLocaleString('en-IN'));
  };

  const calculateEstimation = () => {
    let basePercent = 0.3;
    if (loanType === 'Vehicle Loan') basePercent = 0.35;
    if (loanType === 'Property Loan' || loanType === 'Business Loan (Secured)') basePercent = 0.5;
    if (loanType === 'Other') basePercent = 0.3;

    const min = loanAmount * (basePercent - 0.05);
    const max = loanAmount * (basePercent + 0.05);

    return {
      min: Math.max(0, Math.round(min)),
      max: Math.round(max)
    };
  };

  const estimation = calculateEstimation();

  const [selectedFeature, setSelectedFeature] = useState<null | { title: string, content: string }>(null);

  const testimonials = [
    {
      quote: "Edge Legal Services transformed our debt situation. Their professional approach and clear documentation made all the difference.",
      author: "Rajesh K.",
      role: "SME Owner",
      color: "border-indigo-100"
    },
    {
      quote: "I was lost with my IPR registration until I found Edge. They handled everything with precision and kept me informed at every step.",
      author: "Priya M.",
      role: "Tech Founder",
      color: "border-rose-100"
    },
    {
      quote: "The loan settlement process was daunting, but the team at Edge provided a clear roadmap and expert mediation. Highly recommended.",
      author: "Amit S.",
      role: "Individual Client",
      color: "border-cyan-100"
    },
    {
      quote: "Their expertise in property registration saved us from a potential legal nightmare. Extremely thorough and reliable.",
      author: "Vikram R.",
      role: "Real Estate Investor",
      color: "border-amber-100"
    },
    {
      quote: "The credit rebuilding strategy they provided was life-changing. My score improved significantly within months.",
      author: "Sneha G.",
      role: "Professional",
      color: "border-emerald-100"
    },
    {
      quote: "Professional, transparent, and highly effective. Edge is the gold standard for legal and financial resolution.",
      author: "Karan J.",
      role: "Business Consultant",
      color: "border-violet-100"
    }
  ];

  return (
    <div 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      className="relative bg-white overflow-hidden min-h-screen"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[60rem] h-[60rem] mesh-blob-1 blur-[120px]" />
        <div className="absolute top-[20%] left-[-10%] w-[50rem] h-[50rem] mesh-blob-2 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[55rem] h-[55rem] mesh-blob-3 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[20%] w-[40rem] h-[40rem] mesh-blob-4 blur-[120px]" />
      </div>

      <motion.div 
        style={{ left: glowX, top: glowY }}
        className="fixed w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"
      />

      <div className="absolute inset-0 bg-grid opacity-[0.3] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-40 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 tracking-tighter leading-[0.95] mb-10">
                Building <br/>
                <span className="text-gradient">Iconic Equity</span> <br/>
                Through Finance.
              </h1>
              
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl mb-12 opacity-90">
                Revolutionizing debt resolution with a tech-first approach. We empower borrowers through professional strategy, documentation, and a panel of elite advocates.
              </p>

              <div className="flex flex-wrap gap-6 items-center">
                <Link to="/contact" className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold text-[13px] uppercase tracking-widest hover:bg-rose-600 hover:shadow-2xl transition-all flex items-center gap-3 active:scale-95 group">
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Get Started
                </Link>
                <Link to="/services" className="px-10 py-4 rounded-2xl font-bold text-[13px] uppercase tracking-widest text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all border border-slate-200">
                  Explore Portfolio
                </Link>
              </div>
            </motion.div>

            <div className="relative hidden lg:block">
              <div className="relative z-10 p-6 bg-white border border-slate-100 rounded-[3rem] shadow-2xl">
                 <AiImage src="https://raw.githubusercontent.com/aniketmishra4809-jpg/Edge-website-images/main/home.png" className="w-full h-full rounded-[2.5rem]" aspectRatio="4:3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech-Savvy Loan Settlement Estimator Section */}
      <section id="estimator" className="py-40 relative z-10 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-[11px] font-black tracking-[0.5em] text-cyan-400 uppercase mb-6 flex items-center gap-4">
                <span className="w-12 h-px bg-cyan-400/30" />
                Intelligent Planning
              </h2>
              <h3 className="text-5xl md:text-6xl font-black tracking-tighter mb-10 leading-[1.1]">
                Estimate Your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Loan Resolution</span>
              </h3>
              <p className="text-lg text-slate-400 font-medium leading-relaxed max-w-xl mb-12">
                Our high-precision algorithm calculates potential resolution ranges based on current banking liquidity metrics and institutional settlement history. Supporting limits up to 100 Crores.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h4 className="text-[12px] font-black uppercase tracking-widest text-white mb-2">Policy Tracking</h4>
                  <p className="text-[10px] text-slate-500 font-bold leading-tight">Syncs with latest lender circulars.</p>
                </div>
                <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-indigo-400/50 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-indigo-400/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </div>
                  <h4 className="text-[12px] font-black uppercase tracking-widest text-white mb-2">Secure Input</h4>
                  <p className="text-[10px] text-slate-500 font-bold leading-tight">Anonymized calculation protocols.</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-[4rem] blur opacity-20" />
              <div className="relative bg-slate-900 border border-white/5 rounded-[3.5rem] p-10 md:p-14 shadow-2xl overflow-hidden">
                {/* Visual tech accents */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[60px] rounded-full pointer-events-none" />
                
                <div className="space-y-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em] ml-1">Instrument Category</label>
                    <div className="relative group">
                      <select 
                        className="w-full bg-slate-950/80 border border-white/10 rounded-2xl py-5 px-8 focus:border-cyan-400 outline-none text-white font-black transition-all appearance-none cursor-pointer"
                        value={loanType}
                        onChange={(e) => setLoanType(e.target.value)}
                      >
                        <option value="Personal Loan">Personal Loan</option>
                        <option value="Business Loan (Unsecured)">Business Loan (Unsecured)</option>
                        <option value="Credit Card Dues">Credit Card Dues</option>
                        <option value="Vehicle Loan">Vehicle Loan</option>
                        <option value="Property Loan">Property Loan</option>
                        <option value="Business Loan (Secured)">Business Loan (Secured)</option>
                        <option value="Other">Other (Manual Specification)</option>
                      </select>
                      <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-cyan-400 group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {loanType === 'Other' && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="space-y-4 overflow-hidden">
                        <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em] ml-1">Specify Loan Type</label>
                        <input 
                          type="text" 
                          placeholder="e.g. Gold Loan, Education Loan"
                          className="w-full bg-slate-950/80 border border-white/10 rounded-2xl py-5 px-8 focus:border-cyan-400 outline-none text-white font-black transition-all"
                          value={otherLoanType}
                          onChange={(e) => setOtherLoanType(e.target.value)}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="space-y-8">
                    <div className="flex flex-col w-full">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em] mb-4">Principal Outstanding (₹)</label>
                      <div className="relative group">
                        <input 
                          type="text"
                          className="w-full bg-transparent border-b-2 border-white/10 focus:border-cyan-400 outline-none text-5xl font-black text-white tracking-tighter py-4 transition-all"
                          value={amountInput}
                          onChange={(e) => handleAmountChange(e.target.value)}
                        />
                        <div className="mt-3 flex justify-between items-center">
                           <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{formatCurrencyLabel(loanAmount)}</span>
                           <span className="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-[8px] font-black uppercase tracking-widest">Type to Edit</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative h-2 w-full bg-white/5 rounded-full mt-12">
                      <input 
                        type="range" 
                        min="50000" 
                        max="1000000000" // 100 Crores
                        step="10000"
                        className="absolute inset-0 w-full h-full bg-transparent appearance-none cursor-pointer accent-cyan-400 z-10"
                        value={loanAmount}
                        onChange={(e) => {
                          const val = parseInt(e.target.value);
                          setLoanAmount(val);
                          setAmountInput(val.toLocaleString('en-IN'));
                        }}
                      />
                      <motion.div 
                        className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"
                        style={{ width: `${(loanAmount / 1000000000) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[9px] font-black text-slate-500 uppercase tracking-widest px-1">
                      <span>50 K</span>
                      <span>50 Cr</span>
                      <span>100 Cr</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setShowResult(true)}
                    className="w-full bg-white text-slate-950 py-6 rounded-2xl font-black tracking-[0.4em] text-[13px] uppercase hover:bg-cyan-400 transition-all shadow-[0_0_30px_rgba(34,211,238,0.2)] active:scale-[0.98] group flex items-center justify-center gap-3"
                  >
                    Compute Analysis
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </button>

                  <AnimatePresence>
                    {showResult && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="overflow-hidden">
                        <div className="mt-8 p-10 bg-gradient-to-br from-cyan-900/40 to-indigo-900/40 rounded-[2.5rem] border border-white/5 text-center relative group">
                           <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                          <h4 className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.5em] mb-6">Factual Scenario Estimate</h4>
                          <div className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
                            ₹{formatCurrencyLabel(estimation.min)} - {formatCurrencyLabel(estimation.max)}
                          </div>
                          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-10">Calculated via institutional resolution patterns in {new Date().getFullYear()}.</p>
                          <Link to="/contact" className="w-full inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white hover:text-slate-950 text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all">
                            Verify Case Viability
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-40 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-[11px] font-black tracking-[0.5em] text-indigo-600 uppercase mb-4">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tighter">What Our Clients Say.</h3>
          </div>
        </div>
        
        <div className="relative flex overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1920] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex gap-8 whitespace-nowrap px-4"
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div 
                key={i}
                className={`w-[400px] flex-shrink-0 p-10 bg-white border ${t.color} rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between whitespace-normal`}
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed italic mb-8">"{t.quote}"</p>
                </div>
                <div>
                  <div className="font-black text-slate-900 uppercase tracking-widest text-[11px]">{t.author}</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{t.role}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Colorful Accents */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.1] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-rose-500 to-cyan-500" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Cases Evaluated", val: "1500+", color: "text-indigo-400" },
              { label: "Resolution Volume", val: "₹12Cr+", color: "text-rose-400" },
              { label: "IPR Filings", val: "450+", color: "text-cyan-400" },
              { label: "Partner Advocates", val: "25+", color: "text-amber-400" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className={`text-4xl md:text-5xl font-extrabold mb-4 tracking-tighter transition-colors ${stat.color} group-hover:text-white`}>{stat.val}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-50">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-40 bg-white relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] mesh-blob-1 opacity-[0.05] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-32">
             <h2 className="text-[11px] font-black tracking-[0.5em] text-rose-500 uppercase mb-4">Core Ecosystem</h2>
             <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tighter">Technology Meets Expertise.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Precision Audit", 
                desc: "Every case undergoes a rigorous documentary audit to ensure factual integrity.",
                content: "How we do it: We conduct a 360-degree review of your financial history, identifying discrepancies in lender claims and verifying every document against current legal standards to build a bulletproof case.",
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2",
                color: "bg-indigo-50 text-indigo-600 hover:bg-indigo-600"
              },
              { 
                title: "Smart Advocacy", 
                desc: "Strategic dialogue frameworks designed to align borrower needs with lender protocols.",
                content: "How we apply advocacy smartly: Our elite legal panel uses data-driven negotiation frameworks, leveraging institutional settlement patterns to secure the most favorable terms while maintaining your long-term credit integrity.",
                icon: "M17 8l4 4m0 0l-4 4m4-4H3",
                color: "bg-rose-50 text-rose-600 hover:bg-rose-600"
              },
              { 
                title: "Vibrant Path", 
                desc: "Clear recovery roadmap focused on long-term credit health and financial freedom.",
                content: "Our Vibrant Path methodology provides a clear recovery roadmap focused on long-term credit health and financial freedom. We don't just settle debts; we rebuild your financial future through strategic planning and continuous support.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                color: "bg-cyan-50 text-cyan-600 hover:bg-cyan-600"
              }
            ].map((f, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-500 group cursor-pointer"
                onClick={() => setSelectedFeature({ title: f.title, content: f.content })}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-colors group-hover:text-white ${f.color}`}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d={f.icon} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h4 className="text-xl font-extrabold text-slate-900 mb-6 tracking-tight uppercase group-hover:text-indigo-600 transition-colors">{f.title}</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8">{f.desc}</p>
                <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest flex items-center gap-2">
                  Learn More <span className="opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Detail Modal */}
      <AnimatePresence>
        {selectedFeature && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFeature(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[3rem] p-12 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <button 
                onClick={() => setSelectedFeature(null)}
                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              <div className="relative">
                <h2 className="text-[11px] font-black tracking-[0.5em] text-indigo-600 uppercase mb-4">Core Ecosystem</h2>
                <h3 className="text-4xl font-extrabold text-slate-900 tracking-tighter mb-8 uppercase">{selectedFeature.title}</h3>
                <div className="w-20 h-1 bg-indigo-600 rounded-full mb-10" />
                <p className="text-xl text-slate-600 font-medium leading-relaxed">
                  {selectedFeature.content}
                </p>
                
                <div className="mt-12 flex gap-4">
                  <Link 
                    to="/contact" 
                    className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-[11px] uppercase tracking-widest hover:bg-rose-600 transition-all"
                  >
                    Consult an Expert
                  </Link>
                  <button 
                    onClick={() => setSelectedFeature(null)}
                    className="px-8 py-4 rounded-xl font-bold text-[11px] uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-all border border-slate-100"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
