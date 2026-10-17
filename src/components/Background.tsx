import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const Background: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* Light Theme Background Layer with Smooth Cross-fade */}
      <div
        className={`absolute inset-0 bg-[#faf9f6] transition-opacity duration-500 ease-in-out ${
          isDark ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {/* Subtle engineering grid for light mode */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(0, 0, 0, 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.035) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        {/* Soft radial vignette for light mode */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 15%, transparent 55%, rgba(250, 249, 246, 0.85) 100%)',
          }}
        />
      </div>

      {/* Dark Theme Background Layer with Smooth Cross-fade */}
      <div
        className={`absolute inset-0 bg-[#0c1017] transition-opacity duration-500 ease-in-out ${
          isDark ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Subtle engineering grid for dark mode */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        {/* Soft radial vignette for dark mode */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 15%, transparent 50%, rgba(12, 16, 23, 0.8) 100%)',
          }}
        />
      </div>
    </div>
  );
};
