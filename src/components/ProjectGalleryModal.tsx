import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Github,
  Maximize2,
  Minimize2,
  Images,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';
import { Project, ProjectImage } from '../types';
import { getAssetUrl } from '../utils/assetHelper';

interface ProjectGalleryModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export function ProjectGalleryModal({
  project,
  isOpen,
  onClose,
  initialIndex = 0,
}: ProjectGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [failedUrls, setFailedUrls] = useState<Record<string, boolean>>({});
  const [urlTryIndex, setUrlTryIndex] = useState(0);

  // Sync initialIndex when modal opens or initialIndex changes
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setImageLoaded(false);
      setUrlTryIndex(0);
    }
  }, [isOpen, initialIndex, project?.id]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const items: ProjectImage[] = React.useMemo(() => {
    if (!project) return [];
    if (project.gallery && project.gallery.length > 0) {
      return project.gallery;
    }
    if (project.images && project.images.length > 0) {
      return project.images.map((img, i) => ({
        url: img,
        title: `Screenshot ${i + 1}`,
        altText: `${project.name} screenshot ${i + 1}`,
        caption: `${project.name} visual preview ${i + 1}`,
      }));
    }
    return [];
  }, [project]);

  const total = items.length;
  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    setImageLoaded(false);
    setUrlTryIndex(0);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setImageLoaded(false);
    setUrlTryIndex(0);
    setCurrentIndex((prev) => (prev < total - 1 ? prev + 1 : 0));
  }, [total]);

  // Keyboard navigation (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !project || total === 0 || !currentItem) return null;

  // Resolve candidate URLs for the current item with fallbacks
  const getActiveUrl = () => {
    const primary = currentItem.url;
    const fallbacks = currentItem.fallbackUrls || [];
    const all = [primary, ...fallbacks];
    return all[urlTryIndex] || primary;
  };

  const handleImageError = () => {
    const fallbacks = currentItem.fallbackUrls || [];
    const maxIndex = fallbacks.length;
    if (urlTryIndex < maxIndex) {
      setUrlTryIndex((prev) => prev + 1);
    } else {
      setFailedUrls((prev) => ({ ...prev, [currentItem.url]: true }));
    }
  };

  const currentDisplayUrl = getActiveUrl();

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/90 backdrop-blur-md transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-6xl max-h-[96vh] bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10 text-white"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-3.5 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md shrink-0">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-mono font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 uppercase tracking-wider shrink-0">
                Gallery
              </span>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight truncate">
                  {project.name}
                </h3>
                <p className="text-[11px] text-slate-400 truncate hidden xs:block">
                  {currentItem.title || `Screenshot ${currentIndex + 1}`}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {/* Counter pill */}
              <div className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono font-medium border border-slate-700/60">
                <span className="text-white font-semibold">{currentIndex + 1}</span> / {total}
              </div>

              {/* GitHub Link */}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700/80 transition-colors"
                  title="View repository on GitHub"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close screenshot gallery"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Visual Display Area */}
          <div className="relative flex-1 flex flex-col items-center justify-center p-3 sm:p-6 bg-slate-950 overflow-hidden min-h-[320px] sm:min-h-[440px]">
            {/* Previous Button */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white backdrop-blur-md border border-slate-700/60 transition-all hover:scale-105 shadow-xl cursor-pointer"
              aria-label="Previous screenshot"
              title="Previous screenshot (Left Arrow)"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white backdrop-blur-md border border-slate-700/60 transition-all hover:scale-105 shadow-xl cursor-pointer"
              aria-label="Next screenshot"
              title="Next screenshot (Right Arrow)"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Image Container with preserved aspect ratio */}
            <div className="relative w-full h-full flex items-center justify-center max-h-[58vh] sm:max-h-[64vh] overflow-hidden select-none">
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                </div>
              )}

              <img
                key={currentDisplayUrl}
                src={getAssetUrl(currentDisplayUrl)}
                alt={currentItem.altText}
                referrerPolicy="no-referrer"
                onError={handleImageError}
                onLoad={() => setImageLoaded(true)}
                className={`max-w-full max-h-[58vh] sm:max-h-[64vh] w-auto h-auto object-contain rounded-xl shadow-2xl transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>

            {/* Current Item Caption & Purpose Bar */}
            <div className="mt-3 text-center max-w-2xl px-4 z-10 shrink-0">
              <div className="inline-flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wide">
                  {String(currentIndex + 1).padStart(2, '0')}. {currentItem.title || `Screenshot ${currentIndex + 1}`}
                </span>
              </div>
              {currentItem.caption && (
                <p className="text-xs sm:text-sm text-slate-300 leading-snug">
                  {currentItem.caption}
                </p>
              )}
            </div>
          </div>

          {/* Bottom Thumbnail Strip */}
          <div className="px-3 sm:px-6 py-3 border-t border-slate-800 bg-slate-950/95 shrink-0">
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 scrollbar-thin">
              {items.map((item, idx) => {
                const isActive = currentIndex === idx;
                const thumbUrl = item.url;

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setImageLoaded(false);
                      setUrlTryIndex(0);
                      setCurrentIndex(idx);
                    }}
                    className={`group relative flex flex-col items-start p-1 rounded-xl shrink-0 transition-all cursor-pointer text-left ${
                      isActive
                        ? 'bg-slate-800 ring-2 ring-indigo-500 scale-[1.02]'
                        : 'bg-slate-900/60 hover:bg-slate-800/80 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div className="w-20 sm:w-28 h-12 sm:h-16 rounded-lg overflow-hidden bg-slate-950 border border-slate-700/60 relative">
                      <img
                        src={getAssetUrl(thumbUrl)}
                        alt={item.altText}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          const target = e.target as HTMLElement;
                          target.style.display = 'none';
                        }}
                      />
                      <span className="absolute bottom-1 right-1 px-1 py-0.5 rounded bg-black/75 text-[9px] font-mono text-white/90">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <span
                      className={`mt-1 text-[10px] sm:text-[11px] font-medium truncate max-w-[80px] sm:max-w-[112px] block ${
                        isActive ? 'text-indigo-300 font-semibold' : 'text-slate-400 group-hover:text-slate-200'
                      }`}
                    >
                      {item.title || `Item ${idx + 1}`}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
