import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { WorkWithMeSection } from './components/WorkWithMeSection';
import { AboutSection } from './components/AboutSection';
import { CapabilitiesCredentialsSection } from './components/CapabilitiesCredentialsSection';
import { ResumeSection } from './components/ResumeSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function PortfolioContent() {
  const [selectedService, setSelectedService] = React.useState<string>(
    'Website Development (New)'
  );

  const handleStartProject = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen text-stone-900 dark:text-stone-100 transition-colors duration-250 selection:bg-amber-500/20 selection:text-stone-900 dark:selection:bg-amber-500/30 dark:selection:text-amber-100">
      {/* Clean, static architectural background without animation */}
      <Background />

      {/* Clean Single-Page Navigation */}
      <Navbar onStartProject={() => handleStartProject()} />

      {/* Main Single-Page Sequential Structure */}
      <main className="relative z-10">
        {/* 1. HERO: Clean identity, headline, photograph, proof strip */}
        <HeroSection />

        {/* 2. SELECTED WORK: Evidence-driven, featured client work, research work, and clearly categorized projects */}
        <SelectedWorkSection />

        {/* 3. WORK WITH ME: 4-part connected structure (Capabilities, How to Start, Production Flow, Feedback Loop) */}
        <WorkWithMeSection
          onStartProject={handleStartProject}
          selectedService={selectedService}
          onSelectService={setSelectedService}
        />

        {/* 4. ABOUT & APPROACH: Clean narrative connecting Full-Stack + Applied AI/ML */}
        <AboutSection />

        {/* 5. CAPABILITIES & CREDENTIALS: Technical capabilities, M.Sc./BCA degrees, verified certifications & resume */}
        <CapabilitiesCredentialsSection />

        {/* 6. RESUME & VERIFICATION: Dedicated interactive resume presentation card */}
        <ResumeSection />

        {/* 7. FAQ: 5 focused client questions with accessible accordion */}
        <FAQSection />

        {/* 8. CONTACT & 24/7 SCHEDULING: 5-step booking flow, direct email, and social coordinates */}
        <ContactSection
          selectedService={selectedService}
          onSelectService={setSelectedService}
        />
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
