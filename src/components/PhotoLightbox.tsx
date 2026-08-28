import React, { useEffect } from 'react';
import { X, ZoomIn, Download, ExternalLink, Sparkles, Shield, User, MapPin } from 'lucide-react';
import { PERSONAL_INFO, siteConfig } from '../data/portfolioData';

interface PhotoLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
}) => {
  // Prevent body scrolling when open and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="photo-lightbox-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-slate-950/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-photo-title"
    >
      <div
        className="relative max-w-2xl w-full max-h-[92vh] bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col transform transition-all duration-300 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-950/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-xs">
              CK
            </div>
            <div>
              <h3 id="lightbox-photo-title" className="text-sm font-bold text-slate-900 dark:text-white">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-indigo-500" />
                <span>{PERSONAL_INFO.location}</span>
                <span>•</span>
                <span>Bengaluru, India</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="lightbox-close-button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close photo viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Photo Container */}
        <div className="relative flex-1 bg-slate-950 flex items-center justify-center overflow-hidden min-h-[340px] sm:min-h-[420px]">
          {/* Subtle backdrop glow */}
          <div className="absolute inset-0 bg-radial from-indigo-900/30 via-transparent to-slate-950 pointer-events-none" />

          <img
            src={imageSrc}
            alt={imageAlt}
            referrerPolicy="no-referrer"
            className="max-h-[65vh] w-auto max-w-full object-contain select-none z-10"
          />
        </div>

        {/* Footer info banner */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-semibold text-slate-900 dark:text-white">C M Karthik</span>
            <span className="text-slate-400">•</span>
            <span>Freelance Full-Stack & Applied AI</span>
          </div>

          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-mono text-[11px]">
            <span>Press ESC or click anywhere outside to close</span>
          </div>
        </div>
      </div>
    </div>
  );
};
