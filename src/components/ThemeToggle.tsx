import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Monitor, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ThemeMode } from '../types';

export const ThemeToggle: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const themeOptions: { value: ThemeMode; label: string; icon: React.ReactNode; tooltip: string }[] = [
    {
      value: 'light',
      label: 'Light',
      tooltip: 'Light theme (Clean high-contrast)',
      icon: <Sun className="w-4 h-4 text-amber-500" />,
    },
    {
      value: 'dark',
      label: 'Dark',
      tooltip: 'Dark theme (Deep ambient elevated)',
      icon: <Moon className="w-4 h-4 text-indigo-400" />,
    },
    {
      value: 'system',
      label: 'System',
      tooltip: 'System theme (Auto-sync with OS)',
      icon: <Monitor className="w-4 h-4 text-slate-500 dark:text-slate-400" />,
    },
  ];

  // Cycle to next mode on direct click if compact button
  const handleQuickCycle = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  const currentIcon = () => {
    if (theme === 'light') return <Sun className="w-4 h-4 text-amber-500" />;
    if (theme === 'dark') return <Moon className="w-4 h-4 text-indigo-400" />;
    return <Monitor className="w-4 h-4 text-slate-600 dark:text-slate-300" />;
  };

  const getModeSymbol = () => {
    if (theme === 'light') return '☀';
    if (theme === 'dark') return '🌙';
    return '◐';
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef} id="theme-toggle-container">
      {compact ? (
        /* Segmented / Quick Button with accessible labels */
        <div className="flex items-center bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl border border-slate-200/80 dark:border-slate-700/60 shadow-sm">
          {themeOptions.map((opt) => (
            <button
              key={opt.value}
              id={`theme-btn-${opt.value}`}
              onClick={() => setTheme(opt.value)}
              title={opt.tooltip}
              aria-label={opt.tooltip}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg transition-all ${
                theme === opt.value
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {opt.icon}
              <span className="hidden sm:inline">{opt.label}</span>
            </button>
          ))}
        </div>
      ) : (
        <div className="flex items-center">
          {/* Segmented Controller for Desktop Navigation */}
          <div
            className="flex items-center bg-slate-100/90 dark:bg-slate-800/90 backdrop-blur-md p-1 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs"
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
                  aria-label={`${opt.label} theme mode`}
                  className={`relative flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-white dark:bg-slate-700/95 text-slate-950 dark:text-white shadow-xs ring-1 ring-black/5 dark:ring-white/10'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-700/40'
                  }`}
                >
                  <span className="shrink-0">{opt.icon}</span>
                  <span className="text-xs tracking-tight">{opt.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
