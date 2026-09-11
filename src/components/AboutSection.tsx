import React from 'react';
import {
  Code2,
  BrainCircuit,
  Server,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-20 md:py-28 relative scroll-mt-20" aria-label="About and Approach">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-14 max-w-3xl">
          <div className="text-xs font-semibold tracking-wider text-stone-500 dark:text-stone-400 uppercase mb-2 font-mono flex items-center gap-2">
            <span className="w-3 h-[1.5px] bg-amber-600 dark:bg-amber-400 inline-block"></span>
            <span>04 / ABOUT &amp; MY APPROACH</span>
          </div>
          <h2
            id="about-headline"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100 tracking-tight leading-tight group cursor-default transition-colors duration-200 hover:text-amber-700 dark:hover:text-amber-400"
          >
            Engineering Software with an Analytical Perspective
          </h2>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
            <p>
              I build web applications and software solutions designed to solve tangible operational challenges. My focus is on writing clean, modular code, modeling normalized relational databases, and delivering dependable software from initial scoping to live server deployment.
            </p>

            <p>
              Rather than treating development and data science as separate disciplines, I view them as complementary: <strong className="text-stone-900 dark:text-stone-100 font-semibold">Full-Stack Development</strong> provides the architecture, user flows, and real-time reliability, while <strong className="text-stone-900 dark:text-stone-100 font-semibold">Applied AI/ML and Data Science</strong> provide the analytical depth needed to design intelligent features, computer vision pipelines, and privacy-preserving algorithms.
            </p>

            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400">
              Currently based in Bengaluru, India, I take on freelance projects where clients need thoughtful engineering, direct communication, and production-ready software delivered without ambiguity.
            </p>

            {/* Core Values / Approach Points */}
            <div className="pt-2 sm:pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 text-sm">
              <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                <div className="font-bold text-stone-900 dark:text-stone-100 mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Production-First Mindset</span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400">
                  Every feature is engineered for real deployment, SSL security, fast load times, and database integrity.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                <div className="font-bold text-stone-900 dark:text-stone-100 mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>Data &amp; AI Differentiator</span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400">
                  Data science knowledge guides clean architecture, analytics tracking, and applied machine learning integration.
                </p>
              </div>
            </div>
          </div>

          {/* Supporting Technical Pillars Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 font-mono mb-4">
                The Unified Technical Focus
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 flex items-center justify-center shrink-0">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100">
                      Full-Stack Architecture (Primary)
                    </h4>
                    <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                      PHP, Python, Django, Flask, MySQL, JavaScript, and modern Tailwind frontends with payment gateway integrations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 pt-3 border-t border-stone-100 dark:border-stone-800">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 flex items-center justify-center shrink-0">
                    <BrainCircuit className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100">
                      Applied AI/ML &amp; Data Science (Differentiator)
                    </h4>
                    <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                      PyTorch, Federated Learning (FedAvg), OpenCV computer vision, and structured data analysis to enrich web platforms.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 pt-3 border-t border-stone-100 dark:border-stone-800">
                  <div className="w-10 h-10 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 flex items-center justify-center shrink-0">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100">
                      Linux VPS &amp; Production Hosting
                    </h4>
                    <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                      Ubuntu VPS configuration, Nginx web server, Gunicorn WSGI, SSL certificates, and scheduled backups.
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
