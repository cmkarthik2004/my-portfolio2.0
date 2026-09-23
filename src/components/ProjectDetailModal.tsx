import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Globe,
  Github,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Calendar,
  Layers,
  Sparkles,
  CheckCircle2,
  Server,
  Code2,
  ExternalLink,
  Shield,
  Award,
} from 'lucide-react';
import { Project } from '../types';
import { ProjectMediaPreview } from './ProjectMediaPreview';
import { getAssetUrl } from '../utils/assetHelper';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailModal({
  project,
  isOpen,
  onClose,
}: ProjectDetailModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Reset image index when modal opens for a new project
  useEffect(() => {
    setActiveImageIndex(0);
    setIsLightboxOpen(false);
  }, [project]);

  // Lock body scroll when open
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

  if (!isOpen || !project) return null;

  const totalImages =
    project.gallery?.length || project.images?.length || 0;

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : totalImages - 1));
  };

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImageIndex((prev) => (prev < totalImages - 1 ? prev + 1 : 0));
  };

  const isLive = Boolean(project.liveUrl && project.liveUrl.trim().length > 0);
  const hasGithub = Boolean(project.githubUrl && project.githubUrl.trim().length > 0);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/75 backdrop-blur-md transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[94vh] sm:max-h-[90vh] bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur sticky top-0 z-20">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-[11px] sm:text-xs px-2 sm:px-2.5 py-1 rounded-md bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 font-semibold uppercase tracking-wider truncate">
                {project.category}
              </span>
              {isLive && (
                <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  LIVE
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {/* Dynamic Live Website Button in Header */}
              {isLive && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[36px] inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span className="hidden xs:inline">Visit Live</span>
                </a>
              )}

              {/* Dynamic GitHub Button in Header */}
              {hasGithub && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[36px] inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">
                    {project.id === 'ai-smart-vision' ? 'GitHub / View Code' : 'GitHub'}
                  </span>
                </a>
              )}

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="p-2 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-1 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-4 sm:p-8 overflow-y-auto space-y-6 sm:space-y-8 overscroll-contain">
            {/* Title & Metadata */}
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                <span>{project.year}</span>
                {project.clientContext && (
                  <>
                    <span>&bull;</span>
                    <span className="truncate">{project.clientContext}</span>
                  </>
                )}
              </div>
              <h2 className="text-xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                {project.name}
              </h2>
            </div>

            {/* Media Gallery Section - shown when project has images or gallery */}
            {totalImages > 0 && (
              <div className="space-y-3">
                <div className="relative rounded-2xl overflow-hidden shadow-md">
                  <ProjectMediaPreview
                    project={project}
                    currentImageIndex={activeImageIndex}
                    onOpenLightbox={() => setIsLightboxOpen(true)}
                    aspectRatio="video"
                    showLiveBadge={false}
                  />

                  {/* Gallery Next / Prev Controls if multiple images */}
                  {totalImages > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={handlePrevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-md transition-all shadow-md cursor-pointer"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={handleNextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-md transition-all shadow-md cursor-pointer"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      {/* Image indicator pill */}
                      <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-slate-950/70 backdrop-blur-md text-white/90 text-xs font-mono">
                        {activeImageIndex + 1} / {totalImages}
                      </div>
                    </>
                  )}
                </div>

                {/* Thumbnails row if multiple images exist */}
                {totalImages > 1 && (
                  <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-thin">
                    {Array.from({ length: totalImages }).map((_, idx) => {
                      const galleryItem = project.gallery?.[idx];
                      const thumbUrl = galleryItem?.url || project.images?.[idx];
                      const label = galleryItem?.title || `Preview ${idx + 1}`;

                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveImageIndex(idx)}
                          className={`relative flex flex-col items-start p-1 rounded-xl shrink-0 transition-all cursor-pointer ${
                            activeImageIndex === idx
                              ? 'ring-2 ring-indigo-500 bg-slate-100 dark:bg-slate-800 scale-102 shadow-sm'
                              : 'opacity-65 hover:opacity-100 bg-slate-50 dark:bg-slate-900'
                          }`}
                          title={label}
                        >
                          <div className="w-20 h-14 rounded-lg overflow-hidden relative bg-slate-900 border border-slate-200 dark:border-slate-800">
                            {thumbUrl ? (
                              <img
                                src={getAssetUrl(thumbUrl)}
                                alt={galleryItem?.altText || `Thumbnail ${idx + 1}`}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover object-top"
                                onError={(e) => {
                                  (e.target as HTMLElement).style.display = 'none';
                                }}
                              />
                            ) : (
                              <div className="w-full h-full bg-slate-800 flex items-center justify-center text-[10px] text-white">
                                #{idx + 1}
                              </div>
                            )}
                            <span className="absolute bottom-0.5 right-1 px-1 rounded bg-black/75 text-[9px] font-mono text-white/90">
                              {idx + 1}
                            </span>
                          </div>
                          {galleryItem?.title && (
                            <span className="text-[10px] text-slate-600 dark:text-slate-400 font-medium truncate max-w-[80px] mt-0.5">
                              {galleryItem.title}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Image caption if available in gallery */}
                {project.gallery?.[activeImageIndex]?.caption && (
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-300">
                    {project.gallery[activeImageIndex].title && (
                      <span className="font-semibold text-indigo-600 dark:text-indigo-400 mr-1.5">
                        {project.gallery[activeImageIndex].title}:
                      </span>
                    )}
                    {project.gallery[activeImageIndex].caption}
                  </div>
                )}
              </div>
            )}

            {/* Description */}
            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500">
                Project Overview
              </h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500">
                  Key Features & Capabilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* My Contribution / Architecture */}
            {project.myContribution && (
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-indigo-500" />
                  <span>My Engineering Contribution</span>
                </h3>
                <div className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 whitespace-pre-line">
                  {project.myContribution}
                </div>
              </div>
            )}

            {/* Performance Metrics / Experimental Results */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Model &amp; Performance Metrics</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {project.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800"
                    >
                      <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                        {metric.label}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Result / Outcome */}
            {project.result && (
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Outcome &amp; Production Impact</span>
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40">
                  {project.result}
                </p>
              </div>
            )}

            {/* Technologies */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500">
                Technologies & Architecture
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-mono font-medium border border-slate-200/80 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer with Dynamic Action Links */}
          <div className="p-3.5 sm:p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between sm:justify-start gap-1.5 pt-1 sm:pt-0">
              <span>Delivery Year:</span>
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                {project.year}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {/* If liveUrl exists: render Live Website button */}
              {isLive && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial min-h-[44px] inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-sm transition-colors text-center"
                >
                  <Globe className="w-4 h-4" />
                  <span>Open Live Website</span>
                </a>
              )}

              {/* If githubUrl exists: render GitHub button */}
              {hasGithub && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial min-h-[44px] inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm shadow-sm transition-colors text-center"
                >
                  <Github className="w-4 h-4" />
                  <span>{project.id === 'ai-smart-vision' ? 'GitHub / View Code' : 'Repository'}</span>
                </a>
              )}

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Lightbox Zoom Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-60 bg-black/95 flex flex-col items-center justify-center p-4 select-none"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="absolute top-4 right-4 flex items-center gap-3 z-30">
            <span className="text-white/80 font-mono text-xs px-3 py-1 rounded-full bg-white/10">
              {activeImageIndex + 1} / {totalImages}
            </span>
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Prev / Next controls */}
          {totalImages > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrevImage}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors cursor-pointer"
                title="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={handleNextImage}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors cursor-pointer"
                title="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div
            className="max-w-6xl max-h-[85vh] w-full flex flex-col items-center justify-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={getAssetUrl(project.gallery?.[activeImageIndex]?.url || project.images?.[activeImageIndex] || '')}
              alt={project.gallery?.[activeImageIndex]?.altText || `${project.name} preview`}
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[76vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
            />
            {project.gallery?.[activeImageIndex] && (
              <div className="mt-3 text-center max-w-2xl px-4">
                {project.gallery[activeImageIndex].title && (
                  <p className="text-sm font-semibold text-indigo-400">
                    {project.gallery[activeImageIndex].title}
                  </p>
                )}
                {project.gallery[activeImageIndex].caption && (
                  <p className="text-xs text-slate-300 mt-0.5">
                    {project.gallery[activeImageIndex].caption}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
