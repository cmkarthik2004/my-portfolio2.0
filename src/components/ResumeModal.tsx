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
  Phone,
  Github,
  Linkedin,
  Award,
  Languages,
  Sparkles,
  Sun,
  Moon,
} from 'lucide-react';
import { RESUME_DATA, siteConfig } from '../data/portfolioData';
import { getAssetUrl } from '../utils/assetHelper';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  // Default to sleek dark mode for maximum visual attraction as requested
  const [modalDark, setModalDark] = useState(true);
  const [activeTab, setActiveTab] = useState<'all' | 'page1' | 'page2'>('all');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    if (siteConfig.phone) {
      navigator.clipboard.writeText(siteConfig.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className={`relative w-full max-w-4xl max-h-[92vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10 transition-colors duration-200 border ${
            modalDark
              ? 'bg-[#0b0f17] text-stone-100 border-stone-800 shadow-amber-950/20'
              : 'bg-white text-stone-900 border-stone-200 shadow-stone-900/10'
          }`}
        >
          {/* Modal Header Bar */}
          <div
            className={`flex items-center justify-between px-3 sm:px-6 py-3 border-b backdrop-blur-md sticky top-0 z-30 transition-colors ${
              modalDark
                ? 'bg-[#0f1422]/95 border-stone-800 text-stone-100'
                : 'bg-stone-50/95 border-stone-200 text-stone-900'
            }`}
          >
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-bold shrink-0 transition-colors ${
                  modalDark
                    ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                    : 'bg-amber-100 text-amber-800 border border-amber-200'
                }`}
              >
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-xs sm:text-base flex items-center gap-1.5 sm:gap-2 truncate">
                  <span className="truncate">C M Karthik</span>
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shrink-0">
                    CV
                  </span>
                </h3>
                <p className="text-xs text-stone-400 dark:text-stone-400 hidden sm:block truncate">
                  Aspiring Software Developer &bull; Python &amp; AI/ML Enthusiast
                </p>
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {/* Color Mode Switcher */}
              <button
                type="button"
                onClick={() => setModalDark(!modalDark)}
                className={`p-2 min-w-[36px] min-h-[36px] flex items-center justify-center rounded-lg text-xs font-semibold gap-1.5 transition-colors cursor-pointer ${
                  modalDark
                    ? 'bg-stone-800 hover:bg-stone-700 text-amber-300 border border-stone-700'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200'
                }`}
                title={modalDark ? 'Switch to Paper Mode' : 'Switch to Dark Mode'}
              >
                {modalDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                <span className="hidden md:inline">{modalDark ? 'Light Paper' : 'Dark Mode'}</span>
              </button>

              {/* Download PDF Button */}
              <a
                href={getAssetUrl(siteConfig.resume.filePath)}
                download={siteConfig.resume.fileName}
                className="min-h-[36px] inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold shadow-sm transition-all active:scale-98"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download PDF</span>
                <span className="sm:hidden">PDF</span>
              </a>

              {/* Open in new window */}
              <a
                href={getAssetUrl(siteConfig.resume.filePath)}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 min-w-[36px] min-h-[36px] flex items-center justify-center rounded-lg text-xs font-medium transition-colors ${
                  modalDark
                    ? 'bg-stone-800/80 hover:bg-stone-700 text-stone-300'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
                title="Open PDF in new tab"
              >
                <ExternalLink className="w-4 h-4" />
              </a>

              {/* Print Button */}
              <button
                type="button"
                onClick={handlePrint}
                className={`hidden md:inline-flex p-2 rounded-lg transition-colors ${
                  modalDark
                    ? 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
                title="Print Resume"
              >
                <Printer className="w-4 h-4" />
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className={`p-2 min-w-[36px] min-h-[36px] flex items-center justify-center rounded-lg transition-colors cursor-pointer ${
                  modalDark
                    ? 'text-stone-400 hover:text-white hover:bg-stone-800'
                    : 'text-stone-500 hover:text-stone-900 hover:bg-stone-100'
                }`}
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Section Filter Pills */}
          <div
            className={`px-3 sm:px-6 py-2 border-b flex items-center gap-2 text-xs overflow-x-auto no-scrollbar ${
              modalDark ? 'bg-[#0d121c] border-stone-800/80' : 'bg-stone-100/70 border-stone-200'
            }`}
          >
            <span className="text-[11px] uppercase tracking-wider font-mono text-stone-400 mr-1 shrink-0">
              View:
            </span>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors shrink-0 ${
                activeTab === 'all'
                  ? 'bg-amber-600 text-white font-semibold'
                  : modalDark
                  ? 'text-stone-300 hover:bg-stone-800'
                  : 'text-stone-700 hover:bg-stone-200'
              }`}
            >
              Full 2-Page Resume
            </button>
            <button
              onClick={() => setActiveTab('page1')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors shrink-0 ${
                activeTab === 'page1'
                  ? 'bg-amber-600 text-white font-semibold'
                  : modalDark
                  ? 'text-stone-300 hover:bg-stone-800'
                  : 'text-stone-700 hover:bg-stone-200'
              }`}
            >
              Page 1: Skills &amp; Projects
            </button>
            <button
              onClick={() => setActiveTab('page2')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors shrink-0 ${
                activeTab === 'page2'
                  ? 'bg-amber-600 text-white font-semibold'
                  : modalDark
                  ? 'text-stone-300 hover:bg-stone-800'
                  : 'text-stone-700 hover:bg-stone-200'
              }`}
            >
              Page 2: Certifications &amp; Education
            </button>
          </div>

          {/* Scrollable Printable Document Body */}
          <div
            id="printable-resume-body"
            className={`p-5 sm:p-8 md:p-10 overflow-y-auto space-y-8 text-xs sm:text-sm font-sans leading-relaxed ${
              modalDark ? 'text-stone-200' : 'text-stone-800'
            }`}
          >
            {/* ==================== PAGE 1 ==================== */}
            {(activeTab === 'all' || activeTab === 'page1') && (
              <div className="space-y-6">
                {/* Header / Identity Bar */}
                <div
                  className={`pb-5 border-b text-center sm:text-left ${
                    modalDark ? 'border-stone-800' : 'border-stone-300'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-serif text-stone-900 dark:text-white uppercase">
                        {RESUME_DATA.name}
                      </h1>
                      <p
                        className={`text-sm sm:text-base font-medium mt-1 italic ${
                          modalDark ? 'text-amber-400' : 'text-amber-700'
                        }`}
                      >
                        {RESUME_DATA.title}
                      </p>
                    </div>

                    {/* Quick copy indicator */}
                    <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 text-[11px] font-mono">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Available for Projects
                      </span>
                    </div>
                  </div>

                  {/* Contact Row with Clickable Actions */}
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 mt-3 pt-2 text-xs">
                    <div className="flex items-center gap-1.5 text-stone-400">
                      <MapPin className="w-3.5 h-3.5 text-amber-500" />
                      <span>{RESUME_DATA.contact.location}</span>
                    </div>

                    <button
                      onClick={handleCopyEmail}
                      className="flex items-center gap-1.5 hover:text-amber-400 transition-colors cursor-pointer group"
                      title="Click to copy email"
                    >
                      <Mail className="w-3.5 h-3.5 text-amber-500" />
                      <span className="underline decoration-dotted underline-offset-2">
                        {RESUME_DATA.contact.email}
                      </span>
                      {copiedEmail ? (
                        <Check className="w-3 h-3 text-emerald-400" />
                      ) : (
                        <Copy className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                      )}
                    </button>

                    <button
                      onClick={handleCopyPhone}
                      className="flex items-center gap-1.5 hover:text-amber-400 transition-colors cursor-pointer group"
                      title="Click to copy phone"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-500" />
                      <span className="underline decoration-dotted underline-offset-2">
                        {RESUME_DATA.contact.phone}
                      </span>
                      {copiedPhone ? (
                        <Check className="w-3 h-3 text-emerald-400" />
                      ) : (
                        <Copy className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                      )}
                    </button>

                    <a
                      href={RESUME_DATA.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sky-400 hover:underline transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      <span>{RESUME_DATA.contact.linkedinDisplay}</span>
                    </a>

                    <a
                      href={RESUME_DATA.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-emerald-400 hover:underline transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>{RESUME_DATA.contact.githubDisplay}</span>
                    </a>
                  </div>
                </div>

                {/* PROFILE SUMMARY */}
                <div>
                  <div className="flex items-center gap-2 mb-2 pb-1 border-b border-amber-500/30">
                    <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-amber-500">
                      PROFILE SUMMARY
                    </span>
                  </div>
                  <p
                    className={`leading-relaxed text-xs sm:text-sm p-3.5 rounded-xl border ${
                      modalDark
                        ? 'bg-stone-900/60 border-stone-800 text-stone-200'
                        : 'bg-stone-50 border-stone-200 text-stone-800'
                    }`}
                  >
                    {RESUME_DATA.summary}
                  </p>
                </div>

                {/* TECHNICAL SKILLS */}
                <div>
                  <div className="flex items-center gap-2 mb-3 pb-1 border-b border-amber-500/30">
                    <Code className="w-3.5 h-3.5 text-amber-500" />
                    <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-amber-500">
                      TECHNICAL SKILLS
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                    {RESUME_DATA.technicalSkills.map((s, idx) => (
                      <div
                        key={idx}
                        className={`flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 p-2.5 rounded-lg border transition-colors ${
                          modalDark
                            ? 'bg-stone-900/40 border-stone-800/80 hover:border-stone-700'
                            : 'bg-stone-50 border-stone-200/80 hover:border-stone-300'
                        }`}
                      >
                        <span className="font-semibold text-xs sm:text-sm min-w-[170px] text-amber-400 shrink-0">
                          {s.category}:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {s.items.split(', ').map((item, iIdx) => (
                            <span
                              key={iIdx}
                              className={`text-[11px] px-2 py-0.5 rounded-md font-medium border ${
                                modalDark
                                  ? 'bg-stone-800/80 border-stone-700/70 text-stone-200'
                                  : 'bg-white border-stone-300 text-stone-800 shadow-2xs'
                              }`}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* PROFESSIONAL EXPERIENCE */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3 pb-1 border-b border-amber-500/30">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5 text-amber-500" />
                      <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-amber-500">
                        PROFESSIONAL EXPERIENCE
                      </span>
                    </div>
                  </div>

                  {RESUME_DATA.experience.map((exp, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border ${
                        modalDark
                          ? 'bg-stone-900/50 border-stone-800'
                          : 'bg-stone-50 border-stone-200'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                        <h4 className="font-bold text-sm sm:text-base text-stone-900 dark:text-white">
                          {exp.role}
                        </h4>
                        <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 w-fit">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-1.5 mt-2 text-xs sm:text-sm text-stone-600 dark:text-stone-300">
                        {exp.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <span className="text-amber-500 mt-1">&bull;</span>
                            <span className="leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* PROJECTS (All 7 from resume) */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3 pb-1 border-b border-amber-500/30">
                    <div className="flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-amber-500" />
                      <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-amber-500">
                        PROJECTS (7 PRODUCTION &amp; RESEARCH SYSTEMS)
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3.5">
                    {RESUME_DATA.projects.map((proj, pIdx) => (
                      <div
                        key={pIdx}
                        className={`p-3.5 sm:p-4 rounded-xl border transition-all ${
                          modalDark
                            ? 'bg-stone-900/50 border-stone-800/90 hover:border-amber-500/40'
                            : 'bg-stone-50 border-stone-200 hover:border-amber-600/40'
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-bold text-sm sm:text-base text-stone-900 dark:text-white">
                              {proj.title}
                            </h4>
                            {proj.liveUrl && (
                              <a
                                href={proj.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25 border border-emerald-500/30 transition-colors font-medium"
                              >
                                <ExternalLink className="w-3 h-3" />
                                <span>Live Domain</span>
                              </a>
                            )}
                            {proj.githubUrl && (
                              <a
                                href={proj.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-stone-800 text-stone-300 hover:text-white border border-stone-700 transition-colors font-medium"
                              >
                                <Github className="w-3 h-3" />
                                <span>Repository</span>
                              </a>
                            )}
                          </div>
                          <span className="text-xs font-mono text-stone-400 shrink-0">
                            {proj.period}
                          </span>
                        </div>

                        <div className="text-xs font-mono text-amber-600 dark:text-amber-400/90 mt-1 mb-2">
                          {proj.stack}
                        </div>

                        <ul className="space-y-1 text-xs text-stone-600 dark:text-stone-300">
                          {proj.highlights.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2">
                              <span className="text-amber-500 mt-0.5">&bull;</span>
                              <span className="leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Visual Page Break Indicator */}
            {activeTab === 'all' && (
              <div className="relative py-4 flex items-center justify-center">
                <div
                  className={`w-full border-t border-dashed ${
                    modalDark ? 'border-stone-800' : 'border-stone-300'
                  }`}
                />
                <span
                  className={`absolute px-4 py-1 text-[10px] font-mono tracking-widest uppercase rounded-full border ${
                    modalDark
                      ? 'bg-stone-900 border-stone-800 text-stone-400'
                      : 'bg-stone-100 border-stone-200 text-stone-600'
                  }`}
                >
                  — Page 2 of Resume —
                </span>
              </div>
            )}

            {/* ==================== PAGE 2 ==================== */}
            {(activeTab === 'all' || activeTab === 'page2') && (
              <div className="space-y-6">
                {/* CERTIFICATIONS */}
                <div>
                  <div className="flex items-center gap-2 mb-3 pb-1 border-b border-amber-500/30">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-amber-500">
                      CERTIFICATIONS (9 VERIFIED CREDENTIALS)
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {RESUME_DATA.certifications.map((cert, cIdx) => (
                      <div
                        key={cIdx}
                        className={`p-3 rounded-lg border flex flex-col justify-between ${
                          modalDark
                            ? 'bg-stone-900/40 border-stone-800/80 hover:border-stone-700'
                            : 'bg-stone-50 border-stone-200/80 hover:border-stone-300'
                        }`}
                      >
                        <div className="font-semibold text-xs sm:text-sm text-stone-900 dark:text-white">
                          {cert.title}
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-stone-500 dark:text-stone-400 font-mono mt-1.5 pt-1 border-t border-stone-200/50 dark:border-stone-800/50">
                          <span className="text-amber-500 font-medium">{cert.issuer}</span>
                          <span>{cert.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* EDUCATION */}
                <div>
                  <div className="flex items-center gap-2 mb-3 pb-1 border-b border-amber-500/30">
                    <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
                    <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-amber-500">
                      EDUCATION
                    </span>
                  </div>

                  <div className="space-y-3">
                    {RESUME_DATA.education.map((edu, eIdx) => (
                      <div
                        key={eIdx}
                        className={`p-3.5 rounded-xl border ${
                          modalDark
                            ? 'bg-stone-900/40 border-stone-800'
                            : 'bg-stone-50 border-stone-200'
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                          <div className="flex items-center gap-2">
                            <span className="text-emerald-400 font-bold">✓</span>
                            <h4 className="font-bold text-xs sm:text-sm text-stone-900 dark:text-white">
                              {edu.degree}
                            </h4>
                          </div>
                          <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 w-fit">
                            {edu.score}
                          </span>
                        </div>
                        <div className="text-xs text-amber-600 dark:text-amber-400 mt-1">
                          {edu.institution}
                        </div>
                        {edu.status && (
                          <div className="text-[11px] font-mono text-stone-400 mt-0.5">
                            {edu.status}
                          </div>
                        )}
                        {edu.highlights && edu.highlights.length > 0 && (
                          <ul className="mt-1.5 space-y-0.5 text-xs text-stone-600 dark:text-stone-300">
                            {edu.highlights.map((h, hIdx) => (
                              <li key={hIdx} className="flex items-start gap-1.5">
                                <span className="text-stone-400 mt-0.5">&bull;</span>
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* LANGUAGES */}
                <div>
                  <div className="flex items-center gap-2 mb-3 pb-1 border-b border-amber-500/30">
                    <Languages className="w-3.5 h-3.5 text-amber-500" />
                    <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-amber-500">
                      LANGUAGES
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {RESUME_DATA.languages.map((lang, lIdx) => (
                      <span
                        key={lIdx}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
                          modalDark
                            ? 'bg-stone-900 border-stone-800 text-stone-200'
                            : 'bg-stone-50 border-stone-200 text-stone-800'
                        }`}
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer Bar */}
          <div
            className={`p-3.5 sm:p-4 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs transition-colors ${
              modalDark
                ? 'bg-[#0f1422] border-stone-800 text-stone-400'
                : 'bg-stone-50 border-stone-200 text-stone-600'
            }`}
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Direct verification: cmkarthi2004@gmail.com</span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={handlePrint}
                className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-colors ${
                  modalDark
                    ? 'border-stone-700 text-stone-200 hover:bg-stone-800'
                    : 'border-stone-300 text-stone-800 hover:bg-stone-100'
                }`}
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Document</span>
              </button>

              <a
                href={getAssetUrl(siteConfig.resume.filePath)}
                download={siteConfig.resume.fileName}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs shadow-md transition-all active:scale-98 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Full Resume (PDF)</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
