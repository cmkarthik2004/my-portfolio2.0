import React, { useState, useId, useMemo, useEffect } from 'react';
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
  Send,
  Copy,
  RotateCcw,
  Info,
  ShieldCheck,
  Globe,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { SERVICES_DATA, PERSONAL_INFO } from '../data/portfolioData';

interface ProjectDiscussionSchedulerProps {
  initialService?: string;
  onServiceChange?: (service: string) => void;
}

// Client-side configuration constants
const DISPLAYED_TIMEZONE = 'Asia/Kolkata';
const TARGET_EMAIL = 'cmkarthi2004@gmail.com';
const PORTFOLIO_URL = 'https://cmkarthik2004.github.io/my-portfolio2.0/';

// Environment variables for EmailJS (client-side public keys)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

/**
 * Returns current date/time info in Asia/Kolkata timezone
 */
const getKolkataTimeInfo = () => {
  const now = new Date();
  try {
    const formatter = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    const parts = formatter.formatToParts(now);
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();

    for (const part of parts) {
      if (part.type === 'year') year = parseInt(part.value, 10);
      if (part.type === 'month') month = parseInt(part.value, 10);
      if (part.type === 'day') day = parseInt(part.value, 10);
      if (part.type === 'hour') hour = parseInt(part.value, 10);
      if (part.type === 'minute') minute = parseInt(part.value, 10);
    }
    const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return { year, monthIndex: month - 1, day, hour, minute, dateStr };
  } catch {
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return { year, monthIndex: month - 1, day, hour: now.getHours(), minute: now.getMinutes(), dateStr };
  }
};

/**
 * Determines whether a specific 12-hour time slot on a given date is in the past
 */
const isSlotInPast = (dateStr: string, slotStr: string): boolean => {
  if (!dateStr || !slotStr) return false;
  const kolkata = getKolkataTimeInfo();

  // If date is before today, it is past
  if (dateStr < kolkata.dateStr) return true;
  // If date is after today, it is future
  if (dateStr > kolkata.dateStr) return false;

  // If date is today, compare slot hour & minute with current Kolkata time
  const match = slotStr.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return false;

  let hour = parseInt(match[1], 10);
  const minute = parseInt(match[2], 10);
  const meridian = match[3].toUpperCase();

  if (meridian === 'PM' && hour < 12) hour += 12;
  if (meridian === 'AM' && hour === 12) hour = 0;

  if (hour < kolkata.hour) return true;
  if (hour === kolkata.hour && minute <= kolkata.minute) return true;

  return false;
};

export const ProjectDiscussionScheduler: React.FC<ProjectDiscussionSchedulerProps> = ({
  initialService,
  onServiceChange,
}) => {
  // Step state (1: Date, 2: Time, 3: Service, 4: Details, 5: Review)
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Calendar State
  const kolkataToday = useMemo(() => getKolkataTimeInfo(), []);
  const [viewDate, setViewDate] = useState<Date>(
    new Date(kolkataToday.year, kolkataToday.monthIndex, 1)
  );
  const [selectedDate, setSelectedDate] = useState<string>('');

  // Time slot state
  const [selectedTime, setSelectedTime] = useState<string>('');

  // Service selection state
  const [service, setService] = useState<string>(
    initialService || 'Website Development (New)'
  );

  // Keep synced if parent changes initialService
  useEffect(() => {
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
  const [projectScope, setProjectScope] = useState<string>("Not sure yet — Let's discuss");

  // Anti-spam & Throttling state
  const [honeypot, setHoneypot] = useState<string>('');
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);

  // Inline Validation state
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  // Submission & Transmission state
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // Accessible unique IDs for form fields
  const nameInputId = useId();
  const emailInputId = useId();
  const contactHandleId = useId();
  const projectMsgId = useId();
  const featuresId = useId();
  const timelineId = useId();
  const projectScopeId = useId();
  const honeypotId = useId();

  // All selectable services, including "Not Sure Yet / Need Advice"
  const serviceOptions = useMemo(() => {
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
      group: 'Morning Slots (IST)',
      slots: ['09:00 AM', '10:00 AM', '11:00 AM', '11:30 AM'],
    },
    {
      group: 'Afternoon Slots (IST)',
      slots: ['12:30 PM', '02:00 PM', '03:30 PM', '04:30 PM'],
    },
    {
      group: 'Evening Slots (IST)',
      slots: ['05:30 PM', '06:30 PM', '07:30 PM', '08:30 PM'],
    },
    {
      group: 'Night / Global Client Hours (IST)',
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

  // Can user navigate to previous month? (Don't allow months before current Kolkata month)
  const canGoPrevMonth =
    currentYear > kolkataToday.year ||
    (currentYear === kolkataToday.year && currentMonthIndex > kolkataToday.monthIndex);

  const handlePrevMonth = () => {
    if (canGoPrevMonth) {
      setViewDate(new Date(currentYear, currentMonthIndex - 1, 1));
    }
  };

  const handleNextMonth = () => {
    setViewDate(new Date(currentYear, currentMonthIndex + 1, 1));
  };

  const isDateDisabled = (day: number) => {
    const dateStr = `${currentYear}-${String(currentMonthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return dateStr < kolkataToday.dateStr;
  };

  const isDateSelected = (day: number) => {
    const formatted = `${currentYear}-${String(currentMonthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return selectedDate === formatted;
  };

  const isTodayDate = (day: number) => {
    const formatted = `${currentYear}-${String(currentMonthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return formatted === kolkataToday.dateStr;
  };

  const handleSelectDay = (day: number) => {
    if (isDateDisabled(day)) return;
    const formatted = `${currentYear}-${String(currentMonthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    setSelectedDate(formatted);
    // Clear error
    setValidationErrors((prev) => {
      const copy = { ...prev };
      delete copy.date;
      return copy;
    });
    // If the currently selected time slot is now in the past for this new date, reset it
    if (selectedTime && isSlotInPast(formatted, selectedTime)) {
      setSelectedTime('');
    }
  };

  const handleSelectTime = (slot: string) => {
    if (isSlotInPast(selectedDate, slot)) return;
    setSelectedTime(slot);
    setValidationErrors((prev) => {
      const copy = { ...prev };
      delete copy.time;
      return copy;
    });
  };

  const formatDisplayDate = (dateStr: string) => {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    if (parts.length !== 3) return dateStr;
    const d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
    return d.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const handleServiceClick = (servTitle: string) => {
    setService(servTitle);
    setValidationErrors((prev) => {
      const copy = { ...prev };
      delete copy.service;
      return copy;
    });
    if (onServiceChange) {
      onServiceChange(servTitle);
    }
  };

  // Structured summary email content according to exact specification
  const generateEmailBodyText = () => {
    return `NEW PROJECT DISCUSSION REQUEST

C M Karthik Portfolio


CONTACT DETAILS

Name:
${clientName.trim() || 'Not specified'}

Email:
${clientEmail.trim() || 'Not specified'}

Phone / WhatsApp:
${contactHandle.trim() || 'Not provided'}


PROJECT DETAILS

Service:
${service}

Preferred Date:
${formatDisplayDate(selectedDate) || selectedDate || 'Not selected'}

Preferred Time:
${selectedTime || 'Not selected'}

Timezone:
${DISPLAYED_TIMEZONE}


PROJECT DESCRIPTION

${projectMessage.trim() || 'None provided'}


TECHNICAL GOALS

${projectMessage.trim() || 'None provided'}


EXPECTED FEATURES

${expectedFeatures.trim() || 'None specified'}


TIMELINE

${timeline}


ADDITIONAL INFORMATION

Project Scope: ${projectScope}
Preferred Contact Method: ${contactMethod}${contactHandle ? ` (${contactHandle})` : ''}


--------------------------------

SUBMITTED THROUGH

C M Karthik Portfolio

Portfolio:
${PORTFOLIO_URL}

--------------------------------`;
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(generateEmailBodyText());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2200);
  };

  // Step 4 to Step 5 Transition with validation
  const handleProceedToReview = () => {
    const errors: Record<string, string> = {};

    if (!clientName.trim()) {
      errors.name = 'Full name is required';
    }
    if (!clientEmail.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clientEmail.trim())) {
      errors.email = 'Please enter a valid email address (e.g. name@example.com)';
    }
    if (!projectMessage.trim()) {
      errors.projectMessage = 'Please provide a project description / overview';
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setValidationErrors({});
    setCurrentStep(5);
  };

  // Direct email client fallback (ensures visitor never loses input)
  const handleDirectEmailFallback = () => {
    const subject = encodeURIComponent(`New Project Discussion Request — ${service}`);
    const body = encodeURIComponent(generateEmailBodyText());
    window.location.href = `mailto:${TARGET_EMAIL}?subject=${subject}&body=${body}`;
  };

  // Primary Submission Handler via EmailJS
  const handleSubmitRequest = async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }

    // 1. Spam protection: Honeypot check
    if (honeypot.trim().length > 0) {
      // Silently deflect spam bots without burning EmailJS quota
      setIsSubmitted(true);
      return;
    }

    // 2. Throttling / Double-click prevention
    const now = Date.now();
    if (isSubmitting) return;
    if (now - lastSubmitTime < 3000) {
      return;
    }
    setLastSubmitTime(now);

    // 3. Complete field validation
    const errors: Record<string, string> = {};
    if (!selectedDate) {
      errors.date = 'Preferred date is required';
    }
    if (!selectedTime) {
      errors.time = 'Preferred time slot is required';
    }
    if (!service) {
      errors.service = 'Service selection is required';
    }
    if (!clientName.trim()) {
      errors.name = 'Full name is required';
    }
    if (!clientEmail.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clientEmail.trim())) {
      errors.email = 'Please enter a valid email address (e.g. name@example.com)';
    }
    if (!projectMessage.trim()) {
      errors.projectMessage = 'Project goals & overview description is required';
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      if (errors.date) setCurrentStep(1);
      else if (errors.time) setCurrentStep(2);
      else if (errors.service) setCurrentStep(3);
      else setCurrentStep(4);
      return;
    }

    setValidationErrors({});
    setIsSubmitting(true);
    setSubmitError(null);

    const emailSubject = `New Project Discussion Request — ${service}`;
    const formattedBody = generateEmailBodyText();

    // Map exact variables for EmailJS template
    const templateParams: Record<string, unknown> = {
      name: clientName.trim(),
      email: clientEmail.trim(),
      reply_to: clientEmail.trim(), // Allows Karthik to click Reply in Gmail directly to the client
      phone: contactHandle.trim() || 'Not provided',
      service: service,
      preferred_date: formatDisplayDate(selectedDate) || selectedDate,
      preferred_time: selectedTime,
      timezone: DISPLAYED_TIMEZONE,
      project_description: projectMessage.trim(),
      technical_goals: projectMessage.trim(),
      expected_features: expectedFeatures.trim() || 'None specified',
      timeline: timeline,
      additional_information: `Project Scope: ${projectScope} | Preferred Contact: ${contactMethod}${contactHandle ? ` (${contactHandle})` : ''}`,
      to_email: TARGET_EMAIL,
      subject: emailSubject,
      message: formattedBody,
      portfolio_url: PORTFOLIO_URL,
    };

    // If EmailJS environment variables are not configured in GitHub Pages / deployment
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setIsSubmitting(false);
      setSubmitError(
        'Email service configuration is pending. Please configure VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your deployment environment variables, or contact me directly at cmkarthi2004@gmail.com.'
      );
      return;
    }

    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200 || response.text === 'OK') {
        setIsSubmitted(true);
        setSubmitError(null);
      } else {
        throw new Error(`EmailJS returned status ${response.status}: ${response.text}`);
      }
    } catch (err: unknown) {
      console.error('Failed to send project request via EmailJS:', err);
      setSubmitError(
        'UNABLE TO SEND YOUR REQUEST: An unexpected error occurred while communicating with the email service. Please try again or contact me directly at: cmkarthi2004@gmail.com'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    setSubmitError(null);
    setCurrentStep(1);
    setSelectedDate('');
    setSelectedTime('');
    setClientName('');
    setClientEmail('');
    setContactHandle('');
    setProjectMessage('');
    setExpectedFeatures('');
    setHoneypot('');
    setValidationErrors({});
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
      {/* Top Banner: 24/7 Availability Notice & Local Timezone */}
      <div className="bg-stone-50 dark:bg-stone-950/80 px-4 sm:px-6 py-3 sm:py-4 border-b border-stone-200/80 dark:border-stone-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
          <span className="text-[11px] sm:text-xs font-bold text-stone-900 dark:text-stone-100 uppercase font-mono tracking-wider">
            Available for Project Discussions — 24/7
          </span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] text-stone-600 dark:text-stone-400 font-mono">
          <Globe className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400 shrink-0" />
          <span className="truncate">Local Timezone: {DISPLAYED_TIMEZONE}</span>
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
                    if (s.num < currentStep && !isSubmitting) {
                      setCurrentStep(s.num);
                    }
                  }}
                  disabled={s.num > currentStep || isSubmitting}
                  className={`flex items-center gap-1 sm:gap-1.5 text-xs font-semibold transition-all cursor-pointer ${
                    isCurrent
                      ? 'text-amber-700 dark:text-amber-400'
                      : isPassed
                      ? 'text-stone-800 dark:text-stone-200 hover:text-amber-600'
                      : 'text-stone-400 dark:text-stone-600 cursor-not-allowed'
                  }`}
                  aria-current={isCurrent ? 'step' : undefined}
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
                        : 'bg-stone-200 dark:border-stone-800'
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
            SUBMITTED SUCCESS CONFIRMATION VIEW
            ======================================================== */}
        {isSubmitted ? (
          <div className="text-center py-6 sm:py-8 max-w-lg mx-auto space-y-6" role="status" aria-live="polite">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100 uppercase tracking-tight mb-2">
                REQUEST SENT SUCCESSFULLY
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                Thank you! Your project discussion request has been received. I'll review the details and get back to you.
              </p>
            </div>

            {/* Confirmation details summary box */}
            <div className="rounded-xl bg-stone-50 dark:bg-stone-950 p-4 sm:p-5 text-left border border-stone-200/80 dark:border-stone-800/80 text-xs space-y-2">
              <div className="flex justify-between border-b border-stone-200 dark:border-stone-800 pb-1.5 font-semibold text-stone-800 dark:text-stone-200">
                <span>Service Requested:</span>
                <span className="text-amber-700 dark:text-amber-400 text-right">{service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Preferred Date:</span>
                <span className="font-medium text-stone-800 dark:text-stone-200 text-right">
                  {formatDisplayDate(selectedDate)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Preferred Time:</span>
                <span className="font-medium text-stone-800 dark:text-stone-200 text-right">
                  {selectedTime} ({DISPLAYED_TIMEZONE})
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Preferred Contact:</span>
                <span className="font-medium text-stone-800 dark:text-stone-200 text-right">
                  {contactMethod}{contactHandle ? ` (${contactHandle})` : ''}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Delivered To:</span>
                <span className="font-mono text-stone-800 dark:text-stone-200 text-right">
                  {TARGET_EMAIL}
                </span>
              </div>
            </div>

            {/* Transparent Expectation Note: Date/Time is preferred, not confirmed */}
            <div className="p-3.5 rounded-lg bg-amber-500/5 dark:bg-amber-400/5 border border-amber-500/20 text-xs text-stone-600 dark:text-stone-300 text-left leading-relaxed">
              <div className="font-semibold text-stone-800 dark:text-stone-200 mb-1 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>What happens next:</span>
              </div>
              The selected date and time represent your preferred discussion window and are not automatically confirmed. I will review your submission and personally get in touch via <strong>{contactMethod}</strong> ({clientEmail}) to confirm the final call coordination.
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white dark:bg-stone-100 dark:hover:bg-white dark:text-stone-950 text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-xs active:scale-98"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>BACK TO PORTFOLIO</span>
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs sm:text-sm font-semibold hover:bg-stone-100 dark:hover:bg-stone-700 transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>SUBMIT ANOTHER REQUEST</span>
              </button>

              <button
                type="button"
                onClick={handleCopySummary}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 text-xs font-semibold transition-all cursor-pointer"
              >
                {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{isCopied ? 'Summary Copied!' : 'Copy Summary'}</span>
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Honeypot Spam Protection Field (invisible to humans) */}
            <div
              className="sr-only"
              aria-hidden="true"
              style={{ display: 'none', position: 'absolute', left: '-9999px' }}
            >
              <label htmlFor={honeypotId}>Website verification check</label>
              <input
                id={honeypotId}
                type="text"
                name="website_verification_url"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

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
                    Choose an upcoming day that suits your schedule. Past dates are disabled.
                  </p>
                </div>

                {/* Calendar Card Container */}
                <div className="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 max-w-md mx-auto">
                  {/* Month navigation */}
                  <div className="flex items-center justify-between mb-4">
                    <button
                      type="button"
                      onClick={handlePrevMonth}
                      disabled={!canGoPrevMonth}
                      className={`p-2 rounded-lg border transition-colors ${
                        canGoPrevMonth
                          ? 'border-stone-200 dark:border-stone-800 hover:bg-stone-200/60 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 cursor-pointer'
                          : 'border-transparent text-stone-300 dark:text-stone-700 cursor-not-allowed opacity-40'
                      }`}
                      aria-label="Previous Month"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    <div className="font-bold text-stone-900 dark:text-stone-100 text-sm sm:text-base">
                      {monthNames[currentMonthIndex]} {currentYear}
                    </div>

                    <button
                      type="button"
                      onClick={handleNextMonth}
                      className="p-2 rounded-lg border border-stone-200 dark:border-stone-800 hover:bg-stone-200/60 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 transition-colors cursor-pointer"
                      aria-label="Next Month"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Day of week headers */}
                  <div className="grid grid-cols-7 gap-1 text-center mb-2">
                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
                      <div key={d} className="text-[11px] font-mono text-stone-400 font-semibold py-1">
                        {d}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Days Grid */}
                  <div className="grid grid-cols-7 gap-1 text-center">
                    {Array.from({ length: startDay }).map((_, i) => (
                      <div key={`empty-${i}`} className="h-9 sm:h-10" />
                    ))}

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
                          className={`h-9 sm:h-10 rounded-lg text-xs sm:text-sm font-semibold transition-all flex flex-col items-center justify-center relative ${
                            selected
                              ? 'bg-amber-600 text-white dark:bg-amber-500 dark:text-stone-950 font-bold shadow-xs ring-2 ring-amber-500/30'
                              : isToday
                              ? 'border border-amber-600/50 dark:border-amber-400/50 text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/40 cursor-pointer font-bold'
                              : disabled
                              ? 'text-stone-300 dark:text-stone-700 cursor-not-allowed opacity-40 bg-transparent'
                              : 'text-stone-800 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-800 cursor-pointer'
                          }`}
                        >
                          <span>{day}</span>
                          {isToday && !selected && (
                            <span className="w-1 h-1 rounded-full bg-amber-500 absolute bottom-1" />
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

                {validationErrors.date && (
                  <p className="text-xs text-red-600 dark:text-red-400 text-center font-medium" role="alert">
                    {validationErrors.date}
                  </p>
                )}

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
                STEP 02: SELECT A TIME (Available Time Slots in Asia/Kolkata)
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
                    <strong>24/7 Scheduling Flexibility:</strong> Times are displayed in <strong>Indian Standard Time ({DISPLAYED_TIMEZONE})</strong>. All slots are preferred times and will be personally confirmed by C M Karthik.
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
                          const isPast = isSlotInPast(selectedDate, slot);

                          return (
                            <button
                              type="button"
                              key={slot}
                              disabled={isPast}
                              onClick={() => handleSelectTime(slot)}
                              className={`min-h-[44px] p-3 rounded-xl text-xs font-semibold transition-all border text-center flex items-center justify-center gap-1.5 ${
                                isPast
                                  ? 'bg-stone-100/50 dark:bg-stone-900/50 text-stone-400 dark:text-stone-600 border-stone-200/50 dark:border-stone-800/50 cursor-not-allowed line-through opacity-45'
                                  : isSelected
                                  ? 'bg-amber-600 text-white dark:bg-amber-500 dark:text-stone-950 border-amber-600 dark:border-amber-500 shadow-xs ring-2 ring-amber-500/30 font-bold cursor-pointer'
                                  : 'bg-stone-50 dark:bg-stone-950 text-stone-800 dark:text-stone-200 border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 hover:bg-stone-100 dark:hover:bg-stone-900 cursor-pointer'
                              }`}
                              title={isPast ? 'Slot has already passed for today' : slot}
                            >
                              <Clock className="w-3.5 h-3.5 opacity-70" />
                              <span>{slot}</span>
                              {isPast && <span className="text-[10px] no-underline font-normal">(Past)</span>}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {validationErrors.time && (
                  <p className="text-xs text-red-600 dark:text-red-400 font-medium" role="alert">
                    {validationErrors.time}
                  </p>
                )}

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
                      <button
                        type="button"
                        key={serv.title}
                        onClick={() => handleServiceClick(serv.title)}
                        className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-amber-500/10 dark:bg-amber-400/10 border-amber-600 dark:border-amber-400 ring-2 ring-amber-500/20 shadow-xs'
                            : 'bg-stone-50 dark:bg-stone-950 border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700'
                        }`}
                      >
                        <div>
                          <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400 mb-1">
                            {serv.category}
                          </div>
                          <div className="font-bold text-sm text-stone-900 dark:text-stone-100 mb-1.5 flex items-center justify-between">
                            <span>{serv.title}</span>
                            {isSelected && <Check className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />}
                          </div>
                          <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                            {serv.description}
                          </p>
                        </div>
                      </button>
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
                        onChange={(e) => {
                          setClientName(e.target.value);
                          if (validationErrors.name) {
                            setValidationErrors((prev) => {
                              const copy = { ...prev };
                              delete copy.name;
                              return copy;
                            });
                          }
                        }}
                        className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-stone-50 dark:bg-stone-950 border text-stone-900 dark:text-stone-100 text-base sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/50 ${
                          validationErrors.name
                            ? 'border-red-500 ring-1 ring-red-500'
                            : 'border-stone-200 dark:border-stone-800'
                        }`}
                      />
                      {validationErrors.name && (
                        <p className="mt-1 text-xs text-red-600 dark:text-red-400 font-medium" role="alert">
                          {validationErrors.name}
                        </p>
                      )}
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
                        onChange={(e) => {
                          setClientEmail(e.target.value);
                          if (validationErrors.email) {
                            setValidationErrors((prev) => {
                              const copy = { ...prev };
                              delete copy.email;
                              return copy;
                            });
                          }
                        }}
                        className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-stone-50 dark:bg-stone-950 border text-stone-900 dark:text-stone-100 text-base sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/50 ${
                          validationErrors.email
                            ? 'border-red-500 ring-1 ring-red-500'
                            : 'border-stone-200 dark:border-stone-800'
                        }`}
                      />
                      {validationErrors.email && (
                        <p className="mt-1 text-xs text-red-600 dark:text-red-400 font-medium" role="alert">
                          {validationErrors.email}
                        </p>
                      )}
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
                        placeholder="e.g. +91 9876543210 or +1 (555) 000-1234"
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
                      onChange={(e) => {
                        setProjectMessage(e.target.value);
                        if (validationErrors.projectMessage) {
                          setValidationErrors((prev) => {
                            const copy = { ...prev };
                            delete copy.projectMessage;
                            return copy;
                          });
                        }
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-stone-50 dark:bg-stone-950 border text-stone-900 dark:text-stone-100 text-base sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/50 resize-y ${
                        validationErrors.projectMessage
                          ? 'border-red-500 ring-1 ring-red-500'
                          : 'border-stone-200 dark:border-stone-800'
                      }`}
                    />
                    {validationErrors.projectMessage && (
                      <p className="mt-1 text-xs text-red-600 dark:text-red-400 font-medium" role="alert">
                        {validationErrors.projectMessage}
                      </p>
                    )}
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

                  {/* Timeline & Project Scope */}
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
                      <label htmlFor={projectScopeId} className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 font-mono mb-1">
                        Project Scope
                      </label>
                      <select
                        id={projectScopeId}
                        value={projectScope}
                        onChange={(e) => setProjectScope(e.target.value)}
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 text-base sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/50"
                      >
                        <option value="Not sure yet — Let's discuss">Not sure yet — Let's discuss</option>
                        <option value="Small Project / Quick Build">Small Project / Quick Build</option>
                        <option value="Business Website">Business Website</option>
                        <option value="Custom Web Application">Custom Web Application</option>
                        <option value="Data / Analytics Project">Data / Analytics Project</option>
                        <option value="AI / ML Project">AI / ML Project</option>
                        <option value="Website Redesign / Improvement">Website Redesign / Improvement</option>
                        <option value="Ongoing Development / Maintenance">Ongoing Development / Maintenance</option>
                        <option value="Something Different">Something Different</option>
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
                    onClick={handleProceedToReview}
                    className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white dark:bg-stone-100 dark:hover:bg-white dark:text-stone-950 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs cursor-pointer active:scale-98"
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
                    Confirm your details below. Clicking Submit Request will deliver your request directly to <strong>{TARGET_EMAIL}</strong>.
                  </p>
                </div>

                {/* Structured Summary Card */}
                <div className="rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 p-5 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-stone-800">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                      PROJECT DISCUSSION REQUEST
                    </span>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(4)}
                      disabled={isSubmitting}
                      className="text-xs font-semibold text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 underline cursor-pointer disabled:opacity-50"
                    >
                      EDIT REQUEST
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
                      <span className="text-stone-500 block font-mono">Preferred Discussion Date</span>
                      <span className="font-bold text-stone-900 dark:text-stone-100 text-sm">
                        {formatDisplayDate(selectedDate)}
                      </span>
                    </div>

                    <div>
                      <span className="text-stone-500 block font-mono">Preferred Time &amp; Zone</span>
                      <span className="font-bold text-stone-900 dark:text-stone-100 text-sm">
                        {selectedTime} ({DISPLAYED_TIMEZONE})
                      </span>
                    </div>

                    <div>
                      <span className="text-stone-500 block font-mono">Timeline</span>
                      <span className="font-semibold text-stone-800 dark:text-stone-200">{timeline}</span>
                    </div>

                    <div>
                      <span className="text-stone-500 block font-mono">Project Scope</span>
                      <span className="font-semibold text-stone-800 dark:text-stone-200">{projectScope}</span>
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

                {/* Transparent Post-Submission Expectation Note */}
                <div className="p-4 rounded-xl bg-amber-500/5 dark:bg-amber-400/5 border border-amber-500/20 text-xs text-stone-600 dark:text-stone-300 leading-relaxed flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 dark:text-stone-100 block mb-0.5">
                      Direct Human Review &amp; Personal Confirmation:
                    </strong>
                    The selected date and time represent your preferred discussion window. Your project details will help me understand your requirements before our discussion. I will review your submission and personally get in touch via <strong>{contactMethod}</strong> ({clientEmail}) to confirm the final call coordination.
                  </div>
                </div>

                {/* Error State Banner (Requirement: Do NOT show fake success) */}
                {submitError && (
                  <div
                    className="p-4 sm:p-5 rounded-xl bg-red-500/10 dark:bg-red-500/15 border border-red-500/30 text-stone-800 dark:text-stone-200 space-y-3"
                    role="alert"
                  >
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <h4 className="text-xs sm:text-sm font-bold text-red-700 dark:text-red-400 uppercase tracking-wider font-mono">
                          UNABLE TO SEND YOUR REQUEST
                        </h4>
                        <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                          {submitError}
                        </p>
                        <p className="text-xs text-stone-600 dark:text-stone-400">
                          Please try again or contact me directly at:{' '}
                          <a
                            href={`mailto:${TARGET_EMAIL}`}
                            className="font-bold underline text-stone-900 dark:text-stone-100 hover:text-amber-600"
                          >
                            {TARGET_EMAIL}
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 pt-1">
                      <button
                        type="button"
                        onClick={() => handleSubmitRequest()}
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shadow-xs cursor-pointer disabled:opacity-50"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>TRY AGAIN</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleDirectEmailFallback}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-red-300 dark:border-red-800 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 text-xs font-semibold hover:bg-red-50 dark:hover:bg-red-950/40 cursor-pointer"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Open in Email App (Direct Fallback)</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 pt-4 border-t border-stone-200 dark:border-stone-800">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(4)}
                    disabled={isSubmitting}
                    className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 cursor-pointer disabled:opacity-50"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>EDIT REQUEST</span>
                  </button>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={handleCopySummary}
                      disabled={isSubmitting}
                      className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-semibold hover:bg-stone-100 dark:hover:bg-stone-700 cursor-pointer disabled:opacity-50"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{isCopied ? 'Copied' : 'Copy Summary'}</span>
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      aria-busy={isSubmitting}
                      className={`w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md ${
                        isSubmitting
                          ? 'bg-amber-600 text-white cursor-wait opacity-90'
                          : 'bg-stone-900 hover:bg-stone-800 text-white dark:bg-stone-100 dark:hover:bg-white dark:text-stone-950 active:scale-98 cursor-pointer'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>SUBMIT REQUEST</span>
                        </>
                      )}
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
