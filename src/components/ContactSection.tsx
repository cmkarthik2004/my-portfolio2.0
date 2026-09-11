import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  Copy,
  Check,
  ArrowUpRight,
  MapPin,
  Clock,
  Globe,
  Sparkles,
  CalendarCheck,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ProjectDiscussionScheduler } from './ProjectDiscussionScheduler';

interface ContactSectionProps {
  selectedService?: string;
  onSelectService?: (service: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedService,
  onSelectService,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 md:py-28 relative scroll-mt-20" aria-label="Contact and Inquiries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Handwritten Accent */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 sm:mb-12 relative">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-wider text-stone-500 dark:text-stone-400 uppercase mb-2 font-mono flex items-center gap-2">
              <span className="w-3 h-[1.5px] bg-amber-600 dark:bg-amber-400 inline-block"></span>
              <span>07 / CONTACT &amp; SCHEDULE A DISCUSSION</span>
            </div>
            <h2
              id="contact-headline"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100 tracking-tight leading-tight group cursor-default transition-colors duration-200 hover:text-amber-700 dark:hover:text-amber-400"
            >
              Let's Discuss Your Project
            </h2>
            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 mt-2.5 sm:mt-3 leading-relaxed">
              Available for project discussions — 24/7. Select your preferred date, choose a convenient time slot, pick your service, and share your technical goals.
            </p>
          </div>

          {/* Handwritten Script Accent: "Ideas Discussions Opportunities Let's Connect!" */}
          <div className="hidden lg:flex flex-col items-center shrink-0 pointer-events-none select-none">
            <div className="font-caveat text-xl text-stone-700 dark:text-stone-300 leading-snug text-center rotate-[4deg]">
              <span>Ideas</span><br />
              <span>Discussions</span><br />
              <span>Opportunities</span><br />
              <span className="text-amber-600 dark:text-amber-400 font-bold">Let's Connect!</span>
            </div>
            <svg
              className="w-10 h-10 text-stone-500 dark:text-stone-400 mt-1 rotate-[35deg]"
              viewBox="0 0 50 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M 12 12 Q 24 35 38 22" />
              <path d="M 30 20 L 38 22 L 35 30" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Main Interactive Scheduler (Order 1 on mobile, 8 cols on desktop) */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <ProjectDiscussionScheduler
              initialService={selectedService}
              onServiceChange={onSelectService}
            />
          </div>

          {/* Direct Contact, Availability Context & Coordinates (Order 2 on mobile, 4 cols on desktop) */}
          <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Direct Contact Details</span>
              </div>

              {/* Email Box with One-Click Copy */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200/80 dark:border-stone-800/80 mb-4 sm:mb-5">
                <div className="text-xs text-stone-500 dark:text-stone-400 font-mono mb-1">
                  Primary Email
                </div>
                <div className="flex items-center justify-between gap-2 min-w-0">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100 hover:text-amber-800 dark:hover:text-amber-400 transition-colors truncate min-w-0"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="min-h-[36px] inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs font-semibold text-stone-700 dark:text-stone-300 hover:text-stone-900 cursor-pointer shrink-0 transition-colors"
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
              <div className="space-y-2.5 sm:space-y-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] flex items-center justify-between p-3 sm:p-3.5 rounded-xl bg-stone-50 hover:bg-stone-100 dark:bg-stone-950/60 dark:hover:bg-stone-800/50 border border-stone-200/70 dark:border-stone-800/70 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-stone-700 dark:text-stone-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors shrink-0" />
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100 truncate">
                        LinkedIn Profile
                      </div>
                      <div className="text-[11px] text-stone-500 truncate">
                        Professional background &amp; network
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] flex items-center justify-between p-3 sm:p-3.5 rounded-xl bg-stone-50 hover:bg-stone-100 dark:bg-stone-950/60 dark:hover:bg-stone-800/50 border border-stone-200/70 dark:border-stone-800/70 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-stone-700 dark:text-stone-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors shrink-0" />
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100 truncate">
                        GitHub Profile
                      </div>
                      <div className="text-[11px] text-stone-500 truncate">
                        Open-source code &amp; repositories
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                </a>
              </div>

              {/* Working Hours & Location */}
              <div className="pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-stone-200 dark:border-stone-800 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-stone-500 block font-mono">Location</span>
                  <span className="font-semibold text-stone-800 dark:text-stone-200 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    {PERSONAL_INFO.location}
                  </span>
                </div>
                <div>
                  <span className="text-stone-500 block font-mono">Base Timezone</span>
                  <span className="font-semibold text-stone-800 dark:text-stone-200 flex items-center gap-1 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    {PERSONAL_INFO.timezone}
                  </span>
                </div>
              </div>

              {/* Quick Direct Email Button */}
              <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-stone-100 dark:border-stone-800">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent('[Direct Inquiry] Discussion Request')}`}
                  className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 text-xs font-semibold transition-all cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Direct Email Instead</span>
                </a>
              </div>
            </div>

            {/* Scheduling Guidance Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/5 dark:bg-amber-400/5 border border-amber-500/20 text-xs text-stone-600 dark:text-stone-300 space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-stone-900 dark:text-stone-100 font-mono">
                <CalendarCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>HOW SCHEDULING WORKS</span>
              </div>
              <p className="leading-relaxed">
                Submit your preferred date and time above. Rather than an unvetted automated bot, C M Karthik will personally review your technical scope and confirm your meeting link via email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
