import React from 'react';
import { Briefcase, Code2, BrainCircuit, Server, ArrowUpRight, Sparkles, Check } from 'lucide-react';
import { ABOUT_PILLARS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-500" />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 relative" aria-label="About C M Karthik">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            01 / What I Build
          </div>
          <h2
            id="about-headline"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6"
          >
            I Don't Just Learn.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600 dark:from-indigo-400 dark:to-sky-400">
              I Build.
            </span>
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              M.Sc. Data Science student and freelance full-stack developer experienced in
              designing, building, and deploying real-world client applications and applied AI/ML
              systems.
            </p>
            <p className="text-slate-700 dark:text-slate-200 font-medium">
              I work across the development lifecycle — understanding requirements, building
              applications, integrating services, deploying systems, and providing ongoing
              support.
            </p>
          </div>
        </div>

        {/* 4 Highlighted Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {ABOUT_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              id={`pillar-card-${pillar.number}`}
              className="group relative rounded-2xl bg-white dark:bg-slate-900/80 p-7 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-lg hover:border-indigo-200 dark:hover:border-indigo-900/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/50 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    {getIcon(pillar.icon)}
                  </div>
                  <span className="font-mono text-2xl font-bold text-slate-300 dark:text-slate-700 group-hover:text-indigo-500/60 dark:group-hover:text-indigo-400/60 transition-colors">
                    {pillar.number}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                  {pillar.title}
                </h3>
                <div className="font-mono text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3.5">
                  {pillar.subtitle}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Highlights Pill Tags */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex flex-wrap gap-2">
                  {pillar.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      <Check className="w-3 h-3 text-indigo-500" />
                      <span>{h}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
