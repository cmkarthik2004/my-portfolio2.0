import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Github,
  Linkedin,
  Sparkles,
  Terminal,
  Code,
  Cpu,
  CheckCircle2,
  ChevronRight,
  Layers,
  FileText,
  Download,
  Eye,
  User,
  Shield,
  Maximize2,
  MapPin,
  Briefcase,
} from 'lucide-react';
import { PERSONAL_INFO, siteConfig } from '../data/portfolioData';
import { ResumeModal } from './ResumeModal';
import { PhotoLightbox } from './PhotoLightbox';

export const HeroSection: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isPhotoLightboxOpen, setIsPhotoLightboxOpen] = useState(false);
  const [photoError, setPhotoError] = useState(false);

  // Cycling rotating text with clean fade transition
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.taglineCycle.length);
        setIsFading(false);
      }, 250);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
      aria-label="Introduction"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability / Freelance Status Pill */}
            <div
              id="hero-status-pill"
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-indigo-50/90 dark:bg-indigo-950/50 border border-indigo-200/80 dark:border-indigo-800/60 shadow-xs mb-6 backdrop-blur-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-indigo-900 dark:text-indigo-200 tracking-tight">
                {PERSONAL_INFO.availabilityStatus}
              </span>
            </div>

            {/* Eyebrow */}
            <div
              id="hero-eyebrow"
              className="font-mono text-xs md:text-sm font-semibold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-3"
            >
              {PERSONAL_INFO.eyebrow}
            </div>

            {/* Main Heading */}
            <h1
              id="hero-main-title"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-4"
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 dark:from-indigo-400 dark:via-sky-300 dark:to-teal-300">
                {PERSONAL_INFO.name}
              </span>
              .
            </h1>

            {/* Rotating Role Headline */}
            <div className="h-10 sm:h-12 flex items-center mb-6 overflow-hidden">
              <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-200 font-sans tracking-tight">
                I am a{' '}
                <span
                  className={`inline-block font-bold text-indigo-600 dark:text-indigo-400 transition-all duration-250 transform ${
                    isFading ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
                  }`}
                >
                  {PERSONAL_INFO.taglineCycle[currentRoleIndex]}
                </span>
              </span>
            </div>

            {/* Supporting Narrative */}
            <p
              id="hero-supporting-text"
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8"
            >
              {PERSONAL_INFO.bio}
            </p>

            {/* Call to Actions — Prominent Download Resume, View My Work & Let's Connect */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              {/* Primary: View My Work */}
              <button
                id="hero-cta-primary"
                onClick={() => handleScrollTo('projects')}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/35 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Prominent: Download Resume Button */}
              <a
                id="hero-cta-download-resume"
                href={siteConfig.resume.filePath}
                download={siteConfig.resume.fileName}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-900 dark:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 shadow-xs hover:shadow-sm active:scale-95 transition-all duration-200"
              >
                <Download className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Download Resume</span>
              </a>

              {/* Secondary: Let's Work Together */}
              <button
                id="hero-cta-secondary"
                onClick={() => handleScrollTo('contact')}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>Let's Work Together</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Social Links & Trust Anchor */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 w-full">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  id="hero-social-github"
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <a
                  id="hero-social-linkedin"
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <button
                  onClick={() => setIsResumeModalOpen(true)}
                  className="flex items-center gap-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View CV Online</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Sophisticated Transparent & Integrated Personal Photo */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient Multi-Layer Glow Halo */}
            <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-tr from-indigo-500/25 via-sky-500/20 to-teal-400/20 dark:from-indigo-600/35 dark:via-sky-600/25 dark:to-teal-500/20 blur-3xl rounded-full pointer-events-none opacity-80" />

            {/* Geometric Accent Circle & Coordinate Ring */}
            <div className="absolute w-72 sm:w-88 h-72 sm:h-88 rounded-full border border-indigo-500/20 dark:border-indigo-400/15 animate-spin-slow pointer-events-none" />
            <div className="absolute w-84 sm:w-96 h-84 sm:h-96 rounded-full border border-dashed border-slate-300/60 dark:border-slate-700/50 pointer-events-none" />

            {/* Main Integrated Photo Container */}
            <div
              id="hero-profile-photo-container"
              onClick={() => setIsPhotoLightboxOpen(true)}
              className="relative group cursor-pointer w-full max-w-[380px] sm:max-w-[420px] aspect-square rounded-3xl transition-all duration-300"
              title="Click to view full photo"
              aria-label="Click to open image viewer"
            >
              {/* Photo Edge Mask Wrapper — Blends smoothly into background without reducing person's visibility */}
              <div className="relative w-full h-full overflow-hidden rounded-3xl [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_98%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_98%)]">
                <img
                  src={siteConfig.profilePhoto}
                  alt={`${PERSONAL_INFO.name} - Professional Portrait`}
                  referrerPolicy="no-referrer"
                  onError={() => {
                    // Fallback to /images/myphoto.jpeg or developer manifest if both fail
                    if (!photoError) {
                      setPhotoError(true);
                    }
                  }}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 select-none"
                />

                {/* Theme-Adaptive Ambient Bottom Feathering */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none dark:from-slate-950/80" />

                {/* Subtle Interactive Hover Cue Overlay */}
                <div className="absolute inset-0 bg-indigo-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/85 backdrop-blur-md text-white text-xs font-semibold shadow-xl border border-white/20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Expand Photo</span>
                  </div>
                </div>
              </div>

              {/* Floating Context Badge 1: Location & Role */}
              <div className="absolute -top-3 -right-2 sm:-right-4 z-20">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-700/80 shadow-lg backdrop-blur-md text-[11px] font-semibold text-slate-800 dark:text-slate-200">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                  <span>M.Sc. Data Science</span>
                </div>
              </div>

              {/* Floating Context Badge 2: Live Deliveries Anchor */}
              <div className="absolute -bottom-3 -left-2 sm:-left-4 z-20">
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-700/80 shadow-xl backdrop-blur-md text-xs font-semibold text-slate-800 dark:text-slate-200">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                  <span>Freelance Full-Stack & AI</span>
                </div>
              </div>

              {/* Subtle Click Indicator Pill */}
              <div className="absolute bottom-4 right-4 z-20 opacity-80 group-hover:opacity-100 transition-opacity">
                <div className="p-2 rounded-full bg-slate-900/70 backdrop-blur-md text-white border border-white/10 shadow-md">
                  <Eye className="w-4 h-4 text-indigo-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Photo Lightbox */}
      <PhotoLightbox
        isOpen={isPhotoLightboxOpen}
        onClose={() => setIsPhotoLightboxOpen(false)}
        imageSrc={siteConfig.profilePhoto}
        imageAlt={`${PERSONAL_INFO.name} - Portrait Lightbox`}
      />

      {/* Online CV Viewer Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </section>
  );
};
