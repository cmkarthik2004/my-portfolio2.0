import React, { useState } from 'react';
import {
  Award,
  ExternalLink,
  ShieldCheck,
  BrainCircuit,
  BarChart3,
  Code2,
  Cloud,
  Zap,
  Sparkles,
  Wrench,
  Lock,
  Building2,
  X,
  Eye,
  CheckCircle2,
} from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { CertificationItem } from '../types';

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-5 h-5" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5" />;
      case 'Code2':
        return <Code2 className="w-5 h-5" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5" />;
      case 'Lock':
        return <Lock className="w-5 h-5" />;
      default:
        return <Award className="w-5 h-5" />;
    }
  };

  return (
    <section id="certs" className="py-20 md:py-28 relative scroll-mt-20" aria-label="Certifications Trophy Wall">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
              05 / Professional Credentials
            </div>
            <h2
              id="certs-headline"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4"
            >
              Trophy Wall &amp; Certifications
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Verified certifications spanning AI/ML, Cloud Infrastructure, Python Development, Cybersecurity, and Business Analytics. Click any certificate to inspect details.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs text-xs font-semibold text-slate-700 dark:text-slate-300 shrink-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>11 Verified Accreditations</span>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group relative p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-400 dark:hover:border-indigo-600 shadow-xs hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {getIcon(cert.icon)}
                  </div>
                  <span className="font-mono text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-1.5">
                  {cert.title}
                </h3>

                <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  {cert.organization}
                  {cert.credentialId ? ` • ${cert.credentialId}` : ''}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                <span className="inline-flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Certificate</span>
                </span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 mb-1.5">
                  {selectedCert.organization}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {selectedCert.title}
                </h3>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                  Issued: {selectedCert.date} {selectedCert.credentialId ? `| ${selectedCert.credentialId}` : ''}
                </p>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Certificate Preview Surface */}
            <div className="py-6">
              <div className="relative rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-6 flex flex-col items-center justify-center text-center overflow-hidden min-h-[220px]">
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3">
                  <Award className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                  {selectedCert.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mb-3">
                  Accredited by {selectedCert.organization} in {selectedCert.date}.
                </p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-slate-900 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-xs">
                  <span>File: {selectedCert.imageFileName}</span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Verified portfolio credential
              </span>
              <button
                onClick={() => setSelectedCert(null)}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors cursor-pointer"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
