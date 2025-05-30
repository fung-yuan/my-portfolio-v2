import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.3) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 70%)`
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-portfolio-electric-blue rounded-full filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-portfolio-neon-purple rounded-full filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-portfolio-accent-pink rounded-full filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="animate-slide-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="block text-white">Hello, I'm</span>
                <span className="block electric-text animate-glow">Khalid</span>
              </h1>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Full-Stack Developer & UI/UX Enthusiast crafting beautiful,
                interactive experiences with modern web technologies.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <button 
                  onClick={() => {
                    document.getElementById('projects')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                  className="relative px-8 py-4 bg-gradient-to-r from-portfolio-electric-blue to-portfolio-neon-purple text-white font-semibold rounded-lg group overflow-hidden transition-all duration-500 hover:scale-105"
                >
                  <span className="relative z-10">View My Work</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-portfolio-neon-purple to-portfolio-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute -inset-1 bg-white/30 rounded-lg blur-md group-hover:blur-lg transition-all duration-500" />
                </button>
              </div>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="lg:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-portfolio-glass-border overflow-hidden group">
              <img 
                src="/profile.jpg" 
                alt="Khalid Harrat"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-portfolio-electric-blue/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="flex justify-center space-x-8 text-sm text-gray-400">
            <div className="text-center">
              <div className="text-2xl font-bold text-portfolio-electric-blue">50+</div>
              <div>Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-portfolio-neon-purple">3+</div>
              <div>Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-portfolio-accent-pink">100%</div>
              <div>Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-[-95px] left-[45%] transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
