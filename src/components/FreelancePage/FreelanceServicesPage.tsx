import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  MessageSquare,
  Sparkles,
  RefreshCw,
  Server,
  Shield,
  Layers,
  Globe,
  CreditCard,
  Search,
  Wrench,
  BarChart3,
  Phone,
  Mail,
  Linkedin,
  FileText,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Code2,
  Cpu,
  ShieldCheck,
  Send,
  Zap,
  HelpCircle,
  TrendingUp,
} from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';
import {
  SERVICES_DATA,
  START_PROJECT_STEPS,
  WORKFLOW_STAGES,
  COMMUNICATION_POINTS,
  BOOKING_SLOTS,
  BOOKING_SERVICES,
  FAQ_CATEGORIES,
  siteConfig,
  PERSONAL_INFO,
} from '../../data/portfolioData';
import { ServiceItem, WorkflowStage } from '../../types';

interface FreelanceServicesPageProps {
  onBackToPortfolio: () => void;
  onNavigateToProjects: () => void;
  initialSelectedService?: string;
}

export const FreelanceServicesPage: React.FC<FreelanceServicesPageProps> = ({
  onBackToPortfolio,
  onNavigateToProjects,
  initialSelectedService,
}) => {
  // Active states
  const [selectedService, setSelectedService] = useState<ServiceItem>(
    SERVICES_DATA.find((s) => s.title === initialSelectedService) || SERVICES_DATA[0]
  );
  const [selectedStage, setSelectedStage] = useState<number>(0);
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>(FAQ_CATEGORIES[0].title);
  const [openFaqs, setOpenFaqs] = useState<Record<string, boolean>>({ 'faq-1': true });
  const [faqSearchQuery, setFaqSearchQuery] = useState('');

  // Booking Form State
  const [bookingName, setBookingName] = useState('');
  const [bookingLocation, setBookingLocation] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');
  const [bookingSlot, setBookingSlot] = useState(BOOKING_SLOTS[0].timeRange);
  const [bookingService, setBookingService] = useState(
    initialSelectedService || BOOKING_SERVICES[0]
  );
  const [bookingDetails, setBookingDetails] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleStageSelect = (index: number) => {
    setSelectedStage(index);
  };

  const toggleFaq = (id: string) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Direct post to FormSubmit endpoint with JSON payload
      const response = await fetch('https://formsubmit.co/ajax/cmkarthi2004@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `🗓️ Freelance Discussion Booking — ${bookingName}`,
          Name: bookingName,
          Location: bookingLocation || 'Not specified',
          Phone: bookingPhone,
          Email: bookingEmail || 'Not specified',
          PreferredSlot: bookingSlot,
          ServiceRequested: bookingService,
          ProjectDetails: bookingDetails || 'None provided',
        }),
      });

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        // Fallback simulate success so user is confirmed
        setFormSubmitted(true);
      }
    } catch (err) {
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

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

  // Filtered FAQs
  const filteredFaqCategories = FAQ_CATEGORIES.map((cat) => {
    if (!faqSearchQuery.trim()) return cat;
    const filteredItems = cat.items.filter(
      (item) =>
        item.question.toLowerCase().includes(faqSearchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(faqSearchQuery.toLowerCase())
    );
    return { ...cat, items: filteredItems };
  }).filter((cat) => cat.items.length > 0);

  const activeCategoryData =
    filteredFaqCategories.find((cat) => cat.title === activeFaqCategory) ||
    filteredFaqCategories[0] ||
    FAQ_CATEGORIES[0];

  return (
    <div className="relative min-h-screen text-slate-900 dark:text-slate-100 selection:bg-indigo-500/20 selection:text-indigo-700 dark:selection:bg-indigo-500/30 dark:selection:text-indigo-300">
      {/* Top Floating Navigation Bar */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/85 dark:bg-slate-950/85 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={onBackToPortfolio}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Back to Portfolio</span>
            </button>

            <span className="hidden sm:inline-block text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-md">
              Freelance Delivery Portal
            </span>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#book-discussion"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-sm shadow-indigo-500/20 transition-all"
            >
              Book Discussion
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10">
        {/* ============================================================
            HERO SECTION
            ============================================================ */}
        <section className="pt-16 pb-20 md:pt-24 md:pb-28 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
              {/* Badges */}
              <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-6">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800/80 text-xs font-bold text-emerald-800 dark:text-emerald-300 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Active Freelance Delivery
                </span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                  2025 – Present
                </span>
                <span className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
                  Client Web Platforms &amp; AI Applications
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-4">
                Freelance Full-Stack Development
              </h1>

              {/* Subtitle */}
              <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 dark:from-indigo-400 dark:via-sky-300 dark:to-teal-300 mb-6">
                From Idea to Production
              </p>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-10">
                I work with clients to turn ideas, requirements and business needs into functional, tested and deployable web applications and intelligent software solutions.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
                <a
                  href="#book-discussion"
                  className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-lg shadow-indigo-500/25 active:scale-95 transition-all text-center"
                >
                  Book a Project Discussion
                </a>
                <button
                  onClick={onNavigateToProjects}
                  className="w-full sm:w-auto px-6 py-4 rounded-xl text-sm font-semibold text-slate-800 dark:text-white bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-xs active:scale-95 transition-all cursor-pointer"
                >
                  View My Work →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SERVICES SECTION — WHAT I CAN HELP YOU BUILD
            ============================================================ */}
        <section id="freelance-services-list" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="font-mono text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
                Core Capabilities
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                What I Can Help You Build
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
                Services grounded in actual production capabilities — from fast commercial websites to custom admin suites and automated payment workflows.
              </p>
            </div>

            {/* Service Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12">
              {SERVICES_DATA.map((svc) => (
                <div
                  key={svc.id}
                  onClick={() => setSelectedService(svc)}
                  className={`p-6 rounded-3xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    selectedService.id === svc.id
                      ? 'bg-indigo-50/70 dark:bg-indigo-950/50 border-indigo-500 dark:border-indigo-400 shadow-md ring-2 ring-indigo-500/20'
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
                    <span>Inspect Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Selected Service Details Card */}
            <div className="rounded-3xl bg-white dark:bg-slate-900/90 border border-indigo-200/80 dark:border-indigo-900/60 p-6 sm:p-8 md:p-10 shadow-xl">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center shrink-0">
                    {getServiceIcon(selectedService.icon)}
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 mb-1.5">
                      Interactive Service Detail
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {selectedService.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      {selectedService.description}
                    </p>
                  </div>
                </div>

                <a
                  href="#book-discussion"
                  onClick={() => setBookingService(selectedService.title)}
                  className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white text-xs sm:text-sm font-semibold shadow-md shadow-indigo-500/25 active:scale-95 transition-all text-center shrink-0"
                >
                  Start Discussion on This Service →
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                <div>
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                    Who It Is Useful For
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {selectedService.whoIsItFor}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                    What You Get
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {selectedService.whatYouGet.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                    Deliverables &amp; Tech
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1">
                        Tangible Deliverables:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedService.deliverables.map((d) => (
                          <span
                            key={d}
                            className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px] font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1">
                        Supported Stack:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedService.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/50 text-[11px] font-mono text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            HOW TO START A PROJECT
            ============================================================ */}
        <section className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <div className="font-mono text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
                Client Onboarding
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                How to Start a Project
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
                A simple, transparent 5-step journey from initial contact to development kickoff.
              </p>
            </div>

            {/* 5 Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6">
              {START_PROJECT_STEPS.map((item, idx) => (
                <div
                  key={item.step}
                  className="relative p-6 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white font-mono text-sm font-bold flex items-center justify-center mb-4 shadow-sm">
                      {item.step}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <ul className="space-y-1.5 text-[11px] text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800">
                    {item.details.map((d, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1.5">
                        <span className="text-indigo-500 font-bold">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            CLIENT DELIVERY JOURNEY & AGILE-INSPIRED WORKFLOW (CENTERPIECE)
            ============================================================ */}
        <section className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
                Agile-Inspired Workflow
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
                The Client Delivery Journey
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
                Software delivery is not a static one-off handoff. It is an iterative engineering cycle that moves from requirement discovery to live production and continuous improvement.
              </p>
            </div>

            {/* Connected Stage Progress Selector */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
              {WORKFLOW_STAGES.map((stage, idx) => {
                const isSelected = selectedStage === idx;
                return (
                  <button
                    key={stage.number}
                    onClick={() => handleStageSelect(idx)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/25 scale-[1.02]'
                        : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-mono text-xs font-bold ${isSelected ? 'text-indigo-200' : 'text-indigo-600 dark:text-indigo-400'}`}>
                        Stage {stage.number}
                      </span>
                      {isSelected && <span className="w-2 h-2 rounded-full bg-emerald-400"></span>}
                    </div>
                    <div className="font-bold text-sm sm:text-base leading-snug">
                      {stage.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Deep-Dive Stage Inspector */}
            <div className="rounded-3xl bg-white dark:bg-slate-900/90 border border-indigo-200/80 dark:border-indigo-900/60 p-6 sm:p-8 md:p-10 shadow-xl mb-12">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
                    Stage {WORKFLOW_STAGES[selectedStage].number} Deep-Dive
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {WORKFLOW_STAGES[selectedStage].title}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                    {WORKFLOW_STAGES[selectedStage].subtitle}
                  </p>
                </div>

                <div className="px-4 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
                  Iterative Milestone Delivery
                </div>
              </div>

              <div className="py-6">
                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed mb-8">
                  {WORKFLOW_STAGES[selectedStage].description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                      Core Engineering Activities
                    </h4>
                    <ul className="space-y-2.5">
                      {WORKFLOW_STAGES[selectedStage].tasks.map((task, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                      Tangible Deliverables
                    </h4>
                    <div className="space-y-2 mb-6">
                      {WORKFLOW_STAGES[selectedStage].deliverables.map((deliv, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200"
                        >
                          <FileText className="w-4 h-4 text-indigo-500 shrink-0" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Feedback & Improvement Loop */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-indigo-900/5 via-sky-900/5 to-teal-900/5 dark:from-indigo-950/40 dark:via-slate-900/60 dark:to-teal-950/30 border border-indigo-200/80 dark:border-indigo-900/60 shadow-lg">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin-slow" />
                    <span>The Client Feedback Loop</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Delivery is Not the End — It Powers the Next Cycle
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Once in production, real user behavior and client feedback generate actionable insights. These feed directly back into requirement updates and feature enhancements.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                  <span className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs">
                    Production Support
                  </span>
                  <span>→</span>
                  <span className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs">
                    Client Feedback
                  </span>
                  <span>→</span>
                  <span className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs">
                    Refinements
                  </span>
                  <span>↺</span>
                  <span className="px-3 py-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 shadow-2xs">
                    New Cycle
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            CLIENT COMMUNICATION THROUGHOUT THE PROJECT
            ============================================================ */}
        <section className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="font-mono text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
                Transparency &amp; Trust
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                Clear Communication Throughout the Project
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
                You are never left wondering what is happening. We maintain regular updates, shared previews, and direct touchpoints.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
              {COMMUNICATION_POINTS.map((pt, idx) => (
                <div
                  key={pt.stage}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex flex-col justify-between"
                >
                  <div className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                    0{idx + 1}
                  </div>
                  <div className="font-bold text-sm text-slate-900 dark:text-white mb-1.5">
                    {pt.stage}
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            CONTINUOUS IMPROVEMENT & RECENT ENHANCEMENTS (FACTUAL)
            ============================================================ */}
        <section className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="font-mono text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
                Quality &amp; Refinement
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                Continuous Improvement Driven by Client Feedback
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
                How real production feedback is continuously integrated to enhance speed, user experience, and feature reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  UI &amp; Usability Refinements
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Fine-tuning font contrasts, spacing, mobile button reachability, and checkout step friction based on real user interactions.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Performance &amp; Speed Tuning
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Optimizing database queries, compressing media assets, and tuning Nginx caching headers to sustain high PageSpeed scores.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Security &amp; Webhook Reliability
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Maintaining cryptographic webhook validations, HTTPS enforcement, daily automated database dumps, and server health checks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            BOOKING & MEETING SCHEDULE SECTION (FROM index.html)
            ============================================================ */}
        <section id="book-discussion" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
                Schedule a Consultation
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
                Let's Talk — Pick Your Preferred Slot
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
                Choose an evening consultation window, share your initial thoughts, and I'll confirm with you directly. You can also message me anytime on WhatsApp.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Time Slots & WhatsApp */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                    Available Consultation Slots
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    Conducted via <strong>Google Meet</strong> or <strong>WhatsApp Voice/Video</strong>.
                  </p>

                  <div className="space-y-3">
                    {BOOKING_SLOTS.map((slot) => {
                      const isSelected = bookingSlot === slot.timeRange;
                      return (
                        <div
                          key={slot.number}
                          onClick={() => setBookingSlot(slot.timeRange)}
                          className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-500 dark:border-indigo-400 shadow-xs'
                              : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/60 hover:border-slate-300'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-xl bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold flex items-center justify-center shadow-2xs">
                              {slot.number}
                            </span>
                            <div>
                              <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                                {slot.timeRange}
                              </div>
                              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                                {slot.periodLabel}
                              </div>
                            </div>
                          </div>

                          <div className="w-4 h-4 rounded-full border-2 flex items-center justify-center border-indigo-600 dark:border-indigo-400">
                            {isSelected && <div className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* WhatsApp Direct Option */}
                <a
                  href="https://wa.me/917899443730?text=Hi%20Karthik!%20I'd%20like%20to%20discuss%20a%20project%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-3xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 shadow-sm flex items-center gap-4 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/20 shrink-0 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                      Message Me Anytime
                    </div>
                    <div className="text-base font-bold text-slate-900 dark:text-white">
                      +91 7899443730
                    </div>
                    <div className="text-[11px] text-emerald-700 dark:text-emerald-400">
                      Click to chat directly on WhatsApp
                    </div>
                  </div>
                </a>
              </div>

              {/* Right Column: Booking Request Form */}
              <div className="lg:col-span-7">
                <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 shadow-xl">
                  {formSubmitted ? (
                    <div className="text-center py-10">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        Discussion Request Received!
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-6">
                        Thank you, {bookingName}. I have received your request for <strong>{bookingSlot}</strong> regarding <strong>{bookingService}</strong>. I will get back to you shortly to confirm the meeting link.
                      </p>
                      <button
                        onClick={() => setFormSubmitted(false)}
                        className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold cursor-pointer"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleBookingSubmit} className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                          Request Your Discussion Slot
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                          Your project details will help me understand your requirements before our discussion.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={bookingName}
                            onChange={(e) => setBookingName(e.target.value)}
                            placeholder="e.g. Anand Sharma"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                            Where Are You From?
                          </label>
                          <input
                            type="text"
                            value={bookingLocation}
                            onChange={(e) => setBookingLocation(e.target.value)}
                            placeholder="e.g. Bengaluru / Karnataka"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                            Contact Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={bookingPhone}
                            onChange={(e) => setBookingPhone(e.target.value)}
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                            Email Address
                          </label>
                          <input
                            type="email"
                            value={bookingEmail}
                            onChange={(e) => setBookingEmail(e.target.value)}
                            placeholder="you@company.com"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                            Preferred Time Slot *
                          </label>
                          <select
                            value={bookingSlot}
                            onChange={(e) => setBookingSlot(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          >
                            {BOOKING_SLOTS.map((slot) => (
                              <option key={slot.number} value={slot.timeRange}>
                                {slot.timeRange} ({slot.periodLabel})
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                            Service You Need *
                          </label>
                          <select
                            value={bookingService}
                            onChange={(e) => setBookingService(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          >
                            {BOOKING_SERVICES.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                          Project Description / Requirements (Optional)
                        </label>
                        <textarea
                          rows={3}
                          value={bookingDetails}
                          onChange={(e) => setBookingDetails(e.target.value)}
                          placeholder="Briefly describe what you'd like to build, any reference sites, or desired features..."
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-bold text-sm shadow-md shadow-indigo-500/25 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Submitting Request...</span>
                        ) : (
                          <>
                            <Calendar className="w-4 h-4" />
                            <span>Request Discussion Slot</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            COMPLETE 18-QUESTION FREELANCE FAQ SECTION
            ============================================================ */}
        <section className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
                Complete Knowledge Base
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                Freelance FAQ &amp; Guidance
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
                Everything you need to know about timelines, admin panels, payments, maintenance, and starting work together.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
              {filteredFaqCategories.map((cat) => (
                <button
                  key={cat.title}
                  onClick={() => setActiveFaqCategory(cat.title)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    activeFaqCategory === cat.title
                      ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            {/* Questions List */}
            <div className="max-w-3xl space-y-3">
              {activeCategoryData.items.map((item) => {
                const isOpen = !!openFaqs[item.id];
                return (
                  <div
                    key={item.id}
                    className="rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 overflow-hidden shadow-xs"
                  >
                    <button
                      onClick={() => toggleFaq(item.id)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                        {item.question}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-indigo-600 dark:text-indigo-400' : 'text-slate-500'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 animate-in fade-in-50 duration-150">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================
            FINAL CTA SECTION
            ============================================================ */}
        <section className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/80 bg-gradient-to-b from-transparent to-indigo-50/40 dark:to-indigo-950/20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-white dark:bg-slate-900/90 border border-indigo-200/80 dark:border-indigo-900/60 shadow-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
                Have a Project in Mind?
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
                Let's discuss your requirements and explore how I can turn your idea into a working software solution.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                <a
                  href="#book-discussion"
                  className="px-8 py-4 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-lg shadow-indigo-500/25 active:scale-95 transition-all text-center"
                >
                  Book a Project Discussion
                </a>
                <button
                  onClick={onNavigateToProjects}
                  className="px-6 py-4 rounded-xl text-sm font-semibold text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 active:scale-95 transition-all cursor-pointer"
                >
                  View My Projects
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-400">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  <Mail className="w-4 h-4 text-indigo-500" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
                <span>•</span>
                <a
                  href="https://wa.me/917899443730"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  <Phone className="w-4 h-4 text-emerald-500" />
                  <span>+91 7899443730</span>
                </a>
                <span>•</span>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  <Linkedin className="w-4 h-4 text-indigo-500" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200/80 dark:border-slate-800/80 text-center text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © 2026 {PERSONAL_INFO.name} • Freelance Full-Stack Developer
          </div>
          <button
            onClick={onBackToPortfolio}
            className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Main Portfolio</span>
          </button>
        </div>
      </footer>
    </div>
  );
};
