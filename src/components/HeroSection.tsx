import React, { useState } from 'react';
import {
  ArrowRight,
  Maximize2,
  Briefcase,
  Sparkles,
  GraduationCap,
  FileText,
  Layers,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PhotoLightbox } from './PhotoLightbox';
import { ResumeModal } from './ResumeModal';
import { getAssetUrl } from '../utils/assetHelper';

interface HeroSectionProps {
  onStartProject?: () => void;
}

const PHOTO_SOURCES = [
  PERSONAL_INFO.profilePhoto,
  '/images/myphoto.svg',
  '/myphoto.svg',
  '/images/myphoto.jpg',
  '/images/myphoto.jpeg',
  '/images/myphoto.png',
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartProject }) => {
  const [isPhotoLightboxOpen, setIsPhotoLightboxOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [photoSourceIndex, setPhotoSourceIndex] = useState(0);
  const [allPhotosFailed, setAllPhotosFailed] = useState(false);

  const currentPhotoSrc = PHOTO_SOURCES[photoSourceIndex];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartProjectClick = () => {
    if (onStartProject) {
      onStartProject();
    } else {
      handleScrollTo('contact');
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-24 pb-12 sm:pt-28 sm:pb-14 md:pt-36 md:pb-20 overflow-hidden"
      aria-label="Introduction"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Hero Availability Label */}
            <div
              id="hero-status-pill"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs font-semibold mb-5 sm:mb-6 shadow-2xs uppercase tracking-wider font-mono"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>AVAILABLE FOR FREELANCE PROJECTS</span>
            </div>

            {/* Author Name */}
            <div className="text-xs sm:text-sm font-semibold tracking-wider text-stone-500 dark:text-stone-400 uppercase mb-3 font-mono flex items-center gap-2">
              <span className="w-4 h-[1.5px] bg-amber-600 dark:bg-amber-400 inline-block"></span>
              <span>C M Karthik</span>
            </div>

            {/* Main Hero Headline with Strong Visual Impact */}
            <h1
              id="hero-main-title"
              className="text-3xl sm:text-5xl md:text-6xl font-bold text-stone-900 dark:text-stone-100 tracking-tight leading-[1.15] sm:leading-[1.12] mb-5 sm:mb-6 font-sans group cursor-default transition-colors"
            >
              I turn ideas and data into digital products, insights, and{' '}
              <span className="font-display italic font-normal text-amber-700 dark:text-amber-400">
                intelligent software solutions.
              </span>
            </h1>

            {/* Hero Description - Two Clean, Professional Paragraphs */}
            <div
              id="hero-subheadline"
              className="text-base sm:text-lg md:text-xl text-stone-600 dark:text-stone-300 leading-relaxed mb-6 sm:mb-8 max-w-2xl space-y-3"
            >
              <p>
                Hi, I'm C M Karthik — a freelance full-stack developer with experience in Applied AI/ML, Data Analytics, Data Visualization, and Data Science.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-stone-500 dark:text-stone-400">
                I help businesses and individuals transform ideas, requirements, and data into functional digital products, meaningful insights, and thoughtfully built software solutions.
              </p>
            </div>

            {/* Call to Actions with High Touch Targets & Visual Hierarchy */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto">
              <button
                id="hero-primary-cta"
                onClick={() => handleScrollTo('work')}
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white dark:bg-stone-100 dark:hover:bg-white dark:text-stone-950 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-150 active:scale-98 shadow-xs cursor-pointer group"
                aria-label="View My Work"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={handleStartProjectClick}
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-stone-950 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-150 active:scale-98 shadow-xs cursor-pointer group"
                aria-label="Start A Project"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                id="hero-resume-cta"
                onClick={() => setIsResumeModalOpen(true)}
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-white/80 hover:bg-stone-100 dark:bg-stone-900/80 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-700 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-150 active:scale-98 cursor-pointer"
                aria-label="View Resume Modal"
              >
                <FileText className="w-4 h-4 text-stone-600 dark:text-stone-400" />
                <span>VIEW RESUME</span>
              </button>
            </div>

            {/* Professional Identity Line */}
            <div
              id="hero-identity-line"
              className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-stone-200/80 dark:border-stone-800/80 w-full max-w-2xl"
            >
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs sm:text-sm text-stone-600 dark:text-stone-400">
                <span className="font-semibold text-stone-800 dark:text-stone-200">
                  Freelance Full-Stack Developer
                </span>
                <span className="text-stone-400 dark:text-stone-600 select-none">·</span>
                <span className="text-stone-700 dark:text-stone-300">
                  Applied AI/ML &amp; Data Solutions
                </span>
                <span className="text-stone-400 dark:text-stone-600 select-none">·</span>
                <span className="font-mono text-[11px] sm:text-xs text-stone-600 dark:text-stone-400">
                  2025 — Present
                </span>
                <span className="text-stone-400 dark:text-stone-600 select-none">·</span>
                <span className="text-stone-700 dark:text-stone-300">
                  Bengaluru, India
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Photograph with Handwritten Annotation & Floating Badge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative mt-4 lg:mt-0">
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
                  {!allPhotosFailed ? (
                    <img
                      src={getAssetUrl(currentPhotoSrc)}
                      alt="C M Karthik - Freelance Full-Stack Developer"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                      onError={() => {
                        if (photoSourceIndex < PHOTO_SOURCES.length - 1) {
                          setPhotoSourceIndex((prev) => prev + 1);
                        } else {
                          setAllPhotosFailed(true);
                        }
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-stone-900 via-stone-800 to-stone-950 text-white p-6 text-center">
                      <div className="w-20 h-20 rounded-full bg-amber-500/20 border-2 border-amber-500/40 flex items-center justify-center mb-3">
                        <span className="font-mono text-2xl font-bold text-amber-400">CK</span>
                      </div>
                      <p className="font-bold text-base text-stone-100">C M Karthik</p>
                      <p className="text-xs text-amber-400/90 font-mono mt-1">Full-Stack &amp; Applied AI</p>
                    </div>
                  )}

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
                <span className="truncate">Turning ideas &amp; data into digital products.</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            THREE HERO INFORMATION CARDS
            Aligned with updated positioning:
            CARD 01: What I primarily do (FOCUS)
            CARD 02: Additional value & capabilities (SPECIALIZATION)
            CARD 03: The foundation supporting my work (FOUNDATION)
            ======================================================== */}
        <div
          id="hero-proof-strip"
          className="mt-14 sm:mt-16 pt-8 border-t border-stone-200/90 dark:border-stone-800/90"
        >
          <div className="rounded-2xl bg-stone-100/70 dark:bg-stone-900/40 border border-stone-200/80 dark:border-stone-800/80 p-2 sm:p-2.5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3">
              
              {/* CARD 01 — WHAT I DO */}
              <div className="group rounded-xl bg-white dark:bg-stone-900/90 p-4 sm:p-5 border border-stone-200/70 dark:border-stone-800/70 flex flex-col justify-between hover:-translate-y-1 hover:shadow-md hover:border-amber-400/50 dark:hover:border-stone-700 transition-all duration-200 cursor-default">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-wider text-stone-500 dark:text-stone-400 uppercase mb-2">
                    <Layers className="w-3.5 h-3.5 text-stone-700 dark:text-stone-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors" />
                    <span>FOCUS</span>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 leading-snug group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                    Digital Product Development
                  </div>
                </div>
                <div className="mt-3.5 pt-2.5 border-t border-stone-100 dark:border-stone-800/60 text-xs text-stone-500 dark:text-stone-400 flex items-center justify-between">
                  <span className="font-medium text-stone-600 dark:text-stone-300">From Idea to Production</span>
                  <span className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">2025 — Present</span>
                </div>
              </div>

              {/* CARD 02 — DATA + AI */}
              <div className="group rounded-xl bg-white dark:bg-stone-900/90 p-4 sm:p-5 border border-stone-200/70 dark:border-stone-800/70 flex flex-col justify-between hover:-translate-y-1 hover:shadow-md hover:border-amber-400/50 dark:hover:border-stone-700 transition-all duration-200 cursor-default">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-wider text-stone-500 dark:text-stone-400 uppercase mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform" />
                    <span>SPECIALIZATION</span>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 leading-snug group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                    Data, Analytics &amp; Intelligent Solutions
                  </div>
                </div>
                <div className="mt-3.5 pt-2.5 border-t border-stone-100 dark:border-stone-800/60 text-xs text-stone-500 dark:text-stone-400 flex items-center justify-between">
                  <span className="font-medium text-stone-600 dark:text-stone-300">Analytics · Visualization · AI/ML</span>
                  <span className="font-mono text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold">Applied</span>
                </div>
              </div>

              {/* CARD 03 — FOUNDATION */}
              <div className="group rounded-xl bg-white dark:bg-stone-900/90 p-4 sm:p-5 border border-stone-200/70 dark:border-stone-800/70 flex flex-col justify-between hover:-translate-y-1 hover:shadow-md hover:border-amber-400/50 dark:hover:border-stone-700 transition-all duration-200 cursor-default">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-wider text-stone-500 dark:text-stone-400 uppercase mb-2">
                    <GraduationCap className="w-3.5 h-3.5 text-stone-700 dark:text-stone-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors" />
                    <span>FOUNDATION</span>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 leading-snug group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                    Full-Stack Development &amp; Data Science
                  </div>
                </div>
                <div className="mt-3.5 pt-2.5 border-t border-stone-100 dark:border-stone-800/60 text-xs text-stone-500 dark:text-stone-400 flex items-center justify-between">
                  <span className="font-medium text-stone-600 dark:text-stone-300">M.Sc. Data Science</span>
                  <span className="font-mono text-[11px] text-stone-500 dark:text-stone-400 font-semibold">BCA (CS)</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Accessible Photo Lightbox Modal */}
      <PhotoLightbox
        isOpen={isPhotoLightboxOpen}
        imageSrc={currentPhotoSrc}
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
