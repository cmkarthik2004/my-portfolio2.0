import React, { useState } from 'react';
import {
  Maximize2,
  Database,
  Scan,
  ClipboardList,
  GitBranch,
  Layers,
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

  // Category based color gradients (preserving exact blue, purple, and dark palette)
  const getCategoryStyles = () => {
    switch (project.categoryType) {
      case 'freelance':
        return {
          gradient: 'from-indigo-600/90 via-sky-600/80 to-blue-900/90',
          chipText: 'Production Web Application',
          accent: 'indigo',
        };
      case 'aiml':
        return {
          gradient: 'from-violet-600/90 via-purple-700/80 to-slate-900/90',
          chipText: 'AI / Machine Learning Architecture',
          accent: 'violet',
        };
      case 'fullstack':
      default:
        return {
          gradient: 'from-cyan-600/90 via-blue-700/80 to-slate-900/90',
          chipText: 'Full-Stack System',
          accent: 'cyan',
        };
    }
  };

  const catStyle = getCategoryStyles();
  const ratioClasses =
    aspectRatio === 'video'
      ? 'aspect-video'
      : aspectRatio === 'card'
      ? 'aspect-[2.2/1] sm:aspect-[2.3/1]'
      : 'aspect-16/10 sm:aspect-16/9';

  // Project-specific subtle visual rendering (low-profile supporting visual, no competing title/telemetry)
  const renderProjectVisual = () => {
    if (project.id === 'smart-lpg') {
      return (
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-black/25 backdrop-blur-xs border border-white/10">
            <Database className="w-3 h-3 text-cyan-300" />
            <span className="text-[10px] font-mono tracking-wider text-cyan-100/90 uppercase">
              JDBC · MySQL System
            </span>
          </div>
          <span className="text-[10px] font-mono text-cyan-200/60 hidden sm:inline">TRANSACTION ENGINE</span>
        </div>
      );
    }

    if (project.id === 'deptsync') {
      return (
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-black/25 backdrop-blur-xs border border-white/10">
            <ClipboardList className="w-3 h-3 text-sky-300" />
            <span className="text-[10px] font-mono tracking-wider text-sky-100/90 uppercase">
              Flask · Academic ERP
            </span>
          </div>
          <span className="text-[10px] font-mono text-sky-200/60 hidden sm:inline">CAMPUS WORKFLOW</span>
        </div>
      );
    }

    if (project.id === 'ai-smart-vision') {
      return (
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-black/25 backdrop-blur-xs border border-white/10">
            <Scan className="w-3 h-3 text-violet-300" />
            <span className="text-[10px] font-mono tracking-wider text-violet-100/90 uppercase">
              YOLOv8 · Vision Engine
            </span>
          </div>
          <span className="text-[10px] font-mono text-violet-200/60 hidden sm:inline">REAL-TIME INFERENCE</span>
        </div>
      );
    }

    if (project.id === 'federated-skin-disease') {
      return (
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-black/25 backdrop-blur-xs border border-white/10">
            <GitBranch className="w-3 h-3 text-violet-300" />
            <span className="text-[10px] font-mono tracking-wider text-violet-100/90 uppercase">
              Federated Learning
            </span>
          </div>
          <span className="text-[10px] font-mono text-violet-200/60 hidden sm:inline">PRIVACY ARCHITECTURE</span>
        </div>
      );
    }

    // Default fallback
    return (
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-black/25 backdrop-blur-xs border border-white/10">
          <Layers className="w-3 h-3 text-white/80" />
          <span className="text-[10px] font-mono tracking-wider text-white/90 uppercase">
            {catStyle.chipText}
          </span>
        </div>
        <span className="text-[10px] font-mono text-white/60 hidden sm:inline">{project.category}</span>
      </div>
    );
  };

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
        /* Tasteful Category CSS/Abstract Visual Fallback with preserved color gradients */
        <div className={`w-full h-full bg-gradient-to-br ${catStyle.gradient} p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden`}>
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"
          />

          {/* Subtle ambient header */}
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-xs text-white/85 text-[11px] font-mono border border-white/10">
              <Layers className="w-3 h-3 text-white/70" />
              <span>{project.category}</span>
            </div>
            <span className="text-white/50 text-[10px] font-mono">{project.year}</span>
          </div>

          {/* Supporting Micro-Detail Visual (Low profile, does not compete with main card title) */}
          {renderProjectVisual()}
        </div>
      )}
    </div>
  );
}
