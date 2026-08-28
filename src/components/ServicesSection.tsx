import React, { useState } from 'react';
import {
  Globe,
  Layers,
  RefreshCw,
  CreditCard,
  Shield,
  Search,
  Wrench,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Palette,
  Camera,
  TrendingUp,
} from 'lucide-react';
import { SERVICES_DATA, BUSINESS_SOLUTIONS } from '../data/portfolioData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenFreelancePage?: () => void;
  onSelectServiceToBook?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenFreelancePage,
  onSelectServiceToBook,
}) => {
  const [activeService, setActiveService] = useState<ServiceItem>(SERVICES_DATA[0]);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-indigo-500" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-sky-500" />;
      case 'RefreshCw':
        return <RefreshCw className="w-6 h-6 text-emerald-500" />;
      case 'CreditCard':
        return <CreditCard className="w-6 h-6 text-teal-500" />;
      case 'Shield':
        return <Shield className="w-6 h-6 text-amber-500" />;
      case 'Search':
        return <Search className="w-6 h-6 text-violet-500" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-blue-500" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-rose-500" />;
      default:
        return <Globe className="w-6 h-6 text-indigo-500" />;
    }
  };

  const getSolutionIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-indigo-500" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-pink-500" />;
      case 'CreditCard':
        return <CreditCard className="w-5 h-5 text-teal-500" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5 text-emerald-500" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-amber-500" />;
      case 'Camera':
        return <Camera className="w-5 h-5 text-sky-500" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-rose-500" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-blue-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-500" />;
    }
  };

  const handleBookService = (serviceName: string) => {
    if (onSelectServiceToBook) {
      onSelectServiceToBook(serviceName);
    }
    const el = document.getElementById('book') || document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative scroll-mt-20" aria-label="Freelance Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
              03 / Services &amp; Capabilities
            </div>
            <h2
              id="services-headline"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4"
            >
              What I Can Help You Build
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
              End-to-end full-stack engineering, custom database portals, payment integrations, and data science solutions that help your business grow online.
            </p>
          </div>

          {onOpenFreelancePage && (
            <button
              onClick={onOpenFreelancePage}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white text-xs sm:text-sm font-semibold shadow-md shadow-indigo-500/20 active:scale-95 transition-all cursor-pointer shrink-0"
            >
              <span>Explore Dedicated Freelance Page</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* 8 Core Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-16">
          {SERVICES_DATA.map((svc) => (
            <div
              key={svc.id}
              onClick={() => setActiveService(svc)}
              className={`p-6 rounded-3xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                activeService.id === svc.id
                  ? 'bg-indigo-50/60 dark:bg-indigo-950/40 border-indigo-500 dark:border-indigo-400 shadow-md ring-2 ring-indigo-500/20'
                  : 'bg-white dark:bg-slate-900/90 border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs'
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center mb-4 shadow-xs">
                  {getServiceIcon(svc.icon)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                  {svc.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {svc.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                <span>View Details</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Active Service Expanded Inspector Card */}
        <div
          id="active-service-card"
          className="rounded-3xl bg-white dark:bg-slate-900/90 border border-indigo-200/80 dark:border-indigo-900/60 p-6 sm:p-8 md:p-10 mb-16 shadow-xl"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center shrink-0">
                {getServiceIcon(activeService.icon)}
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 mb-1.5">
                  Selected Service
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {activeService.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  {activeService.description}
                </p>
              </div>
            </div>

            <button
              onClick={() => handleBookService(activeService.title)}
              className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white text-xs sm:text-sm font-semibold shadow-md shadow-indigo-500/25 active:scale-95 transition-all cursor-pointer shrink-0"
            >
              Discuss This Service →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
            <div>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                What You Get
              </h4>
              <ul className="space-y-2.5">
                {activeService.whatYouGet.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Who It Is Useful For
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                {activeService.whoIsItFor}
              </p>

              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeService.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-xs font-medium border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Business Needs / Quick Solutions Matrix from index.html */}
        <div id="need-website" className="pt-6">
          <div className="max-w-2xl mb-8">
            <div className="font-mono text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
              Solutions Matcher
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              What Do You Need For Your Business?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Find your exact business requirement below — one click connects you to the right solution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BUSINESS_SOLUTIONS.map((sol, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex flex-col justify-between hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 flex items-center justify-center mb-3">
                    {getSolutionIcon(sol.icon)}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                    {sol.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {sol.sub}
                  </p>
                </div>

                <button
                  onClick={() => handleBookService(sol.serviceKey)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                >
                  <span>Connect With Me</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
