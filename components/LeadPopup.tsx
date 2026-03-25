
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LeadPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: 'Loan Settlement'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Open the popup 4 seconds after landing
    const timer = setTimeout(() => {
      const hasSeen = sessionStorage.getItem('edge_popup_seen');
      if (!hasSeen) {
        setIsOpen(true);
        sessionStorage.setItem('edge_popup_seen', 'true');
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API delay for UX
    setTimeout(() => {
      const message = `*New Website Lead*\n----------------\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Interest:* ${form.service}\n----------------\nPlease provide consultation.`;
      const whatsappUrl = `https://wa.me/917291009145?text=${encodeURIComponent(message)}`;
      
      window.open(whatsappUrl, '_blank');
      setIsOpen(false);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - High Z-Index to cover everything */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[9998]"
          />

          {/* Modal Container - Centered and High Z-Index */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-md bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100 pointer-events-auto max-h-[90vh] overflow-y-auto relative"
            >
              {/* Header decoration */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 via-rose-500 to-cyan-500" />
              
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-400 hover:text-rose-500 transition-colors z-10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-widest mb-3">
                    Free Consultation
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 mb-2 leading-tight">
                    Expert Legal Solutions
                  </h2>
                  <p className="text-slate-500 text-sm font-medium">
                    Fill the form below to connect with our senior consultants immediately.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-300"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      value={form.phone}
                      onChange={e => setForm({...form, phone: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Service Required</label>
                    <div className="relative">
                      <select 
                        value={form.service}
                        onChange={e => setForm({...form, service: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors appearance-none cursor-pointer"
                      >
                        <option>Loan Settlement</option>
                        <option>Credit Card Dues</option>
                        <option>IPR Registration (Trademark/Copyright)</option>
                        <option>Property Registration</option>
                        <option>Insurance Claims</option>
                        <option>Document Drafting</option>
                        <option>Credit Rebuilding</option>
                        <option>Harassment/Legal Notice</option>
                        <option>Foreclosure Support</option>
                        <option>Other Enquiry</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 hover:bg-indigo-600 text-white py-4 rounded-xl font-black text-[11px] uppercase tracking-[0.2em] transition-all shadow-lg hover:shadow-indigo-500/30 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Connecting...
                      </>
                    ) : (
                      'Get Instant Callback'
                    )}
                  </button>
                </form>
                
                <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-slate-400 font-medium">
                  <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span>100% Confidential & Secure</span>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LeadPopup;
