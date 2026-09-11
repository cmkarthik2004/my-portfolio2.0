import React, { useState } from 'react';
import {
  Palette,
  Globe,
  Shield,
  BarChart3,
  Wrench,
  RefreshCw,
  CreditCard,
  Sparkles,
  BrainCircuit,
  Server,
  ArrowRight,
  CheckCircle2,
  Clock,
  Layers,
  ChevronRight,
  Check,
} from 'lucide-react';
import { START_PROJECT_STEPS, WORKFLOW_STAGES, SERVICES_DATA } from '../data/portfolioData';

interface WorkWithMeSectionProps {
  onStartProject?: (serviceName?: string) => void;
  selectedService?: string;
  onSelectService?: (serviceName: string) => void;
}

export const WorkWithMeSection: React.FC<WorkWithMeSectionProps> = ({
  onStartProject,
  selectedService,
  onSelectService,
}) => {
  const [activeWorkflowStage, setActiveWorkflowStage] = useState<number>(0);
  const [localSelectedService, setLocalSelectedService] = useState<string>(
    selectedService || 'Website Development (New)'
  );

  // Sync if prop changes
  React.useEffect(() => {
    if (selectedService) {
      setLocalSelectedService(selectedService);
    }
  }, [selectedService]);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-stone-600 dark:text-stone-300" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'CreditCard':
        return <CreditCard className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-rose-600 dark:text-rose-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
    }
  };

  const handleServiceSelect = (title: string) => {
    setLocalSelectedService(title);
    if (onSelectService) {
      onSelectService(title);
    }
  };

  const handleDiscussService = (title: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLocalSelectedService(title);
    if (onSelectService) {
      onSelectService(title);
    }
    if (onStartProject) {
      onStartProject(title);
    } else {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="work-with-me" className="py-14 sm:py-20 md:py-28 relative scroll-mt-20" aria-label="Work With Me">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header with Handwritten Annotation */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10 sm:mb-16 relative">
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
              Transparent, professional services tailored to your technical requirements, business goals, and timeline.
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
            PART A: WHAT I CAN HELP YOU BUILD (Interactive Services)
            ======================================================== */}
        <div className="mb-12 sm:mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 mb-5 sm:mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-600 dark:bg-amber-400"></span>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 font-mono">
                A. WHAT I CAN HELP YOU BUILD
              </h3>
            </div>
            <span className="text-xs text-stone-500 dark:text-stone-400 font-mono">
              Click any service to select &amp; discuss
            </span>
          </div>

          {/* Grid of Interactive Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {SERVICES_DATA.map((service) => {
              const isSelected = localSelectedService === service.title;
              return (
                <div
                  key={service.id}
                  onClick={() => handleServiceSelect(service.title)}
                  className={`group rounded-xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 cursor-pointer border relative ${
                    isSelected
                      ? 'bg-amber-500/5 dark:bg-amber-400/5 border-amber-500 dark:border-amber-400 shadow-md ring-2 ring-amber-500/30 dark:ring-amber-400/30 -translate-y-1'
                      : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:-translate-y-1 hover:border-stone-300 dark:hover:border-stone-700 hover:shadow-md'
                  }`}
                >
                  <div>
                    {/* Top row with icon & selection indicator */}
                    <div className="flex items-center justify-between gap-3 mb-3.5">
                      <div className="w-10 h-10 rounded-lg bg-stone-100 dark:bg-stone-800 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                        {getServiceIcon(service.icon)}
                      </div>

                      {isSelected ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 dark:text-amber-300 bg-amber-500/15 dark:bg-amber-400/15 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                          <Check className="w-3 h-3" />
                          <span>Selected</span>
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono text-stone-400 uppercase">
                          {service.category}
                        </span>
                      )}
                    </div>

                    <h4 className="text-base font-bold text-stone-900 dark:text-stone-100 mb-2 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    {/* Deliverables snippet */}
                    <div className="pt-3 border-t border-stone-100 dark:border-stone-800/80 mb-4">
                      <div className="text-[11px] font-mono text-stone-400 uppercase tracking-wider mb-2">
                        Deliverables Handed Over:
                      </div>
                      <ul className="space-y-1 text-xs text-stone-600 dark:text-stone-400">
                        {service.deliverables.slice(0, 3).map((del, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-amber-600 dark:bg-amber-400"></span>
                            <span className="truncate">{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Interactive Button to Pre-Select and Jump to Contact Section */}
                    <button
                      type="button"
                      onClick={(e) => handleDiscussService(service.title, e)}
                      className={`w-full min-h-[40px] inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-amber-600 hover:bg-amber-700 text-white dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-stone-950 shadow-xs'
                          : 'bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200'
                      }`}
                    >
                      <span>Discuss This Service</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            PART B: HOW TO START
            ======================================================== */}
        <div className="mb-12 sm:mb-20">
          <div className="flex items-center gap-2 mb-5 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-600 dark:bg-amber-400"></span>
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 font-mono">
              B. HOW TO START
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {START_PROJECT_STEPS.map((step) => (
              <div
                key={step.step}
                className="group rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-4 sm:p-5 flex flex-col justify-between hover:-translate-y-0.5 hover:shadow-xs hover:border-stone-300 dark:hover:border-stone-700 transition-all duration-200"
              >
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-stone-400 dark:text-stone-600 mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
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
        <div className="mb-12 sm:mb-20">
          <div className="flex items-center gap-2 mb-5 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-600 dark:bg-amber-400"></span>
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 font-mono">
              C. HOW THE PROJECT MOVES FROM IDEA TO PRODUCTION
            </h3>
          </div>

          {/* Desktop & Tablet Connected Horizontal Flow */}
          <div className="rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-4 sm:p-6 md:p-8 shadow-xs">
            {/* Stage Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pb-5 sm:pb-6 border-b border-stone-200 dark:border-stone-800">
              {WORKFLOW_STAGES.map((stage, idx) => {
                const isActive = activeWorkflowStage === idx;
                return (
                  <button
                    key={stage.number}
                    onClick={() => setActiveWorkflowStage(idx)}
                    className={`text-left p-2.5 sm:p-3 min-h-[44px] rounded-lg transition-all cursor-pointer ${
                      isActive
                        ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-950 shadow-xs'
                        : 'bg-stone-100 hover:bg-stone-200 dark:bg-stone-800/80 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300'
                    }`}
                  >
                    <div className="text-[11px] sm:text-xs font-mono font-bold opacity-75 mb-0.5">
                      STAGE {stage.number}
                    </div>
                    <div className="text-xs sm:text-sm font-bold tracking-tight truncate">
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
                <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                  <div className="lg:col-span-6">
                    <div className="inline-block text-xs font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 mb-3">
                      Stage {current.number} • {current.subtitle}
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100 mb-3">
                      {current.title} Phase
                    </h4>
                    <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                      {current.description}
                    </p>

                    <div className="rounded-xl bg-stone-50 dark:bg-stone-950 p-3.5 sm:p-4 border border-stone-200/80 dark:border-stone-800/80">
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
                    <ul className="space-y-2.5 sm:space-y-3">
                      {current.tasks.map((task, tIdx) => (
                        <li
                          key={tIdx}
                          className="flex items-start gap-3 p-2.5 sm:p-3 rounded-lg bg-stone-50 dark:bg-stone-950/60 border border-stone-100 dark:border-stone-800/60 transition-colors hover:bg-stone-100 dark:hover:bg-stone-900"
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
        <div className="rounded-2xl bg-stone-900 text-white dark:bg-stone-900/90 dark:text-stone-100 border border-stone-800 p-5 sm:p-8 md:p-10 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <RefreshCw className="w-3.5 h-3.5" />
                <span>D. Continuous Improvement Cycle</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-bold tracking-tight mb-3">
                Deployment is Not the End of the Journey
              </h3>
              <p className="text-xs sm:text-base text-stone-300 leading-relaxed mb-5 sm:mb-6">
                Software evolves with your business. After deployment, real client feedback and user behavior inform subsequent development cycles.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 text-xs text-stone-300">
                <div className="p-3 rounded-lg bg-stone-800/70 border border-stone-700/50 hover:border-stone-600 transition-colors hover:-translate-y-0.5">
                  <span className="text-stone-400 block font-mono">01 Feedback</span>
                  <span className="font-semibold text-white">UI &amp; UX Polish</span>
                </div>
                <div className="p-3 rounded-lg bg-stone-800/70 border border-stone-700/50 hover:border-stone-600 transition-colors hover:-translate-y-0.5">
                  <span className="text-stone-400 block font-mono">02 Refinement</span>
                  <span className="font-semibold text-white">Feature Additions</span>
                </div>
                <div className="p-3 rounded-lg bg-stone-800/70 border border-stone-700/50 hover:border-stone-600 transition-colors hover:-translate-y-0.5">
                  <span className="text-stone-400 block font-mono">03 Scale</span>
                  <span className="font-semibold text-white">Performance Tuning</span>
                </div>
              </div>
            </div>

            {/* Visual Loop Representation */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-4 sm:p-6 rounded-xl bg-stone-950/60 border border-stone-800 text-center">
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
                onClick={() => handleDiscussService(localSelectedService)}
                className="mt-5 sm:mt-6 w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white text-stone-950 text-xs font-semibold tracking-wider hover:bg-stone-100 transition-all cursor-pointer"
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
