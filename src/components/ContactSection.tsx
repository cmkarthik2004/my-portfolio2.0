import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  Copy,
  Check,
  ArrowUpRight,
  Send,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [projectType, setProjectType] = useState('Full-Stack Web App');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientMessage, setClientMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Project Inquiry] ${projectType} - ${clientName || 'New Client'}`);
    const body = encodeURIComponent(
      `Hi C M Karthik,\n\nI am contacting you regarding a ${projectType} project.\n\nDetails:\n${clientMessage}\n\nClient Name: ${clientName}\nClient Email: ${clientEmail}\n`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const projectTypes = [
    'Full-Stack Web App',
    'Commercial Client Website',
    'Database & Admin Portal',
    'Razorpay Payment Integration',
    'Applied AI/ML or Vision Pipeline',
    'Linux VPS Deployment & Maintenance',
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative scroll-mt-20" aria-label="Contact and Inquiries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="text-xs font-semibold tracking-wider text-stone-500 dark:text-stone-400 uppercase mb-2 font-mono flex items-center gap-2">
            <span className="w-3 h-[1.5px] bg-amber-600 dark:bg-amber-400 inline-block"></span>
            <span>07 / CONTACT &amp; START A PROJECT</span>
          </div>
          <h2
            id="contact-headline"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100 tracking-tight leading-tight group cursor-default transition-colors duration-200 hover:text-amber-700 dark:hover:text-amber-400"
          >
            Let's Discuss Your Project
          </h2>
          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 mt-3 leading-relaxed">
            Reach out with your goals, technical requirements, or project vision. I respond promptly to all serious inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Contact & Availability Context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Direct Contact</span>
              </div>

              {/* Email Box with One-Click Copy */}
              <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200/80 dark:border-stone-800/80 mb-5">
                <div className="text-xs text-stone-500 dark:text-stone-400 font-mono mb-1">
                  Primary Email
                </div>
                <div className="flex items-center justify-between gap-3">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100 hover:text-amber-800 dark:hover:text-amber-400 transition-colors truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs font-semibold text-stone-700 dark:text-stone-300 hover:text-stone-900 cursor-pointer shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Direct Social Links */}
              <div className="space-y-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-stone-50 hover:bg-stone-100 dark:bg-stone-950/60 dark:hover:bg-stone-800/50 border border-stone-200/70 dark:border-stone-800/70 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-stone-700 dark:text-stone-300" />
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100">
                        LinkedIn Profile
                      </div>
                      <div className="text-[11px] text-stone-500">
                        Professional background &amp; network
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone-400" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-stone-50 hover:bg-stone-100 dark:bg-stone-950/60 dark:hover:bg-stone-800/50 border border-stone-200/70 dark:border-stone-800/70 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-stone-700 dark:text-stone-300" />
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100">
                        GitHub Profile
                      </div>
                      <div className="text-[11px] text-stone-500">
                        Open-source code &amp; repositories
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone-400" />
                </a>
              </div>

              {/* Working Hours & Location */}
              <div className="pt-5 mt-5 border-t border-stone-200 dark:border-stone-800 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-stone-500 block font-mono">Location</span>
                  <span className="font-semibold text-stone-800 dark:text-stone-200 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    {PERSONAL_INFO.location}
                  </span>
                </div>
                <div>
                  <span className="text-stone-500 block font-mono">Timezone</span>
                  <span className="font-semibold text-stone-800 dark:text-stone-200 flex items-center gap-1 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    {PERSONAL_INFO.timezone}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs">
              <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-1">
                Send a Project Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mb-6">
                Fill in your project details. This opens your default email client pre-addressed to C M Karthik.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Project Type Selection */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 uppercase tracking-wider mb-2 font-mono">
                    Project Type
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setProjectType(type)}
                        className={`p-2.5 rounded-lg text-left text-xs font-medium transition-all cursor-pointer border ${
                          projectType === type
                            ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-950 border-stone-900 dark:border-stone-100 shadow-xs'
                            : 'bg-stone-50 dark:bg-stone-950 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-800 hover:border-stone-400'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 uppercase tracking-wider mb-1 font-mono">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-stone-400 dark:focus:ring-stone-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 uppercase tracking-wider mb-1 font-mono">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-stone-400 dark:focus:ring-stone-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 uppercase tracking-wider mb-1 font-mono">
                    Project Overview / Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your goals, features required, expected timeline, and any specific preferences..."
                    value={clientMessage}
                    onChange={(e) => setClientMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-stone-400 dark:focus:ring-stone-600 resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-stone-900 hover:bg-stone-800 text-white dark:bg-stone-100 dark:hover:bg-white dark:text-stone-950 text-xs sm:text-sm font-semibold tracking-wider transition-all cursor-pointer shadow-xs active:scale-99"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND INQUIRY VIA EMAIL</span>
                </button>

                {submitted && (
                  <p className="text-center text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    Thank you! Your mail client has been opened with your message.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
