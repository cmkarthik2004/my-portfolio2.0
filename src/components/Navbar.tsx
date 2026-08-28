import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X, ArrowUpRight, Sparkles, Send } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenContactModal?: () => void;
  onOpenFreelancePage?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContactModal, onOpenFreelancePage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll shadow and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['skills', 'projects', 'services', 'certifications', 'education', 'experience', 'resume', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Resume', href: '#resume' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-[#0b0f19]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo & Brand Identity */}
          <a
            href="#"
            id="brand-logo"
            className="group flex items-center gap-3 text-slate-900 dark:text-white font-semibold text-lg tracking-tight transition-transform duration-200 active:scale-95"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-800 text-white flex items-center justify-center font-mono font-bold text-sm shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              CK
            </div>
            <div className="flex flex-col">
              <span className="leading-none text-base font-bold tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-tight flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Freelance & AI/ML
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-800/60 p-1 rounded-full border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 ${
                    isActive
                      ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200/40 dark:hover:bg-slate-700/40'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Stack: [GitHub] [LinkedIn] [Theme Toggle] [Let's Connect] */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* GitHub Link */}
            <a
              id="nav-github-link"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
              aria-label="GitHub Profile"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* LinkedIn Link */}
            <a
              id="nav-linkedin-link"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Theme Toggle in Navigation */}
            <div className="pl-1 border-l border-slate-200 dark:border-slate-800">
              <ThemeToggle />
            </div>

            {/* Let's Connect CTA Button */}
            <a
              id="nav-connect-btn"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="ml-1 flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-sm hover:shadow-md hover:shadow-indigo-500/20 active:scale-95 transition-all duration-150"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Mobile Right Controls: Compact Theme Toggle + Hamburger Menu */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle compact />
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-white/95 dark:bg-[#0b0f19]/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-5 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col gap-3">
            <div className="text-xs font-semibold tracking-wider uppercase text-slate-400 dark:text-slate-500 mb-1">
              Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 border-b border-slate-100 dark:border-slate-800/60"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}

            <div className="pt-3 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Let's Work Together</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
