import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  ExternalLink,
  CheckCircle2,
  FileText,
  Download,
  Eye,
  Calendar,
  Layers,
  Sparkles,
  Code2,
  Database,
  BarChart3,
  Cloud,
  Wrench,
  Bot,
  Cpu,
  ArrowRight,
} from 'lucide-react';
import {
  ACADEMIC_EDUCATION,
  CERTIFICATIONS_DATA,
  SKILL_CATEGORIES,
  siteConfig,
} from '../data/portfolioData';
import { ResumeModal } from './ResumeModal';
import { getAssetUrl } from '../utils/assetHelper';

export const CapabilitiesCredentialsSection: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Helper to map category id to appropriate icon
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'languages':
        return <Code2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      case 'frameworks-db':
        return <Database className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'data-analytics':
        return <BarChart3 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'cloud-deployment':
        return <Cloud className="w-4 h-4 text-sky-600 dark:text-sky-400" />;
      case 'tools-ides':
        return <Wrench className="w-4 h-4 text-stone-600 dark:text-stone-300" />;
      case 'ai-tools':
        return <Bot className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
      case 'other-skills':
      default:
        return <Cpu className="w-4 h-4 text-rose-600 dark:text-rose-400" />;
    }
  };

  // Credentials (M.Sc. Data Science & BCA)
  const coreCredentials = ACADEMIC_EDUCATION.filter(
    (e) => e.degree.includes('MSc') || e.degree.includes('BCA')
  );

  // Curated, non-duplicate high-value certifications
  const selectedCertifications = CERTIFICATIONS_DATA.filter((c) =>
    ['deeplearning-ml', 'infosys-python', 'oracle-oci-ds', 'tata-genai', 'power-bi', 'eccouncil-cscu'].includes(
      c.id
    )
  );

  return (
    <section id="credentials" className="py-14 sm:py-20 md:py-28 relative scroll-mt-20" aria-label="Capabilities and Credentials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with top-right View Resume CTA */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-wider text-stone-500 dark:text-stone-400 uppercase mb-2 font-mono flex items-center gap-2">
              <span className="w-3 h-[1.5px] bg-amber-600 dark:bg-amber-400 inline-block"></span>
              <span>05 / CAPABILITIES &amp; CREDENTIALS</span>
            </div>
            <h2
              id="credentials-headline"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100 tracking-tight leading-tight group cursor-default transition-colors duration-200 hover:text-amber-700 dark:hover:text-amber-400"
            >
              Skills, education and selected certifications.
            </h2>
            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 mt-2 leading-relaxed">
              A combination of technical skills, academic background, and industry learning.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsResumeModalOpen(true)}
              className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white dark:bg-stone-100 dark:hover:bg-white dark:text-stone-950 text-xs font-semibold tracking-wide transition-all shadow-xs cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View Resume →</span>
            </button>
          </div>
        </div>

        {/* Main 2-Column Split: Technical Skills on Left, Education & Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (8 Cols): Structured Technical Skills Grid */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-stone-200/80 dark:border-stone-800/80">
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <span>Technical Skills</span>
              </h3>
              <span className="text-xs text-stone-500 font-mono">Languages, Frameworks &amp; Tooling</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILL_CATEGORIES.map((category) => (
                <div
                  key={category.id}
                  className="group rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-4.5 flex flex-col justify-between hover:-translate-y-0.5 hover:border-stone-300 dark:hover:border-stone-700 hover:shadow-sm transition-all duration-200"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-6 h-6 rounded-md bg-stone-100 dark:bg-stone-800 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                        {getCategoryIcon(category.id)}
                      </div>
                      <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                        {category.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-stone-500 dark:text-stone-400 mb-3">
                      {category.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-stone-100 hover:bg-amber-500/10 hover:text-amber-800 dark:hover:text-amber-300 dark:bg-stone-800 text-stone-800 dark:text-stone-200 transition-colors cursor-default"
                          title={skill.useCase}
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (4 Cols): Academic Foundation & Certifications */}
          <div className="lg:col-span-4 space-y-6">
            {/* Academic Foundation Card */}
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-stone-200/80 dark:border-stone-800/80 mb-4">
                <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <span>Education</span>
                </h3>
                <span className="text-xs text-stone-500 font-mono">Degrees</span>
              </div>

              <div className="space-y-4">
                {coreCredentials.map((edu) => (
                  <div
                    key={edu.degree}
                    className="group rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-5 shadow-2xs hover:-translate-y-0.5 hover:border-stone-300 dark:hover:border-stone-700 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-800 dark:text-amber-300">
                        <GraduationCap className="w-3.5 h-3.5" />
                        <span>{edu.statusOrScore}</span>
                      </span>
                      <span className="text-xs text-stone-500 font-mono">{edu.period}</span>
                    </div>

                    <h4 className="text-base font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-stone-500 dark:text-stone-400 mb-3">
                      {edu.institution}
                    </p>

                    <ul className="space-y-1.5 text-xs text-stone-600 dark:text-stone-300">
                      {edu.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Certifications Compact Box */}
            <div className="group rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-5 shadow-2xs hover:-translate-y-0.5 hover:border-stone-300 dark:hover:border-stone-700 hover:shadow-sm transition-all duration-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100">
                    11+ Certifications
                  </h4>
                </div>
                <button
                  onClick={() => setIsResumeModalOpen(true)}
                  className="text-xs text-amber-700 dark:text-amber-400 hover:underline font-semibold cursor-pointer"
                >
                  View All
                </button>
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 mb-3">
                Selected credentials from DeepLearning.AI, Infosys, Oracle, and Tata:
              </p>
              <div className="space-y-2">
                {selectedCertifications.slice(0, 4).map((cert) => (
                  <div
                    key={cert.id}
                    className="flex items-center justify-between text-xs p-2 rounded-lg bg-stone-50 dark:bg-stone-950/60 border border-stone-200/60 dark:border-stone-800/60 hover:border-stone-300 dark:hover:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-900 transition-all cursor-default"
                  >
                    <span className="font-medium text-stone-800 dark:text-stone-200 truncate mr-2">
                      {cert.title}
                    </span>
                    <span className="text-[10px] text-stone-500 font-mono shrink-0">
                      {cert.organization}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between">
                <a
                  href={getAssetUrl(siteConfig.resume.filePath)}
                  download={siteConfig.resume.fileName}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Full Resume (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accessible Resume Modal */}
      {isResumeModalOpen && (
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
        />
      )}
    </section>
  );
};
