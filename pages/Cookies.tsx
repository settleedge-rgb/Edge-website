
import React from 'react';
import { motion } from 'framer-motion';

const Cookies: React.FC = () => {
  return (
    <div className="py-32 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-slate prose-indigo max-w-none"
        >
          <h2 className="text-[12px] font-bold tracking-[0.4em] text-indigo-600 uppercase mb-8">Digital Integrity</h2>
          <h1 className="text-5xl font-bold text-slate-900 tracking-tight mb-12">Cookie Policy</h1>
          
          <div className="space-y-12 text-slate-600 font-light leading-relaxed text-lg">
            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-widest">1. What are Cookies?</h3>
              <p>Cookies are small text files placed on your device to help the website provide a better user experience. In general, cookies are used to retain user preferences and provide anonymized tracking data to third-party applications.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-widest">2. How We Use Cookies</h3>
              <p>We use essential cookies to ensure the website functions correctly and analytical cookies to understand how visitors interact with our content. This helps us improve our service offerings and website design.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-widest">3. Managing Cookies</h3>
              <p>You may prefer to disable cookies on this site and on others. The most effective way to do this is to disable cookies in your browser. Consult the Help section of your browser for instructions.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cookies;
