import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetId = id.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Work', href: '#work', id: 'footer-nav-work' },
    { name: 'Work With Me', href: '#work-with-me', id: 'footer-nav-work-with-me' },
    { name: 'About', href: '#about', id: 'footer-nav-about' },
    { name: 'Credentials', href: '#credentials', id: 'footer-nav-credentials' },
    { name: 'FAQ', href: '#faq', id: 'footer-nav-faq' },
    { name: 'Contact', href: '#contact', id: 'footer-nav-contact' },
  ];

  return (
    <footer
      id="site-footer"
      className="relative z-10 border-t border-white/[0.08] bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0a0f1d] dark:from-[#0b0f19] dark:via-[#0f172a] dark:to-[#080c14] text-slate-200 overflow-hidden"
      aria-label="Footer"
    >
      {/* Subtle ambient accent glow at top edge */}
      <div
        className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-32 bg-amber-500/[0.03] blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-1/4 translate-x-1/2 w-96 h-32 bg-indigo-500/[0.03] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 md:pt-20 pb-10 sm:pb-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12 sm:pb-16">
          {/* ===================================================
              LEFT / BRAND SECTION
              =================================================== */}
          <div className="md:col-span-12 lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Brand Header: Name & Role */}
              <div id="footer-brand-block">
                <h3
                  id="footer-brand-name"
                  className="text-xl sm:text-2xl font-bold tracking-tight text-white font-sans"
                >
                  {PERSONAL_INFO.name}
                </h3>
                <p
                  id="footer-brand-role"
                  className="text-xs sm:text-sm text-slate-400 mt-1 font-medium tracking-normal"
                >
                  Freelance Full-Stack Developer · Bengaluru, India
                </p>
              </div>

              {/* Main Supporting Tagline */}
              <div className="mt-6 sm:mt-7 max-w-lg">
                <p
                  id="footer-tagline"
                  className="text-xl sm:text-2xl lg:text-[1.65rem] font-medium tracking-tight text-slate-100 leading-snug font-sans"
                >
                  Turn your ideas into digital products and real-world solutions.
                </p>
              </div>

              {/* Subtle Availability Indicator */}
              <div className="mt-5 sm:mt-6">
                <div
                  id="footer-availability-badge"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span>Available for freelance projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================
              CENTER / EXPLORE SECTION
              =================================================== */}
          <div className="md:col-span-6 lg:col-span-3">
            <div className="flex items-center gap-2 mb-4 sm:mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80 shrink-0" />
              <h4
                id="footer-explore-label"
                className="font-mono text-xs font-semibold tracking-widest text-slate-400 uppercase"
              >
                EXPLORE
              </h4>
            </div>

            <nav
              id="footer-explore-nav"
              aria-label="Footer Explore Navigation"
              className="space-y-1"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={link.id}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="group flex items-center justify-between py-2 text-sm text-slate-300 hover:text-white transition-all duration-150 min-h-[44px] sm:min-h-0"
                >
                  <span className="transition-transform duration-150 group-hover:translate-x-1 font-medium">
                    {link.name}
                  </span>
                  <span className="text-slate-600 group-hover:text-amber-400 transition-colors text-xs opacity-0 group-hover:opacity-100 duration-150">
                    →
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* ===================================================
              RIGHT / CONNECT SECTION
              =================================================== */}
          <div className="md:col-span-6 lg:col-span-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 sm:mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/80 shrink-0" />
                <h4
                  id="footer-connect-label"
                  className="font-mono text-xs font-semibold tracking-widest text-slate-400 uppercase"
                >
                  CONNECT
                </h4>
              </div>

              {/* Social and Direct Contact Links */}
              <div id="footer-connect-section" className="space-y-2.5">
                <a
                  id="footer-social-github"
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.2] transition-all duration-150 text-slate-300 hover:text-white min-h-[44px]"
                  aria-label="GitHub Profile"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                    <span className="text-xs font-medium">GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                <a
                  id="footer-social-linkedin"
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.2] transition-all duration-150 text-slate-300 hover:text-white min-h-[44px]"
                  aria-label="LinkedIn Profile"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                    <span className="text-xs font-medium">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                <a
                  id="footer-social-email"
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="group flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.2] transition-all duration-150 text-slate-300 hover:text-white min-h-[44px]"
                  aria-label="Direct Email"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                    <span className="text-xs font-medium">Email</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </div>

            {/* Back to Top Button */}
            <div className="mt-5 sm:mt-6">
              <button
                id="footer-back-to-top"
                onClick={scrollToTop}
                className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.1] hover:border-white/[0.22] text-slate-300 hover:text-white transition-all duration-150 flex items-center justify-center gap-2 text-xs font-semibold tracking-wider cursor-pointer group active:scale-98"
                aria-label="Back to Top"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400 group-hover:-translate-y-0.5 transition-all duration-150" />
              </button>
            </div>
          </div>
        </div>

        {/* ===================================================
            BOTTOM BAR
            =================================================== */}
        <div
          id="footer-bottom-bar"
          className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400"
        >
          <div id="footer-copyright" className="tracking-normal text-center sm:text-left">
            © 2025–Present {PERSONAL_INFO.name}. All rights reserved.
          </div>

          <div
            id="footer-bottom-context"
            className="flex flex-wrap items-center justify-center sm:justify-end gap-x-2 gap-y-1 text-slate-400"
          >
            <span>Available for freelance projects.</span>
            <span className="text-slate-600 select-none hidden sm:inline">·</span>
            <span className="text-slate-400">Bengaluru, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
