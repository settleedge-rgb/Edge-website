
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';

const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const steps = [
    {
      number: "01",
      title: "Case Discovery",
      desc: "Confidential consultation to understand your financial situation, debt structure, and genuine hardship."
    },
    {
      number: "02",
      title: "Document Audit",
      desc: "Analyzing loan agreements and statements to verify outstanding amounts and payment histories."
    },
    {
      number: "03",
      title: "Strategy",
      desc: "Mapping potential resolution paths, outlining pros, cons, and long-term credit impact."
    },
    {
      number: "04",
      title: "Mediation",
      desc: "Assisting in drafting professional correspondence and navigating lender resolution dialogues."
    },
    {
      number: "05",
      title: "Resolution",
      desc: "Guiding final payments and ensuring proper 'No Dues' certification is received."
    }
  ];

  return (
    <div className="py-24 bg-white min-h-screen relative" ref={containerRef}>
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid opacity-[0.2] pointer-events-none" />
      
      {/* Floating Particle Dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.1, y: Math.random() * 1000 }}
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 5 }}
          className="absolute w-1 h-1 bg-indigo-400 rounded-full pointer-events-none"
          style={{ 
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-32">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold tracking-[0.5em] text-indigo-600 uppercase mb-8"
          >
            Methodology
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tighter"
          >
            Our Structured Approach
          </motion.h1>
          <p className="text-slate-500 font-light text-lg">A commitment to transparency, one step at a time.</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline bar */}
          <motion.div 
            style={{ scaleY }}
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-indigo-100 origin-top -translate-x-1/2" 
          />
          
          <div className="space-y-32">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex flex-col lg:flex-row items-center ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Visual indicator */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="hidden lg:flex absolute left-1/2 w-4 h-4 rounded-full bg-white border-4 border-indigo-600 -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(79,70,229,0.3)]" 
                />
                
                <div className="w-full lg:w-1/2 px-8">
                  <motion.div 
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    className={`group p-12 bg-white border border-slate-100 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-700 relative overflow-hidden ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600/0 group-hover:bg-indigo-600 transition-all duration-700" />
                    <span className="text-7xl font-black text-slate-50 mb-4 block group-hover:text-indigo-50 transition-colors tracking-tighter">{step.number}</span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-widest">{step.title}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed text-sm opacity-80">{step.desc}</p>
                  </motion.div>
                </div>
                <div className="w-full lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-48 text-center"
        >
          <div className="inline-block p-1 bg-slate-50 rounded-full mb-10">
            <div className="bg-white border border-slate-200 px-8 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Integrity First
            </div>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tighter">Ready to Resolve?</h2>
          {/* Fix: Use the Link component imported from react-router-dom */}
          <Link to="/contact" className="text-indigo-600 font-bold text-[12px] uppercase tracking-[0.3em] border-b-2 border-indigo-600 pb-1 hover:text-indigo-950 hover:border-indigo-950 transition-all">Start Step 01 Today &rarr;</Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Process;
