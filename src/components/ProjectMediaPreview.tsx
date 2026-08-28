import React, { useState } from 'react';
import {
  Globe,
  Github,
  Maximize2,
  Code2,
  BrainCircuit,
  Server,
  Layers,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { Project } from '../types';
import { getAssetUrl } from '../utils/assetHelper';

interface ProjectMediaPreviewProps {
  project: Project;
  currentImageIndex?: number;
  onOpenLightbox?: () => void;
  aspectRatio?: 'video' | 'card';
  showLiveBadge?: boolean;
}

export function ProjectMediaPreview({
  project,
  currentImageIndex = 0,
  onOpenLightbox,
  aspectRatio = 'card',
  showLiveBadge = true,
}: ProjectMediaPreviewProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Determine current image URL if gallery/images exist
  const currentImageUrl =
    project.gallery && project.gallery.length > 0
      ? project.gallery[currentImageIndex]?.url
      : project.images && project.images.length > 0
      ? project.images[currentImageIndex]
      : null;

  const currentAltText =
    project.gallery && project.gallery[currentImageIndex]?.altText
      ? project.gallery[currentImageIndex].altText
      : `${project.name} ${project.category} visual`;

  const isLive = Boolean(project.liveUrl && project.liveUrl.trim().length > 0);

  // Category based decorative accents for tasteful fallback
  const getCategoryStyles = () => {
    switch (project.categoryType) {
      case 'freelance':
        return {
          gradient: 'from-indigo-600/90 via-sky-600/80 to-blue-900/90',
          icon: <Server className="w-10 h-10 text-indigo-300" />,
          chipText: 'Production Web Application',
          accent: 'indigo',
        };
      case 'aiml':
        return {
          gradient: 'from-violet-600/90 via-purple-700/80 to-slate-900/90',
          icon: <BrainCircuit className="w-10 h-10 text-violet-300" />,
          chipText: 'AI / Machine Learning Architecture',
          accent: 'violet',
        };
      case 'fullstack':
      default:
        return {
          gradient: 'from-cyan-600/90 via-blue-700/80 to-slate-900/90',
          icon: <Code2 className="w-10 h-10 text-cyan-300" />,
          chipText: 'Full-Stack System',
          accent: 'cyan',
        };
    }
  };

  const catStyle = getCategoryStyles();
  const ratioClasses = aspectRatio === 'video' ? 'aspect-video' : 'aspect-16/10 sm:aspect-16/9';

  return (
    <div className={`relative w-full ${ratioClasses} overflow-hidden rounded-2xl bg-slate-950 select-none group`}>
      {/* Live Badge if public live website */}
      {showLiveBadge && isLive && (
        <div className="absolute top-3 left-3 z-20">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/90 text-white text-[11px] font-semibold tracking-wide shadow-md backdrop-blur-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>LIVE</span>
          </span>
        </div>
      )}

      {/* Actual image when supplied and valid */}
      {currentImageUrl && !imageError ? (
        <>
          <img
            src={getAssetUrl(currentImageUrl)}
            alt={currentAltText}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

          {/* Lightbox trigger button if provided */}
          {onOpenLightbox && (
            <button
              type="button"
              onClick={onOpenLightbox}
              className="absolute top-3 right-3 z-20 p-2 rounded-xl bg-slate-900/70 hover:bg-slate-900 text-white/80 hover:text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all cursor-pointer shadow-lg"
              title="Expand image in Lightbox"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          )}
        </>
      ) : (
        /* Tasteful Category CSS/Abstract Visual Fallback (No generic stock photo / no broken icon) */
        <div className={`w-full h-full bg-gradient-to-br ${catStyle.gradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"
          />

          {/* Top metadata badge */}
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md text-white/90 text-xs font-mono">
              <Layers className="w-3 h-3 text-white/80" />
              <span>{project.category}</span>
            </div>
            <span className="text-white/60 text-xs font-mono">{project.year}</span>
          </div>

          {/* Center Graphic */}
          <div className="flex flex-col items-center justify-center my-auto text-center relative z-10 space-y-3">
            <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-inner">
              {catStyle.icon}
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold text-white tracking-tight drop-shadow-xs">
                {project.name}
              </div>
              <div className="text-xs text-white/80 font-medium mt-0.5">
                {catStyle.chipText}
              </div>
            </div>
          </div>

          {/* Bottom technology pills preview */}
          <div className="flex flex-wrap items-center gap-1.5 relative z-10">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-md bg-black/30 backdrop-blur-xs text-white/90 text-[10px] font-mono border border-white/10"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[10px] text-white/70 font-mono">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
