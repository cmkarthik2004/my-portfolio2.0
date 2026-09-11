import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onStartProject?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sectionIds = ['work', 'work-with-me', 'about', 'credentials', 'contact'];
      const scrollPos = window.scrollY + 220;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WORK', href: '#work', id: 'work' },
    { name: 'WORK WITH ME', href: '#work-with-me', id: 'work-with-me' },
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'CREDENTIALS', href: '#credentials', id: 'credentials' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCtaClick = () => {
    setMobileMenuOpen(false);
    if (onStartProject) {
      onStartProject();
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-xl transition-all duration-250 ${
            scrolled
              ? 'bg-[#fcfbf8]/90 dark:bg-[#0f1422]/90 backdrop-blur-md border border-stone-200/80 dark:border-stone-800/80 shadow-xs'
              : 'bg-[#fcfbf8]/60 dark:bg-[#0f1422]/60 backdrop-blur-xs border border-stone-200/50 dark:border-stone-800/50'
          }`}
        >
          {/* Brand Name */}
          <a
            href="#"
            id="brand-logo"
            className="group flex items-center gap-2.5 sm:gap-3 text-stone-900 dark:text-stone-100 font-semibold tracking-tight transition-transform duration-200 active:scale-98 min-w-0"
          >
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 flex items-center justify-center font-mono font-bold text-xs shrink-0">
              CK
            </span>
            <div className="flex flex-col min-w-0">
              <span className="text-xs sm:text-sm md:text-base font-bold tracking-tight text-stone-900 dark:text-stone-100 group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors truncate">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-stone-500 dark:text-stone-400 leading-none truncate">
                Freelance Full-Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs font-semibold tracking-wider transition-colors duration-150 relative py-1 ${
                    isActive
                      ? 'text-amber-700 dark:text-amber-400 font-bold'
                      : 'text-stone-600 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-300'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-600 dark:bg-amber-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle + START A PROJECT CTA */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <button
              id="nav-cta-start-project"
              onClick={handleCtaClick}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-white dark:bg-stone-100 dark:hover:bg-white dark:text-stone-950 text-xs font-semibold tracking-wider transition-all duration-150 active:scale-98 shadow-xs cursor-pointer"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex md:hidden items-center gap-1.5 sm:gap-2">
            <ThemeToggle />
            <button
              id="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-lg text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu-dropdown"
            className="md:hidden mt-2 p-4 rounded-xl bg-[#fcfbf8] dark:bg-[#0f1422] border border-stone-200 dark:border-stone-800 shadow-xl space-y-3 animate-in fade-in slide-in-from-top-2 duration-150"
          >
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`mobile-nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`min-h-[44px] flex items-center px-3.5 py-2.5 text-xs font-semibold tracking-wider rounded-lg transition-colors ${
                    activeSection === link.id
                      ? 'bg-amber-500/10 dark:bg-amber-400/10 text-amber-800 dark:text-amber-300 font-bold border-l-2 border-amber-600 dark:border-amber-400'
                      : 'text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800/60'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-2 border-t border-stone-200 dark:border-stone-800">
              <button
                id="mobile-nav-cta-start-project"
                onClick={handleCtaClick}
                className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3 rounded-lg bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-950 text-xs font-semibold tracking-wider transition-all shadow-xs active:scale-98 cursor-pointer"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
