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
} from 'lucide-react';
import {
  ACADEMIC_EDUCATION,
  CERTIFICATIONS_DATA,
  siteConfig,
} from '../data/portfolioData';
import { ResumeModal } from './ResumeModal';
import { getAssetUrl } from '../utils/assetHelper';

export const CapabilitiesCredentialsSection: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Technical Capabilities naturally grouped
  const capabilityGroups = [
    {
      title: 'Development',
      description: 'Languages & Core Frameworks',
      skills: ['Python', 'PHP', 'Django', 'Flask', 'JavaScript', 'Tailwind CSS', 'HTML5/CSS3'],
    },
    {
      title: 'Backend & Data',
      description: 'Relational DBs & APIs',
      skills: ['MySQL', 'PostgreSQL / SQLite', 'RESTful APIs', 'Database Indexing', 'Razorpay API'],
    },
    {
      title: 'Applied AI/ML',
      description: 'Vision & Decentralized ML',
      skills: ['PyTorch', 'Federated Learning (FedAvg)', 'OpenCV', 'Differential Privacy', 'NumPy'],
    },
    {
      title: 'Tools & Deployment',
      description: 'Production Infrastructure',
      skills: ['Linux (Ubuntu VPS)', 'Nginx', 'Git & GitHub', 'Certbot SSL', 'Gunicorn WSGI'],
    },
  ];

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
    <section id="credentials" className="py-20 md:py-28 relative scroll-mt-20" aria-label="Capabilities and Credentials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="text-xs font-semibold tracking-wider text-stone-500 dark:text-stone-400 uppercase mb-2 font-mono flex items-center gap-2">
            <span className="w-3 h-[1.5px] bg-amber-600 dark:bg-amber-400 inline-block"></span>
            <span>05 / CAPABILITIES &amp; CREDENTIALS</span>
          </div>
          <h2
            id="credentials-headline"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100 tracking-tight leading-tight group cursor-default transition-colors duration-200 hover:text-amber-700 dark:hover:text-amber-400"
          >
            Technical Stack, Academic Background &amp; Certifications
          </h2>
          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 mt-3 leading-relaxed">
            Technologies actively used across production projects, academic degree foundations, and verified industry credentials.
          </p>
        </div>

        {/* 1. TECHNICAL CAPABILITIES */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
              Technical Capabilities
            </h3>
            <span className="text-xs text-stone-500 font-mono">Supporting context for projects</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilityGroups.map((group, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 font-mono mb-1">
                    {group.title}
                  </div>
                  <div className="text-xs text-stone-500 dark:text-stone-400 mb-4">
                    {group.description}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. ACADEMIC CREDENTIALS & RESUME ACTION */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
              Academic Credentials
            </h3>
            
            {/* Direct Resume Access */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsResumeModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-200 text-xs font-semibold hover:border-stone-400 transition-all cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Resume</span>
              </button>

              <a
                href={getAssetUrl(siteConfig.resume.filePath)}
                download="C-M-Karthik-Resume-2026.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-white dark:bg-stone-100 dark:hover:bg-white dark:text-stone-950 text-xs font-semibold tracking-wide transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreCredentials.map((edu) => (
              <div
                key={edu.degree}
                className="rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-6 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300">
                      <GraduationCap className="w-3.5 h-3.5 text-stone-500" />
                      <span>{edu.statusOrScore}</span>
                    </span>
                    <span className="text-xs text-stone-500 font-mono">{edu.period}</span>
                  </div>

                  <h4 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mb-4">
                    {edu.institution}
                  </p>

                  <ul className="space-y-2 text-xs text-stone-600 dark:text-stone-300">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. SELECTED CERTIFICATIONS */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
              Selected Certifications
            </h3>
            <span className="text-xs text-stone-500 font-mono">Curated industry credentials</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedCertifications.map((cert) => (
              <div
                key={cert.id}
                className="rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-4 flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100 truncate">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-stone-500 dark:text-stone-400 truncate">
                    {cert.organization} • {cert.date}
                  </p>
                  {cert.credentialId && (
                    <span className="text-[10px] font-mono text-stone-400 dark:text-stone-500 block mt-0.5">
                      {cert.credentialId}
                    </span>
                  )}
                </div>
              </div>
            ))}
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
