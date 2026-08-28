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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
              07 / Professional Practice
            </div>
            <h2
              id="experience-headline"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4"
            >
              Freelance Experience &amp; Delivery
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Building software isn't just about code — it's about solving client problems, deploying
              secure systems on production servers, and providing dependable ongoing support.
            </p>
          </div>

          {onOpenFreelancePage && (
            <button
              onClick={onOpenFreelancePage}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white text-xs sm:text-sm font-semibold shadow-md shadow-indigo-500/20 active:scale-95 transition-all cursor-pointer shrink-0"
            >
              <span>Explore Dedicated Freelance Page</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Featured Freelance Practice Card - Interactive */}
        <div
          id="freelance-experience-card"
          onClick={onOpenFreelancePage}
          className="group relative rounded-3xl bg-gradient-to-br from-indigo-900/5 via-slate-900/5 to-sky-900/5 dark:from-indigo-950/40 dark:via-slate-900/60 dark:to-slate-950 border border-indigo-200/80 dark:border-indigo-900/60 p-6 sm:p-8 md:p-10 shadow-xl backdrop-blur-md cursor-pointer hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-200"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/20 shrink-0 group-hover:scale-105 transition-transform">
                <Briefcase className="w-7 h-7" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/80 mb-2 shadow-2xs hover:bg-emerald-200 dark:hover:bg-emerald-900 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active Freelance Delivery
                  <span className="text-[10px] font-mono opacity-80">(Click to view full workflow)</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  Freelance Full-Stack Developer
                </h3>
                <p className="text-sm font-mono font-medium text-indigo-600 dark:text-indigo-400 mt-1">
                  2025 – Present • Client Web Platforms &amp; AI Applications
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-xs">
                End-to-End Delivery
              </div>
              <div className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-xs">
                Razorpay Integration
              </div>
              <div className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-xs">
                Linux VPS Setup
              </div>
            </div>
          </div>

          {/* Role Narrative */}
          <div className="py-6">
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
              "Delivered multiple production client web applications end-to-end — from requirements gathering
              and custom development to live server deployment, payment integration, testing, debugging, and ongoing
              production support."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">Commercial &amp; Institutional Platforms</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    Live production websites engineered and deployed for actual clients, handling users and daily transactions.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">Zero-Downtime Server Architecture</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    Configured Linux Ubuntu VPS servers, Nginx reverse proxies, SSL automation, and automated database backups.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Interactive Trigger Banner */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {FREELANCE_TECH_STACK.slice(0, 6).map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono text-xs font-medium border border-slate-200/80 dark:border-slate-700/80 shadow-xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  {tech.name}
                </span>
              ))}
            </div>

            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:underline">
              <span>View Full Freelance Delivery Journey &amp; Services</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

