import React, { useState } from 'react';
import {
  ExternalLink,
  Globe,
  Github,
  CheckCircle2,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CreditCard,
  Building2,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectMediaPreview } from './ProjectMediaPreview';
import { ProjectDetailModal } from './ProjectDetailModal';

export const SelectedWorkSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Group verified featured projects for the primary showcase slideshow:
  // 1. Kriyaatmak (Commercial client, Razorpay, PHP/MySQL, VPS)
  // 2. Federated Skin Disease Detection (Applied AI/ML Research, FedAvg, PyTorch)
  // 3. TalesTexts (Dynamic Publishing Platform, Django, MySQL, Live readers)
  // 4. Psychology Dept Website (Institutional client portal)
  const featuredShowcaseProjects = [
    PROJECTS.find((p) => p.id === 'kriyaatmak') || PROJECTS[1],
    PROJECTS.find((p) => p.id === 'federated-skin-disease') || PROJECTS[2],
    PROJECTS.find((p) => p.id === 'talestexts') || PROJECTS[0],
    PROJECTS.find((p) => p.id === 'department-website') || PROJECTS[3],
  ].filter(Boolean) as Project[];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentProject = featuredShowcaseProjects[currentSlideIndex];

  // Secondary archive projects: DeptSync, AI Smart Vision, Smart LPG
  const additionalProjects = PROJECTS.filter(
    (p) => !featuredShowcaseProjects.some((f) => f.id === p.id)
  );

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? featuredShowcaseProjects.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev === featuredShowcaseProjects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="work" className="py-20 md:py-26 relative scroll-mt-20" aria-label="Selected Work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 max-w-3xl">
          <div className="text-xs font-semibold tracking-wider text-stone-500 dark:text-stone-400 uppercase mb-2 font-mono flex items-center gap-2">
            <span className="w-3 h-[1.5px] bg-amber-600 dark:bg-amber-400 inline-block"></span>
            <span>02 / SELECTED WORK</span>
          </div>
          <h2
            id="work-headline"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100 tracking-tight leading-tight group cursor-default transition-colors duration-200 hover:text-amber-700 dark:hover:text-amber-400"
          >
            Verified Client Work &amp; Research
          </h2>
          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 mt-2 leading-relaxed">
            Interactive showcase of deployed commercial applications, institutional platforms, and privacy-preserving machine learning research.
          </p>
        </div>

        {/* ========================================================
            PRIMARY FEATURED SHOWCASE: SLIDESHOW CAROUSEL
            Replaces long vertical stacking with a fast, compact slideshow
            ======================================================== */}
        <div className="mb-16">
          {/* Slideshow Selector Tabs & Navigation Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            {/* Quick Switch Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-stone-200/70 dark:bg-stone-800/70 overflow-x-auto max-w-full">
              {featuredShowcaseProjects.map((proj, idx) => {
                const isActive = idx === currentSlideIndex;
                return (
                  <button
                    key={proj.id}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-xs'
                        : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                    }`}
                  >
                    <span className="font-mono text-[10px] opacity-60 mr-1.5">0{idx + 1}</span>
                    <span>{proj.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Previous / Next Controls */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <span className="text-xs font-mono text-stone-500 dark:text-stone-400 mr-1">
                {currentSlideIndex + 1} / {featuredShowcaseProjects.length}
              </span>
              <button
                type="button"
                onClick={handlePrevSlide}
                aria-label="Previous Featured Project"
                className="p-2 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNextSlide}
                aria-label="Next Featured Project"
                className="p-2 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Active Project Slide Card */}
          <div className="rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Media Preview Column */}
              <div className="lg:col-span-7 bg-stone-100 dark:bg-stone-950 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-200 dark:border-stone-800">
                <ProjectMediaPreview
                  project={currentProject}
                  aspectRatio="video"
                />
                
                {/* Visual Architecture Highlights */}
                <div className="mt-6 pt-4 border-t border-stone-200/80 dark:border-stone-800/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <span className="text-stone-500 block font-mono">Category</span>
                    <span className="font-semibold text-stone-800 dark:text-stone-200">{currentProject.category}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 block font-mono">Primary Stack</span>
                    <span className="font-semibold text-stone-800 dark:text-stone-200">
                      {currentProject.technologies.slice(0, 2).join(' • ')}
                    </span>
                  </div>
                  <div>
                    <span className="text-stone-500 block font-mono">Timeline</span>
                    <span className="font-semibold text-stone-800 dark:text-stone-200">{currentProject.year}</span>
                  </div>
                </div>
              </div>

              {/* Editorial Project Breakdown */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700">
                      {currentProject.id === 'kriyaatmak'
                        ? 'FEATURED CLIENT WORK'
                        : currentProject.id === 'federated-skin-disease'
                        ? 'APPLIED RESEARCH PROJECT'
                        : currentProject.id === 'department-website'
                        ? 'INSTITUTIONAL CLIENT WORK'
                        : 'FEATURED PLATFORM'}
                    </span>
                    {currentProject.liveUrl && (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        Live
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-3">
                    {currentProject.name}
                  </h3>

                  <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed mb-5">
                    {currentProject.description}
                  </p>

                  <div className="space-y-4 mb-5">
                    {currentProject.myContribution && (
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 font-mono mb-1.5">
                          My Role &amp; Contribution
                        </h4>
                        <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                          {currentProject.myContribution}
                        </p>
                      </div>
                    )}

                    {currentProject.features && currentProject.features.length > 0 && (
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 font-mono mb-1.5">
                          Key Deliverables
                        </h4>
                        <ul className="space-y-1.5 text-xs text-stone-600 dark:text-stone-300">
                          {currentProject.features.slice(0, 3).map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Technologies & Actions */}
                <div className="pt-5 border-t border-stone-200 dark:border-stone-800">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {currentProject.technologies.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-xs font-medium bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {currentProject.liveUrl && (
                      <a
                        href={currentProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-white dark:bg-stone-100 dark:hover:bg-white dark:text-stone-950 text-xs font-semibold tracking-wide transition-colors"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>Visit Live Site</span>
                        <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                      </a>
                    )}

                    {currentProject.githubUrl && (
                      <a
                        href={currentProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 text-xs font-semibold transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source</span>
                        <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                      </a>
                    )}

                    <button
                      type="button"
                      onClick={() => setActiveModalProject(currentProject)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 text-xs font-semibold transition-colors cursor-pointer ml-auto"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Full Case Study</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            PART 2: ADDITIONAL PROJECT ARCHIVE (Clean 3-Column Cards)
            ======================================================== */}
        <div>
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                Additional Technical Systems &amp; Solutions
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-0.5">
                Academic platforms, computer vision engines, and embedded IoT architectures.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalProjects.map((project) => {
              let badgeText = 'PERSONAL PROJECT';
              let badgeColor = 'bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300';

              if (project.id === 'deptsync') {
                badgeText = 'ACADEMIC ERP SYSTEM';
                badgeColor = 'bg-blue-500/10 text-blue-800 dark:text-blue-300 border border-blue-500/20';
              } else if (project.id === 'ai-smart-vision') {
                badgeText = 'COMPUTER VISION';
                badgeColor = 'bg-indigo-500/10 text-indigo-800 dark:text-indigo-300 border border-indigo-500/20';
              } else if (project.id === 'smart-lpg') {
                badgeText = 'IOT & WEB PLATFORM';
                badgeColor = 'bg-purple-500/10 text-purple-800 dark:text-purple-300 border border-purple-500/20';
              }

              return (
                <div
                  key={project.id}
                  className="rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-5 flex flex-col justify-between hover:border-stone-300 dark:hover:border-stone-700 transition-colors shadow-xs"
                >
                  <div>
                    {/* Media Thumbnail */}
                    <div className="rounded-lg overflow-hidden mb-4 bg-stone-100 dark:bg-stone-950">
                      <ProjectMediaPreview
                        project={project}
                        aspectRatio="card"
                      />
                    </div>

                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${badgeColor}`}>
                        {badgeText}
                      </span>
                      <span className="text-[11px] text-stone-400 font-mono">{project.year}</span>
                    </div>

                    <h4 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">
                      {project.name}
                    </h4>

                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed line-clamp-3 mb-4">
                      {project.shortDescription || project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-medium bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-1.5 py-0.5 text-[10px] text-stone-400">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-stone-100 dark:border-stone-800">
                      <div className="flex items-center gap-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-stone-900 dark:text-stone-100 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                            title="Visit live deployment"
                          >
                            <Globe className="w-3.5 h-3.5" />
                            <span>Live</span>
                            <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-colors"
                            title="View source repository"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>Code</span>
                          </a>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => setActiveModalProject(project)}
                        className="text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 cursor-pointer"
                      >
                        Details →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Interactive Project Detail Modal */}
      <ProjectDetailModal
        project={activeModalProject}
        isOpen={Boolean(activeModalProject)}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
