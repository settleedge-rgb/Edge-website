
import React from 'react';
import { motion } from 'framer-motion';

const Privacy: React.FC = () => {
  return (
    <div className="py-32 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-slate max-w-none"
        >
          <h2 className="text-[12px] font-bold tracking-[0.4em] text-indigo-600 uppercase mb-8">Data Governance</h2>
          <h1 className="text-5xl font-bold text-slate-900 tracking-tight mb-12">Privacy Policy</h1>
          
          <div className="space-y-12 text-slate-600 font-light leading-relaxed text-lg">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">
              Last Updated: January 2024
            </div>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-widest">1. Introduction</h3>
              <p>Edge Legal Services (“Company”, “we”, “us”, “our”) respects the privacy of users (“you”, “your”) and is committed to protecting personal information shared while accessing our website or engaging with our services. This Privacy Policy explains how we collect, use, disclose, and safeguard personal data in a lawful, transparent, and responsible manner.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-widest">2. Information We Collect</h3>
              <div className="space-y-4">
                <p><strong>a) Personal & Professional Information:</strong> Name, Email address, Phone number, City / State, Nature of enquiry or service requirement.</p>
                <p><strong>b) Financial & Case-Related Information:</strong> Loan or debt details, Credit-related information, Property or insurance-related information, Business or professional details (Voluntarily Shared).</p>
                <p><strong>c) Technical & Usage Information:</strong> IP address, Browser and device details, Website interaction data, Cookies and similar technologies.</p>
                <p><strong>d) Communication Data:</strong> Contact form submissions, Emails, calls, or consultation requests.</p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-widest">3. Purpose of Data Collection</h3>
              <p>Personal data is processed strictly for legitimate purposes, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Responding to enquiries and consultation requests</li>
                <li>Assessing service eligibility and scope</li>
                <li>Client communication and case coordination</li>
                <li>Compliance documentation and internal records</li>
                <li>Website performance and security analysis</li>
                <li>Legal and regulatory compliance</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-widest">4. Data Sharing & Disclosure</h3>
              <p>We do not sell or trade personal data. Data may be shared only with: Internal staff and authorised consultants; IT, hosting, CRM, and communication service providers; Professional advisors (legal, accounting, compliance); Government or regulatory authorities where required by law. All third parties are bound by confidentiality and data-protection obligations.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-widest">5. Data Security</h3>
              <p>We implement reasonable technical, administrative, and organisational safeguards to protect personal data against unauthorised access, loss, alteration, or misuse. However, no internet-based system is completely secure, and users acknowledge the inherent risks associated with electronic data transmission.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-widest">6. Data Retention</h3>
              <p>Personal data is retained only for as long as necessary for consultation and service delivery, legal compliance, and internal record-keeping. Thereafter, data is securely deleted or anonymised.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-widest">7. User Rights</h3>
              <p>Users may request: Access to personal data, Correction or deletion, or Withdrawal of consent (where applicable). Requests may be sent to our official email address.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-widest">8. Cookies</h3>
              <p>This website uses cookies and similar technologies for functionality, analytics, and performance monitoring. Users may manage or disable cookies through browser settings, subject to applicable law.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-widest">9. Policy Updates</h3>
              <p>This Privacy Policy may be updated periodically. Continued use of the website constitutes acceptance, to the extent permitted by law.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
