import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const Background: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      style={{
        backgroundColor: isDark ? '#0c1017' : '#faf9f6',
      }}
    >
      {/* Crisp, subtle architectural grid pattern for professional engineering feel (completely static, zero motion) */}
      <div
        className="absolute inset-0 opacity-40 dark:opacity-15"
        style={{
          backgroundImage: isDark
            ? 'linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)'
            : 'linear-gradient(to right, rgba(0, 0, 0, 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.035) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Gentle static ambient vignette to focus content */}
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? 'radial-gradient(circle at 50% 15%, transparent 50%, rgba(12, 16, 23, 0.8) 100%)'
            : 'radial-gradient(circle at 50% 15%, transparent 55%, rgba(250, 249, 246, 0.85) 100%)',
        }}
      />
    </div>
  );
};
