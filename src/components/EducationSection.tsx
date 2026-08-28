import React from 'react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Award,
} from 'lucide-react';
import { ACADEMIC_EDUCATION } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative scroll-mt-20" aria-label="Academic Journey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            06 / Academic Foundation
          </div>
          <h2
            id="education-headline"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4"
          >
            Academic Journey
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A continuous progression of technical discipline and rigorous study — from residential school excellence to advanced M.Sc. Data Science research.
          </p>
        </div>

        {/* Education Timeline / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACADEMIC_EDUCATION.map((item) => (
            <div
              key={item.number}
              className="relative p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group"
            >
              {/* Top Accent Stripe */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5 opacity-85"
                style={{ backgroundColor: item.accentColor }}
              />

              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="inline-flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500">
                      {item.number}
                    </span>
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow-2xs"
                      style={{
                        backgroundColor: `${item.accentColor}18`,
                        color: item.accentColor,
                        border: `1px solid ${item.accentColor}30`,
                      }}
                    >
                      {item.badgeType === 'pursuing' && <Sparkles className="w-3.5 h-3.5" />}
                      {item.badgeType === 'completed' && <Award className="w-3.5 h-3.5" />}
                      {item.badgeType === 'academic' && <BookOpen className="w-3.5 h-3.5" />}
                      <span>{item.statusOrScore}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-1.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {item.degree}
                </h3>

                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>{item.institution}</span>
                </p>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800">
                  {item.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-indigo-500 font-bold shrink-0 mt-0.5">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
