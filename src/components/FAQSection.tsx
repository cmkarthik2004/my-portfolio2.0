import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const clientFaqs = [
    {
      id: 'faq-1',
      question: 'What types of projects can I contact you about?',
      answer:
        'You can reach out for business websites, custom web applications, client portals, admin dashboards, e-commerce platforms, booking systems, payment integrations, data analytics, dashboards, automation, and practical AI/ML solutions.',
    },
    {
      id: 'faq-2',
      question: 'I already have business data. Can you use it to improve my business?',
      answer:
        'Yes. If you already have customer, sales, website, operational, or other business data, I can help analyze it to identify patterns, opportunities, inefficiencies, and areas where your business could improve.',
    },
    {
      id: 'faq-3',
      question: 'My business is facing challenges or not growing as expected. Can technology help?',
      answer:
        'Yes. We can first understand your current business process and challenges, then identify where digital products, automation, analytics, or AI could help improve efficiency, customer experience, and decision-making.',
    },
    {
      id: 'faq-4',
      question: "I don't know what technology my business needs. Can you help?",
      answer:
        "Absolutely. You don't need to know whether you need a website, dashboard, automation, analytics, or AI. Start by explaining your business problem or goal, and we can explore a practical solution together.",
    },
    {
      id: 'faq-5',
      question: 'Can you improve my existing website or software?',
      answer:
        'Yes. I can review your existing system and identify opportunities to improve its user experience, performance, functionality, security, maintainability, and overall business value.',
    },
    {
      id: 'faq-6',
      question: 'Can you automate repetitive work in my business?',
      answer:
        'Yes. We can identify repetitive or time-consuming workflows and explore practical automation using APIs, integrations, custom software, and AI where appropriate.',
    },
    {
      id: 'faq-7',
      question: 'Can you build a solution around my specific business process?',
      answer:
        'Yes. Solutions can be designed around your actual workflow, requirements, customers, and business goals rather than forcing your business into a generic system.',
    },
    {
      id: 'faq-8',
      question: 'How does a project usually start?',
      answer:
        'A project starts with a conversation about your idea, business problem, requirements, or goals. We first understand the problem and explore the technical approach before defining the scope and development plan.',
    },
    {
      id: 'faq-9',
      question: 'Do you help with deployment and hosting?',
      answer:
        'Yes. I can help with production deployment, domain configuration, HTTPS/SSL, Linux VPS setup, server configuration, database deployment, and ongoing technical maintenance.',
    },
    {
      id: 'faq-10',
      question: 'Can applications be improved after launch?',
      answer:
        'Yes. Launch is not the end of the process. Based on real user feedback, business requirements, and performance, we can continue improving the product with new features, UI/UX improvements, bug fixes, optimization, and automation.',
    },
    {
      id: 'faq-11',
      question: 'Do you work with small and local businesses?',
      answer:
        'Yes. I work with businesses at different stages and can help identify practical technology solutions based on their specific needs, goals, and available resources.',
    },
    {
      id: 'faq-12',
      question: 'How do I get started?',
      answer:
        'Simply share your business idea, current challenge, existing system, or what you want to improve. We can start with the problem and explore the right solution from there.',
    },
  ];

  return (
    <section id="faq" className="py-10 sm:py-14 md:py-18 relative scroll-mt-20" aria-label="Frequently Asked Questions">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Handwritten Accent in Top Right */}
        <div className="hidden xl:flex flex-col items-center absolute -right-24 top-6 pointer-events-none select-none">
          <div className="font-caveat text-xl text-stone-700 dark:text-stone-300 leading-snug text-center rotate-[6deg]">
            <span>Still have</span><br />
            <span>questions?</span><br />
            <span className="text-amber-600 dark:text-amber-400 font-bold">Let's talk!</span>
          </div>
          <svg
            className="w-10 h-10 text-stone-500 dark:text-stone-400 mt-1 rotate-[45deg]"
            viewBox="0 0 50 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M 12 10 Q 25 35 38 22" />
            <path d="M 30 20 L 38 22 L 35 30" />
          </svg>
        </div>

        {/* Section Header */}
        <div className="mb-8 sm:mb-14 text-center">
          <div className="text-xs font-semibold tracking-wider text-stone-500 dark:text-stone-400 uppercase mb-2 font-mono inline-flex items-center gap-2">
            <span className="w-3 h-[1.5px] bg-amber-600 dark:bg-amber-400 inline-block"></span>
            <span>06 / FAQ</span>
            <span className="w-3 h-[1.5px] bg-amber-600 dark:bg-amber-400 inline-block"></span>
          </div>
          <h2
            id="faq-headline"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100 tracking-tight leading-tight group cursor-default transition-colors duration-200 hover:text-amber-700 dark:hover:text-amber-400"
          >
            Got Questions? We Have Answers.
          </h2>
          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 mt-3">
            Whether you have a business idea, an existing system, or a problem you want to solve, let's explore the right digital approach.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {clientFaqs.map((faq) => {
            const isOpen = Boolean(openItems[faq.id]);
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`rounded-xl bg-white dark:bg-stone-900 border overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? 'border-amber-500/60 dark:border-amber-400/60 shadow-xs'
                    : 'border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700 hover:shadow-xs hover:-translate-y-0.5'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-4.5 sm:px-6 py-4 sm:py-5 min-h-[48px] text-left flex items-center justify-between gap-3 sm:gap-4 font-semibold text-stone-900 dark:text-stone-100 text-base sm:text-lg hover:text-amber-700 dark:hover:text-amber-400 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base leading-snug">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4.5 sm:px-6 pb-4 sm:pb-5 text-xs sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed border-t border-stone-100 dark:border-stone-800/80 pt-3 sm:pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
