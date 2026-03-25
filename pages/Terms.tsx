
import React from 'react';
import { motion } from 'framer-motion';

const Terms: React.FC = () => {
  return (
    <div className="py-32 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-slate max-w-none"
        >
          <h2 className="text-[12px] font-bold tracking-[0.4em] text-indigo-600 uppercase mb-8">Operational Framework</h2>
          <h1 className="text-5xl font-bold text-slate-900 tracking-tight mb-12">Terms & Conditions</h1>
          
          <div className="space-y-12 text-slate-600 font-light leading-relaxed text-lg">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">
              Last Updated: January 2024
            </div>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-widest">1. Acceptance of Terms</h3>
              <p>By accessing or using this website, you agree to be bound by these Terms & Conditions. If you do not agree, please discontinue use of the website.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-widest">2. Nature of Services</h3>
              <p>Edge Legal Services provides advisory, documentation, and strategic support services, including but not limited to: Loan settlement advisory, Debt resolution strategy, IPR registration support, Property documentation assistance, Insurance claim advisory, and Credit rebuilding guidance. Website content is provided for informational and consultation purposes only.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-widest">3. No Lawyer–Client Relationship</h3>
              <p>Use of this website or submission of an enquiry does not create a lawyer–client relationship unless expressly agreed in writing through a separate engagement.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-widest">4. Use of Website</h3>
              <p>Users shall not: Misuse or reproduce website content without authorisation; Attempt unauthorised access to systems or data; Submit false, misleading, or unlawful information. The Company reserves the right to restrict or terminate access for violations.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-widest">5. No Binding Offer</h3>
              <p>Website content does not constitute a binding offer or guarantee. All services, timelines, and fees are subject to separate written agreements or confirmations.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-widest">6. Intellectual Property</h3>
              <p>All content, branding, logos, designs, and materials are the exclusive property of the Company unless otherwise stated. Unauthorised use is prohibited.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-widest">7. Limitation of Liability</h3>
              <p>To the maximum extent permitted by law, the Company shall not be liable for: Indirect or consequential losses, Financial or business losses, Outcomes based on regulatory, lender, or third-party decisions, or Reliance on website information. Any liability, if established, shall be limited to the extent permitted by applicable law.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-widest">8. Third-Party Links</h3>
              <p>The website may contain links to third-party platforms. The Company does not control or assume responsibility for their content or practices.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-widest">9. Termination</h3>
              <p>The Company may suspend or terminate access for misuse, legal violations, or breach of these Terms.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-widest">10. Governing Law & Jurisdiction</h3>
              <p>These Terms shall be governed by the laws of India. Courts having jurisdiction at Delhi shall have exclusive jurisdiction.</p>
            </section>
          </div>

          <div className="mt-24 pt-24 border-t border-slate-100">
            <h2 className="text-[12px] font-bold tracking-[0.4em] text-rose-600 uppercase mb-8">Important Disclosure</h2>
            <h1 className="text-5xl font-bold text-slate-900 tracking-tight mb-12">Disclaimer</h1>
            <div className="space-y-8 text-slate-600 font-light leading-relaxed text-lg">
              <p><strong>1. No Professional Advice:</strong> Website content and services are provided for general informational and advisory purposes only and do not constitute legal, financial, banking, or regulatory advice.</p>
              <p><strong>2. No Guaranteed Outcomes:</strong> We do not guarantee loan settlements, debt waivers, claim approvals, credit score improvements, or regulatory outcomes. Results depend on external authorities, institutions, and individual circumstances.</p>
              <p><strong>3. Third-Party Authorities:</strong> We are not responsible for actions, delays, or decisions of banks, NBFCs, insurers, regulators, courts, or government authorities.</p>
              <p><strong>4. Accuracy of Information:</strong> While reasonable efforts are made to ensure accuracy, content may be updated, modified, or corrected without notice.</p>
              <p><strong>5. Use at Own Risk:</strong> Users access and rely on website content at their own discretion and risk.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
