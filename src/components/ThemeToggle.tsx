import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ThemeMode } from '../types';

export const ThemeToggle: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { theme, setTheme } = useTheme();

  const themeOptions: { value: ThemeMode; label: string; icon: (isActive: boolean) => React.ReactNode; tooltip: string }[] = [
    {
      value: 'light',
      label: 'Light',
      tooltip: 'Light theme (Default · Clean high-contrast)',
      icon: (active) => <Sun className={`w-3.5 h-3.5 ${active ? 'text-amber-500' : 'text-stone-500 dark:text-stone-400'}`} />,
    },
    {
      value: 'dark',
      label: 'Dark',
      tooltip: 'Dark theme (Deep ambient elevated)',
      icon: (active) => <Moon className={`w-3.5 h-3.5 ${active ? 'text-indigo-500 dark:text-indigo-400' : 'text-stone-500 dark:text-stone-400'}`} />,
    },
    {
      value: 'system',
      label: 'System',
      tooltip: 'System theme (Sync with operating system)',
      icon: (active) => <Monitor className={`w-3.5 h-3.5 ${active ? 'text-amber-600 dark:text-amber-400' : 'text-stone-500 dark:text-stone-400'}`} />,
    },
  ];

  return (
    <div className="relative inline-block text-left" id="theme-toggle-container">
      {compact ? (
        /* Segmented / Quick Button with accessible labels */
        <div
          className="flex items-center bg-stone-100/90 dark:bg-stone-800/90 p-1 rounded-xl border border-stone-200/90 dark:border-stone-700/80 shadow-xs"
          role="radiogroup"
          aria-label="Theme Selection"
        >
          {themeOptions.map((opt) => {
            const isActive = theme === opt.value;
            return (
              <button
                key={opt.value}
                id={`theme-btn-${opt.value}`}
                onClick={() => setTheme(opt.value)}
                title={opt.tooltip}
                role="radio"
                aria-checked={isActive}
                aria-label={opt.tooltip}
                className={`flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-white shadow-xs font-semibold border border-stone-200/80 dark:border-stone-600/50'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 font-medium'
                }`}
              >
                {opt.icon(isActive)}
                <span className="hidden sm:inline">{opt.label}</span>
                {isActive && (
                  <span className="w-1 h-1 rounded-full bg-amber-500 dark:bg-amber-400 shrink-0" aria-hidden="true" />
                )}
              </button>
            );
          })}
        </div>
      ) : (
        <div className="flex items-center">
          {/* Segmented Controller for Desktop Navigation */}
          <div
            className="flex items-center bg-stone-100/90 dark:bg-stone-800/90 backdrop-blur-md p-1 rounded-xl border border-stone-200/90 dark:border-stone-700/80 shadow-xs"
            role="radiogroup"
            aria-label="Appearance Mode"
          >
            {themeOptions.map((opt) => {
              const isActive = theme === opt.value;
              return (
                <button
                  key={opt.value}
                  id={`theme-segmented-${opt.value}`}
                  onClick={() => setTheme(opt.value)}
                  title={opt.tooltip}
                  aria-checked={isActive}
                  role="radio"
                  aria-label={`${opt.label} theme mode${isActive ? ' (currently active)' : ''}`}
                  className={`relative flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'bg-white dark:bg-stone-700 text-stone-950 dark:text-white font-semibold shadow-xs border border-stone-200/80 dark:border-stone-600/60 ring-1 ring-black/5 dark:ring-white/10'
                      : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/50 dark:hover:bg-stone-700/40 font-medium'
                  }`}
                >
                  <span className="shrink-0">{opt.icon(isActive)}</span>
                  <span className="text-xs tracking-tight">{opt.label}</span>
                  {isActive && (
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 shrink-0 ml-0.5"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
