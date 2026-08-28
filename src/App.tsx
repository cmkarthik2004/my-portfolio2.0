import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { CertificationsSection } from './components/CertificationsSection';
import { EducationSection } from './components/EducationSection';
import { WorkflowSection } from './components/WorkflowSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ResumeSection } from './components/ResumeSection';
import { FAQSection } from './components/FAQSection';
import { FreelanceCTASection } from './components/FreelanceCTASection';
import { Footer } from './components/Footer';
import { FreelanceServicesPage } from './components/FreelancePage/FreelanceServicesPage';

export function PortfolioContent() {
  const [currentView, setCurrentView] = useState<'portfolio' | 'freelance'>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      if (hash === '#freelance' || hash.startsWith('#freelance/') || search.includes('view=freelance')) {
        return 'freelance';
      }
    }
    return 'portfolio';
  });

  const [selectedFreelanceService, setSelectedFreelanceService] = useState<string | undefined>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('service') || undefined;
    }
    return undefined;
  });

  // Sync state with browser back/forward and hash changes
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      if (hash === '#freelance' || hash.startsWith('#freelance/') || search.includes('view=freelance')) {
        setCurrentView('freelance');
        const params = new URLSearchParams(window.location.search);
        const svc = params.get('service');
        if (svc) setSelectedFreelanceService(svc);
      } else {
        setCurrentView('portfolio');
      }
    };

    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const handleOpenFreelancePage = (serviceName?: string) => {
    setSelectedFreelanceService(serviceName);
    setCurrentView('freelance');
    try {
      window.history.pushState(null, '', serviceName ? `#freelance?service=${encodeURIComponent(serviceName)}` : '#freelance');
    } catch {
      window.location.hash = 'freelance';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToPortfolio = () => {
    setCurrentView('portfolio');
    try {
      window.history.pushState(null, '', window.location.pathname);
    } catch {
      window.location.hash = '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToProjects = () => {
    setCurrentView('portfolio');
    try {
      window.history.pushState(null, '', window.location.pathname + '#projects');
    } catch {
      window.location.hash = 'projects';
    }
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="relative min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-250 selection:bg-indigo-500/20 selection:text-indigo-700 dark:selection:bg-indigo-500/30 dark:selection:text-indigo-300">
      {/* Signature Animated Background Mesh */}
      <AnimatedBackground />

      {currentView === 'freelance' ? (
        <FreelanceServicesPage
          onBackToPortfolio={handleBackToPortfolio}
          onNavigateToProjects={handleNavigateToProjects}
          initialSelectedService={selectedFreelanceService}
        />
      ) : (
        <>
          {/* Primary Fixed Navigation with Theme Toggle */}
          <Navbar onOpenFreelancePage={() => handleOpenFreelancePage()} />

          {/* Main Portfolio Sections in Cohesive Narrative Sequence */}
          <main className="relative z-10">
            {/* 01 / Hero: C M Karthik — Freelance Full-Stack & Python/AI */}
            <HeroSection />

            {/* 02 / What I Build: Core Pillars & Foundational Capabilities */}
            <AboutSection />

            {/* 03 / My Skills: Stack & Technical Proficiencies */}
            <SkillsSection />

            {/* 04 / My Projects: Curated Production Systems & Live Client Apps */}
            <ProjectsSection />

            {/* 05 / Services & Solutions: 8 Core Client Services */}
            <ServicesSection
              onOpenFreelancePage={() => handleOpenFreelancePage()}
              onSelectServiceToBook={(svc) => handleOpenFreelancePage(svc)}
            />

            {/* 06 / Verified Certifications: 11 Authenticated Credentials */}
            <CertificationsSection />

            {/* 07 / Academic Journey: 4-Tier Education Foundations */}
            <EducationSection />

            {/* 08 / How I Build: Iterative Freelance Development Workflow */}
            <WorkflowSection />

            {/* 09 / Professional Experience: Real-World Commercial Delivery */}
            <ExperienceSection onOpenFreelancePage={() => handleOpenFreelancePage()} />

            {/* 10 / My Resume: Direct PDF Download & Interactive Viewer */}
            <ResumeSection />

            {/* 11 / Clarifications & Details: Categorized FAQ */}
            <FAQSection onOpenFreelancePage={() => handleOpenFreelancePage()} />

            {/* 12 / Let's Work Together: Direct Contact & Project Discussion */}
            <FreelanceCTASection />
          </main>

          {/* Footer */}
          <Footer />
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
