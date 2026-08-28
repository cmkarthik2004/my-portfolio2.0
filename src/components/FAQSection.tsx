import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';
import { FAQ_CATEGORIES } from '../data/portfolioData';

interface FAQSectionProps {
  onOpenFreelancePage?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenFreelancePage }) => {
  const [activeCategory, setActiveCategory] = useState<string>(FAQ_CATEGORIES[0].title);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true,
    'faq-2': false,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const currentCategoryData =
    FAQ_CATEGORIES.find((cat) => cat.title === activeCategory) || FAQ_CATEGORIES[0];

  return (
    <section id="faq" className="py-20 md:py-28 relative scroll-mt-20" aria-label="Frequently Asked Questions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
              08 / Clarifications &amp; Details
            </div>
            <h2
              id="faq-headline"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4"
            >
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Clear answers regarding development timelines, admin panel integrations, payment gateways, maintenance support, and getting started.
            </p>
          </div>

          {onOpenFreelancePage && (
            <button
              onClick={onOpenFreelancePage}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm font-semibold hover:border-indigo-400 dark:hover:border-indigo-600 shadow-xs active:scale-95 transition-all cursor-pointer shrink-0"
            >
              <span>View All Freelance FAQs</span>
              <ArrowRight className="w-4 h-4 text-indigo-500" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {FAQ_CATEGORIES.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(cat.title)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.title
                  ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Accordion Questions List */}
        <div className="max-w-3xl space-y-3">
          {currentCategoryData.items.map((item) => {
            const isOpen = !!openItems[item.id];
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => toggleItem(item.id)}
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
  );
};
