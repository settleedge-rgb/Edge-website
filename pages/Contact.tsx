
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    service: 'Personal Loan',
    otherService: '',
    lender: '',
    city: '',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const WHATSAPP_NUMBER = "917291009145"; 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const serviceName = formState.service === 'Other' ? formState.otherService : formState.service;
    const message = `Hello Edge,\n\nI have a new enquiry:\n*Name:* ${formState.name}\n*Phone:* ${formState.phone}\n*Service:* ${serviceName}\n*Lender:* ${formState.lender}\n*City:* ${formState.city}\n*Context:* ${formState.details || 'N/A'}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    (window as any).nextStepUrl = whatsappUrl;
  };

  const openWhatsApp = () => {
    if ((window as any).nextStepUrl) {
      window.open((window as any).nextStepUrl, '_blank');
    }
  };

  return (
    <div className="py-24 bg-white min-h-screen relative overflow-hidden">
      {/* Background colorful blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] mesh-blob-4 blur-[120px] opacity-30" />
        <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] mesh-blob-3 blur-[120px] opacity-30" />
      </div>

      <div className="absolute inset-0 bg-grid opacity-[0.3] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950 border border-slate-800 mb-8 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Priority Resolution Desk</span>
            </div>
            
            <h1 className="text-6xl font-extrabold text-slate-900 mb-10 tracking-tighter leading-[0.95]">
              Vibrant Future. <br/>
              <span className="text-gradient">Professional Care.</span>
            </h1>
            
            <p className="text-lg text-slate-500 font-bold opacity-80 leading-relaxed max-w-lg mb-16">
              Empowering your financial journey with colorful, tech-led consultancy. Our priority intake frameworks ensure your case is analyzed with high-precision metrics.
            </p>
            
            <div className="space-y-10">
              <div className="flex flex-col gap-8">
                 <div className="flex items-center gap-6 group">
                    <div className="w-16 h-16 bg-indigo-50 border border-indigo-100 rounded-[1.5rem] flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm">
                       <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase text-slate-950 tracking-widest mb-1">Direct Protocol</div>
                      <a href="mailto:settleedge@gmail.com" className="text-xl font-black text-slate-900 hover:text-indigo-600 transition-colors">settleedge@gmail.com</a>
                    </div>
                 </div>
                 <div className="flex items-center gap-6 group">
                    <div className="w-16 h-16 bg-rose-50 border border-rose-100 rounded-[1.5rem] flex items-center justify-center text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-all duration-500 shadow-sm">
                       <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase text-slate-950 tracking-widest mb-1">Encrypted Line</div>
                      <a href="tel:+917291009145" className="text-xl font-black text-slate-900 hover:text-rose-600 transition-colors">+91 7291009145</a>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="bg-white border border-slate-100 rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-rose-500 to-cyan-500" />
              
              {submitted ? (
                <div className="text-center py-12">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-lg">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </motion.div>
                  <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">Inquiry Secured.</h2>
                  <p className="text-slate-500 font-bold mb-12 opacity-80">Your data has been formatted for priority review via our WhatsApp bridge.</p>
                  <button onClick={openWhatsApp} className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-5 rounded-2xl font-black tracking-widest text-[13px] uppercase hover:shadow-2xl transition-all flex items-center justify-center gap-3 active:scale-95">
                    Launch WhatsApp Chat
                  </button>
                  <button onClick={() => setSubmitted(false)} className="text-slate-400 font-black text-[10px] uppercase tracking-[0.3em] mt-8 hover:text-indigo-600 underline">Re-enter Details</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-950 tracking-[0.3em] ml-2">Full Name</label>
                      <input type="text" required className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:border-slate-950 focus:bg-white outline-none text-slate-900 font-black transition-all" placeholder="Rahul Sharma" value={formState.name} onChange={(e) => setFormState({...formState, name: e.target.value})} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-950 tracking-[0.3em] ml-2">Contact Number</label>
                      <input type="tel" required className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:border-slate-950 focus:bg-white outline-none text-slate-900 font-black transition-all" placeholder="+91" value={formState.phone} onChange={(e) => setFormState({...formState, phone: e.target.value})} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2 relative">
                      <label className="text-[10px] font-black uppercase text-slate-950 tracking-[0.3em] ml-2">Service</label>
                      <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:border-slate-950 focus:bg-white outline-none text-slate-900 font-black transition-all appearance-none cursor-pointer" value={formState.service} onChange={(e) => setFormState({...formState, service: e.target.value})}>
                        <option>Personal Loan</option>
                        <option>Credit Card</option>
                        <option>MSME/Business Loan</option>
                        <option>Property Documentation</option>
                        <option>Foreclosure Removal</option>
                        <option>Insurance Claim</option>
                        <option value="Other">Other (Specify manually)</option>
                      </select>
                      <div className="absolute right-6 top-[54px] pointer-events-none text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-950 tracking-[0.3em] ml-2">Lender Entity</label>
                      <input type="text" required className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:border-slate-950 focus:bg-white outline-none text-slate-900 font-black transition-all" placeholder="Bank Name" value={formState.lender} onChange={(e) => setFormState({...formState, lender: e.target.value})} />
                    </div>
                  </div>

                  <AnimatePresence>
                    {formState.service === 'Other' && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="space-y-2 overflow-hidden">
                        <label className="text-[10px] font-black uppercase text-slate-950 tracking-[0.3em] ml-2">Specify Service Type</label>
                        <input 
                          type="text" 
                          required 
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:border-slate-950 focus:bg-white outline-none text-slate-900 font-black transition-all" 
                          placeholder="e.g. Education Loan, Corporate Debt..." 
                          value={formState.otherService} 
                          onChange={(e) => setFormState({...formState, otherService: e.target.value})} 
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-950 tracking-[0.3em] ml-2">Inquiry Context (Optional)</label>
                    <textarea className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 h-32 focus:border-slate-950 focus:bg-white outline-none text-slate-900 font-bold text-sm transition-all resize-none" placeholder="Briefly describe your requirements..." value={formState.details} onChange={(e) => setFormState({...formState, details: e.target.value})}></textarea>
                  </div>

                  <button type="submit" className="w-full bg-slate-950 text-white py-5 rounded-2xl font-black tracking-[0.3em] text-[13px] uppercase hover:bg-indigo-600 transition-all shadow-2xl active:scale-95 group overflow-hidden relative">
                    <span className="relative z-10">Start My Evaluation</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-rose-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
