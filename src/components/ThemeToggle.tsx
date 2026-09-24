import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ThemeMode } from '../types';

export const ThemeToggle: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { theme, setTheme } = useTheme();

  // Cycling sequence: Light → Dark → System → Light
  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getThemeInfo = (mode: ThemeMode) => {
    switch (mode) {
      case 'light':
        return {
          label: 'Light',
          nextLabel: 'Dark',
          icon: <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 shrink-0 transition-transform duration-200 group-hover:rotate-45" />,
          dotColor: 'bg-amber-500',
        };
      case 'dark':
        return {
          label: 'Dark',
          nextLabel: 'System',
          icon: <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-500 dark:text-indigo-400 shrink-0 transition-transform duration-200 group-hover:-rotate-12" />,
          dotColor: 'bg-indigo-500 dark:bg-indigo-400',
        };
      case 'system':
      default:
        return {
          label: 'System',
          nextLabel: 'Light',
          icon: <Monitor className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-600 dark:text-stone-300 shrink-0 transition-transform duration-200 group-hover:scale-110" />,
          dotColor: 'bg-stone-500 dark:bg-stone-400',
        };
    }
  };

  const current = getThemeInfo(theme);

  return (
    <button
      id="theme-single-toggle-btn"
      type="button"
      onClick={cycleTheme}
      title={`Theme: ${current.label} (Click to switch to ${current.nextLabel})`}
      aria-label={`Theme: ${current.label}. Click to switch to ${current.nextLabel}`}
      className={`group relative inline-flex items-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl transition-all duration-150 cursor-pointer select-none active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/70 border border-stone-200/90 dark:border-stone-700/80 bg-stone-100/90 dark:bg-stone-800/90 hover:bg-stone-200/80 dark:hover:bg-stone-700/80 text-stone-800 dark:text-stone-200 shadow-2xs shrink-0 ${
        compact
          ? 'px-2 py-1.5 sm:px-2.5 sm:py-1.5 text-xs'
          : 'px-3 py-1.5 text-xs'
      }`}
    >
      {/* Active Theme Icon */}
      {current.icon}

      {/* Mode Label - compact on narrow mobile (>= 440px or non-compact desktop shows label) */}
      <span
        className={`text-xs font-semibold tracking-tight text-stone-800 dark:text-stone-200 ${
          compact ? 'hidden min-[440px]:inline' : 'inline'
        }`}
      >
        {current.label}
      </span>

      {/* Subtle indicator dot */}
      <span
        className={`w-1.5 h-1.5 rounded-full ${current.dotColor} shrink-0`}
        aria-hidden="true"
      />
    </button>
  );
};

