import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { ToolsSection } from './sections/ToolsSection';
import { ProjectSection } from './sections/ProjectSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-secondary-900">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ToolsSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;