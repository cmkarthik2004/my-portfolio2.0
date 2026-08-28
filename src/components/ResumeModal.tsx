import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  Download,
  ExternalLink,
  X,
  Printer,
  Copy,
  Check,
  GraduationCap,
  Briefcase,
  Code,
  Shield,
  Layers,
  MapPin,
  Mail,
  Github,
  Linkedin,
} from 'lucide-react';
import { RESUME_DATA, siteConfig } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden z-10"
        >
          {/* Modal Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-base sm:text-lg flex items-center gap-2">
                  <span>C M Karthik — Curriculum Vitae</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
                    {siteConfig.resume.lastUpdated}
                  </span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Full-Stack Development &bull; Applied AI/ML &bull; M.Sc. Data Science
                </p>
              </div>
            </div>

            {/* Action buttons & Close */}
            <div className="flex items-center gap-2">
              <a
                href={siteConfig.resume.filePath}
                download={siteConfig.resume.fileName}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>

              <a
                href={siteConfig.resume.filePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium transition-colors"
                title="Open PDF in new tab"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Open PDF</span>
              </a>

              <button
                type="button"
                onClick={handlePrint}
                className="hidden md:inline-flex p-2 rounded-lg text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Print Resume"
              >
                <Printer className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-1"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Scrollable Body — Structured Printable CV */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 print:p-0 print:space-y-6 text-slate-800 dark:text-slate-200 text-sm">
            {/* Header / Contact Bar */}
            <div className="pb-6 border-b border-slate-200 dark:border-slate-800">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {RESUME_DATA.name}
                  </h1>
                  <p className="text-base text-indigo-600 dark:text-indigo-400 font-medium mt-1">
                    {RESUME_DATA.title}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{RESUME_DATA.contact.location}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>{RESUME_DATA.contact.email}</span>
                    {copiedEmail ? (
                      <Check className="w-3 h-3 text-emerald-500" />
                    ) : (
                      <Copy className="w-3 h-3 opacity-60" />
                    )}
                  </button>
                </div>
              </div>

              {/* Social links row */}
              <div className="flex items-center gap-4 mt-4 text-xs font-medium">
                <a
                  href={RESUME_DATA.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>github.com/cmkarthik</span>
                </a>
                <a
                  href={RESUME_DATA.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>linkedin.com/in/cmkarthik</span>
                </a>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-xs uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500 mb-2">
                Professional Profile
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {siteConfig.resume.summary}
              </p>
            </div>

            {/* Work Experience */}
            <div>
              <h2 className="text-xs uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 text-indigo-500" />
                <span>Professional Experience</span>
              </h2>

              <div className="space-y-6">
                {RESUME_DATA.experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-4 border-l-2 border-indigo-500/30 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <div className="font-semibold text-slate-900 dark:text-white text-base">
                        {exp.role}
                      </div>
                      <div className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                        {exp.period}
                      </div>
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {exp.organization} &bull; {exp.location}
                    </div>
                    <ul className="space-y-1.5 pt-1">
                      {exp.highlights.map((item, hIdx) => (
                        <li
                          key={hIdx}
                          className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm flex items-start gap-2"
                        >
                          <span className="text-indigo-500 mt-1">&bull;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-500" />
                <span>Education</span>
              </h2>

              <div className="space-y-5">
                {RESUME_DATA.education.map((edu, idx) => (
                  <div key={idx} className="relative pl-4 border-l-2 border-slate-200 dark:border-slate-700 space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <div className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                        {edu.degree}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        {edu.period}
                      </div>
                    </div>
                    <div className="text-xs text-indigo-600 dark:text-indigo-400">
                      {edu.institution}
                    </div>
                    <ul className="space-y-1 pt-1">
                      {edu.highlights.map((h, hIdx) => (
                        <li
                          key={hIdx}
                          className="text-slate-600 dark:text-slate-300 text-xs flex items-start gap-2"
                        >
                          <span className="text-slate-400 mt-0.5">&bull;</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Skills Matrix */}
            <div>
              <h2 className="text-xs uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-2">
                <Code className="w-3.5 h-3.5 text-indigo-500" />
                <span>Technical Skills</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
                  <div className="font-semibold text-slate-900 dark:text-white mb-1.5">
                    Languages & Databases
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    {RESUME_DATA.coreSkills.languages.join(' • ')}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
                  <div className="font-semibold text-slate-900 dark:text-white mb-1.5">
                    Frameworks & Libraries
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    {RESUME_DATA.coreSkills.frameworks.join(' • ')}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
                  <div className="font-semibold text-slate-900 dark:text-white mb-1.5">
                    DevOps, Hosting & Integrations
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    {RESUME_DATA.coreSkills.devopsAndTools.join(' • ')}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
                  <div className="font-semibold text-slate-900 dark:text-white mb-1.5">
                    Core Specializations
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    {RESUME_DATA.coreSkills.specializations.join(' • ')}
                  </p>
                </div>
              </div>
            </div>

            {/* Selected Key Projects Summary */}
            <div>
              <h2 className="text-xs uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-indigo-500" />
                <span>Featured Project Deliveries</span>
              </h2>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                {RESUME_DATA.projectsSummary.map((proj, idx) => (
                  <li
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    {proj}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-500" />
              <span>Direct verification: cmkarthi2004@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={siteConfig.resume.filePath}
                download={siteConfig.resume.fileName}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-sm transition-colors text-xs"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
