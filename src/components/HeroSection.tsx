import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Maximize2,
  Briefcase,
  Lightbulb,
  Sparkles,
  GraduationCap,
  Layers,
  ArrowRightCircle,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PhotoLightbox } from './PhotoLightbox';
import { getAssetUrl } from '../utils/assetHelper';

export const HeroSection: React.FC = () => {
  const [isPhotoLightboxOpen, setIsPhotoLightboxOpen] = useState(false);
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

            {/* Primary Headline with interactive accent color hover */}
            <h1
              id="hero-main-title"
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 dark:text-stone-100 tracking-tight leading-[1.12] mb-5 font-sans group cursor-default transition-colors"
            >
              I build web applications and{' '}
              <span className="transition-colors duration-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 underline decoration-amber-500/30 underline-offset-8">
                intelligent software solutions
              </span>
              .
            </h1>

            {/* Supporting Description */}
            <p
              id="hero-subheadline"
              className="text-lg sm:text-xl text-stone-600 dark:text-stone-300 leading-relaxed mb-8 max-w-2xl"
            >
              Freelance Full-Stack Developer helping clients and organizations turn raw ideas, operational bottlenecks, and manual workflows into reliable, production-grade digital software — strengthened with Applied AI/ML and Data Science.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <button
                id="hero-primary-cta"
                onClick={() => handleScrollTo('work')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white dark:bg-stone-100 dark:hover:bg-white dark:text-stone-950 text-sm font-semibold tracking-wide transition-all duration-150 active:scale-98 shadow-xs cursor-pointer"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={() => handleScrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/80 hover:bg-amber-50/60 dark:bg-stone-900/80 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 hover:text-amber-900 dark:hover:text-amber-300 border border-stone-300 dark:border-stone-700 hover:border-amber-400 dark:hover:border-amber-500/50 text-sm font-semibold tracking-wide transition-all duration-150 active:scale-98 cursor-pointer"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:text-amber-600" />
              </button>
            </div>
          </div>

          {/* Right Column: Professional Photograph with Clean Border Frame & Expandable Lightbox */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative max-w-sm w-full">
              <div className="relative rounded-2xl overflow-hidden bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm">
                {/* Real Photograph with soft edge vignette */}
                <div
                  className="relative aspect-4/5 cursor-pointer overflow-hidden bg-stone-200 dark:bg-stone-800"
                  onClick={() => setIsPhotoLightboxOpen(true)}
                  title="Click to view full photo"
                >
                  <img
                    src={photoError ? getAssetUrl('/myphoto.jpeg') : getAssetUrl('/images/myphoto.jpeg')}
                    alt="C M Karthik - Freelance Full-Stack Developer"
                    className="w-full h-full object-cover object-center transition-opacity duration-200"
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
            </div>
          </div>
        </div>

        {/* ========================================================
            PROFESSIONAL PROOF & VALUE STRIP
            Horizontal editorial layout on desktop, responsive stack on mobile.
            Spotlights BUSINESS VALUE prominently alongside FOCUS, SPECIALIZATION,
            and ACADEMIC FOUNDATION without generic counter clichés or fake metrics.
            ======================================================== */}
        <div
          id="hero-proof-strip"
          className="mt-14 pt-8 border-t border-stone-200/90 dark:border-stone-800/90"
        >
          <div className="rounded-2xl bg-stone-100/70 dark:bg-stone-900/40 border border-stone-200/80 dark:border-stone-800/80 p-2 sm:p-2.5">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-2.5">
              
              {/* 1. FOCUS */}
              <div className="md:col-span-3 rounded-xl bg-white dark:bg-stone-900/90 p-4 sm:p-5 border border-stone-200/70 dark:border-stone-800/70 flex flex-col justify-between transition-colors hover:border-stone-300 dark:hover:border-stone-700">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-wider text-stone-500 dark:text-stone-400 uppercase mb-2">
                    <Briefcase className="w-3.5 h-3.5 text-stone-700 dark:text-stone-300" />
                    <span>FOCUS</span>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 leading-snug">
                    Freelance Full-Stack Development
                  </div>
                </div>
                <div className="mt-3 pt-2.5 border-t border-stone-100 dark:border-stone-800/60 text-xs text-stone-500 dark:text-stone-400 flex items-center justify-between">
                  <span>End-to-End Delivery</span>
                  <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">Live &amp; Active</span>
                </div>
              </div>

              {/* 2. BUSINESS VALUE (Prominently featured editorial showcase) */}
              <div className="md:col-span-4 rounded-xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent dark:from-amber-500/15 dark:via-amber-500/5 dark:to-transparent p-4 sm:p-5 border-2 border-amber-500/30 dark:border-amber-500/35 relative overflow-hidden flex flex-col justify-between shadow-xs">
                {/* Subtle top indicator */}
                <div className="absolute top-0 right-0 px-2.5 py-0.5 rounded-bl-lg bg-amber-500 text-stone-950 font-mono font-bold text-[10px] uppercase tracking-wider">
                  Client Impact
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-wider text-amber-800 dark:text-amber-300 uppercase mb-2">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                    <span>BUSINESS VALUE</span>
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-stone-950 dark:text-white leading-snug">
                    From Business Problems to Digital Solutions
                  </div>
                  <p className="mt-1.5 text-xs sm:text-[13px] text-stone-700 dark:text-stone-300 leading-relaxed">
                    Transforming raw concepts, manual friction, and operational bottlenecks into practical, dependable software that runs smoothly in production.
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-amber-500/20 text-xs text-amber-900 dark:text-amber-200 font-semibold flex items-center gap-1.5">
                  <ArrowRightCircle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  <span>Real software built for tangible outcomes</span>
                </div>
              </div>

              {/* 3. SPECIALIZATION */}
              <div className="md:col-span-3 rounded-xl bg-white dark:bg-stone-900/90 p-4 sm:p-5 border border-stone-200/70 dark:border-stone-800/70 flex flex-col justify-between transition-colors hover:border-stone-300 dark:hover:border-stone-700">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-wider text-stone-500 dark:text-stone-400 uppercase mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span>SPECIALIZATION</span>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 leading-snug">
                    Applied AI/ML &amp; Web Platforms
                  </div>
                </div>
                <div className="mt-3 pt-2.5 border-t border-stone-100 dark:border-stone-800/60 text-xs text-stone-500 dark:text-stone-400 flex items-center justify-between">
                  <span>Vision &amp; Federated ML</span>
                  <span className="font-mono text-[10px] text-indigo-600 dark:text-indigo-400 font-semibold">PyTorch • CV</span>
                </div>
              </div>

              {/* 4. ACADEMIC FOUNDATION */}
              <div className="md:col-span-2 rounded-xl bg-white dark:bg-stone-900/90 p-4 sm:p-5 border border-stone-200/70 dark:border-stone-800/70 flex flex-col justify-between transition-colors hover:border-stone-300 dark:hover:border-stone-700">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-wider text-stone-500 dark:text-stone-400 uppercase mb-2">
                    <GraduationCap className="w-3.5 h-3.5 text-stone-700 dark:text-stone-300" />
                    <span>FOUNDATION</span>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 leading-snug">
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
    </section>
  );
};
