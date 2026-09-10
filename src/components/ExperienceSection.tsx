import React from 'react';
import {
  Briefcase,
  GraduationCap,
  CheckCircle2,
  Server,
  CreditCard,
  ShieldCheck,
  Award,
  Globe,
  ExternalLink,
  ChevronRight,
  Code2,
  Cpu,
  Layers,
} from 'lucide-react';
import { FREELANCE_TECH_STACK, RESUME_DATA } from '../data/portfolioData';

interface ExperienceSectionProps {
  onOpenFreelancePage?: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenFreelancePage }) => {
  return (
    <section id="experience" className="py-20 md:py-28 relative scroll-mt-20" aria-label="Freelance Experience and Practice">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-xs font-medium mb-3">
              Experience
            </div>
            <h2
              id="experience-headline"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-3"
            >
              Freelance Experience &amp; Delivery
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Engineering end-to-end client applications — from scoping and design to production Linux deployments,
              payment gateway integrations, and reliable maintenance.
            </p>
          </div>

          {onOpenFreelancePage && (
            <button
              onClick={onOpenFreelancePage}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs sm:text-sm font-semibold hover:opacity-90 active:scale-95 transition-all cursor-pointer shrink-0 shadow-xs"
            >
              <span>Explore Freelance Services</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Featured Freelance Practice Card - Interactive */}
        <div
          id="freelance-experience-card"
          onClick={onOpenFreelancePage}
          className="group relative rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/10 p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-500/40 transition-all duration-200 cursor-pointer"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800/80">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Briefcase className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active Freelance Delivery
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  Freelance Full-Stack Developer
                </h3>
                <p className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 mt-1">
                  2025 – Present • Client Web Platforms &amp; AI Applications
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200/60 dark:border-slate-700/60">
                End-to-End Delivery
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200/60 dark:border-slate-700/60">
                Payment Gateways
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200/60 dark:border-slate-700/60">
                Linux VPS Setup
              </span>
            </div>
          </div>

          {/* Role Narrative */}
          <div className="py-5">
            <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
              Delivered multiple production client web applications end-to-end — from initial requirements scoping
              and design to live server deployment, payment integration, rigorous testing, debugging, and continuous
              production support.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-5">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">Commercial &amp; Institutional Platforms</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                    Live production websites engineered and deployed for actual clients, handling active user traffic and transactions.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">Zero-Downtime Server Architecture</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                    Configured Linux Ubuntu VPS servers, Nginx reverse proxies, SSL automation, and automated database backups.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Interactive Trigger Banner */}
          <div className="pt-5 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {FREELANCE_TECH_STACK.slice(0, 6).map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-xs border border-slate-200/60 dark:border-slate-700/60"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  {tech.name}
                </span>
              ))}
            </div>

            <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
              <span>View Full Freelance Services</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

