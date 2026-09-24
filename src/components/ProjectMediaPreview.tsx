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

  // Candidate image URLs in priority order based on explicit user mapping and gallery index
  const candidateUrls = React.useMemo(() => {
    const list: string[] = [];

    // 1. If gallery item exists at currentImageIndex, prioritize it and its fallbacks
    if (project.gallery && project.gallery.length > 0 && currentImageIndex < project.gallery.length) {
      const activeItem = project.gallery[currentImageIndex];
      if (activeItem?.url) {
        list.push(activeItem.url);
        if (activeItem.fallbackUrls) {
          activeItem.fallbackUrls.forEach((fb) => {
            if (fb && !list.includes(fb)) list.push(fb);
          });
        }
      }
    } else if (project.images && project.images.length > 0 && currentImageIndex < project.images.length) {
      const activeImg = project.images[currentImageIndex];
      if (activeImg) list.push(activeImg);
    }

    // 2. Explicit project image mapping for primary/fallback (WebP first, PNG/JPEG fallback)
    if (project.id === 'talestexts') {
      list.push(
        '/images/talestext.jpeg',
        '/talestext.jpeg',
        '/images/talestext.png',
        '/talestext.png',
        '/images/talestext.jpg',
        '/talestext.jpg'
      );
    } else if (project.id === 'kriyaatmak') {
      list.push(
        '/images/Kriyaatmak.webp',
        '/images/Kriyaatmak.png',
        '/Kriyaatmak.png',
        '/images/kriyaatmak.png',
        '/kriyaatmak.png',
        '/images/Kriyaatmak.jpeg',
        '/Kriyaatmak.jpeg'
      );
    } else if (
      project.id === 'federated-skin-disease' ||
      project.id === 'federated-deep-learning' ||
      project.name.toLowerCase().includes('federated')
    ) {
      list.push(
        '/images/federatedlogo.webp',
        '/images/federatedlogo.png',
        '/federatedlogo.png',
        '/images/federatedlogo.jpg',
        '/federatedlogo.jpg'
      );
    } else if (project.id === 'department-website') {
      list.push(
        '/images/Yelahanka.webp',
        '/images/Yelahanka.png',
        '/Yelahanka.png',
        '/images/yelahanka.png',
        '/yelahanka.png',
        '/images/Yelahanka.jpeg',
        '/Yelahanka.jpeg'
      );
    } else if (project.id === 'deptsync') {
      list.push(
        'https://raw.githubusercontent.com/cmkarthik2004/DeptSync/main/screenshots/landing-page.png',
        'https://cdn.jsdelivr.net/gh/cmkarthik2004/DeptSync@main/screenshots/landing-page.png',
        '/screenshots/landing-page.webp',
        '/screenshots/landing-page.png',
        '/projects/deptsync/landing-page.png'
      );
    } else if (project.id === 'ai-smart-vision') {
      list.push(
        'https://raw.githubusercontent.com/cmkarthik2004/Smart-Vision-AI-Assistant/main/project-images/landing_page.png',
        'https://cdn.jsdelivr.net/gh/cmkarthik2004/Smart-Vision-AI-Assistant@main/project-images/landing_page.png',
        'https://github.com/cmkarthik2004/Smart-Vision-AI-Assistant/raw/main/project-images/landing_page.png',
        '/project-images/landing_page.png',
        '/images/project-images/landing_page.png'
      );
    } else if (project.id === 'stitchify') {
      list.push(
        '/project-images/customer-homepage.png',
        '/images/project-images/customer-homepage.png',
        'https://raw.githubusercontent.com/cmkarthik2004/Stitchify-Digital-Tailoring/main/project-images/customer-homepage.png',
        'https://cdn.jsdelivr.net/gh/cmkarthik2004/Stitchify-Digital-Tailoring@main/project-images/customer-homepage.png',
        'https://github.com/cmkarthik2004/Stitchify-Digital-Tailoring/raw/main/project-images/customer-homepage.png'
      );
    }

    // 3. Project metadata images & gallery
    if (project.gallery && project.gallery.length > 0) {
      project.gallery.forEach((g) => {
        if (g.url && !list.includes(g.url)) list.push(g.url);
        if (g.fallbackUrls) {
          g.fallbackUrls.forEach((fb) => {
            if (fb && !list.includes(fb)) list.push(fb);
          });
        }
      });
    }
    if (project.images && project.images.length > 0) {
      project.images.forEach((img) => {
        if (img && !list.includes(img)) list.push(img);
      });
    }

    return list;
  }, [project.id, project.categoryType, project.gallery, project.images, currentImageIndex]);

  const [candidateIndex, setCandidateIndex] = useState(0);

  // Reset candidate state when project or requested index changes
  React.useEffect(() => {
    setCandidateIndex(0);
    setImageError(false);
    setImageLoaded(false);
  }, [project.id, currentImageIndex]);

  const currentImageUrl = candidateUrls[candidateIndex] || null;

  const handleImageError = () => {
    if (candidateIndex < candidateUrls.length - 1) {
      setCandidateIndex((prev) => prev + 1);
    } else {
      setImageError(true);
    }
  };

  const isLogo =
    project.id === 'federated-skin-disease' ||
    Boolean(currentImageUrl && currentImageUrl.toLowerCase().includes('logo'));

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

    if (project.id === 'stitchify') {
      return (
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-black/25 backdrop-blur-xs border border-white/10">
            <Layers className="w-3 h-3 text-emerald-300" />
            <span className="text-[10px] font-mono tracking-wider text-emerald-100/90 uppercase">
              Flask · MongoDB Platform
            </span>
          </div>
          <span className="text-[10px] font-mono text-emerald-200/60 hidden sm:inline">MULTI-ROLE WORKFLOW</span>
        </div>
      );
    }

    if (project.id === 'federated-skin-disease') {
      return (
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-black/25 backdrop-blur-xs border border-white/10">
            <GitBranch className="w-3 h-3 text-violet-300" />
            <span className="text-[10px] font-mono tracking-wider text-violet-100/90 uppercase">
              Federated Learning · EfficientNet-B0
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
            key={currentImageUrl}
            src={getAssetUrl(currentImageUrl)}
            alt={currentAltText}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={handleImageError}
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
              isLogo
                ? 'object-contain p-6 sm:p-8 bg-slate-950'
                : 'object-cover object-top'
            } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
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
