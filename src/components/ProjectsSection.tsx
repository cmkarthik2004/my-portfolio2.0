import React, { useState } from 'react';
import {
  ExternalLink,
  Globe,
  Github,
  Layers,
  Sparkles,
  Server,
  Database,
  CreditCard,
  CheckCircle2,
  ChevronRight,
  Eye,
  Maximize2,
  Filter,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectMediaPreview } from './ProjectMediaPreview';
import { ProjectDetailModal } from './ProjectDetailModal';

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'freelance' | 'aiml' | 'fullstack'>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filterTabs: { id: 'all' | 'freelance' | 'aiml' | 'fullstack'; label: string; count: number }[] = [
    { id: 'all', label: 'All Projects', count: PROJECTS.length },
    {
      id: 'freelance',
      label: 'Live & Client Apps',
      count: PROJECTS.filter((p) => p.categoryType === 'freelance').length,
    },
    {
      id: 'aiml',
      label: 'AI / ML & Research',
      count: PROJECTS.filter((p) => p.categoryType === 'aiml').length,
    },
    {
      id: 'fullstack',
      label: 'Full-Stack Systems',
      count: PROJECTS.filter((p) => p.categoryType === 'fullstack').length,
    },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedFilter === 'all') return true;
    return p.categoryType === selectedFilter;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative scroll-mt-20" aria-label="Projects and Deliverables">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-xs font-medium mb-3">
              Projects
            </div>
            <h2
              id="projects-headline"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight"
            >
              Featured Work & Systems
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
              A curated selection of live client web applications, applied computer vision pipelines,
              federated learning research, and production-deployed platforms.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 self-start md:self-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                id={`project-filter-${tab.id}`}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  selectedFilter === tab.id
                    ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-2xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <span>{tab.label}</span>
                <span className="ml-1 text-[10px] opacity-75 font-mono">({tab.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const isLive = Boolean(project.liveUrl && project.liveUrl.trim().length > 0);
            const hasGithub = Boolean(project.githubUrl && project.githubUrl.trim().length > 0);

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="group relative rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/10 p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-500/40 transition-all duration-200"
              >
                <div>
                  {/* Visual Project Media Area */}
                  <div
                    onClick={() => setActiveModalProject(project)}
                    className="cursor-pointer mb-5 relative overflow-hidden rounded-xl bg-slate-900 border border-slate-200/60 dark:border-white/5"
                  >
                    <ProjectMediaPreview
                      project={project}
                      currentImageIndex={0}
                      aspectRatio="card"
                      showLiveBadge={true}
                    />

                    {/* Hover hint */}
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white text-xs font-semibold shadow-lg backdrop-blur-sm">
                        <Eye className="w-3.5 h-3.5 text-indigo-500" />
                        <span>View Details</span>
                      </div>
                    </div>
                  </div>

                  {/* Header: Category & Year */}
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
                      {project.category}
                    </span>

                    <span className="text-xs font-mono text-slate-400 dark:text-slate-500 font-semibold">
                      {project.year}
                    </span>
                  </div>

                  {/* Project Name */}
                  <h3
                    onClick={() => setActiveModalProject(project)}
                    className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors cursor-pointer"
                  >
                    {project.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {project.shortDescription || project.description}
                  </p>
                </div>

                {/* Bottom Section: Technologies & Dynamic Links */}
                <div className="pt-2">
                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-xs font-mono border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-1.5 py-0.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Action Link Row */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    <button
                      id={`project-details-btn-${project.id}`}
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors cursor-pointer"
                    >
                      <span>Details & Architecture</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      {/* Live Website Button */}
                      {isLive && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          id={`project-live-${project.id}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-semibold transition-colors border border-emerald-500/20"
                          title="Open Live Website"
                        >
                          <Globe className="w-3.5 h-3.5" />
                          <span>Live App</span>
                        </a>
                      )}

                      {/* GitHub Button */}
                      {hasGithub && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          id={`project-github-${project.id}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium transition-colors border border-slate-200/60 dark:border-slate-700/60"
                          title="View GitHub Repository"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={activeModalProject}
        isOpen={Boolean(activeModalProject)}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
