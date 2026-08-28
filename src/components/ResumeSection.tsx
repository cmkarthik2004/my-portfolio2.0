import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  FileText,
  Download,
  Eye,
  Calendar,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Layers,
  Sparkles,
} from 'lucide-react';
import { siteConfig, RESUME_DATA } from '../data/portfolioData';
import { ResumeModal } from './ResumeModal';

export function ResumeSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="resume" className="py-20 lg:py-28 relative scroll-mt-20">
      {/* Decorative subtle ambient backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/70 dark:border-indigo-800/70 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <FileText className="w-3.5 h-3.5" />
            <span>MY RESUME</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Want to know more about my experience, education, skills and projects?
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Get a comprehensive breakdown of my full-stack web deliveries, data science research, technical proficiencies, and academic background in a clean, professional format.
          </p>
        </div>

        {/* Main Resume Presentation Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden"
        >
          {/* Top banner highlight */}
          <div className="h-2 w-full bg-gradient-to-r from-indigo-500 via-sky-500 to-indigo-600" />

          <div className="p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Quick Snapshot */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold shadow-xs">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {siteConfig.name} — Full Resume
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800/50">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {siteConfig.resume.lastUpdated}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        &bull; Official PDF Document
                      </span>
                    </div>
                  </div>
                </div>

                {/* Core Highlights Summary */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                    <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-1">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>Experience</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                      Freelance Full-Stack (2025–Pres)
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                    <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 text-xs font-semibold mb-1">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>Education</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                      M.Sc. Data Science (2024–2026)
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-1">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Key Stack</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                      Python, Django, PHP, MySQL, VPS
                    </p>
                  </div>
                </div>

                {/* Quick Points */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span>Proven production deployments with Linux VPS hosting, Nginx reverse proxy, and Razorpay gateway.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span>Specialized applied research in Federated Learning (FedAvg) and Computer Vision pipelines.</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Actions */}
              <div className="lg:col-span-5 flex flex-col justify-center p-6 sm:p-8 rounded-2xl bg-slate-50/90 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800/80 text-center space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    File: {siteConfig.resume.fileName}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Direct Document Access
                  </h4>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 pt-2">
                  {/* View Resume Button */}
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-semibold text-sm transition-all shadow-sm group"
                  >
                    <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>View Resume</span>
                  </button>

                  {/* Download Resume Button */}
                  <a
                    href={siteConfig.resume.filePath}
                    download={siteConfig.resume.fileName}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all shadow-sm shadow-indigo-500/20 hover:shadow-indigo-500/30 group"
                  >
                    <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                    <span>Download Resume</span>
                  </a>
                </div>

                {/* Direct Open PDF in New Tab Link */}
                <div className="pt-2">
                  <a
                    href={siteConfig.resume.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                  >
                    <span>Open raw PDF in new browser tab</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="text-[11px] text-slate-400 dark:text-slate-500">
                  {siteConfig.resume.lastUpdated} &bull; Formatted for ATS and engineering recruiters
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Resume Modal */}
      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
