import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { WorkflowSection } from './components/WorkflowSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ResumeSection } from './components/ResumeSection';
import { FreelanceCTASection } from './components/FreelanceCTASection';
import { Footer } from './components/Footer';

export function PortfolioContent() {
  return (
    <div className="relative min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-250 selection:bg-indigo-500/20 selection:text-indigo-700 dark:selection:bg-indigo-500/30 dark:selection:text-indigo-300">
      {/* Signature Animated Background */}
      <AnimatedBackground />

      {/* Primary Fixed Navigation with Theme Toggle */}
      <Navbar />

      {/* Main Portfolio Sections in Requested Narrative Sequence */}
      <main className="relative z-10">
        {/* 1. Hero: C M Karthik — Freelance Full-Stack & Python/AI */}
        <HeroSection />

        {/* 2. What I Build: Core Pillars & Foundational Capabilities */}
        <AboutSection />

        {/* 3. My Skills: Stack & Technical Proficiencies */}
        <SkillsSection />

        {/* 4. My Projects: Curated Production Systems & Live Client Apps */}
        <ProjectsSection />

        {/* 5. How I Build: Agile & Iterative Freelance Development Workflow */}
        <WorkflowSection />

        {/* 6. My Experience: Real-World Commercial Delivery & Background */}
        <ExperienceSection />

        {/* 7. My Resume: Direct PDF Download & Interactive Viewer */}
        <ResumeSection />

        {/* 8. Let's Work Together: Direct Contact & Project Discussion */}
        <FreelanceCTASection />
      </main>

      {/* Footer */}
      <Footer />
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
