
import React, { useState } from 'react';
import { ArrowLeft, Code, Palette, Zap, Grid3X3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const FullGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const allComponents = [
    {
      id: 'accordion',
      name: 'Accordion',
      description: 'Expandable content sections with smooth animations',
      category: 'Layout',
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
          <div className="glass-card p-4 opacity-30">
            <div className="font-semibold">Best practices?</div>
          </div>
        </div>
      )
    },
    {
      id: 'interactive-card',
      name: 'Interactive Card',
      description: '3D hover effects with dynamic lighting',
      category: 'Cards',
      icon: '🎴',
      preview: (
        <div className="glass-card p-6 hover-glow transform hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="w-12 h-12 bg-gradient-to-r from-portfolio-electric-blue to-portfolio-neon-purple rounded-lg mb-4"></div>
          <div className="font-semibold mb-2">Interactive Feature</div>
          <div className="text-sm text-gray-300">Hover me for 3D effects!</div>
        </div>
      )
    },
    {
      id: 'glassmorphic-card',
      name: 'Glassmorphic Card',
      description: 'Cards with frosted glass aesthetic',
      category: 'Cards',
      icon: '🪟',
      preview: (
        <div className="relative glass-card p-6 hover-glow backdrop-blur-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-portfolio-electric-blue/10 to-portfolio-neon-purple/10 rounded-lg"></div>
          <div className="relative">
            <div className="w-10 h-10 bg-white/20 rounded-full mb-3"></div>
            <div className="font-semibold mb-2">Glass Effect</div>
            <div className="text-sm text-gray-300">Beautiful frosted glass design</div>
          </div>
        </div>
      )
    },
    {
      id: 'animated-button',
      name: 'Animated Button',
      description: 'Buttons with advanced hover states and transitions',
      category: 'Buttons',
      icon: '🔘',
      preview: (
        <div className="space-y-3">
          <button className="px-6 py-3 bg-gradient-to-r from-portfolio-electric-blue to-portfolio-neon-purple rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-portfolio-electric-blue/30">
            Primary Button
          </button>
          <button className="px-6 py-3 glass-card border border-portfolio-glass-border rounded-lg font-semibold transition-all duration-300 hover:bg-portfolio-glass-white hover:scale-105">
            Secondary Button
          </button>
        </div>
      )
    },
    {
      id: 'glass-input',
      name: 'Glass Input',
      description: 'Form inputs with glassmorphic design',
      category: 'Forms',
      icon: '📝',
      preview: (
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Enter your email..."
            className="w-full px-4 py-3 glass-card border-0 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-portfolio-electric-blue"
          />
          <textarea
            placeholder="Your message..."
            className="w-full px-4 py-3 glass-card border-0 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-portfolio-neon-purple resize-none h-20"
          />
        </div>
      )
    },
    {
      id: 'progress-bar',
      name: 'Progress Bar',
      description: 'Animated progress indicators',
      category: 'Indicators',
      icon: '📊',
      preview: (
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>React</span>
              <span>90%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-portfolio-electric-blue to-portfolio-neon-purple h-2 rounded-full w-[90%] transition-all duration-1000"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>TypeScript</span>
              <span>85%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-portfolio-neon-purple to-portfolio-accent-pink h-2 rounded-full w-[85%] transition-all duration-1000"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'notification-card',
      name: 'Notification Card',
      description: 'Toast-style notifications with animations',
      category: 'Feedback',
      icon: '🔔',
      preview: (
        <div className="space-y-2">
          <div className="glass-card p-4 border-l-4 border-green-500 animate-fade-in">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <div>
                <div className="font-semibold text-green-400">Success!</div>
                <div className="text-sm text-gray-300">Your changes have been saved</div>
              </div>
            </div>
          </div>
          <div className="glass-card p-4 border-l-4 border-portfolio-electric-blue animate-fade-in">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-portfolio-electric-blue rounded-full mr-3"></div>
              <div>
                <div className="font-semibold text-portfolio-electric-blue">Info</div>
                <div className="text-sm text-gray-300">New update available</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'toggle-switch',
      name: 'Toggle Switch',
      description: 'Animated toggle switches with smooth transitions',
      category: 'Forms',
      icon: '🔄',
      preview: (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">Dark Mode</span>
            <div className="relative">
              <input type="checkbox" className="sr-only" defaultChecked />
              <div className="w-12 h-6 bg-portfolio-electric-blue rounded-full p-1 transition-colors duration-200">
                <div className="w-4 h-4 bg-white rounded-full transition-transform duration-200 transform translate-x-6"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Notifications</span>
            <div className="relative">
              <input type="checkbox" className="sr-only" />
              <div className="w-12 h-6 bg-gray-600 rounded-full p-1 transition-colors duration-200">
                <div className="w-4 h-4 bg-white rounded-full transition-transform duration-200"></div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const categories = ['All', 'Layout', 'Cards', 'Buttons', 'Forms', 'Indicators', 'Feedback'];

  const filteredComponents = activeCategory === 'All' 
    ? allComponents 
    : allComponents.filter(component => component.category === activeCategory);

  return (
    <div className="min-h-screen bg-portfolio-dark text-white">
      {/* Header */}
      <div className="glass-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                to="/#components"
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Portfolio
              </Link>
              <div className="h-6 w-px bg-gray-600"></div>
              <h1 className="text-2xl font-bold electric-text">UI Components Gallery</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Gallery Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="electric-text">Complete Component Library</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive collection of custom-built UI components, each designed with modern aesthetics and smooth animations.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="glass-card p-2 rounded-full">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 text-sm ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-portfolio-electric-blue to-portfolio-neon-purple text-white'
                      : 'text-gray-300 hover:text-white hover:bg-portfolio-glass-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Components Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredComponents.map((component, index) => (
            <div
              key={component.id}
              className="glass-card p-6 hover-glow group transition-all duration-300 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{component.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{component.name}</h3>
                    <span className="px-2 py-1 text-xs bg-portfolio-glass-white border border-portfolio-glass-border rounded-full text-gray-300">
                      {component.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{component.description}</p>
              </div>

              {/* Component Preview */}
              <div className="p-4 bg-portfolio-dark-blue rounded-lg border border-portfolio-glass-border mb-4">
                {component.preview}
              </div>

              {/* Component Features */}
              <div className="space-y-2 text-xs text-gray-400">
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-portfolio-electric-blue rounded-full mr-2"></div>
                  Responsive Design
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-portfolio-neon-purple rounded-full mr-2"></div>
                  Smooth Animations
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-portfolio-accent-pink rounded-full mr-2"></div>
                  TypeScript Support
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center glass-card p-6 hover-glow">
            <Code className="mx-auto mb-3 text-portfolio-electric-blue" size={24} />
            <div className="text-2xl font-bold electric-text mb-2">{allComponents.length}+</div>
            <div className="text-gray-300 text-sm">Components</div>
          </div>
          <div className="text-center glass-card p-6 hover-glow">
            <Palette className="mx-auto mb-3 text-portfolio-neon-purple" size={24} />
            <div className="text-2xl font-bold electric-text mb-2">{categories.length - 1}</div>
            <div className="text-gray-300 text-sm">Categories</div>
          </div>
          <div className="text-center glass-card p-6 hover-glow">
            <Zap className="mx-auto mb-3 text-portfolio-accent-pink" size={24} />
            <div className="text-2xl font-bold electric-text mb-2">100%</div>
            <div className="text-gray-300 text-sm">Animated</div>
          </div>
          <div className="text-center glass-card p-6 hover-glow">
            <Grid3X3 className="mx-auto mb-3 text-green-500" size={24} />
            <div className="text-2xl font-bold electric-text mb-2">Mobile</div>
            <div className="text-gray-300 text-sm">Responsive</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullGallery;
