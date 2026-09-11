import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Maximize2,
  Briefcase,
  Sparkles,
  GraduationCap,
  FileText,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PhotoLightbox } from './PhotoLightbox';
import { ResumeModal } from './ResumeModal';
import { getAssetUrl } from '../utils/assetHelper';

export const HeroSection: React.FC = () => {
  const [isPhotoLightboxOpen, setIsPhotoLightboxOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [photoError, setPhotoError] = useState(false);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden"
      aria-label="Introduction"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Live Availability Badge */}
            <div
              id="hero-status-pill"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs font-semibold mb-6 shadow-2xs"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
              <span>{PERSONAL_INFO.availabilityStatus}</span>
            </div>

            {/* Author Name */}
            <div className="text-sm font-semibold tracking-wider text-stone-500 dark:text-stone-400 uppercase mb-3 font-mono flex items-center gap-2">
              <span className="w-4 h-[1.5px] bg-amber-600 dark:bg-amber-400 inline-block"></span>
              <span>{PERSONAL_INFO.name}</span>
            </div>

            {/* Primary Headline with interactive accent color hover and Playfair serif styling */}
            <h1
              id="hero-main-title"
              className="text-3xl sm:text-5xl md:text-6xl font-bold text-stone-900 dark:text-stone-100 tracking-tight leading-[1.15] sm:leading-[1.12] mb-4 sm:mb-5 font-sans group cursor-default transition-colors"
            >
              I build web applications and{' '}
              <span className="font-display italic font-normal text-blue-600 dark:text-blue-400">
                intelligent
              </span>{' '}
              software solutions.
            </h1>

            {/* Supporting Description */}
            <p
              id="hero-subheadline"
              className="text-base sm:text-lg md:text-xl text-stone-600 dark:text-stone-300 leading-relaxed mb-6 sm:mb-8 max-w-2xl"
            >
              Hi, I'm C M Karthik — a freelance full-stack developer with applied AI/ML and Data Science experience. I help businesses and individuals turn ideas into real, scalable products.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto">
              <button
                id="hero-primary-cta"
                onClick={() => handleScrollTo('work')}
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:py-3.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white dark:bg-stone-100 dark:hover:bg-white dark:text-stone-950 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-150 active:scale-98 shadow-xs cursor-pointer"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={() => handleScrollTo('contact')}
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-lg bg-white/80 hover:bg-amber-50/60 dark:bg-stone-900/80 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 hover:text-amber-900 dark:hover:text-amber-300 border border-stone-300 dark:border-stone-700 hover:border-amber-400 dark:hover:border-amber-500/50 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-150 active:scale-98 cursor-pointer"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:text-amber-600" />
              </button>

              <button
                id="hero-resume-cta"
                onClick={() => setIsResumeModalOpen(true)}
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-500/30 hover:border-amber-500/60 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-150 active:scale-98 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>VIEW RESUME</span>
              </button>
            </div>
          </div>

          {/* Right Column: Professional Photograph with Handwritten Annotation & Floating Badge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            {/* Handwritten annotation: "Build Solve Learn Repeat" */}
            <div className="hidden xl:flex flex-col items-center absolute -left-20 top-8 pointer-events-none select-none z-10">
              <div className="font-caveat text-xl sm:text-2xl text-stone-700 dark:text-stone-300 leading-tight text-center rotate-[-6deg]">
                <span>Build</span><br />
                <span>Solve</span><br />
                <span>Learn</span><br />
                <span className="text-amber-600 dark:text-amber-400 font-bold">Repeat</span>
              </div>
              {/* Hand-drawn curved arrow pointing to the photo */}
              <svg
                className="w-12 h-12 text-stone-500 dark:text-stone-400 mt-1 rotate-[10deg]"
                viewBox="0 0 50 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M 10 10 Q 25 35 42 28" />
                <path d="M 34 24 L 42 28 L 38 36" />
              </svg>
            </div>

            <div className="relative max-w-sm w-full">
              <div className="relative rounded-2xl overflow-hidden bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-md">
                {/* Real Photograph with soft edge vignette */}
                <div
                  className="relative aspect-4/5 cursor-pointer overflow-hidden bg-stone-200 dark:bg-stone-800 group"
                  onClick={() => setIsPhotoLightboxOpen(true)}
                  title="Click to view full photo"
                >
                  <img
                    src={photoError ? getAssetUrl('/myphoto.jpeg') : getAssetUrl('/images/myphoto.jpeg')}
                    alt="C M Karthik - Freelance Full-Stack Developer"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                    onError={() => {
                      if (!photoError) setPhotoError(true);
                    }}
                  />

                  {/* Soft bottom vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/15 to-transparent pointer-events-none" />

                  {/* Interactive Expand Badge */}
                  <div className="absolute bottom-3.5 right-3.5 flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-stone-900/85 text-white backdrop-blur-xs text-xs font-medium hover:bg-stone-900 transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Expand</span>
                  </div>

                  <div className="absolute bottom-3.5 left-3.5 text-left text-white">
                    <p className="text-sm font-semibold leading-tight">C M Karthik</p>
                    <p className="text-xs text-stone-300 leading-tight">Bengaluru, India</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge below photo */}
              <div className="absolute -bottom-4 right-1 sm:-right-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 px-3 py-2 shadow-lg flex items-center gap-2 sm:gap-2.5 z-10 text-[11px] sm:text-xs font-semibold text-stone-800 dark:text-stone-200 max-w-[calc(100%-0.5rem)] sm:max-w-none">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="truncate">Turning ideas into impactful solutions.</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            PROFESSIONAL PROOF & VALUE STRIP
            Horizontal editorial layout on desktop, responsive stack on mobile.
            Focus, Specialization, and Academic Foundation.
            ======================================================== */}
        <div
          id="hero-proof-strip"
          className="mt-14 pt-8 border-t border-stone-200/90 dark:border-stone-800/90"
        >
          <div className="rounded-2xl bg-stone-100/70 dark:bg-stone-900/40 border border-stone-200/80 dark:border-stone-800/80 p-2 sm:p-2.5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-2.5">
              
              {/* 1. FOCUS */}
              <div className="group rounded-xl bg-white dark:bg-stone-900/90 p-4 sm:p-5 border border-stone-200/70 dark:border-stone-800/70 flex flex-col justify-between hover:-translate-y-0.5 hover:shadow-xs hover:border-stone-300 dark:hover:border-stone-700 transition-all duration-200 cursor-default">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-wider text-stone-500 dark:text-stone-400 uppercase mb-2">
                    <Briefcase className="w-3.5 h-3.5 text-stone-700 dark:text-stone-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors" />
                    <span>FOCUS</span>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 leading-snug group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                    Freelance Full-Stack Development
                  </div>
                </div>
                <div className="mt-3 pt-2.5 border-t border-stone-100 dark:border-stone-800/60 text-xs text-stone-500 dark:text-stone-400 flex items-center justify-between">
                  <span>End-to-End Delivery</span>
                  <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">Live &amp; Active</span>
                </div>
              </div>

              {/* 2. SPECIALIZATION */}
              <div className="group rounded-xl bg-white dark:bg-stone-900/90 p-4 sm:p-5 border border-stone-200/70 dark:border-stone-800/70 flex flex-col justify-between hover:-translate-y-0.5 hover:shadow-xs hover:border-stone-300 dark:hover:border-stone-700 transition-all duration-200 cursor-default">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-wider text-stone-500 dark:text-stone-400 uppercase mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform" />
                    <span>SPECIALIZATION</span>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 leading-snug group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                    Applied AI/ML &amp; Web Platforms
                  </div>
                </div>
                <div className="mt-3 pt-2.5 border-t border-stone-100 dark:border-stone-800/60 text-xs text-stone-500 dark:text-stone-400 flex items-center justify-between">
                  <span>Vision &amp; Federated ML</span>
                  <span className="font-mono text-[10px] text-indigo-600 dark:text-indigo-400 font-semibold">PyTorch • CV</span>
                </div>
              </div>

              {/* 3. ACADEMIC FOUNDATION */}
              <div className="group rounded-xl bg-white dark:bg-stone-900/90 p-4 sm:p-5 border border-stone-200/70 dark:border-stone-800/70 flex flex-col justify-between hover:-translate-y-0.5 hover:shadow-xs hover:border-stone-300 dark:hover:border-stone-700 transition-all duration-200 cursor-default">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-wider text-stone-500 dark:text-stone-400 uppercase mb-2">
                    <GraduationCap className="w-3.5 h-3.5 text-stone-700 dark:text-stone-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors" />
                    <span>ACADEMIC FOUNDATION</span>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 leading-snug group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                    M.Sc. Data Science
                  </div>
                </div>
                <div className="mt-3 pt-2.5 border-t border-stone-100 dark:border-stone-800/60 text-xs text-stone-500 dark:text-stone-400 flex items-center justify-between">
                  <span>BCA (CS)</span>
                  <span className="font-mono text-[10px] text-stone-400 font-semibold">Rigorous Math</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Accessible Photo Lightbox Modal */}
      <PhotoLightbox
        isOpen={isPhotoLightboxOpen}
        imageSrc={photoError ? getAssetUrl('/myphoto.jpeg') : getAssetUrl('/images/myphoto.jpeg')}
        imageAlt="C M Karthik - Freelance Full-Stack Developer"
        onClose={() => setIsPhotoLightboxOpen(false)}
      />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </section>
  );
};
