import React, { useState, useEffect } from 'react';
import {
  FileText,
  Code2,
  Cpu,
  ShieldCheck,
  Rocket,
  LifeBuoy,
  RefreshCw,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Layers,
  Terminal,
  Server,
  Zap,
  Clock,
  MessageSquare,
} from 'lucide-react';

interface StageData {
  id: string;
  number: string;
  title: string;
  shortTag: string;
  quote: string;
  icon: React.ElementType;
  accentColor: string;
  tasks: string[];
  deliverables: string[];
  transparency: string;
  tools: string[];
}

const STAGES: StageData[] = [
  {
    id: 'requirements',
    number: '01',
    title: 'Requirements',
    shortTag: 'Discovery & Scope',
    quote: "Understand the client's goals, users, business requirements and project scope.",
    icon: FileText,
    accentColor: 'from-blue-500 to-indigo-500',
    tasks: [
      'Conduct direct discovery discussions with the client to uncover business objectives',
      'Map user personas, system workflows, and core feature priorities',
      'Architect database schemas, entity relationships, and API contract specifications',
      'Define clear project milestones, delivery timelines, and budget scope',
    ],
    deliverables: [
      'Technical Scope & Milestone Document',
      'Database Entity-Relationship Blueprint',
      'Agreed Feature Checklist & Timeline',
    ],
    transparency: 'Direct client consultation via call or chat with clear milestone sign-off before coding starts.',
    tools: ['System Architecture Design', 'DB Schema Mapping', 'Figma / Wireframes', 'API Contracts'],
  },
  {
    id: 'development',
    number: '02',
    title: 'Development',
    shortTag: 'Architecture & Build',
    quote: 'Build the application using the appropriate technologies, architecture and integrations.',
    icon: Code2,
    accentColor: 'from-indigo-500 to-violet-500',
    tasks: [
      'Write modular, clean, and maintainable backend logic in Python (Django/Flask) or PHP',
      'Build responsive, accessible, and fast client-side user interfaces (React / Tailwind)',
      'Integrate critical third-party APIs like Razorpay payment gateway with secure webhooks',
      'Implement strict authentication, session management, and relational database queries',
    ],
    deliverables: [
      'Functional Frontend & Responsive UI',
      'Secure RESTful APIs & Backend Services',
      'Payment Gateway Integration & Webhooks',
    ],
    transparency: 'Regular staging updates and code repository commits so you can preview progress in real-time.',
    tools: ['Python (Django / Flask)', 'PHP & Modern JS', 'MySQL / PostgreSQL', 'Razorpay API', 'Tailwind CSS'],
  },
  {
    id: 'testing',
    number: '03',
    title: 'Testing',
    shortTag: 'QA & Debugging',
    quote: 'Test functionality, identify issues, debug problems and verify that the application behaves as expected.',
    icon: ShieldCheck,
    accentColor: 'from-violet-500 to-fuchsia-500',
    tasks: [
      'Execute cross-browser, cross-device, and responsive viewport validation',
      'Test payment corner cases, webhook retries, transaction fallbacks, and edge states',
      'Optimize database queries, indexing, and asset load times for snappy performance',
      'Audit security headers, CSRF protection, input sanitization, and SQL injection defense',
    ],
    deliverables: [
      'Verified Bug-Free Staging Build',
      'Security & Input Validation Audit',
      'Performance & Mobile Optimization',
    ],
    transparency: 'Staging environment demo walkthrough for client acceptance testing and feedback gathering.',
    tools: ['Cross-Device QA', 'Edge-Case Debugging', 'Security Audits', 'Query Performance Profiling'],
  },
  {
    id: 'deployment',
    number: '04',
    title: 'Deployment',
    shortTag: 'Launch & Hosting',
    quote: 'Deploy the application to the appropriate production environment and configure the required services.',
    icon: Rocket,
    accentColor: 'from-fuchsia-500 to-rose-500',
    tasks: [
      'Provision and harden Linux VPS hosting environments (Ubuntu Server)',
      'Configure Nginx reverse proxies, Gunicorn/PHP-FPM processes, and Systemd daemons',
      'Issue and automate SSL certificates via Certbot for HTTPS encryption',
      'Execute database migrations, link custom DNS domains, and perform post-launch verification',
    ],
    deliverables: [
      'Live Production URL & HTTPS Encryption',
      'Configured Linux VPS & Web Server',
      'Automated Database & Asset Backups',
    ],
    transparency: 'Seamless DNS transition with zero downtime and verified live production smoke tests.',
    tools: ['Linux (Ubuntu VPS)', 'Nginx Reverse Proxy', 'Certbot SSL', 'Gunicorn / PHP-FPM', 'DNS Management'],
  },
  {
    id: 'support',
    number: '05',
    title: 'Production Support',
    shortTag: 'Monitoring & Care',
    quote: 'Monitor, maintain, troubleshoot and provide ongoing support after deployment.',
    icon: LifeBuoy,
    accentColor: 'from-emerald-500 to-teal-500',
    tasks: [
      'Monitor system uptime, server memory usage, error logs, and database health',
      'Deliver client handover sessions and administrative workflow documentation',
      'Provide rapid troubleshooting and hotfixes for emergent production issues',
      'Collect real-world user feedback to drive continuous improvements and new features',
    ],
    deliverables: [
      'Admin Handover & Operational Guide',
      'Ongoing Health & Uptime Maintenance',
      'Feature Extension Roadmap',
    ],
    transparency: 'Reliable post-launch availability with structured check-ins and direct developer support.',
    tools: ['Uptime Monitoring', 'Systemd Service Logs', 'Scheduled Backups', 'Client Handover Docs'],
  },
];

export const WorkflowSection: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = STAGES[activeStageIndex];

  const handleNext = () => {
    setActiveStageIndex((prev) => (prev + 1) % STAGES.length);
  };

  const handlePrev = () => {
    setActiveStageIndex((prev) => (prev - 1 + STAGES.length) % STAGES.length);
  };

  return (
    <section
      id="process"
      className="py-14 sm:py-20 md:py-28 relative scroll-mt-20 overflow-hidden"
      aria-label="Freelance Development Workflow"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            05 / Agile-Inspired Workflow
          </div>
          <h2
            id="workflow-headline"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight"
          >
            How I Build
          </h2>
          <p className="text-base sm:text-lg font-medium text-slate-700 dark:text-slate-200 mt-2">
            "As a freelance full-stack developer, I handle projects from requirements through deployment and ongoing production support."
          </p>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            "From understanding the requirement to keeping the application running in production, I work across the complete development lifecycle."
          </p>
        </div>

        {/* Desktop Connected Stage Progress Track */}
        <div className="hidden lg:block mb-10">
          <div className="relative p-6 rounded-3xl bg-slate-900/90 dark:bg-slate-900/95 border border-slate-800 backdrop-blur-md shadow-xl text-white">
            {/* SVG Connecting Track Line */}
            <div className="absolute top-1/2 left-12 right-12 h-1 -translate-y-8 bg-slate-800 z-0">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 via-sky-400 to-teal-400 transition-all duration-500 rounded-full"
                style={{ width: `${(activeStageIndex / (STAGES.length - 1)) * 100}%` }}
              />
            </div>

            {/* 5 Stage Horizontal Nodes */}
            <div className="relative z-10 grid grid-cols-5 gap-3">
              {STAGES.map((stage, idx) => {
                const isActive = idx === activeStageIndex;
                const isPassed = idx < activeStageIndex;
                const StageIcon = stage.icon;

                return (
                  <button
                    key={stage.id}
                    id={`workflow-stage-btn-${stage.id}`}
                    onClick={() => setActiveStageIndex(idx)}
                    className={`flex flex-col items-center text-center p-3 rounded-2xl transition-all duration-300 group cursor-pointer ${
                      isActive
                        ? 'bg-indigo-950/80 border border-indigo-500/50 shadow-lg shadow-indigo-500/20 transform -translate-y-1'
                        : 'hover:bg-slate-800/60 border border-transparent'
                    }`}
                  >
                    {/* Node Circle */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono text-sm font-bold transition-all duration-300 mb-3 shadow-md ${
                        isActive
                          ? 'bg-gradient-to-tr from-indigo-500 to-sky-400 text-white ring-4 ring-indigo-500/30 scale-110'
                          : isPassed
                          ? 'bg-indigo-900/80 text-indigo-300 border border-indigo-700/50'
                          : 'bg-slate-800 text-slate-400 group-hover:text-slate-200 border border-slate-700'
                      }`}
                    >
                      <StageIcon className="w-5 h-5" />
                    </div>

                    <div className="font-mono text-xs text-indigo-400 font-semibold mb-0.5">
                      Stage {stage.number}
                    </div>
                    <div
                      className={`text-sm font-bold tracking-tight transition-colors ${
                        isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                      }`}
                    >
                      {stage.title}
                    </div>
                    <div className="text-[11px] text-slate-400 font-sans mt-0.5">{stage.shortTag}</div>
                  </button>
                );
              })}
            </div>

            {/* Iterative Agile Loop Visual Connector */}
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between px-2 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-indigo-300 font-medium">
                <RefreshCw className="w-4 h-4 text-indigo-400 animate-spin-slow" />
                <span className="font-semibold text-white">Iterative Agile Loop:</span>
                <span>Production feedback feeds seamlessly into ongoing enhancements & requirements.</span>
              </div>

              <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
                <span>01 Discovery</span>
                <span>→</span>
                <span>02 Build</span>
                <span>→</span>
                <span>03 QA</span>
                <span>→</span>
                <span>04 Launch</span>
                <span>→</span>
                <span>05 Support</span>
                <span className="text-emerald-400 font-bold">↺ Loop</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Step Selector Pills */}
        <div className="block lg:hidden mb-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
            {STAGES.map((stage, idx) => {
              const isActive = idx === activeStageIndex;
              return (
                <button
                  key={stage.id}
                  id={`workflow-mobile-pill-${stage.id}`}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`shrink-0 min-h-[40px] flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl font-mono text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <span>{stage.number}</span>
                  <span className="font-sans font-medium">{stage.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Deep-Dive Card */}
        <div
          id="workflow-stage-detail-card"
          className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xl overflow-hidden transition-all duration-300"
        >
          {/* Stage Top Banner */}
          <div className="p-5 sm:p-8 bg-gradient-to-r from-slate-50 to-indigo-50/40 dark:from-slate-900 dark:to-indigo-950/30 border-b border-slate-200/80 dark:border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-mono font-bold text-lg sm:text-xl shadow-lg shadow-indigo-500/25 shrink-0">
                  {activeStage.number}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                      Stage {activeStage.number} • {activeStage.shortTag}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {activeStage.title}
                  </h3>
                </div>
              </div>

              {/* Prev / Next Stage Controls */}
              <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                <button
                  id="workflow-prev-btn"
                  onClick={handlePrev}
                  className="min-h-[38px] flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                  aria-label="Previous stage"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>
                <button
                  id="workflow-next-btn"
                  onClick={handleNext}
                  className="min-h-[38px] flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-xs cursor-pointer"
                  aria-label="Next stage"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Core Stage Quote / Promise */}
            <div className="mt-4 sm:mt-5 p-3.5 sm:p-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-indigo-100 dark:border-indigo-900/50">
              <p className="text-sm sm:text-lg font-medium text-slate-800 dark:text-slate-100 italic leading-relaxed">
                "{activeStage.quote}"
              </p>
            </div>
          </div>

          {/* Stage Core Content Grid */}
          <div className="p-4 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Left: What I Do (Tasks) */}
            <div className="lg:col-span-7">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-indigo-500" />
                <span>Core Engineering & Project Actions</span>
              </h4>

              <div className="space-y-3">
                {activeStage.tasks.map((task, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/90 text-sm text-slate-700 dark:text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{task}</span>
                  </div>
                ))}
              </div>

              {/* Client Communication & Transparency Touchpoint */}
              <div className="mt-5 p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 flex items-start gap-3">
                <MessageSquare className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
                <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  <span className="font-bold text-slate-900 dark:text-white">Transparency Touchpoint: </span>
                  {activeStage.transparency}
                </div>
              </div>
            </div>

            {/* Right: Concrete Deliverables & Tech In Use */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              {/* Client Deliverables */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Tangible Deliverables to You</span>
                </h4>

                <div className="space-y-2.5">
                  {activeStage.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 border border-slate-200/70 dark:border-slate-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Environments In Action */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Tools & Stack in This Stage</span>
                </h4>

                <div className="flex flex-wrap gap-1.5">
                  {activeStage.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 font-mono text-xs border border-indigo-200/60 dark:border-indigo-800/60"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Agile / Continuous Improvements Callout Banner */}
        <div className="mt-8 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-indigo-900/50 shadow-xl text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 shrink-0">
              <RefreshCw className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <span>The Continuous Improvement Loop</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-xs border border-emerald-500/30">
                  Agile-Inspired
                </span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                Software doesn't stop at deployment. As your real-world user base grows, feedback naturally loops back into requirements, feature refinement, query optimization, and continuous security maintenance.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-semibold text-xs transition-colors shadow-md"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
