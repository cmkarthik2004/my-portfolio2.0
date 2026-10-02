import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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
} from 'lucide-react';
import { RESUME_DATA, siteConfig } from '../data/portfolioData';
import { getAssetUrl } from '../utils/assetHelper';
import { useTheme } from '../context/ThemeContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { resolvedTheme } = useTheme();
  const isDarkViewer = resolvedTheme === 'dark';

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'page1' | 'page2'>('all');

  // Prevent background body scrolling while modal is open & add ESC key listener
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

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

  const modalContent = (
    <AnimatePresence>
      {/* 
        True full-viewport portal modal overlay with z-[100] to sit strictly ABOVE 
        the fixed navbar (z-50) and isolate scrolling from the background page.
      */}
      <div
        id="resume-modal-portal"
        className="fixed inset-0 z-[100] w-screen h-[100dvh] flex flex-col bg-black/85 backdrop-blur-md overflow-hidden select-none"
        role="dialog"
        aria-modal="true"
        aria-label="Resume Document Viewer"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={`relative w-full h-[100dvh] flex flex-col overflow-hidden transition-colors duration-200 ${
            isDarkViewer ? 'bg-[#080b11] text-stone-100' : 'bg-stone-200/90 text-stone-900'
          }`}
        >
          {/* ========================================================
              VIEWER HEADER / CONTROLS (Always visible, above navbar)
              ======================================================== */}
          <header
            className={`shrink-0 flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 border-b z-30 transition-colors ${
              isDarkViewer
                ? 'bg-[#0f1422]/95 border-stone-800 text-stone-100 shadow-md'
                : 'bg-white/95 border-stone-200 text-stone-900 shadow-xs'
            }`}
          >
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-bold shrink-0 transition-colors ${
                  isDarkViewer
                    ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                    : 'bg-amber-100 text-amber-800 border border-amber-200'
                }`}
              >
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h2 className="font-bold text-xs sm:text-base flex items-center gap-1.5 sm:gap-2 truncate">
                  <span className="truncate">{RESUME_DATA.name}</span>
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shrink-0">
                    CV
                  </span>
                </h2>
                <p className="text-[11px] sm:text-xs text-stone-400 hidden sm:block truncate">
                  {RESUME_DATA.title}
                </p>
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {/* Download PDF Button */}
              <a
                href={getAssetUrl(siteConfig.resume.filePath)}
                download={siteConfig.resume.fileName}
                className="min-h-[36px] inline-flex items-center justify-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold shadow-xs transition-all active:scale-98 cursor-pointer"
                title="Download PDF"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download PDF</span>
                <span className="sm:hidden">PDF</span>
              </a>

              {/* Open in new tab */}
              <a
                href={getAssetUrl(siteConfig.resume.filePath)}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 min-w-[36px] min-h-[36px] flex items-center justify-center rounded-lg text-xs font-medium transition-colors border ${
                  isDarkViewer
                    ? 'bg-stone-800/80 hover:bg-stone-700 text-stone-200 border-stone-700'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-300'
                }`}
                title="Open PDF in new tab"
                aria-label="Open PDF in new tab"
              >
                <ExternalLink className="w-4 h-4" />
              </a>

              {/* Print Button */}
              <button
                type="button"
                onClick={handlePrint}
                className={`hidden md:inline-flex p-2 min-w-[36px] min-h-[36px] items-center justify-center rounded-lg transition-colors border cursor-pointer ${
                  isDarkViewer
                    ? 'bg-stone-800/80 hover:bg-stone-700 text-stone-200 border-stone-700'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-300'
                }`}
                title="Print Resume"
                aria-label="Print Resume"
              >
                <Printer className="w-4 h-4" />
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className={`p-2 min-w-[36px] min-h-[36px] flex items-center justify-center rounded-lg transition-colors cursor-pointer border ${
                  isDarkViewer
                    ? 'bg-stone-800/80 hover:bg-stone-700 text-stone-300 hover:text-white border-stone-700'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-900 border-stone-300'
                }`}
                aria-label="Close resume viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </header>

          {/* ========================================================
              SECTION FILTER TABS BAR
              ======================================================== */}
          <div
            className={`shrink-0 px-3 sm:px-6 py-2 border-b flex items-center gap-2 text-xs overflow-x-auto no-scrollbar z-20 transition-colors ${
              isDarkViewer
                ? 'bg-[#0b0f19] border-stone-800 text-stone-300'
                : 'bg-stone-100 border-stone-200 text-stone-700'
            }`}
          >
            <span className="text-[11px] uppercase tracking-wider font-mono text-stone-400 mr-1 shrink-0">
              View:
            </span>
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1 rounded-md font-medium transition-colors shrink-0 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-amber-600 text-white font-semibold shadow-xs'
                  : isDarkViewer
                  ? 'text-stone-300 hover:bg-stone-800'
                  : 'text-stone-700 hover:bg-stone-200'
              }`}
            >
              Full 2-Page Resume
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('page1')}
              className={`px-3 py-1 rounded-md font-medium transition-colors shrink-0 cursor-pointer ${
                activeTab === 'page1'
                  ? 'bg-amber-600 text-white font-semibold shadow-xs'
                  : isDarkViewer
                  ? 'text-stone-300 hover:bg-stone-800'
                  : 'text-stone-700 hover:bg-stone-200'
              }`}
            >
              Page 1: Skills &amp; Projects
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('page2')}
              className={`px-3 py-1 rounded-md font-medium transition-colors shrink-0 cursor-pointer ${
                activeTab === 'page2'
                  ? 'bg-amber-600 text-white font-semibold shadow-xs'
                  : isDarkViewer
                  ? 'text-stone-300 hover:bg-stone-800'
                  : 'text-stone-700 hover:bg-stone-200'
              }`}
            >
              Page 2: Certifications &amp; Education
            </button>
          </div>

          {/* ========================================================
              SCROLLABLE RESUME AREA
              Independent scrolling canvas holding the white paper document.
              ======================================================== */}
          <div
            id="resume-viewer-scroll-area"
            className={`flex-1 overflow-y-auto min-h-0 w-full px-2 sm:px-4 md:px-6 py-4 sm:py-8 transition-colors ${
              isDarkViewer ? 'bg-[#080b11]' : 'bg-stone-200/70'
            }`}
          >
            {/* 
              THE RESUME DOCUMENT:
              CRITICAL: Explicitly scoped to a white paper surface (bg-white text-stone-900)
              with NO dark: overrides, so that in BOTH light and dark portfolio modes,
              the document renders as a pristine, high-contrast printed paper sheet.
            */}
            <article
              id="printable-resume-body"
              className="w-full max-w-4xl mx-auto rounded-xl sm:rounded-2xl bg-white text-stone-900 shadow-2xl border border-stone-200/90 p-5 sm:p-8 md:p-12 space-y-6 sm:space-y-8 select-text"
              style={{ colorScheme: 'light' }}
            >
              {/* ==================== PAGE 1 ==================== */}
              {(activeTab === 'all' || activeTab === 'page1') && (
                <div className="space-y-6">
                  {/* Header / Identity Bar */}
                  <div className="pb-5 border-b border-stone-200 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div>
                        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-serif text-stone-900 uppercase">
                          {RESUME_DATA.name}
                        </h1>
                        <p className="text-sm sm:text-base font-medium mt-1 italic text-amber-800">
                          {RESUME_DATA.title}
                        </p>
                      </div>

                      {/* Quick status indicator */}
                      <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 text-[11px] font-mono">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 font-semibold">
                          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                          Available for Projects
                        </span>
                      </div>
                    </div>

                    {/* Contact Row with Clickable Actions */}
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 mt-3 pt-2 text-xs text-stone-600">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-amber-700" />
                        <span>{RESUME_DATA.contact.location}</span>
                      </div>

                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="flex items-center gap-1.5 hover:text-amber-800 transition-colors cursor-pointer group"
                        title="Click to copy email"
                      >
                        <Mail className="w-3.5 h-3.5 text-amber-700" />
                        <span className="underline decoration-dotted underline-offset-2 font-medium">
                          {RESUME_DATA.contact.email}
                        </span>
                        {copiedEmail ? (
                          <Check className="w-3 h-3 text-emerald-600" />
                        ) : (
                          <Copy className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={handleCopyPhone}
                        className="flex items-center gap-1.5 hover:text-amber-800 transition-colors cursor-pointer group"
                        title="Click to copy phone"
                      >
                        <Phone className="w-3.5 h-3.5 text-amber-700" />
                        <span className="underline decoration-dotted underline-offset-2 font-medium">
                          {RESUME_DATA.contact.phone}
                        </span>
                        {copiedPhone ? (
                          <Check className="w-3 h-3 text-emerald-600" />
                        ) : (
                          <Copy className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                        )}
                      </button>

                      <a
                        href={RESUME_DATA.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sky-700 hover:text-sky-900 hover:underline transition-colors font-medium"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                        <span>{RESUME_DATA.contact.linkedinDisplay}</span>
                      </a>

                      <a
                        href={RESUME_DATA.contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-stone-800 hover:text-stone-950 hover:underline transition-colors font-medium"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>{RESUME_DATA.contact.githubDisplay}</span>
                      </a>
                    </div>
                  </div>

                  {/* PROFILE SUMMARY */}
                  <div>
                    <div className="flex items-center gap-2 mb-2 pb-1 border-b border-amber-600/30">
                      <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-amber-800">
                        PROFILE SUMMARY
                      </span>
                    </div>
                    <p className="leading-relaxed text-xs sm:text-sm p-4 rounded-xl border bg-stone-50 border-stone-200 text-stone-800 shadow-2xs">
                      {RESUME_DATA.summary}
                    </p>
                  </div>

                  {/* TECHNICAL SKILLS */}
                  <div>
                    <div className="flex items-center gap-2 mb-3 pb-1 border-b border-amber-600/30">
                      <Code className="w-3.5 h-3.5 text-amber-800" />
                      <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-amber-800">
                        TECHNICAL SKILLS
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                      {RESUME_DATA.technicalSkills.map((s, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 p-3 rounded-lg border bg-stone-50/80 border-stone-200 transition-colors"
                        >
                          <span className="font-semibold text-xs sm:text-sm min-w-[170px] text-amber-800 shrink-0">
                            {s.category}:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {s.items.split(', ').map((item, iIdx) => (
                              <span
                                key={iIdx}
                                className="text-[11px] px-2 py-0.5 rounded-md font-medium border bg-white border-stone-300 text-stone-800 shadow-2xs"
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
                    <div className="flex items-center justify-between gap-2 mb-3 pb-1 border-b border-amber-600/30">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-3.5 h-3.5 text-amber-800" />
                        <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-amber-800">
                          PROFESSIONAL EXPERIENCE
                        </span>
                      </div>
                    </div>

                    {RESUME_DATA.experience.map((exp, idx) => (
                      <div
                        key={idx}
                        className="p-4 sm:p-5 rounded-xl border bg-stone-50/80 border-stone-200 shadow-2xs"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                          <h3 className="font-bold text-sm sm:text-base text-stone-900">
                            {exp.role}
                          </h3>
                          <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300 w-fit">
                            {exp.period}
                          </span>
                        </div>
                        <ul className="space-y-1.5 mt-2 text-xs sm:text-sm text-stone-700">
                          {exp.highlights.map((h, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2">
                              <span className="text-amber-700 mt-1 font-bold">&bull;</span>
                              <span className="leading-relaxed">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* PROJECTS */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3 pb-1 border-b border-amber-600/30">
                      <div className="flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5 text-amber-800" />
                        <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-amber-800">
                          PROJECTS (7 PRODUCTION &amp; RESEARCH SYSTEMS)
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3.5">
                      {RESUME_DATA.projects.map((proj, pIdx) => (
                        <div
                          key={pIdx}
                          className="p-4 rounded-xl border bg-stone-50/80 border-stone-200 hover:border-amber-600/40 transition-all shadow-2xs"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="font-bold text-sm sm:text-base text-stone-900">
                                {proj.title}
                              </h3>
                              {proj.liveUrl && (
                                <a
                                  href={proj.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-300 transition-colors font-semibold"
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
                                  className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-stone-100 text-stone-800 hover:text-stone-950 border border-stone-300 transition-colors font-semibold"
                                >
                                  <Github className="w-3 h-3" />
                                  <span>Repository</span>
                                </a>
                              )}
                            </div>
                            <span className="text-xs font-mono text-stone-500 shrink-0">
                              {proj.period}
                            </span>
                          </div>

                          <div className="text-xs font-mono text-amber-800 font-semibold mt-1 mb-2">
                            {proj.stack}
                          </div>

                          <ul className="space-y-1 text-xs sm:text-sm text-stone-700">
                            {proj.highlights.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2">
                                <span className="text-amber-700 mt-0.5 font-bold">&bull;</span>
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
                  <div className="w-full border-t border-dashed border-stone-300" />
                  <span className="absolute px-4 py-1 text-[10px] font-mono tracking-widest uppercase rounded-full border bg-stone-100 border-stone-200 text-stone-600 font-semibold">
                    — Page 2 of Resume —
                  </span>
                </div>
              )}

              {/* ==================== PAGE 2 ==================== */}
              {(activeTab === 'all' || activeTab === 'page2') && (
                <div className="space-y-6">
                  {/* CERTIFICATIONS */}
                  <div>
                    <div className="flex items-center gap-2 mb-3 pb-1 border-b border-amber-600/30">
                      <Award className="w-3.5 h-3.5 text-amber-800" />
                      <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-amber-800">
                        CERTIFICATIONS (9 VERIFIED CREDENTIALS)
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {RESUME_DATA.certifications.map((cert, cIdx) => (
                        <div
                          key={cIdx}
                          className="p-3.5 rounded-lg border bg-stone-50/80 border-stone-200 flex flex-col justify-between shadow-2xs"
                        >
                          <div className="font-semibold text-xs sm:text-sm text-stone-900">
                            {cert.title}
                          </div>
                          <div className="flex items-center justify-between text-[11px] text-stone-600 font-mono mt-2 pt-1.5 border-t border-stone-200">
                            <span className="text-amber-800 font-semibold">{cert.issuer}</span>
                            <span>{cert.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* EDUCATION */}
                  <div>
                    <div className="flex items-center gap-2 mb-3 pb-1 border-b border-amber-600/30">
                      <GraduationCap className="w-3.5 h-3.5 text-amber-800" />
                      <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-amber-800">
                        EDUCATION
                      </span>
                    </div>

                    <div className="space-y-3">
                      {RESUME_DATA.education.map((edu, eIdx) => (
                        <div
                          key={eIdx}
                          className="p-4 rounded-xl border bg-stone-50/80 border-stone-200 shadow-2xs"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-700 font-bold">✓</span>
                              <h3 className="font-bold text-xs sm:text-sm text-stone-900">
                                {edu.degree}
                              </h3>
                            </div>
                            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-300 w-fit">
                              {edu.score}
                            </span>
                          </div>
                          <div className="text-xs text-amber-800 font-semibold mt-1">
                            {edu.institution}
                          </div>
                          {edu.status && (
                            <div className="text-[11px] font-mono text-stone-500 mt-0.5">
                              {edu.status}
                            </div>
                          )}
                          {edu.highlights && edu.highlights.length > 0 && (
                            <ul className="mt-2 space-y-1 text-xs text-stone-700">
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
                    <div className="flex items-center gap-2 mb-3 pb-1 border-b border-amber-600/30">
                      <Languages className="w-3.5 h-3.5 text-amber-800" />
                      <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-amber-800">
                        LANGUAGES
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {RESUME_DATA.languages.map((lang, lIdx) => (
                        <span
                          key={lIdx}
                          className="px-3.5 py-1.5 rounded-lg text-xs font-medium border bg-stone-100 border-stone-200 text-stone-800 shadow-2xs"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </article>
          </div>

          {/* ========================================================
              VIEWER FOOTER / ACTION BAR
              ======================================================== */}
          <footer
            className={`shrink-0 p-3 sm:p-4 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs transition-colors z-30 ${
              isDarkViewer
                ? 'bg-[#0f1422] border-stone-800 text-stone-300 shadow-lg'
                : 'bg-white border-stone-200 text-stone-700 shadow-xs'
            }`}
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="truncate">Direct verification: {siteConfig.email}</span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={handlePrint}
                className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                  isDarkViewer
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
          </footer>
        </motion.div>
      </div>
    </AnimatePresence>
  );

  return typeof document !== 'undefined'
    ? createPortal(modalContent, document.body)
    : null;
}
