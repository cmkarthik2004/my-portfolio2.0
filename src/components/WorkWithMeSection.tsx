import React, { useState } from 'react';
import {
  Globe,
  Database,
  BrainCircuit,
  Server,
  ArrowRight,
  CheckCircle2,
  RefreshCw,
  Clock,
  Layers,
  Sparkles,
  ChevronDown,
  MessageSquare,
  ShieldCheck,
  LifeBuoy,
} from 'lucide-react';
import { START_PROJECT_STEPS, WORKFLOW_STAGES } from '../data/portfolioData';

interface WorkWithMeSectionProps {
  onStartProject?: () => void;
}

export const WorkWithMeSection: React.FC<WorkWithMeSectionProps> = ({ onStartProject }) => {
  const [activeWorkflowStage, setActiveWorkflowStage] = useState<number>(0);

  const capabilities = [
    {
      icon: Globe,
      title: 'Web Application Development',
      description:
        'Building responsive, accessible, and fast web applications from concept to production. Frontends engineered for clear user journeys and conversion.',
      deliverables: ['Custom Web Applications', 'Responsive Interfaces', 'Modern Tech Stack'],
    },
    {
      icon: Database,
      title: 'Business & Management Platforms',
      description:
        'Designing relational MySQL database structures, role-based user management, administrative control portals, and secure Razorpay payment integrations.',
      deliverables: ['Admin Dashboards', 'Database Architecture', 'Payment Integration'],
    },
    {
      icon: BrainCircuit,
      title: 'Applied AI/ML Solutions',
      description:
        'Integrating machine learning models, computer vision pipelines (OpenCV), and privacy-preserving data workflows into practical software products.',
      deliverables: ['Computer Vision Integration', 'Data Processing Pipelines', 'ML Model Deployment'],
    },
    {
      icon: Server,
      title: 'Deployment & Continuous Improvement',
      description:
        'Configuring Ubuntu Linux VPS servers, Nginx reverse proxies, SSL certificates, Git workflows, and ongoing technical maintenance.',
      deliverables: ['Linux VPS Configuration', 'Nginx & SSL Hardening', 'Post-Launch Support'],
    },
  ];

  const handleScrollToContact = () => {
    if (onStartProject) {
      onStartProject();
    } else {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="work-with-me" className="py-20 md:py-28 relative scroll-mt-20" aria-label="Work With Me">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header with Handwritten Annotation */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-16 relative">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-wider text-stone-500 dark:text-stone-400 uppercase mb-2 font-mono flex items-center gap-2">
              <span className="w-3 h-[1.5px] bg-amber-600 dark:bg-amber-400 inline-block"></span>
              <span>03 / WORK WITH ME</span>
            </div>
            <h2
              id="work-with-me-headline"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100 tracking-tight leading-tight group cursor-default transition-colors duration-200 hover:text-amber-700 dark:hover:text-amber-400"
            >
              What I can build, how we collaborate, and why it works.
            </h2>
            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 mt-3 leading-relaxed">
              A structured approach to transforming ideas and requirements into dependable software.
            </p>
          </div>

          {/* Handwritten Annotation: "Let's Build Something Great!" */}
          <div className="hidden lg:flex flex-col items-center shrink-0 pointer-events-none select-none">
            <div className="font-caveat text-2xl text-stone-700 dark:text-stone-300 leading-snug text-center rotate-[-4deg]">
              <span>Let's</span><br />
              <span className="text-amber-600 dark:text-amber-400 font-bold">Build</span><br />
              <span>Something</span><br />
              <span className="font-bold">Great!</span>
            </div>
            <svg
              className="w-10 h-10 text-stone-500 dark:text-stone-400 mt-1 rotate-[-10deg]"
              viewBox="0 0 50 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M 20 8 Q 30 25 22 42" />
              <path d="M 15 35 L 22 42 L 29 36" />
            </svg>
          </div>
        </div>

        {/* ========================================================
            PART A: WHAT I CAN HELP YOU BUILD
            ======================================================== */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-600 dark:bg-amber-400"></span>
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 font-mono">
              A. WHAT I CAN HELP YOU BUILD
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-6 flex flex-col justify-between hover:border-stone-300 dark:hover:border-stone-700 transition-colors shadow-xs"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-stone-900 dark:text-stone-100 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 dark:border-stone-800/80">
                    <ul className="space-y-1.5 text-xs text-stone-600 dark:text-stone-400 font-medium">
                      {item.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-stone-400 dark:bg-stone-500"></span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            PART B: HOW TO START
            ======================================================== */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-600 dark:bg-amber-400"></span>
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 font-mono">
              B. HOW TO START
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {START_PROJECT_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-bold font-mono text-stone-400 dark:text-stone-600 mb-2">
                    {step.step}
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 mb-2">
                    {step.title.toUpperCase()}
                  </h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800/80 text-[11px] text-stone-500 dark:text-stone-400">
                  {step.details[0]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            PART C: CLIENT DELIVERY JOURNEY (Visual Iteration Centerpiece)
            ======================================================== */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-600 dark:bg-amber-400"></span>
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 font-mono">
              C. HOW THE PROJECT MOVES FROM IDEA TO PRODUCTION
            </h3>
          </div>

          {/* Desktop & Tablet Connected Horizontal Flow */}
          <div className="rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-6 sm:p-8 shadow-xs">
            {/* Stage Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pb-6 border-b border-stone-200 dark:border-stone-800">
              {WORKFLOW_STAGES.map((stage, idx) => {
                const isActive = activeWorkflowStage === idx;
                return (
                  <button
                    key={stage.number}
                    onClick={() => setActiveWorkflowStage(idx)}
                    className={`text-left p-3 rounded-lg transition-all cursor-pointer ${
                      isActive
                        ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-950 shadow-xs'
                        : 'bg-stone-100 hover:bg-stone-200 dark:bg-stone-800/80 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300'
                    }`}
                  >
                    <div className="text-xs font-mono font-bold opacity-75 mb-0.5">
                      STAGE {stage.number}
                    </div>
                    <div className="text-xs sm:text-sm font-bold tracking-tight">
                      {stage.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Detail Showcase */}
            {(() => {
              const current = WORKFLOW_STAGES[activeWorkflowStage];
              return (
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-6">
                    <div className="inline-block text-xs font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 mb-3">
                      Stage {current.number} • {current.subtitle}
                    </div>
                    <h4 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-3">
                      {current.title} Phase
                    </h4>
                    <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                      {current.description}
                    </p>

                    <div className="rounded-xl bg-stone-50 dark:bg-stone-950 p-4 border border-stone-200/80 dark:border-stone-800/80">
                      <div className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 font-mono mb-2">
                        Deliverables Handed Over
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {current.deliverables.map((del, dIdx) => (
                          <span
                            key={dIdx}
                            className="px-2.5 py-1 rounded-md bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-800 text-xs font-medium"
                          >
                            {del}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 font-mono mb-3">
                      Core Implementation Activities
                    </div>
                    <ul className="space-y-3">
                      {current.tasks.map((task, tIdx) => (
                        <li
                          key={tIdx}
                          className="flex items-start gap-3 p-3 rounded-lg bg-stone-50 dark:bg-stone-950/60 border border-stone-100 dark:border-stone-800/60"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-normal">
                            {task}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* ========================================================
            PART D: CLIENT FEEDBACK & CONTINUOUS IMPROVEMENT (Loop)
            ======================================================== */}
        <div className="rounded-2xl bg-stone-900 text-white dark:bg-stone-900/90 dark:text-stone-100 border border-stone-800 p-8 sm:p-10 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <RefreshCw className="w-3.5 h-3.5" />
                <span>D. Continuous Improvement Cycle</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                Deployment is Not the End of the Journey
              </h3>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed mb-6">
                Software evolves with your business. After deployment, real client feedback and user behavior inform subsequent development cycles.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-stone-300">
                <div className="p-3 rounded-lg bg-stone-800/70 border border-stone-700/50">
                  <span className="text-stone-400 block font-mono">01 Feedback</span>
                  <span className="font-semibold text-white">UI & UX Polish</span>
                </div>
                <div className="p-3 rounded-lg bg-stone-800/70 border border-stone-700/50">
                  <span className="text-stone-400 block font-mono">02 Refinement</span>
                  <span className="font-semibold text-white">Feature Additions</span>
                </div>
                <div className="p-3 rounded-lg bg-stone-800/70 border border-stone-700/50">
                  <span className="text-stone-400 block font-mono">03 Scale</span>
                  <span className="font-semibold text-white">Performance Tuning</span>
                </div>
              </div>
            </div>

            {/* Visual Loop Representation */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-xl bg-stone-950/60 border border-stone-800 text-center">
              <div className="font-mono text-xs text-stone-400 uppercase tracking-wider mb-3">
                Iterative Development Loop
              </div>
              <div className="space-y-2 w-full max-w-xs text-xs font-semibold">
                <div className="py-2 px-3 rounded-md bg-stone-800 text-stone-200">
                  PRODUCTION DEPLOYMENT
                </div>
                <div className="text-amber-400 font-mono">↓</div>
                <div className="py-2 px-3 rounded-md bg-stone-800 text-stone-200">
                  REAL CLIENT FEEDBACK
                </div>
                <div className="text-amber-400 font-mono">↓</div>
                <div className="py-2 px-3 rounded-md bg-stone-800 text-stone-200">
                  FEATURE IMPROVEMENTS
                </div>
                <div className="text-amber-400 font-mono">↺ NEXT CYCLE</div>
              </div>

              <button
                onClick={handleScrollToContact}
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-stone-950 text-xs font-semibold tracking-wider hover:bg-stone-100 transition-all cursor-pointer"
              >
                <span>DISCUSS YOUR IDEA</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
