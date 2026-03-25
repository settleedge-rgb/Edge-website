
import React from 'react';
import { motion } from 'framer-motion';
import AiImage from '../components/AiImage';

const VoiceAgents: React.FC = () => {
  const agents = [
    {
      id: "negotiator",
      name: "Settlement Negotiator",
      role: "Debt Resolution",
      desc: "An empathetic, highly trained negotiator capable of discussing hardship scenarios with bank representatives based on pre-approved settlement parameters.",
      color: "cyan",
      icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
      progress: 85
    },
    {
      id: "intake",
      name: "Legal Intake Bot",
      role: "Client Onboarding",
      desc: "24/7 intelligent intake system that categorizes IPR and property inquiries, collecting critical documents and context before human review.",
      color: "violet",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      progress: 92
    },
    {
      id: "claims",
      name: "Claims Analyst",
      role: "Insurance & Disputes",
      desc: "Instant policy analysis voice assistant that can guide users through the reasons for claim rejection and suggest documentary evidence.",
      color: "rose",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2",
      progress: 78
    },
    {
      id: "coach",
      name: "Credit Coach",
      role: "Financial Health",
      desc: "A proactive voice coach that schedules monthly calls to review your CIBIL score progress and suggest credit utilization improvements.",
      color: "amber",
      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
      progress: 65
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen text-white relative overflow-hidden font-sans selection:bg-cyan-500/30">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay"></div>
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-24">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 mb-8 backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              <span className="text-[11px] font-black text-cyan-400 uppercase tracking-[0.3em]">Edge R&D Lab</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-600">Cognitive</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Voice Intelligence</span>
            </h1>
            
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl border-l-2 border-slate-800 pl-6">
              We are training the next generation of legal consultants. Not just algorithms, but voice-native agents capable of empathy, negotiation, and complex problem solving.
            </p>
          </motion.div>

          {/* Animated Visualizer */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 flex justify-center relative"
          >
             <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] relative">
               <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-[80px] animate-pulse" />
               <div className="absolute inset-0 border border-slate-800 rounded-full flex items-center justify-center bg-slate-950/50 backdrop-blur-sm">
                  <div className="flex items-end gap-2 h-32">
                    {[...Array(9)].map((_, i) => (
                       <motion.div 
                         key={i}
                         animate={{ 
                           height: [
                             40, 
                             Math.max(40, Math.random() * 120), 
                             Math.max(40, Math.random() * 80), 
                             40
                           ],
                           backgroundColor: ["#22d3ee", "#818cf8", "#22d3ee"]
                         }}
                         transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.05 }}
                         className="w-4 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                       />
                    ))}
                  </div>
               </div>
               {/* Tech Circles */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-[-20px] border border-dashed border-slate-700 rounded-full opacity-30" 
               />
               <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-[-40px] border border-dotted border-slate-800 rounded-full opacity-20" 
               />
             </div>
          </motion.div>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 rounded-[2rem] p-10 overflow-hidden backdrop-blur-sm transition-all duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className={`w-14 h-14 rounded-2xl bg-${agent.color}-500/10 flex items-center justify-center text-${agent.color}-400 group-hover:scale-110 transition-transform duration-500 border border-${agent.color}-500/20`}>
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={agent.icon} /></svg>
                  </div>
                  <div className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
                    In Training
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{agent.name}</h3>
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-6">{agent.role}</h4>
                <p className="text-slate-400 leading-relaxed mb-8 text-sm">{agent.desc}</p>

                {/* Training Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    <span>Neural Training Progress</span>
                    <span>{agent.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${agent.progress}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className={`h-full bg-gradient-to-r from-${agent.color}-500 to-white rounded-full`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative rounded-[3rem] overflow-hidden">
           <AiImage prompt="Futuristic ai voice abstract sound waves dark background" className="absolute inset-0 w-full h-full opacity-30 mix-blend-overlay" />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
           
           <div className="relative z-10 text-center py-24 px-4">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">Be the First to Speak with AI.</h2>
              <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
                We are opening beta access to our settlement negotiator soon. Join the exclusive waitlist to experience the future of resolution.
              </p>
              
              <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
                 <button disabled className="px-8 py-4 bg-slate-800 text-slate-400 rounded-xl font-black text-[11px] uppercase tracking-widest cursor-not-allowed border border-slate-700">
                    Waitlist Full
                 </button>
                 <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Opening New Slots Soon</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceAgents;
