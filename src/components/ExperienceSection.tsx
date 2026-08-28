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

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative scroll-mt-20" aria-label="Freelance Experience and Education">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            05 / Experience & Background
          </div>
          <h2
            id="experience-headline"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4"
          >
            Real-World Practice & Background
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Building software isn't just about code — it's about solving client problems, deploying
            secure systems on production servers, and providing dependable ongoing support.
          </p>
        </div>

        {/* Featured Freelance Practice Card */}
        <div
          id="freelance-experience-card"
          className="relative rounded-3xl bg-gradient-to-br from-indigo-900/5 via-slate-900/5 to-sky-900/5 dark:from-indigo-950/40 dark:via-slate-900/60 dark:to-slate-950 border border-indigo-200/80 dark:border-indigo-900/60 p-6 sm:p-8 md:p-10 mb-12 shadow-xl backdrop-blur-md"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/20 shrink-0">
                <Briefcase className="w-7 h-7" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Active Freelance Delivery
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Freelance Full-Stack Developer
                </h3>
                <p className="text-sm font-mono font-medium text-indigo-600 dark:text-indigo-400 mt-1">
                  2025 – Present • Client Web Platforms & AI Applications
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
                  <div className="text-sm font-bold text-slate-900 dark:text-white">Commercial & Institutional Platforms</div>
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

          {/* Client Tech Stack Chips */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Production Client Tech Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {FREELANCE_TECH_STACK.map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono text-xs font-medium border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Academic Foundation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESUME_DATA.education.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-500 dark:text-slate-400">
                    {edu.period}
                  </span>
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                  {edu.degree}
                </h4>
                <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-4">
                  {edu.institution}
                </p>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {edu.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="text-indigo-500 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
