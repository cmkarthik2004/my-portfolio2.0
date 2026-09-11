import React, { useState, useId } from 'react';
import {
  Calendar as CalendarIcon,
  Clock,
  Check,
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Mail,
  Video,
  MessageSquare,
  Phone,
  Sparkles,
  Send,
  Copy,
  RotateCcw,
  Info,
  ShieldCheck,
  Globe,
} from 'lucide-react';
import { SERVICES_DATA, PERSONAL_INFO } from '../data/portfolioData';

interface ProjectDiscussionSchedulerProps {
  initialService?: string;
  onServiceChange?: (service: string) => void;
}

export const ProjectDiscussionScheduler: React.FC<ProjectDiscussionSchedulerProps> = ({
  initialService,
  onServiceChange,
}) => {
  // Step state (1: Date, 2: Time, 3: Service, 4: Details, 5: Review)
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Calendar State
  const today = new Date();
  const [viewDate, setViewDate] = useState<Date>(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [selectedDate, setSelectedDate] = useState<string>('');

  // Time slot state
  const [selectedTime, setSelectedTime] = useState<string>('');
  
  // User Timezone detection
  const detectedTimezone = React.useMemo(() => {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch {
      return 'IST (UTC+5:30)';
    }
  }, []);

  // Service selection state
  const [service, setService] = useState<string>(
    initialService || 'Website Development (New)'
  );

  // Keep synced if parent changes initialService
  React.useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  // Form Details state
  const [clientName, setClientName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [contactMethod, setContactMethod] = useState<string>('Google Meet');
  const [contactHandle, setContactHandle] = useState<string>('');
  const [projectMessage, setProjectMessage] = useState<string>('');
  const [expectedFeatures, setExpectedFeatures] = useState<string>('');
  const [timeline, setTimeline] = useState<string>('1-2 Months');
  const [budgetRange, setBudgetRange] = useState<string>('Flexible / Open to Proposal');

  // Submission & copy state
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // Accessible unique IDs for form fields
  const nameInputId = useId();
  const emailInputId = useId();
  const contactHandleId = useId();
  const projectMsgId = useId();
  const featuresId = useId();
  const timelineId = useId();
  const budgetId = useId();

  // All selectable services, including "Not Sure Yet / Need Advice"
  const serviceOptions: { title: string; description: string; category: string }[] = React.useMemo(() => {
    const list: { title: string; description: string; category: string }[] = SERVICES_DATA.map((s) => ({
      title: s.title,
      description: s.description,
      category: s.category,
    }));
    list.push({
      title: 'Not Sure Yet / Need Advice',
      description: 'I have an initial idea or problem to solve and need technical guidance to define the right architecture.',
      category: 'Consultation',
    });
    return list;
  }, []);

  // Time slots across 24/7 day coverage
  const timeSlotsByGroup = [
    {
      group: 'Morning Slots',
      slots: ['09:00 AM', '10:00 AM', '11:00 AM', '11:30 AM'],
    },
    {
      group: 'Afternoon Slots',
      slots: ['12:30 PM', '02:00 PM', '03:30 PM', '04:30 PM'],
    },
    {
      group: 'Evening Slots',
      slots: ['05:30 PM', '06:30 PM', '07:30 PM', '08:30 PM'],
    },
    {
      group: 'Night / Global Client Hours',
      slots: ['09:30 PM', '10:30 PM', '11:30 PM', '12:30 AM'],
    },
  ];

  // Calendar Helpers
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const daysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay(); // 0 = Sunday
  };

  const currentYear = viewDate.getFullYear();
  const currentMonthIndex = viewDate.getMonth();
  const totalDays = daysInMonth(currentYear, currentMonthIndex);
  const startDay = getFirstDayOfMonth(currentYear, currentMonthIndex);

  // Can user navigate to previous month? (Don't allow months before current actual month)
  const canGoPrevMonth =
    currentYear > today.getFullYear() ||
    (currentYear === today.getFullYear() && currentMonthIndex > today.getMonth());

  const handlePrevMonth = () => {
    if (canGoPrevMonth) {
      setViewDate(new Date(currentYear, currentMonthIndex - 1, 1));
    }
  };

  const handleNextMonth = () => {
    setViewDate(new Date(currentYear, currentMonthIndex + 1, 1));
  };

  const isDateDisabled = (day: number) => {
    const checkDate = new Date(currentYear, currentMonthIndex, day, 23, 59, 59);
    const now = new Date();
    // Disable if strictly in the past
    return checkDate < now;
  };

  const isDateSelected = (day: number) => {
    const formatted = `${currentYear}-${String(currentMonthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return selectedDate === formatted;
  };

  const isTodayDate = (day: number) => {
    return (
      day === today.getDate() &&
      currentMonthIndex === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  const handleSelectDay = (day: number) => {
    if (isDateDisabled(day)) return;
    const formatted = `${currentYear}-${String(currentMonthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    setSelectedDate(formatted);
  };

  const formatDisplayDate = (dateStr: string) => {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    if (parts.length !== 3) return dateStr;
    const d = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
    return d.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const handleServiceClick = (servTitle: string) => {
    setService(servTitle);
    if (onServiceChange) {
      onServiceChange(servTitle);
    }
  };

  // Structured summary text
  const generateSummaryText = () => {
    return `PROJECT DISCUSSION REQUEST
----------------------------------------
Client Name: ${clientName || 'Not specified'}
Email: ${clientEmail || 'Not specified'}
Selected Service: ${service}
Preferred Date: ${formatDisplayDate(selectedDate) || selectedDate}
Requested Time: ${selectedTime} (${detectedTimezone})
Preferred Contact: ${contactMethod}${contactHandle ? ` (${contactHandle})` : ''}
Timeline: ${timeline}
Budget Expectation: ${budgetRange}
----------------------------------------
Project Goals & Overview:
${projectMessage || 'None provided'}
${expectedFeatures ? `\nExpected Features:\n${expectedFeatures}` : ''}
`;
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(generateSummaryText());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2200);
  };

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[Project Discussion Request] ${service} - ${clientName || 'New Client'}`
    );
    const body = encodeURIComponent(
      `Hi C M Karthik,\n\nI would like to request a project discussion for ${service}.\n\n${generateSummaryText()}\nLooking forward to your personal confirmation.`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setSelectedDate('');
    setSelectedTime('');
    setProjectMessage('');
  };

  // Stepper Header definitions
  const steps = [
    { num: 1, label: 'Date' },
    { num: 2, label: 'Time' },
    { num: 3, label: 'Service' },
    { num: 4, label: 'Details' },
    { num: 5, label: 'Review' },
  ];

  return (
    <div className="rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm overflow-hidden">
      {/* Top Banner: Availability & Clarity Notice */}
      <div className="bg-stone-50 dark:bg-stone-950/80 px-4 sm:px-6 py-3 sm:py-4 border-b border-stone-200/80 dark:border-stone-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
          <span className="text-[11px] sm:text-xs font-bold text-stone-900 dark:text-stone-100 uppercase font-mono tracking-wider">
            Available for Project Discussions — 24/7
          </span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] text-stone-500 dark:text-stone-400 font-mono">
          <Globe className="w-3.5 h-3.5 text-stone-400 shrink-0" />
          <span className="truncate">Local Timezone: {detectedTimezone}</span>
        </div>
      </div>

      {/* Interactive Step Progress Tracker */}
      <div className="px-3 sm:px-6 py-3 sm:py-4 border-b border-stone-200/60 dark:border-stone-800/60 bg-white dark:bg-stone-900">
        <div className="flex items-center justify-between max-w-xl mx-auto">
          {steps.map((s, idx) => {
            const isPassed = currentStep > s.num;
            const isCurrent = currentStep === s.num;
            return (
              <React.Fragment key={s.num}>
                <button
                  type="button"
                  onClick={() => {
                    // Only allow navigating to past completed steps or current
                    if (s.num < currentStep) {
                      setCurrentStep(s.num);
                    }
                  }}
                  disabled={s.num > currentStep}
                  className={`flex items-center gap-1 sm:gap-1.5 text-xs font-semibold transition-all cursor-pointer ${
                    isCurrent
                      ? 'text-amber-700 dark:text-amber-400'
                      : isPassed
                      ? 'text-stone-800 dark:text-stone-200 hover:text-amber-600'
                      : 'text-stone-400 dark:text-stone-600 cursor-not-allowed'
                  }`}
                >
                  <span
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[11px] font-mono font-bold transition-all ${
                      isCurrent
                        ? 'bg-amber-600 text-white dark:bg-amber-500 dark:text-stone-950 ring-2 ring-amber-500/30'
                        : isPassed
                        ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-950'
                        : 'bg-stone-100 dark:bg-stone-800 text-stone-400'
                    }`}
                  >
                    {isPassed ? <Check className="w-3 h-3 stroke-[3]" /> : s.num}
                  </span>
                  <span className="hidden md:inline">{s.label}</span>
                </button>
                {idx < steps.length - 1 && (
                  <div
                    className={`h-0.5 flex-1 mx-1 sm:mx-2 transition-colors ${
                      currentStep > s.num
                        ? 'bg-stone-900 dark:bg-stone-100'
                        : 'bg-stone-200 dark:bg-stone-800'
                    }`}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Flow Body */}
      <div className="p-4 sm:p-6 lg:p-8">
        {/* ========================================================
            SUBMITTED CONFIRMATION VIEW
            ======================================================== */}
        {isSubmitted ? (
          <div className="text-center py-8 max-w-lg mx-auto space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                Project Discussion Request Prepared
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                Your email application has been opened with your structured request details pre-filled for C M Karthik.
              </p>
            </div>

            {/* Confirmation details summary box */}
            <div className="rounded-xl bg-stone-50 dark:bg-stone-950 p-5 text-left border border-stone-200/80 dark:border-stone-800/80 text-xs space-y-2">
              <div className="flex justify-between border-b border-stone-200 dark:border-stone-800 pb-1.5 font-semibold text-stone-800 dark:text-stone-200">
                <span>Service Requested:</span>
                <span className="text-amber-700 dark:text-amber-400">{service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Preferred Date:</span>
                <span className="font-medium text-stone-800 dark:text-stone-200">
                  {formatDisplayDate(selectedDate)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Requested Time:</span>
                <span className="font-medium text-stone-800 dark:text-stone-200">
                  {selectedTime} ({detectedTimezone})
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Preferred Contact:</span>
                <span className="font-medium text-stone-800 dark:text-stone-200">{contactMethod}</span>
              </div>
            </div>

            {/* Post-submission expectation note (Requirement 09) */}
            <div className="p-3.5 rounded-lg bg-amber-500/5 dark:bg-amber-400/5 border border-amber-500/20 text-xs text-stone-600 dark:text-stone-300 text-left leading-relaxed">
              <div className="font-semibold text-stone-800 dark:text-stone-200 mb-1 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>What happens next:</span>
              </div>
              Your project details will help me understand your requirements before our discussion. I will review your submission and personally reach out via your preferred contact method ({contactMethod}) to coordinate the discussion link.
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleCopySummary}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 text-xs font-semibold transition-all cursor-pointer"
              >
                {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{isCopied ? 'Summary Copied!' : 'Copy Request Summary'}</span>
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white dark:bg-stone-100 dark:hover:bg-white dark:text-stone-950 text-xs font-semibold transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Schedule Another Discussion</span>
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* ========================================================
                STEP 01: SELECT A DATE (Interactive Calendar)
                ======================================================== */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 font-mono mb-1">
                    STEP 01 OF 05
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                    Select your preferred discussion date
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1">
                    Choose an upcoming day that suits your schedule. Both weekday and weekend discussion slots are accommodated.
                  </p>
                </div>

                {/* Calendar Container */}
                <div className="max-w-md mx-auto p-4 sm:p-5 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 shadow-2xs">
                  {/* Month Navigation */}
                  <div className="flex items-center justify-between mb-4">
                    <button
                      type="button"
                      onClick={handlePrevMonth}
                      disabled={!canGoPrevMonth}
                      aria-label="Previous Month"
                      className={`p-2 rounded-lg border transition-all ${
                        canGoPrevMonth
                          ? 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer'
                          : 'opacity-30 border-transparent text-stone-400 cursor-not-allowed'
                      }`}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    <div className="text-center">
                      <span className="font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100">
                        {monthNames[currentMonthIndex]} {currentYear}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={handleNextMonth}
                      aria-label="Next Month"
                      className="p-2 rounded-lg border bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer transition-all"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Day of Week Headers */}
                  <div className="grid grid-cols-7 gap-1 text-center text-xs font-mono font-semibold text-stone-400 dark:text-stone-500 mb-2">
                    <span>Su</span>
                    <span>Mo</span>
                    <span>Tu</span>
                    <span>We</span>
                    <span>Th</span>
                    <span>Fr</span>
                    <span>Sa</span>
                  </div>

                  {/* Calendar Dates Grid */}
                  <div className="grid grid-cols-7 gap-1">
                    {/* Empty padding slots before first day */}
                    {Array.from({ length: startDay }).map((_, i) => (
                      <div key={`empty-${i}`} className="h-9 sm:h-10" />
                    ))}

                    {/* Actual month dates */}
                    {Array.from({ length: totalDays }).map((_, i) => {
                      const day = i + 1;
                      const disabled = isDateDisabled(day);
                      const selected = isDateSelected(day);
                      const isToday = isTodayDate(day);

                      return (
                        <button
                          type="button"
                          key={`day-${day}`}
                          disabled={disabled}
                          onClick={() => handleSelectDay(day)}
                          className={`h-9 sm:h-10 rounded-lg text-xs font-semibold flex flex-col items-center justify-center transition-all relative ${
                            selected
                              ? 'bg-amber-600 text-white dark:bg-amber-500 dark:text-stone-950 font-bold shadow-xs scale-102 ring-2 ring-amber-500/40'
                              : disabled
                              ? 'text-stone-300 dark:text-stone-700 cursor-not-allowed opacity-40'
                              : 'bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 hover:bg-amber-500/10 hover:text-amber-800 dark:hover:text-amber-300 hover:border-amber-400/50 border border-stone-200/70 dark:border-stone-800/70 cursor-pointer'
                          }`}
                        >
                          <span>{day}</span>
                          {isToday && !selected && (
                            <span className="w-1 h-1 rounded-full bg-amber-500 absolute bottom-1"></span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Selected Date Indicator */}
                  {selectedDate ? (
                    <div className="mt-4 pt-3 border-t border-stone-200/80 dark:border-stone-800/80 text-xs flex items-center justify-between text-stone-700 dark:text-stone-300">
                      <span className="text-stone-500">Selected Date:</span>
                      <span className="font-bold text-amber-700 dark:text-amber-400">
                        {formatDisplayDate(selectedDate)}
                      </span>
                    </div>
                  ) : (
                    <div className="mt-4 pt-3 border-t border-stone-200/80 dark:border-stone-800/80 text-[11px] text-stone-400 text-center font-mono">
                      Please click on an active day to continue
                    </div>
                  )}
                </div>

                {/* Next Step Button */}
                <div className="flex flex-col sm:flex-row justify-end pt-4">
                  <button
                    type="button"
                    disabled={!selectedDate}
                    onClick={() => setCurrentStep(2)}
                    className={`w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs ${
                      selectedDate
                        ? 'bg-stone-900 hover:bg-stone-800 text-white dark:bg-stone-100 dark:hover:bg-white dark:text-stone-950 cursor-pointer active:scale-98'
                        : 'bg-stone-200 text-stone-400 dark:bg-stone-800 dark:text-stone-600 cursor-not-allowed'
                    }`}
                  >
                    <span>Continue to Time Selection</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* ========================================================
                STEP 02: SELECT A TIME (Available Time Slots)
                ======================================================== */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 font-mono mb-1">
                      STEP 02 OF 05
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                      Select your preferred discussion time
                    </h3>
                  </div>

                  {/* Quick Change Date Pill */}
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 dark:bg-stone-800 text-xs font-semibold text-stone-700 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400 cursor-pointer self-start"
                  >
                    <CalendarIcon className="w-3.5 h-3.5" />
                    <span>{formatDisplayDate(selectedDate)}</span>
                    <span className="text-[11px] text-stone-400 font-normal">(Change)</span>
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-500/5 dark:bg-amber-400/5 border border-amber-500/20 text-xs text-stone-600 dark:text-stone-300 flex items-start gap-2 leading-relaxed">
                  <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>24/7 Scheduling Flexibility:</strong> Times are displayed in your local detected timezone (<strong>{detectedTimezone}</strong>). All requested slots will be reviewed and personally coordinated by C M Karthik.
                  </span>
                </div>

                {/* Time Slots Categorized by Period */}
                <div className="space-y-4">
                  {timeSlotsByGroup.map((group) => (
                    <div key={group.group}>
                      <div className="text-xs font-mono font-semibold text-stone-500 dark:text-stone-400 uppercase mb-2">
                        {group.group}
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {group.slots.map((slot) => {
                          const isSelected = selectedTime === slot;
                          return (
                            <button
                              type="button"
                              key={slot}
                              onClick={() => setSelectedTime(slot)}
                              className={`min-h-[44px] p-3 rounded-xl text-xs font-semibold transition-all border text-center cursor-pointer flex items-center justify-center gap-1.5 ${
                                isSelected
                                  ? 'bg-amber-600 text-white dark:bg-amber-500 dark:text-stone-950 border-amber-600 dark:border-amber-500 shadow-xs ring-2 ring-amber-500/30 font-bold'
                                  : 'bg-stone-50 dark:bg-stone-950 text-stone-800 dark:text-stone-200 border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 hover:bg-stone-100 dark:hover:bg-stone-900'
                              }`}
                            >
                              <Clock className="w-3.5 h-3.5 opacity-70" />
                              <span>{slot}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Navigation */}
                <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 pt-4 border-t border-stone-200 dark:border-stone-800">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Calendar</span>
                  </button>

                  <button
                    type="button"
                    disabled={!selectedTime}
                    onClick={() => setCurrentStep(3)}
                    className={`w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs ${
                      selectedTime
                        ? 'bg-stone-900 hover:bg-stone-800 text-white dark:bg-stone-100 dark:hover:bg-white dark:text-stone-950 cursor-pointer active:scale-98'
                        : 'bg-stone-200 text-stone-400 dark:bg-stone-800 dark:text-stone-600 cursor-not-allowed'
                    }`}
                  >
                    <span>Continue to Service Selection</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* ========================================================
                STEP 03: SELECT PROJECT SERVICE
                ======================================================== */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 font-mono mb-1">
                    STEP 03 OF 05
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                    What service or project are we discussing?
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1">
                    Select the primary capability you need, or choose "Not Sure Yet" if you want open technical guidance.
                  </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {serviceOptions.map((serv) => {
                    const isSelected = service === serv.title;
                    return (
                      <div
                        key={serv.title}
                        onClick={() => handleServiceClick(serv.title)}
                        className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-amber-500/10 dark:bg-amber-400/10 border-amber-500 dark:border-amber-400 ring-2 ring-amber-500/20 shadow-xs'
                            : 'bg-stone-50 dark:bg-stone-950 border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-700'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400">
                              {serv.category}
                            </span>
                            {isSelected && (
                              <span className="w-4 h-4 rounded-full bg-amber-600 dark:bg-amber-500 text-white dark:text-stone-950 flex items-center justify-center">
                                <Check className="w-2.5 h-2.5 stroke-[3]" />
                              </span>
                            )}
                          </div>
                          <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 mb-1">
                            {serv.title}
                          </h4>
                          <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                            {serv.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Navigation */}
                <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 pt-4 border-t border-stone-200 dark:border-stone-800">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Time</span>
                  </button>

                  <button
                    type="button"
                    disabled={!service}
                    onClick={() => setCurrentStep(4)}
                    className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white dark:bg-stone-100 dark:hover:bg-white dark:text-stone-950 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs cursor-pointer active:scale-98"
                  >
                    <span>Continue to Project Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* ========================================================
                STEP 04: ENTER CONTACT DETAILS
                ======================================================== */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 font-mono mb-1">
                    STEP 04 OF 05
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                    Tell me about your project &amp; contact info
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1">
                    Provide basic context so I can prepare relevant ideas, technical architecture, and questions for our call.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor={nameInputId} className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 font-mono mb-1">
                        Your Full Name *
                      </label>
                      <input
                        id={nameInputId}
                        type="text"
                        required
                        placeholder="e.g. Alex Rivera"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 text-base sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/50"
                      />
                    </div>

                    <div>
                      <label htmlFor={emailInputId} className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 font-mono mb-1">
                        Your Email *
                      </label>
                      <input
                        id={emailInputId}
                        type="email"
                        required
                        placeholder="e.g. alex@company.com"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 text-base sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/50"
                      />
                    </div>
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 font-mono mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { method: 'Google Meet', icon: Video },
                        { method: 'Email', icon: Mail },
                        { method: 'WhatsApp', icon: MessageSquare },
                        { method: 'Phone Call', icon: Phone },
                      ].map((item) => {
                        const Icon = item.icon;
                        const isSelected = contactMethod === item.method;
                        return (
                          <button
                            type="button"
                            key={item.method}
                            onClick={() => setContactMethod(item.method)}
                            className={`min-h-[44px] p-2.5 rounded-lg border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-950 border-stone-900 dark:border-stone-100'
                                : 'bg-stone-50 dark:bg-stone-950 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-800 hover:border-stone-300'
                            }`}
                          >
                            <Icon className="w-3.5 h-3.5" />
                            <span>{item.method}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Conditional handle/number for WhatsApp or Phone */}
                  {(contactMethod === 'WhatsApp' || contactMethod === 'Phone Call') && (
                    <div>
                      <label htmlFor={contactHandleId} className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 font-mono mb-1">
                        Phone / WhatsApp Number (with Country Code)
                      </label>
                      <input
                        id={contactHandleId}
                        type="text"
                        placeholder="e.g. +1 (555) 000-1234 or +91 9876543210"
                        value={contactHandle}
                        onChange={(e) => setContactHandle(e.target.value)}
                        className="w-full min-h-[44px] px-3.5 py-2 rounded-lg bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 text-base sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/50"
                      />
                    </div>
                  )}

                  {/* Project Overview / Goals */}
                  <div>
                    <label htmlFor={projectMsgId} className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 font-mono mb-1">
                      Project Goals &amp; Overview *
                    </label>
                    <textarea
                      id={projectMsgId}
                      rows={3}
                      required
                      placeholder="Briefly describe what you want to achieve, user problems to solve, or initial thoughts on features..."
                      value={projectMessage}
                      onChange={(e) => setProjectMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 text-base sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/50 resize-y"
                    />
                  </div>

                  {/* Expected Features (Optional) */}
                  <div>
                    <label htmlFor={featuresId} className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 font-mono mb-1">
                      Expected Features (Optional)
                    </label>
                    <input
                      id={featuresId}
                      type="text"
                      placeholder="e.g. Admin dashboard, Razorpay gateway, User authentication, Email notifications"
                      value={expectedFeatures}
                      onChange={(e) => setExpectedFeatures(e.target.value)}
                      className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 text-base sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/50"
                    />
                  </div>

                  {/* Timeline & Budget Range */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor={timelineId} className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 font-mono mb-1">
                        Expected Timeline (Optional)
                      </label>
                      <select
                        id={timelineId}
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 text-base sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/50"
                      >
                        <option>Flexible / Not Decided</option>
                        <option>Urgent (&lt; 2 Weeks)</option>
                        <option>1-2 Months</option>
                        <option>2-3 Months</option>
                        <option>Ongoing Collaboration</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor={budgetId} className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 font-mono mb-1">
                        Budget Expectation (Optional)
                      </label>
                      <select
                        id={budgetId}
                        value={budgetRange}
                        onChange={(e) => setBudgetRange(e.target.value)}
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 text-base sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/50"
                      >
                        <option>Flexible / Open to Proposal</option>
                        <option>Standard Website ($300 - $800)</option>
                        <option>Custom Web Application / Portal ($800 - $2,500)</option>
                        <option>Enterprise / Full System ($2,500+)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 pt-4 border-t border-stone-200 dark:border-stone-800">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Service</span>
                  </button>

                  <button
                    type="button"
                    disabled={!clientName.trim() || !clientEmail.trim() || !projectMessage.trim()}
                    onClick={() => setCurrentStep(5)}
                    className={`w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs ${
                      clientName.trim() && clientEmail.trim() && projectMessage.trim()
                        ? 'bg-stone-900 hover:bg-stone-800 text-white dark:bg-stone-100 dark:hover:bg-white dark:text-stone-950 cursor-pointer active:scale-98'
                        : 'bg-stone-200 text-stone-400 dark:bg-stone-800 dark:text-stone-600 cursor-not-allowed'
                    }`}
                  >
                    <span>Review Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* ========================================================
                STEP 05: REVIEW AND SUBMIT REQUEST
                ======================================================== */}
            {currentStep === 5 && (
              <form onSubmit={handleSubmitRequest} className="space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 font-mono mb-1">
                    STEP 05 OF 05
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                    Review and submit discussion request
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1">
                    Confirm your details below. Submitting will open your default email client pre-addressed to C M Karthik.
                  </p>
                </div>

                {/* Structured Summary Card */}
                <div className="rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 p-5 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-stone-800">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                      PROJECT DISCUSSION REQUEST SUMMARY
                    </span>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="text-xs font-semibold text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 underline cursor-pointer"
                    >
                      Edit All
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-stone-500 block font-mono">Client Name</span>
                      <span className="font-bold text-stone-900 dark:text-stone-100 text-sm">{clientName}</span>
                    </div>

                    <div>
                      <span className="text-stone-500 block font-mono">Email Address</span>
                      <span className="font-bold text-stone-900 dark:text-stone-100 text-sm">{clientEmail}</span>
                    </div>

                    <div>
                      <span className="text-stone-500 block font-mono">Service / Project Type</span>
                      <span className="font-bold text-amber-700 dark:text-amber-400 text-sm">{service}</span>
                    </div>

                    <div>
                      <span className="text-stone-500 block font-mono">Preferred Contact Method</span>
                      <span className="font-bold text-stone-900 dark:text-stone-100 text-sm">
                        {contactMethod}{contactHandle ? ` (${contactHandle})` : ''}
                      </span>
                    </div>

                    <div>
                      <span className="text-stone-500 block font-mono">Requested Discussion Date</span>
                      <span className="font-bold text-stone-900 dark:text-stone-100 text-sm">
                        {formatDisplayDate(selectedDate)}
                      </span>
                    </div>

                    <div>
                      <span className="text-stone-500 block font-mono">Preferred Time &amp; Zone</span>
                      <span className="font-bold text-stone-900 dark:text-stone-100 text-sm">
                        {selectedTime} ({detectedTimezone})
                      </span>
                    </div>

                    <div>
                      <span className="text-stone-500 block font-mono">Timeline</span>
                      <span className="font-semibold text-stone-800 dark:text-stone-200">{timeline}</span>
                    </div>

                    <div>
                      <span className="text-stone-500 block font-mono">Budget Expectation</span>
                      <span className="font-semibold text-stone-800 dark:text-stone-200">{budgetRange}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-stone-200 dark:border-stone-800 text-xs">
                    <span className="text-stone-500 block font-mono mb-1">Project Goals &amp; Overview</span>
                    <p className="text-stone-800 dark:text-stone-200 leading-relaxed whitespace-pre-wrap bg-white dark:bg-stone-900 p-3 rounded-lg border border-stone-200/70 dark:border-stone-800/70">
                      {projectMessage}
                    </p>
                  </div>

                  {expectedFeatures && (
                    <div className="text-xs">
                      <span className="text-stone-500 block font-mono mb-1">Expected Features</span>
                      <p className="text-stone-800 dark:text-stone-200 bg-white dark:bg-stone-900 p-2.5 rounded-lg border border-stone-200/70 dark:border-stone-800/70">
                        {expectedFeatures}
                      </p>
                    </div>
                  )}
                </div>

                {/* Requirement 09: Transparent Post-Submission Expectation */}
                <div className="p-4 rounded-xl bg-amber-500/5 dark:bg-amber-400/5 border border-amber-500/20 text-xs text-stone-600 dark:text-stone-300 leading-relaxed flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 dark:text-stone-100 block mb-0.5">
                      Direct Human Review &amp; Personal Confirmation:
                    </strong>
                    Your project details will help me understand your requirements before our discussion. I will review your submission and personally get in touch via <strong>{contactMethod}</strong> ({clientEmail}) to confirm the final call link.
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 pt-4 border-t border-stone-200 dark:border-stone-800">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(4)}
                    className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Details</span>
                  </button>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-semibold hover:bg-stone-100 dark:hover:bg-stone-700 cursor-pointer"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{isCopied ? 'Copied' : 'Copy Summary'}</span>
                    </button>

                    <button
                      type="submit"
                      className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white dark:bg-stone-100 dark:hover:bg-white dark:text-stone-950 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md active:scale-98 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Project Discussion Request</span>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
