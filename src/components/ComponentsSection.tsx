
import React, { useState } from 'react';
import { Code, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComponentsSection = () => {
  const [activeComponent, setActiveComponent] = useState('accordion');

  const components = [
    {
      id: 'accordion',
      name: 'Accordion',
      description: 'Expandable content sections with smooth animations',
      icon: '📝',
      preview: (
        <div className="space-y-2">
          <div className="glass-card p-4 border-l-4 border-portfolio-electric-blue">
            <div className="font-semibold mb-2">What is React?</div>
            <div className="text-sm text-gray-300">React is a JavaScript library for building user interfaces...</div>
          </div>
          <div className="glass-card p-4 opacity-50">
            <div className="font-semibold">How to use hooks?</div>
          </div>
        </div>
      )
    },
    {
      id: 'card',
      name: 'Interactive Card',
      description: '3D hover effects with dynamic lighting',
      icon: '🎴',
      preview: (
        <div className="glass-card p-6 hover-glow transform hover:scale-105 transition-all duration-300">
          <div className="w-12 h-12 bg-gradient-to-r from-portfolio-electric-blue to-portfolio-neon-purple rounded-lg mb-4"></div>
          <div className="font-semibold mb-2">Feature Card</div>
          <div className="text-sm text-gray-300">Hover me for effects!</div>
        </div>
      )
    },
    {
      id: 'button',
      name: 'Animated Button',
      description: 'Buttons with advanced hover states and transitions',
      icon: '🔘',
      preview: (
        <button className="px-6 py-3 bg-gradient-to-r from-portfolio-electric-blue to-portfolio-neon-purple rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-portfolio-electric-blue/30">
          Click Me
        </button>
      )
    },
    {
      id: 'input',
      name: 'Glass Input',
      description: 'Form inputs with glassmorphic design',
      icon: '📝',
      preview: (
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Enter your email..."
            className="w-full px-4 py-3 glass-card border-0 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-portfolio-electric-blue"
          />
        </div>
      )
    }
  ];

  return (
    <section id="components" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="electric-text">UI Components</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Custom-built UI components with modern design patterns and smooth animations.
          </p>
        </div>

        {/* Components Showcase */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Component List */}
          <div className="lg:col-span-1">
            <div className="glass-card p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Code className="mr-2 text-portfolio-electric-blue" size={20} />
                Available Components
              </h3>
              <div className="space-y-2">
                {components.map((component) => (
                  <button
                    key={component.id}
                    onClick={() => setActiveComponent(component.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                      activeComponent === component.id
                        ? 'bg-gradient-to-r from-portfolio-electric-blue/20 to-portfolio-neon-purple/20 border border-portfolio-glass-border'
                        : 'hover:bg-portfolio-glass-white'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="text-xl mr-3">{component.icon}</span>
                      <div>
                        <div className="font-medium">{component.name}</div>
                        <div className="text-sm text-gray-400">{component.description}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Component Preview */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8">
              {(() => {
                const activeComp = components.find(c => c.id === activeComponent);
                return (
                  <div>
                    <div className="flex items-center mb-6">
                      <span className="text-2xl mr-3">{activeComp?.icon}</span>
                      <div>
                        <h3 className="text-2xl font-semibold">{activeComp?.name}</h3>
                        <p className="text-gray-400">{activeComp?.description}</p>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="text-lg font-medium mb-4 flex items-center">
                        <Star className="mr-2 text-portfolio-accent-pink" size={16} />
                        Live Preview
                      </h4>
                      <div className="p-6 bg-portfolio-dark-blue rounded-lg border border-portfolio-glass-border">
                        {activeComp?.preview}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium mb-4 flex items-center">
                        <Zap className="mr-2 text-portfolio-neon-purple" size={16} />
                        Features
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center text-sm text-gray-300">
                          <div className="w-2 h-2 bg-portfolio-electric-blue rounded-full mr-3"></div>
                          Responsive Design
                        </div>
                        <div className="flex items-center text-sm text-gray-300">
                          <div className="w-2 h-2 bg-portfolio-neon-purple rounded-full mr-3"></div>
                          Smooth Animations
                        </div>
                        <div className="flex items-center text-sm text-gray-300">
                          <div className="w-2 h-2 bg-portfolio-accent-pink rounded-full mr-3"></div>
                          Accessibility Ready
                        </div>
                        <div className="flex items-center text-sm text-gray-300">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          TypeScript Support
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-portfolio-glass-border">
                      <Link 
                        to="/gallery"
                        className="px-6 py-3 bg-gradient-to-r from-portfolio-electric-blue to-portfolio-neon-purple rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-block"
                      >
                        View Full Gallery
                      </Link>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>

        {/* Component Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center glass-card p-6 hover-glow">
            <div className="text-2xl font-bold electric-text mb-2">25+</div>
            <div className="text-gray-300">Components</div>
          </div>
          <div className="text-center glass-card p-6 hover-glow">
            <div className="text-2xl font-bold electric-text mb-2">100%</div>
            <div className="text-gray-300">Responsive</div>
          </div>
          <div className="text-center glass-card p-6 hover-glow">
            <div className="text-2xl font-bold electric-text mb-2">TypeScript</div>
            <div className="text-gray-300">Support</div>
          </div>
          <div className="text-center glass-card p-6 hover-glow">
            <div className="text-2xl font-bold electric-text mb-2">MIT</div>
            <div className="text-gray-300">License</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentsSection;
