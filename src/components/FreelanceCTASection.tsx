import React, { useState } from 'react';
import {
  Send,
  Mail,
  Copy,
  Check,
  Linkedin,
  Github,
  ArrowRight,
  Sparkles,
  MessageSquare,
  Clock,
  MapPin,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const FreelanceCTASection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [projectType, setProjectType] = useState('Full-Stack Web App');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientMessage, setClientMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    // Prepare direct mailto URL
    const subject = encodeURIComponent(`[Project Inquiry] ${projectType} - ${clientName || 'New Client'}`);
    const body = encodeURIComponent(
      `Hi C M Karthik,\n\nI am reaching out regarding a ${projectType} project.\n\nDetails:\n${clientMessage}\n\nClient Name: ${clientName}\nClient Email: ${clientEmail}\n`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  const projectTypes = [
    'Full-Stack Web App',
    'PHP / MySQL Client Portal',
    'Python / Django Web System',
    'Razorpay Payment Gateway',
    'AI / Computer Vision Pipeline',
    'Linux VPS Deployment & Setup',
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative" aria-label="Freelance Call to Action & Contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Card */}
        <div
          id="freelance-cta-banner"
          className="relative rounded-3xl bg-gradient-to-br from-indigo-900/10 via-slate-900/5 to-sky-900/10 dark:from-indigo-950/50 dark:via-slate-900/80 dark:to-slate-950 border border-indigo-200/90 dark:border-indigo-900/70 p-8 sm:p-10 md:p-14 shadow-2xl backdrop-blur-md overflow-hidden mb-12"
        >
          {/* Subtle Background Glow Accent */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Narrative Column */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider mb-4 border border-indigo-200/60 dark:border-indigo-800/60">
                Let's Collaborate
              </div>

              {/* Exact Requested Headline */}
              <h2
                id="cta-headline"
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4"
              >
                Have an Idea?{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600 dark:from-indigo-400 dark:to-sky-400">
                  Let's Build It.
                </span>
              </h2>

              {/* Exact Requested Supporting Text */}
              <p
                id="cta-supporting-text"
                className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8"
              >
                "Looking for someone to turn an idea into a working web application? I work on
                real-world web development projects from requirements through deployment."
              </p>

              {/* Action Buttons: Start a Conversation & View My Work */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  id="cta-start-convo-btn"
                  href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry%20-%20Web%20Application`}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-md shadow-indigo-500/25 active:scale-95 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start a Conversation</span>
                </a>

                <button
                  id="cta-view-work-btn"
                  onClick={handleScrollToProjects}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 border border-slate-200 dark:border-slate-700 shadow-xs active:scale-95 transition-all"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              {/* Quick Contact Chips with User's Real Email & LinkedIn */}
              <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-slate-200 dark:border-slate-800 text-xs">
                {/* Copy Email Button */}
                <button
                  id="cta-copy-email-btn"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-indigo-500" />
                  <span className="font-mono">{PERSONAL_INFO.email}</span>
                  {copiedEmail ? (
                    <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold text-[11px]">
                      <Check className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                  )}
                </button>

                <a
                  id="cta-linkedin-link"
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

            {/* Right Interactive Inquiry Composer Form */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-lg">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                  Project Inquiry Starter
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
                  Select a project scope or write a note to get in touch directly.
                </p>

                <form onSubmit={handleSubmitInquiry} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Project Type / Focus
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {projectTypes.map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setProjectType(type)}
                          className={`p-2 rounded-lg text-left text-xs font-medium transition-all truncate border ${
                            projectType === type
                              ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-500 text-indigo-700 dark:text-indigo-300 font-semibold'
                              : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200/80 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label
                        htmlFor="client-name-input"
                        className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                      >
                        Your Name / Organization
                      </label>
                      <input
                        type="text"
                        id="client-name-input"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="e.g. Alex Smith"
                        className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="client-email-input"
                        className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                      >
                        Your Contact Email
                      </label>
                      <input
                        type="email"
                        id="client-email-input"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="client-message-input"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Brief Summary of What You're Building
                    </label>
                    <textarea
                      id="client-message-input"
                      rows={3}
                      value={clientMessage}
                      onChange={(e) => setClientMessage(e.target.value)}
                      placeholder="Share high-level goals, timeline, or specific feature requirements..."
                      className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="submit-inquiry-btn"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-sm active:scale-98 transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message to {PERSONAL_INFO.email}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
