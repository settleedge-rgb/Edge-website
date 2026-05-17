/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle2, 
  XCircle,
  ShieldCheck, 
  Clock, 
  PhoneCall, 
  ChevronDown, 
  HelpCircle, 
  ArrowRight,
  Shield,
  UserCheck,
  FileText,
  AlertCircle,
  AlertTriangle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  name: string;
  whatsapp: string;
  city: string;
  debtType: string;
  outstandingAmount: string;
  overdueStatus: string;
  hardshipReason: string;
}

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left font-medium text-slate-800 gap-4 cursor-pointer"
      >
        <span>{question}</span>
        <ChevronDown className={`h-5 w-5 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-slate-600 leading-relaxed text-sm">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <button 
        onClick={() => { window.location.hash = ''; window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        className="mb-8 flex items-center gap-2 text-primary font-semibold hover:underline cursor-pointer"
      >
        <ArrowRight className="h-4 w-4 rotate-180" />
        Back to Home
      </button>
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-slate-500 mb-8">Last updated: 25-02-2026</p>
      
      <div className="max-w-none space-y-6 text-slate-600">
        <p>Welcome to SettleEdge. This Privacy Policy explains how we collect, use, store, and share information when you visit our website or submit your details through our eligibility form.</p>
        {/* Keeping original Privacy Policy unchanged for compliance */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">1. Information We Collect</h2>
          <p>We may collect your name, phone number, city, debt details, hardship reasons, and any other information you voluntarily provide.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">2. How We Contact You</h2>
          <p>By submitting the form, you consent to us contacting you regarding your enquiry through phone call, SMS, WhatsApp, or email.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">3. Data Usage</h2>
          <p>We use your information strictly to evaluate eligibility for settlement guidance and provide you with relevant services.</p>
        </section>
      </div>
    </div>
  );
};

const SuccessScreen = ({ onBack }: { onBack: () => void }) => (
  <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50 text-center">
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="max-w-md bg-white p-8 rounded-2xl shadow-xl border border-slate-100"
    >
      <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="h-10 w-10 text-green-600" />
      </div>
      <h1 className="text-2xl font-bold text-slate-900 mb-4">Application Received!</h1>
      <p className="text-slate-600 mb-8">
        Thank you for contacting SettleEdge. Our team will review your details and get back to you shortly.
      </p>
      <button 
        onClick={onBack}
        className="text-primary font-semibold hover:underline cursor-pointer"
      >
        Back to Home
      </button>
    </motion.div>
  </div>
);

export default function App() {
  const [view, setView] = useState<'home' | 'privacy'>('home');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    whatsapp: '',
    city: '',
    debtType: '',
    outstandingAmount: '',
    overdueStatus: '',
    hardshipReason: ''
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#privacy') {
        setView('privacy');
      } else {
        setView('home');
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const resetForm = () => {
    setFormData({
      name: '',
      whatsapp: '',
      city: '',
      debtType: '',
      outstandingAmount: '',
      overdueStatus: '',
      hardshipReason: ''
    });
    setErrors({});
  };

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Required';
    if (!formData.city.trim()) newErrors.city = 'Required';
    if (!formData.debtType) newErrors.debtType = 'Required';
    if (!formData.outstandingAmount) {
      newErrors.outstandingAmount = 'Required';
    } else {
      const amountVal = parseInt(formData.outstandingAmount.replace(/\D/g, ''), 10);
      if (!isNaN(amountVal) && amountVal < 100000 && amountVal > 0) {
        setAlertMessage('We only handle loans that are greater than ₹1 lakh.');
        return { valid: false, errors: newErrors };
      }
    }
    if (!formData.overdueStatus) newErrors.overdueStatus = 'Required';
    if (!formData.hardshipReason) newErrors.hardshipReason = 'Required';
    
    // Indian WhatsApp Number Validation (starts with 6-9, 10 digits)
    if (!formData.whatsapp) {
      newErrors.whatsapp = 'Required';
    } else if (!/^[6-9]\d{9}$/.test(formData.whatsapp)) {
      newErrors.whatsapp = 'Please enter a valid 10-digit Indian WhatsApp number';
    }
    
    setErrors(newErrors);
    return {
      valid: Object.keys(newErrors).length === 0,
      errors: newErrors
    };
  };

  const APPS_SCRIPT_URL = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const { valid, errors: validationErrors } = validate();

    if (valid) {
      setIsSubmitting(true);
      
      try {
        if (!APPS_SCRIPT_URL) {
          throw new Error('VITE_GOOGLE_APPS_SCRIPT_URL is not set in environment variables.');
        }

        if (!APPS_SCRIPT_URL.startsWith('http')) {
          throw new Error('Invalid Apps Script URL. Please check your configuration.');
        }

        const payload = {
          fullName: formData.name,
          phoneNumber: formData.whatsapp,
          city: formData.city,
          debtType: formData.debtType,
          outstandingAmount: formData.outstandingAmount,
          overdueStatus: formData.overdueStatus,
          hardshipReason: formData.hardshipReason
        };

        const fetchPromise = fetch(APPS_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(payload),
        });

        // Add a timeout to prevent infinite loading if the webhook hangs
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('The request timed out. Please try again.')), 15000)
        );

        await Promise.race([fetchPromise, timeoutPromise]);

        setSubmitted(true);
        window.location.hash = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });

      } catch (error) {
        console.error('Submission error detailed:', error);
        setSubmitError(error instanceof Error ? error.message : 'An unknown error occurred during submission.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      if (validationErrors.whatsapp) {
        phoneRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const baseInputClass = "w-full px-4 py-3 text-sm md:text-base border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all";

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="bg-white border-b border-slate-100 py-4 px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => { setView('home'); setSubmitted(false); window.location.hash = ''; }}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <ShieldCheck className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold tracking-tight text-slate-900">SettleEdge</span>
          </button>
        </div>
      </header>

      {view === 'privacy' ? (
        <PrivacyPolicy />
      ) : submitted ? (
        <SuccessScreen onBack={() => { setSubmitted(false); window.location.hash = ''; }} />
      ) : (
        <>
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-white to-slate-50 pt-8 md:pt-14 pb-16 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              
              {/* Copy / Value Proposition */}
              <div className="space-y-6 pt-0 md:pt-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                  Overdue Credit Card or Personal Loan? Check If Settlement is Possible
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  We help eligible borrowers with overdue credit card, personal loan, NBFC, and loan-app dues understand possible settlement options.
                </p>
                
                <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 mt-2 rounded-lg text-sm font-semibold border border-red-100">
                  <AlertTriangle className="h-4 w-4" /> We do not provide new loans.
                </div>

                {/* Suitability (Desktop Only) */}
                <div className="hidden lg:block mt-8 space-y-6 border-t border-slate-200 pt-8">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      This service is suitable if:
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex gap-2 text-slate-700 text-sm"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" /> You have overdue credit card, personal loan, NBFC, or loan-app dues</li>
                      <li className="flex gap-2 text-slate-700 text-sm"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" /> Your total outstanding is preferably ₹1 lakh or more</li>
                      <li className="flex gap-2 text-slate-700 text-sm"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" /> You are facing job loss, business loss, salary reduction, medical issue, or multiple-loan pressure</li>
                      <li className="flex gap-2 text-slate-700 text-sm"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" /> You can arrange some amount for settlement if the lender approves</li>
                      <li className="flex gap-2 text-slate-700 text-sm"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" /> You want proper written closure from the lender</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Lead Form */}
              <div id="lead-form" className="bg-white p-5 sm:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-200 max-w-xl mx-auto lg:max-w-none w-full">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 text-center">Check Your Settlement Eligibility</h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name"
                      className={`${baseInputClass} ${errors.name ? 'border-red-500' : ''}`}
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div ref={phoneRef}>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">+91</span>
                      <input 
                        type="tel" 
                        placeholder="10-digit mobile number"
                        className={`${baseInputClass} pl-14 ${errors.whatsapp ? 'border-red-500' : ''}`}
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({...formData, whatsapp: e.target.value.replace(/\D/g, '').slice(0, 10)})}
                      />
                    </div>
                    {errors.whatsapp && <p className="text-red-500 text-xs mt-1">{errors.whatsapp}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">City</label>
                    <input 
                      type="text" 
                      placeholder="Where do you live?"
                      className={`${baseInputClass} ${errors.city ? 'border-red-500' : ''}`}
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                    />
                    {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">What type of debt do you need help with?</label>
                    <select 
                      className={`${baseInputClass} ${errors.debtType ? 'border-red-500' : ''}`}
                      value={formData.debtType}
                      onChange={(e) => setFormData({...formData, debtType: e.target.value})}
                    >
                      <option value="">Select option</option>
                      <option value="Credit card">Credit card</option>
                      <option value="Personal loan">Personal loan</option>
                      <option value="NBFC loan">NBFC loan</option>
                      <option value="Loan app">Loan app</option>
                      <option value="Multiple loans">Multiple loans</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.debtType && <p className="text-red-500 text-xs mt-1">{errors.debtType}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">What is your total outstanding amount? (₹)</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 150000"
                      className={`${baseInputClass} ${errors.outstandingAmount ? 'border-red-500' : ''}`}
                      value={formData.outstandingAmount}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '');
                        setFormData({...formData, outstandingAmount: val});
                      }}
                      onBlur={(e) => {
                        const val = parseInt(e.target.value.replace(/\D/g, ''), 10);
                        if (!isNaN(val) && val < 100000 && val > 0) {
                          setAlertMessage('We only handle loans that are greater than ₹1 lakh.');
                          // Force blur any active element to close native dropdowns
                          if (document.activeElement instanceof HTMLElement) {
                            document.activeElement.blur();
                          }
                        }
                      }}
                    />
                    {errors.outstandingAmount && <p className="text-red-500 text-xs mt-1">{errors.outstandingAmount}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">How overdue is your payment?</label>
                    <select 
                      disabled={!!alertMessage}
                      className={`${baseInputClass} ${errors.overdueStatus ? 'border-red-500' : ''} ${alertMessage ? 'bg-slate-50 opacity-60' : ''}`}
                      value={formData.overdueStatus}
                      onChange={(e) => {
                        if (e.target.value === 'Not overdue') {
                          setAlertMessage('We only handle overdue loans.');
                          if (document.activeElement instanceof HTMLElement) {
                            document.activeElement.blur();
                          }
                        } else {
                          setFormData({...formData, overdueStatus: e.target.value});
                        }
                      }}
                    >
                      <option value="">Select duration</option>
                      <option value="Not overdue">Not overdue</option>
                      <option value="Less than 30 days">Less than 30 days</option>
                      <option value="30–60 days">30–60 days</option>
                      <option value="60–90 days">60–90 days</option>
                      <option value="90–180 days">90–180 days</option>
                      <option value="More than 180 days">More than 180 days</option>
                    </select>
                    {errors.overdueStatus && <p className="text-red-500 text-xs mt-1">{errors.overdueStatus}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">What is the main reason for non-payment?</label>
                    <select 
                      disabled={!!alertMessage}
                      className={`${baseInputClass} ${errors.hardshipReason ? 'border-red-500' : ''} ${alertMessage ? 'bg-slate-50 opacity-60' : ''}`}
                      value={formData.hardshipReason}
                      onChange={(e) => setFormData({...formData, hardshipReason: e.target.value})}
                    >
                      <option value="">Select reason</option>
                      <option value="Job loss">Job loss</option>
                      <option value="Business loss">Business loss</option>
                      <option value="Salary reduction">Salary reduction</option>
                      <option value="Medical or family emergency">Medical or family emergency</option>
                      <option value="Multiple loan burden">Multiple loan burden</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.hardshipReason && <p className="text-red-500 text-xs mt-1">{errors.hardshipReason}</p>}
                  </div>

                  <div className="pt-4">
                    {submitError && (
                      <div className="mb-4 p-3 bg-red-50 border border-red-100 rounded-lg flex items-start gap-2 text-red-600 text-sm">
                        <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <p>{submitError}</p>
                      </div>
                    )}
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className={`btn-primary w-full flex items-center justify-center gap-2 py-4 text-lg font-bold shadow-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Check My Settlement Eligibility <ArrowRight className="h-5 w-5" />
                        </>
                      )}
                    </button>
                    <p className="text-xs text-center text-slate-500 mt-4">
                      By submitting, you agree to our <button type="button" onClick={() => { window.location.hash = 'privacy'; }} className="underline hover:text-slate-700">Privacy Policy</button>, allowing us to contact you regarding your eligibility.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </section>

          {/* Guidelines Section / Suitability Filters (Mobile Fallback & Complete Layout) */}
          <section className="py-16 px-4 sm:px-6 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                
                {/* Suitable If (Repeated on middle-sized screens/mobile for flow, distinct on desktop) */}
                <div className="lg:hidden bg-green-50/50 p-6 md:p-8 rounded-2xl border border-green-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                    This service is suitable if:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex gap-2 text-slate-700 text-sm md:text-base"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /> You have overdue credit card, personal loan, NBFC, or loan-app dues</li>
                    <li className="flex gap-2 text-slate-700 text-sm md:text-base"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /> Your total outstanding is preferably ₹1 lakh or more</li>
                    <li className="flex gap-2 text-slate-700 text-sm md:text-base"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /> You are facing job loss, business loss, salary reduction, medical issue, or multiple-loan pressure</li>
                    <li className="flex gap-2 text-slate-700 text-sm md:text-base"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /> You can arrange some amount for settlement if the lender approves</li>
                    <li className="flex gap-2 text-slate-700 text-sm md:text-base"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /> You want proper written closure from the lender</li>
                  </ul>
                </div>

                {/* Not Suitable If */}
                <div className="bg-red-50/50 p-6 md:p-8 rounded-2xl border border-red-100 md:col-start-2 lg:col-start-2">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <XCircle className="h-6 w-6 text-red-500" />
                    This may not be suitable if:
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-slate-700"><XCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" /> You are looking for a new loan</li>
                    <li className="flex gap-3 text-slate-700"><XCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" /> Your loan is not overdue</li>
                    <li className="flex gap-3 text-slate-700"><XCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" /> You cannot arrange any settlement amount</li>
                    <li className="flex gap-3 text-slate-700"><XCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" /> Your only debt is a very small loan below ₹50,000</li>
                    <li className="flex gap-3 text-slate-700"><XCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" /> Your loan is secured, such as home loan, car loan, gold loan, or loan against property</li>
                  </ul>
                </div>

              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-16 md:py-20 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12 md:mb-16">How the process works</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 relative">
                <div className="hidden lg:block absolute top-6 left-12 w-[calc(100%-6rem)] h-0.5 bg-slate-200 z-0"></div>
                
                {[
                  { step: "1", title: "Submit Details", desc: "Submit your loan details securely via our form." },
                  { step: "2", title: "Suitability Check", desc: "Our team checks whether your case is suitable." },
                  { step: "3", title: "Review Hardship", desc: "We understand your hardship and repayment capacity." },
                  { step: "4", title: "Get Guidance", desc: "If eligible, we guide you on possible settlement steps." }
                ].map((item, i) => (
                  <div key={i} className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-md border-4 border-slate-50">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 md:py-20 px-4 sm:px-6 bg-white border-t border-slate-100">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-2 justify-center mb-8 md:mb-10">
                <HelpCircle className="h-6 w-6 md:h-7 md:h-7 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
              </div>
              <div className="space-y-2">
                <FAQItem 
                  question="Do you issue new loans?" 
                  answer="No. SettleEdge does not issue loans or arrange top-up loans. We solely provide guidance for distressed borrowers dealing with overdue unsecured debt."
                />
                <FAQItem 
                  question="Is this only for credit cards and personal loans?" 
                  answer="Yes, we focus exclusively on unsecured loans like credit cards, personal loans, and loan-app dues. We do not handle home loans or secured loans."
                />
                <FAQItem 
                  question="Do I need to already be overdue?" 
                  answer="Yes, settlement discussions are generally an option only for loans that have already become overdue or are in default."
                />
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white">
                <ShieldCheck className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold tracking-tight">SettleEdge</span>
              </div>
              <p className="text-sm leading-relaxed pr-4">
                Providing guidance for distressed borrowers dealing with overdue unsecured loans to explore possible settlement paths.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="mailto:settleedge@gmail.com" className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2">
                    settleedge@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Links</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <button 
                    onClick={() => { window.location.hash = 'privacy'; window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Important Disclosure</h4>
              <p className="text-xs leading-relaxed text-slate-500">
                Loan settlement depends solely on the lender. SettleEdge does not guarantee any settlement amount, waiver, or credit score improvement. This platform is strictly for overdue unsecured debt guidance.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} SettleEdge. All rights reserved.</p>
            <p className="mt-2 md:mt-0 max-w-sm text-center md:text-right">
              Not a bank or non-banking financial company (NBFC).
            </p>
          </div>
        </div>
      </footer>

      {/* Custom Alert Modal */}
      <AnimatePresence>
        {alertMessage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full relative"
            >
              <div className="mb-6 text-center">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-100">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Not Eligible</h3>
                <p className="text-slate-600 font-medium">{alertMessage}</p>
              </div>
              <button
                onClick={() => {
                  setAlertMessage(null);
                  resetForm();
                }}
                className="w-full py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
              >
                OK
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
