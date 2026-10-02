import React from 'react';
import { MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-10 sm:py-14 md:py-18 relative scroll-mt-20" aria-label="About and Approach">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 sm:mb-10 max-w-3xl">
          <div className="text-xs font-semibold tracking-wider text-stone-500 dark:text-stone-400 uppercase mb-2 font-mono flex items-center gap-2">
            <span className="w-3 h-[1.5px] bg-amber-600 dark:bg-amber-400 inline-block"></span>
            <span>04 / ABOUT</span>
          </div>
          <h2
            id="about-headline"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100 tracking-tight leading-tight group cursor-default transition-colors duration-200 hover:text-amber-700 dark:hover:text-amber-400"
          >
            I Start With the Problem, Not the Technology.
          </h2>
        </div>

        {/* Narrative & Working Approach Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
            <p className="text-stone-900 dark:text-stone-100 font-medium">
              Every business has different challenges.
            </p>

            <div className="space-y-2 text-sm sm:text-base text-stone-600 dark:text-stone-400 pl-3 border-l-2 border-amber-500/40">
              <p>Some need a better website.</p>
              <p>Some need a custom system to manage their work.</p>
              <p>Some have data but don&apos;t know what it means.</p>
              <p>Others want to automate repetitive processes or explore how AI can help.</p>
            </div>

            <p>
              My approach starts by understanding what is actually needed before deciding what should be built.
            </p>

            <p>
              I work with businesses and individuals to turn ideas, requirements, and challenges into practical digital solutions — from websites and business applications to dashboards, automation, analytics, and AI-powered features.
            </p>

            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400">
              From the first discussion to development, testing, deployment, and ongoing support, I stay involved throughout the process.
            </p>

            {/* Core Capabilities & Location Card */}
            <div className="pt-2 sm:pt-4">
              <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono font-bold tracking-wider text-amber-600 dark:text-amber-400 uppercase">
                    CAPABILITIES
                  </span>
                  <span className="text-xs text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                    <span>Based in Bengaluru, India · Working with clients remotely</span>
                  </span>
                </div>
                <div className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100">
                  Web Development · Data · Automation · AI
                </div>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1.5 leading-relaxed">
                  Full-stack development is my primary focus. Data, automation, and AI are applied capabilities that strengthen the practical digital solutions I build for businesses.
                </p>
              </div>
            </div>
          </div>

          {/* 5-Step Working Approach Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 font-mono mb-4 flex items-center justify-between">
                <span>HOW I WORK WITH CLIENTS</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                  5 STEPS
                </span>
              </div>

              <div className="space-y-3.5">
                {/* 1. UNDERSTAND */}
                <div className="flex gap-3.5 items-start">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5 border border-amber-500/20">
                    01
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-stone-900 dark:text-stone-100 font-mono">
                      UNDERSTAND
                    </h3>
                    <p className="text-xs text-stone-600 dark:text-stone-400 mt-0.5 leading-relaxed">
                      Identify the problem, goals, users, and requirements.
                    </p>
                  </div>
                </div>

                {/* 2. PLAN */}
                <div className="flex gap-3.5 items-start pt-3 border-t border-stone-100 dark:border-stone-800/80">
                  <div className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5 border border-stone-200 dark:border-stone-700">
                    02
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-stone-900 dark:text-stone-100 font-mono">
                      PLAN
                    </h3>
                    <p className="text-xs text-stone-600 dark:text-stone-400 mt-0.5 leading-relaxed">
                      Find the right approach, define the solution, and plan the work.
                    </p>
                  </div>
                </div>

                {/* 3. BUILD */}
                <div className="flex gap-3.5 items-start pt-3 border-t border-stone-100 dark:border-stone-800/80">
                  <div className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5 border border-stone-200 dark:border-stone-700">
                    03
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-stone-900 dark:text-stone-100 font-mono">
                      BUILD
                    </h3>
                    <p className="text-xs text-stone-600 dark:text-stone-400 mt-0.5 leading-relaxed">
                      Design and develop a solution around the actual requirements.
                    </p>
                  </div>
                </div>

                {/* 4. LAUNCH */}
                <div className="flex gap-3.5 items-start pt-3 border-t border-stone-100 dark:border-stone-800/80">
                  <div className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5 border border-stone-200 dark:border-stone-700">
                    04
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-stone-900 dark:text-stone-100 font-mono">
                      LAUNCH
                    </h3>
                    <p className="text-xs text-stone-600 dark:text-stone-400 mt-0.5 leading-relaxed">
                      Test, deploy, optimize, and make the solution ready for real use.
                    </p>
                  </div>
                </div>

                {/* 5. SUPPORT */}
                <div className="flex gap-3.5 items-start pt-3 border-t border-stone-100 dark:border-stone-800/80">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5 border border-emerald-500/20">
                    05
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-stone-900 dark:text-stone-100 font-mono">
                      SUPPORT
                    </h3>
                    <p className="text-xs text-stone-600 dark:text-stone-400 mt-0.5 leading-relaxed">
                      Maintain, improve, and extend the solution as the business evolves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
