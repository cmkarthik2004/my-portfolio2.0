import React, { useState } from 'react';
import {
  ArrowRight,
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
  // Primary 3D Hero Visual provided by user: 3Dimage2.webp with fallback to PNG
  '/images/3Dimage2.webp',
  '/3Dimage2.webp',
  '/images/3Dimage2.png',
  '/3Dimage2.png',
  '/images/image2.webp',
  '/images/image2.png',
  '/image2.webp',
  '/image2.png',
  PERSONAL_INFO.profilePhoto,
  '/my photo.jpeg',
  '/myphoto.jpeg',
  '/images/my photo.jpeg',
  '/images/myphoto.jpeg',
  '/images/myphoto.jpg',
  '/images/my photo.jpg',
  '/images/myphoto.png',
  '/images/my photo.png',
  '/myphoto.jpg',
  '/my photo.jpg',
  '/myphoto.png',
  '/my photo.png',
  // Vector SVG fallbacks if no photograph is uploaded yet
  '/images/myphoto.svg',
  '/myphoto.svg',
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
      className="relative pt-20 pb-10 sm:pt-24 sm:pb-12 md:pt-28 md:pb-14 overflow-hidden text-stone-900 dark:text-stone-100 transition-colors duration-250"
      aria-label="Introduction"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start text-left w-full">
            {/* Hero Availability Label */}
            <div
              id="hero-status-pill"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 dark:border-emerald-500/35 text-emerald-800 dark:text-emerald-400 text-xs font-semibold mb-5 sm:mb-6 shadow-2xs uppercase tracking-wider font-mono transition-colors duration-200"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>AVAILABLE FOR FREELANCE PROJECTS</span>
            </div>

            {/* Author Name */}
            <h1 className="text-xs sm:text-sm font-semibold tracking-wider text-[#1d4ed8] dark:text-[#3b82f6] uppercase mb-3 font-mono flex items-center gap-2">
              <span className="w-4 h-[1.5px] bg-[#1d4ed8] dark:bg-[#3b82f6] inline-block"></span>
              <span className="font-bold tracking-widest text-[#1d4ed8] dark:text-[#3b82f6]">C M KARTHIK</span>
            </h1>

            {/* Main Hero Headline */}
            <div
              id="hero-main-title"
              className="text-[1.75rem] xs:text-3xl sm:text-4xl md:text-5xl lg:text-[2.45rem] xl:text-[3.1rem] 2xl:text-[3.5rem] font-black tracking-tight leading-[1.12] mb-5 sm:mb-6 font-sans group cursor-default w-full"
            >
              <h2 className="text-[#102A56] dark:text-white sm:whitespace-nowrap transition-colors duration-200">
                GO DIGITAL.
              </h2>
              <h2 className="text-[#C65D16] dark:text-[#f27827] sm:whitespace-nowrap transition-colors duration-200">
                REACH MORE PEOPLE.
              </h2>
              <h2 className="text-[#102A56] dark:text-white sm:whitespace-nowrap transition-colors duration-200">
                GROW YOUR BUSINESS.
              </h2>
            </div>

            {/* Hero Description - Two Clean, Professional Paragraphs */}
            <div
              id="hero-subheadline"
              className="text-base sm:text-lg md:text-xl text-stone-700 dark:text-slate-200 leading-relaxed mb-6 sm:mb-8 max-w-2xl space-y-3 transition-colors duration-200"
            >
              <p>
                Hi, I'm C M Karthik — a freelance full-stack developer with experience in Applied AI/ML, Data Analytics, Data Visualization, and Data Science.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-stone-600 dark:text-slate-400">
                I am here to support your digital journey, helping you reach more people and grow your business through modern websites, custom software, data-driven solutions, and intelligent automation.
              </p>
            </div>

            {/* Call to Actions with High Touch Targets & Visual Hierarchy */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                id="hero-primary-cta"
                onClick={() => handleScrollTo('work')}
                className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-150 active:scale-98 shadow-md cursor-pointer group"
                aria-label="View My Work"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={handleStartProjectClick}
                className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/90 hover:bg-[#2563eb]/10 dark:bg-[#111622]/80 dark:hover:bg-[#2563eb]/20 border border-[#2563eb] text-[#1d4ed8] dark:text-[#3b82f6] hover:text-[#1e40af] dark:hover:text-[#60a5fa] hover:border-[#3b82f6] text-xs sm:text-sm font-semibold tracking-wide transition-all duration-150 active:scale-98 cursor-pointer group shadow-2xs"
                aria-label="Let's Discuss Your Project"
              >
                <span>Let's Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Professional Identity Line */}
            <div
              id="hero-identity-line"
              className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-stone-200/90 dark:border-white/10 w-full max-w-2xl transition-colors duration-200"
            >
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs sm:text-sm text-stone-600 dark:text-slate-400">
                <span className="font-semibold text-stone-900 dark:text-slate-200">
                  Freelance Full-Stack Developer
                </span>
                <span className="text-stone-400 dark:text-slate-600 select-none">·</span>
                <span className="text-stone-700 dark:text-slate-300">
                  Applied AI/ML &amp; Data Solutions
                </span>
                <span className="text-stone-400 dark:text-slate-600 select-none">·</span>
                <span className="font-mono text-[11px] sm:text-xs text-stone-500 dark:text-slate-400">
                  2025 — Present
                </span>
                <span className="text-stone-400 dark:text-slate-600 select-none">·</span>
                <span className="text-stone-700 dark:text-slate-300">
                  Bengaluru, India
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Personal Brand Hero Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative mt-8 sm:mt-10 lg:mt-0 lg:-mr-4 xl:-mr-8 2xl:-mr-10 lg:-translate-y-8 xl:-translate-y-12 2xl:-translate-y-14 transition-transform duration-300">
            {/* Handwritten annotation: "Identify Solve Build Scale" */}
            <div className="hidden xl:flex flex-col items-center absolute -left-14 2xl:-left-18 top-6 pointer-events-none select-none z-20">
              <div className="font-caveat text-xl sm:text-2xl text-stone-700 dark:text-slate-300 leading-tight text-center rotate-[-6deg]">
                <span>Identify</span><br />
                <span>Solve</span><br />
                <span>Build</span><br />
                <span className="text-[#C65D16] dark:text-[#f27827] font-bold">Scale</span>
              </div>
              {/* Hand-drawn curved arrow pointing to the 3D visual */}
              <svg
                className="w-12 h-12 text-stone-400 dark:text-slate-400 mt-1 rotate-[10deg]"
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

            {/* 3D Visual Stage with layered depth and subtle geometry */}
            <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[500px] xl:max-w-[560px] 2xl:max-w-[620px] flex items-center justify-center">
              {/* Subtle atmospheric ambient glow behind the subject */}
              <div
                className="absolute -inset-4 sm:-inset-8 m-auto w-5/6 h-5/6 rounded-full bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-orange-500/10 dark:from-blue-600/15 dark:via-indigo-600/15 dark:to-orange-500/15 blur-3xl pointer-events-none -z-10"
                aria-hidden="true"
              />

              {/* Subtle background precision geometry & coordinate marks */}
              <div
                className="absolute inset-x-0 inset-y-4 sm:inset-y-8 pointer-events-none select-none -z-10 opacity-30 dark:opacity-20 flex flex-col justify-between"
                aria-hidden="true"
              >
                <div className="flex justify-between items-center text-[10px] font-mono text-stone-500 dark:text-slate-400">
                  <span>+ 12.9716° N</span>
                  <span>77.5946° E +</span>
                </div>
                <div className="w-full border-t border-dashed border-stone-300 dark:border-slate-700/60" />
                <div className="flex justify-between items-center text-[10px] font-mono text-stone-500 dark:text-slate-400">
                  <span>[SYS.DEV]</span>
                  <span>[3D.HERO]</span>
                </div>
              </div>

              {/* The 3D Image Presentation: Cardless, borderless, transparent blending */}
              <div
                className="relative w-full cursor-pointer group"
                onClick={() => setIsPhotoLightboxOpen(true)}
                title="C M Karthik — Click to view high-resolution visual"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsPhotoLightboxOpen(true);
                  }
                }}
              >
                {!allPhotosFailed ? (
                  <picture>
                    <source
                      srcSet={getAssetUrl('/images/3Dimage2.webp')}
                      type="image/webp"
                    />
                    <img
                      src={getAssetUrl(currentPhotoSrc)}
                      alt="C M Karthik - Freelance Full-Stack Developer & Applied AI/ML Specialist"
                      width={1122}
                      height={1402}
                      fetchPriority="high"
                      decoding="async"
                      className="w-full h-auto object-contain select-none transition-transform duration-300 ease-out group-hover:scale-[1.015] active:scale-[0.99] motion-reduce:transform-none drop-shadow-[0_22px_45px_rgba(15,23,42,0.12)] dark:drop-shadow-[0_28px_50px_rgba(0,0,0,0.65)]"
                      loading="eager"
                      onError={() => {
                        if (photoSourceIndex < PHOTO_SOURCES.length - 1) {
                          setPhotoSourceIndex((prev) => prev + 1);
                        } else {
                          setAllPhotosFailed(true);
                        }
                      }}
                    />
                  </picture>
                ) : (
                  <div className="w-full aspect-4/5 flex flex-col items-center justify-center rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-8 text-center">
                    <div className="w-20 h-20 rounded-full bg-amber-500/20 border-2 border-amber-500/40 flex items-center justify-center mb-3">
                      <span className="font-mono text-2xl font-bold text-amber-500">CK</span>
                    </div>
                    <p className="font-bold text-base text-stone-900 dark:text-stone-100">C M Karthik</p>
                    <p className="text-xs text-amber-600 dark:text-amber-400 font-mono mt-1">Full-Stack &amp; Applied AI</p>
                  </div>
                )}
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
          className="mt-8 sm:mt-10 pt-6 sm:pt-7 border-t border-stone-200/90 dark:border-white/10 transition-colors duration-250"
        >
          <div className="rounded-2xl bg-stone-100/80 dark:bg-[#0c1018]/60 border border-stone-200/90 dark:border-white/10 p-2 sm:p-2.5 transition-colors duration-250">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3">
              
              {/* CARD 01 — WHAT I DO */}
              <div className="group rounded-xl bg-white dark:bg-[#141a27] p-4 sm:p-5 border border-stone-200/80 dark:border-white/10 flex flex-col justify-between hover:-translate-y-1 hover:shadow-md hover:border-[#2563eb]/50 transition-all duration-200 cursor-default">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-wider text-stone-500 dark:text-slate-400 uppercase mb-2">
                    <Layers className="w-3.5 h-3.5 text-stone-600 dark:text-slate-300 group-hover:text-[#2563eb] dark:group-hover:text-[#3b82f6] transition-colors" />
                    <span>FOCUS</span>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-stone-900 dark:text-white leading-snug group-hover:text-[#2563eb] dark:group-hover:text-[#60a5fa] transition-colors">
                    Digital Product Development
                  </div>
                </div>
                <div className="mt-3.5 pt-2.5 border-t border-stone-100 dark:border-white/10 text-xs text-stone-500 dark:text-slate-400 flex items-center justify-between">
                  <span className="font-medium text-stone-600 dark:text-slate-300">From Idea to Production</span>
                  <span className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">2025 — Present</span>
                </div>
              </div>

              {/* CARD 02 — DATA + AI */}
              <div className="group rounded-xl bg-white dark:bg-[#141a27] p-4 sm:p-5 border border-stone-200/80 dark:border-white/10 flex flex-col justify-between hover:-translate-y-1 hover:shadow-md hover:border-[#2563eb]/50 transition-all duration-200 cursor-default">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-wider text-stone-500 dark:text-slate-400 uppercase mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#2563eb] dark:text-[#3b82f6] group-hover:scale-110 transition-transform" />
                    <span>SPECIALIZATION</span>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-stone-900 dark:text-white leading-snug group-hover:text-[#2563eb] dark:group-hover:text-[#60a5fa] transition-colors">
                    Data, Analytics &amp; Intelligent Solutions
                  </div>
                </div>
                <div className="mt-3.5 pt-2.5 border-t border-stone-100 dark:border-white/10 text-xs text-stone-500 dark:text-slate-400 flex items-center justify-between">
                  <span className="font-medium text-stone-600 dark:text-slate-300">Analytics · Visualization · AI/ML</span>
                  <span className="font-mono text-[11px] text-[#2563eb] dark:text-[#60a5fa] font-semibold">Applied</span>
                </div>
              </div>

              {/* CARD 03 — FOUNDATION */}
              <div className="group rounded-xl bg-white dark:bg-[#141a27] p-4 sm:p-5 border border-stone-200/80 dark:border-white/10 flex flex-col justify-between hover:-translate-y-1 hover:shadow-md hover:border-[#2563eb]/50 transition-all duration-200 cursor-default">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-wider text-stone-500 dark:text-slate-400 uppercase mb-2">
                    <GraduationCap className="w-3.5 h-3.5 text-stone-600 dark:text-slate-300 group-hover:text-[#2563eb] dark:group-hover:text-[#3b82f6] transition-colors" />
                    <span>FOUNDATION</span>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-stone-900 dark:text-white leading-snug group-hover:text-[#2563eb] dark:group-hover:text-[#60a5fa] transition-colors">
                    Full-Stack Development &amp; Data Science
                  </div>
                </div>
                <div className="mt-3.5 pt-2.5 border-t border-stone-100 dark:border-white/10 text-xs text-stone-500 dark:text-slate-400 flex items-center justify-between">
                  <span className="font-medium text-stone-600 dark:text-slate-300">M.Sc. Data Science</span>
                  <span className="font-mono text-[11px] text-stone-500 dark:text-slate-400 font-semibold">BCA (CS)</span>
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
