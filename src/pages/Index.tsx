
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ComponentsSection from '../components/ComponentsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolio-dark text-white overflow-x-hidden">
      {/* Particle Background Effect */}
      <div className="particle-container">
        <div className="absolute inset-0 bg-gradient-to-br from-portfolio-dark via-portfolio-dark-blue to-portfolio-dark"></div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ComponentsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
