import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true,
    'faq-2': false,
    'faq-3': false,
    'faq-4': false,
    'faq-5': false,
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
      question: 'What kind of projects can I contact you about?',
      answer:
        'You can reach out for custom full-stack web applications, commercial business websites, client portals with admin dashboards, payment gateway integrations (such as Razorpay), and applied AI/ML features like computer vision or data pipelines.',
    },
    {
      id: 'faq-2',
      question: 'How does a project usually start?',
      answer:
        'A project begins with an initial conversation where you share your concept or requirements. We hold a discovery discussion to evaluate technical feasibility and scope, establish a milestone-driven plan, and then begin active development with staging previews.',
    },
    {
      id: 'faq-3',
      question: 'How does the development process work?',
      answer:
        'Development follows a structured 5-stage workflow: Requirements & Scoping, Full-Stack Development, Testing & Quality Assurance, Production Deployment, and Post-Launch Support. You receive regular staging updates to review progress interactively.',
    },
    {
      id: 'faq-4',
      question: 'Do you help with deployment and hosting setup?',
      answer:
        'Yes. I handle full production deployments on Linux VPS (such as Ubuntu), configure Nginx reverse proxies, establish SSL certificates (Certbot/HTTPS), set up domain routing, and ensure automated database backups.',
    },
    {
      id: 'faq-5',
      question: 'Can applications be improved and updated after launch?',
      answer:
        'Yes. Deployment is not the final step. After launch, real user behavior and client feedback inform subsequent improvement cycles, including UI/UX enhancements, new feature additions, bug fixes, and performance tuning.',
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 relative scroll-mt-20" aria-label="Frequently Asked Questions">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="text-xs font-semibold tracking-wider text-stone-500 dark:text-stone-400 uppercase mb-2 font-mono inline-flex items-center gap-2">
            <span className="w-3 h-[1.5px] bg-amber-600 dark:bg-amber-400 inline-block"></span>
            <span>06 / FAQ</span>
            <span className="w-3 h-[1.5px] bg-amber-600 dark:bg-amber-400 inline-block"></span>
          </div>
          <h2
            id="faq-headline"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100 tracking-tight leading-tight group cursor-default transition-colors duration-200 hover:text-amber-700 dark:hover:text-amber-400"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 mt-3">
            Clear answers to common questions about scoping, development, deployment, and ongoing collaboration.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {clientFaqs.map((faq) => {
            const isOpen = Boolean(openItems[faq.id]);
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-stone-900 dark:text-stone-100 text-base sm:text-lg hover:text-stone-700 dark:hover:text-stone-300 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed border-t border-stone-100 dark:border-stone-800/80 pt-4">
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
