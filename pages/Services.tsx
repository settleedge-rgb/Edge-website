
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AiImage from '../components/AiImage';

interface ServiceDetail {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  themeColor: string;
  shadowColor: string;
  iconColor: string;
  imagePrompt: string;
  imageUrl?: string;
}

const servicesList: ServiceDetail[] = [
  {
    id: "loan-settlement",
    title: "Loan Settlement",
    shortDesc: "Strategic resolution for individuals and SMEs facing documented debt stress.",
    longDesc: "Loan settlement is a structured negotiation process where we help you reach an agreement with your lender to pay off a debt for less than the total balance. This is typically pursued in cases of genuine financial hardship. We audit your case, draft hardship reports, and provide a professional framework for dialogue with the bank's resolution desk.",
    features: ["Credit Card Resolution", "Unsecured Personal Loans", "SME/MSME Debt Strategy", "Hardship Case Documentation"],
    themeColor: "bg-indigo-50 border-indigo-100",
    shadowColor: "hover:shadow-indigo-100/60",
    iconColor: "text-indigo-600",
    imagePrompt: "Modern digital finance negotiation, vibrant indigo glows, professional documents",
    imageUrl: "https://raw.githubusercontent.com/aniketmishra4809-jpg/Edge-website-images/main/Loan-Settlement.png"
  },
  {
    id: "ipr-registration",
    title: "IPR Registration",
    shortDesc: "Comprehensive protection for your brand, creative output, and innovations.",
    longDesc: "Our Intellectual Property Rights services ensure that your commercial and creative assets are legally safeguarded. From searching for trademark availability to filing copyright applications, we handle the complex documentation required to secure your competitive edge in the market.",
    features: ["Trademark Filing & Prosecution", "Copyright Registration", "Design & Patent Advisory", "Brand Protection Strategy"],
    themeColor: "bg-violet-50 border-violet-100",
    shadowColor: "hover:shadow-violet-100/60",
    iconColor: "text-violet-600",
    imagePrompt: "Neon violet shield protection, high-tech IPR branding, futuristic minimalism",
    imageUrl: "https://raw.githubusercontent.com/aniketmishra4809-jpg/Edge-website-images/main/IPR.png"
  },
  {
    id: "property-registration",
    title: "Property Registration",
    shortDesc: "Expert documentary support for real estate transactions and statutory compliance.",
    longDesc: "Navigating property laws in India requires extreme precision. We provide end-to-end consultancy for the registration of various property-related documents. This includes verifying title chains, calculating appropriate stamp duty, and ensuring all statutory requirements are met at the sub-registrar's office.",
    features: ["Sale & Conveyance Deeds", "Gift & Relinquishment Deeds", "Lease & Rent Agreements", "Stamp Duty Advisory"],
    themeColor: "bg-emerald-50 border-emerald-100",
    shadowColor: "hover:shadow-emerald-100/60",
    iconColor: "text-emerald-600",
    imagePrompt: "Architectural blueprint, emerald glass skyscraper detail, modern real estate tech",
    imageUrl: "https://raw.githubusercontent.com/aniketmishra4809-jpg/Edge-website-images/main/Property.png"
  },
  {
    id: "professional-documents",
    title: "Document Drafting",
    shortDesc: "Precision drafting for commercial contracts and banking correspondence.",
    longDesc: "Clear, document-backed communication is the cornerstone of professional resolution. We specialize in drafting formal letters to banks, commercial contracts for SMEs, and legal declarations that hold weight in administrative and banking protocols.",
    features: ["Bank Correspondence Drafting", "Commercial Service Agreements", "Hardship Reports", "Affidavits & Declarations"],
    themeColor: "bg-cyan-50 border-cyan-100",
    shadowColor: "hover:shadow-cyan-100/60",
    iconColor: "text-cyan-600",
    imagePrompt: "Modern digital signature, cyan glowing stylus, clean white desk with high-tech accents",
    imageUrl: "https://raw.githubusercontent.com/aniketmishra4809-jpg/Edge-website-images/main/Document-Drafting.png"
  },
  {
    id: "insurance-claims",
    title: "Insurance Claims",
    shortDesc: "Advisory for policy-related grievances and claim resolution support.",
    longDesc: "If your insurance claim has been unfairly rejected or delayed, we help you understand the policy fine print and draft formal representations to the insurance provider or the Ombudsman, ensuring your case is presented factually.",
    features: ["Claim Document Review", "Ombudsman Representations", "Rejected Claim Advisory"],
    themeColor: "bg-rose-50 border-rose-100",
    shadowColor: "hover:shadow-rose-100/60",
    iconColor: "text-rose-600",
    imagePrompt: "Vibrant rose colored safety icon, abstract glass shards, protective lighting",
    imageUrl: "https://raw.githubusercontent.com/aniketmishra4809-jpg/Edge-website-images/main/Insurance.png"
  },
  {
    id: "credit-rebuilding",
    title: "Credit Rebuilding",
    shortDesc: "Strategic post-settlement guidance focused on financial recovery.",
    longDesc: "Resolution is the first step toward health. We provide actionable advisory on how to rebuild your CIBIL score and credit profile after a settlement, focusing on disciplined credit habits and secure financial products.",
    features: ["CIBIL Score Analysis", "Financial Recovery Roadmap", "Secured Credit Advisory"],
    themeColor: "bg-amber-50 border-amber-100",
    shadowColor: "hover:shadow-amber-100/60",
    iconColor: "text-amber-600",
    imagePrompt: "Glowing golden upward growth arrow, digital credit score visualization, sunrise lighting",
    imageUrl: "https://raw.githubusercontent.com/aniketmishra4809-jpg/Edge-website-images/main/Credit-Rebuilding.png"
  },
  {
    id: "foreclosure-removal",
    title: "Foreclosure Charge Removal",
    shortDesc: "Advisory on bank foreclosure charges based on RBI guidelines and case-specific status.",
    longDesc: "Banks often levy foreclosure charges when you close a loan early. According to RBI guidelines, certain types of loans (like floating rate term loans to individual borrowers) should not attract these charges. We analyze your loan agreement, repayment history, and current RBI circulars to determine if the charges applied are valid. Our approach is case-specific; we evaluate the status and proceed with formal representations to the bank where applicable. Note: Success depends on the specific case facts and adherence to regulatory norms.",
    features: ["RBI Guideline Audit", "Floating Rate Loan Review", "Bank Representation", "Case-Specific Evaluation"],
    themeColor: "bg-blue-50 border-blue-100",
    shadowColor: "hover:shadow-blue-100/60",
    iconColor: "text-blue-600",
    imagePrompt: "Banking document with a large red 'REMOVED' stamp, professional legal setting, blue highlights",
    imageUrl: "https://raw.githubusercontent.com/aniketmishra4809-jpg/Edge-website-images/main/Foreclosure.png"
  },
  {
    id: "ipo-legal-checks",
    title: "IPO Legal Quality Checks",
    shortDesc: "Comprehensive legal due diligence and quality assurance for companies planning an IPO.",
    longDesc: "Going public is a significant milestone that requires rigorous legal compliance. We provide end-to-end legal quality checks for your IPO journey. This includes reviewing corporate records, ensuring statutory compliance, auditing material contracts, and preparing the legal groundwork for your Draft Red Herring Prospectus (DRHP). Our goal is to ensure your legal documentation is IPO-ready.",
    features: ["DRHP Legal Review", "Statutory Compliance Audit", "Material Contract Verification", "Due Diligence Reports"],
    themeColor: "bg-purple-50 border-purple-100",
    shadowColor: "hover:shadow-purple-100/60",
    iconColor: "text-purple-600",
    imagePrompt: "Stock market ticker background, legal gavel on a stack of corporate papers, purple neon accents",
    imageUrl: "https://raw.githubusercontent.com/aniketmishra4809-jpg/Edge-website-images/main/IPO.png"
  },
  {
    id: "debt-management",
    title: "Debt Management",
    shortDesc: "Holistic strategies to manage multiple liabilities and optimize financial health.",
    longDesc: "Managing multiple debts can be overwhelming. Our debt management services provide a structured plan to consolidate, prioritize, and systematically reduce your liabilities. We focus on improving your cash flow, reducing interest burdens, and creating a sustainable path toward a debt-free life through disciplined financial strategy.",
    features: ["Liability Prioritization", "Cash Flow Optimization", "Interest Burden Reduction", "Consolidation Advisory"],
    themeColor: "bg-teal-50 border-teal-100",
    shadowColor: "hover:shadow-teal-100/60",
    iconColor: "text-teal-600",
    imagePrompt: "Balanced scale with coins on one side and a document on the other, teal glowing background, financial stability concept",
    imageUrl: "https://raw.githubusercontent.com/aniketmishra4809-jpg/Edge-website-images/main/Debt.png"
  },
  {
    id: "itr-filing",
    title: "ITR Filings",
    shortDesc: "Professional income tax return filing for individuals, professionals, and businesses.",
    longDesc: "Accurate and timely ITR filing is essential for legal compliance and financial planning. We offer professional assistance in filing your income tax returns, ensuring you claim all eligible deductions and remain compliant with the latest tax laws. We handle various ITR forms based on your income sources, providing a hassle-free filing experience.",
    features: ["Individual & HNI Filings", "Business & Professional ITR", "Tax Deduction Optimization", "Compliance Advisory"],
    themeColor: "bg-orange-50 border-orange-100",
    shadowColor: "hover:shadow-orange-100/60",
    iconColor: "text-orange-600",
    imagePrompt: "Tax form on a digital tablet, orange glowing calculator, clean professional office environment",
    imageUrl: "https://raw.githubusercontent.com/aniketmishra4809-jpg/Edge-website-images/main/ITR.png"
  }
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const navigate = useNavigate();

  return (
    <div className="py-24 bg-white min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.2] pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] mesh-blob-1 blur-[100px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] mesh-blob-3 blur-[100px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-24"
        >
          <h2 className="text-[11px] font-black tracking-[0.4em] text-indigo-600 uppercase mb-8">Service Portfolio</h2>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
            Expert Solutions for <br/>
            <span className="text-gradient font-light italic underline decoration-rose-100 underline-offset-8">Growth.</span>
          </h1>
          <p className="text-xl text-slate-500 font-bold opacity-80 leading-relaxed max-w-2xl">
            Edge provides corporate-grade consultancy with a focus on vibrant, data-backed resolution strategies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedService(service)}
              className={`${service.themeColor} p-10 rounded-[2.5rem] border cursor-pointer group ${service.shadowColor} transition-all duration-500 flex flex-col justify-between h-[450px] relative overflow-hidden shadow-sm hover:-translate-y-2`}
            >
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-2xl bg-white mb-8 flex items-center justify-center shadow-sm ${service.iconColor}`}>
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h4 className="text-2xl font-black mb-6 tracking-tight text-slate-900">
                  {service.title}
                </h4>
                <p className="text-sm font-medium leading-relaxed mb-8 text-slate-600 opacity-80">
                  {service.shortDesc}
                </p>
                <div className="space-y-3">
                  {service.features.slice(0, 3).map((f, i) => (
                    <div key={i} className={`text-[10px] uppercase tracking-widest font-black ${service.iconColor}`}>
                      • {f}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-slate-900 transition-colors">
                Explore Strategy <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative bg-white w-full max-w-5xl rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row h-auto max-h-[90vh] z-[110] border border-slate-100"
              >
                {/* Improved Close Button */}
                <button 
                  onClick={() => setSelectedService(null)} 
                  className="absolute top-6 right-6 lg:top-8 lg:right-8 text-slate-400 hover:text-rose-500 transition-colors z-[120] bg-white/90 backdrop-blur p-2 rounded-full shadow-lg border border-slate-100"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <div className="w-full lg:w-2/5 min-h-[300px] lg:h-auto relative flex-shrink-0">
                  <AiImage src={selectedService.imageUrl} prompt={selectedService.imagePrompt} className="h-full w-full" />
                  <div className={`absolute inset-0 opacity-20 ${selectedService.themeColor}`} />
                </div>

                {/* Internal Scroll for Content */}
                <div className="w-full lg:w-3/5 p-8 lg:p-16 overflow-y-auto">
                  <div className="py-4">
                    <h2 className={`text-[10px] font-black tracking-[0.4em] uppercase mb-4 ${selectedService.iconColor}`}>Service Details</h2>
                    <h3 className="text-4xl font-black text-slate-900 mb-8 tracking-tighter">{selectedService.title}</h3>
                    <p className="text-slate-500 font-medium text-lg leading-relaxed mb-10 opacity-90">{selectedService.longDesc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                      {selectedService.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-4">
                          <div className={`w-2 h-2 rounded-full ${selectedService.iconColor.replace('text-', 'bg-')}`} />
                          <span className="text-sm font-bold text-slate-800 tracking-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button 
                      onClick={() => {
                        setSelectedService(null);
                        navigate("/contact");
                      }}
                      className={`text-white py-5 px-12 rounded-2xl font-black tracking-[0.3em] text-[11px] uppercase transition-all w-fit shadow-xl active:scale-95 ${selectedService.iconColor.replace('text-', 'bg-')}`}
                    >
                      Initiate Evaluation
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Services;
