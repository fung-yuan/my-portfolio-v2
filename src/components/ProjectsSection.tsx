import React, { useState } from 'react';
import { Github, Link, Star } from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Grilli Restaurant',
      description: 'A modern restaurant website with elegant design and smooth animations. Features online reservation system and interactive menu.',
      image: '/food.png',
      technologies: ['React', 'TailwindCSS', 'TypeScript'],
      category: 'Web App',
      github: 'https://github.com/fung-yuan/tourest-demo',
      demo: '/grilli-demo/index.html',
      featured: true
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics dashboard.',
      image: '/eco.png',
      technologies: ['React', 'TypeScript', 'nextjs'],
      category: 'Full Stack',
      github: 'https://github.com/fung-yuan/ecommerce-demo',
      demo: '/ecommerce-demo/index.html',
      featured: true
    },
    {
      id: 4,
      title: 'Travel Website',
      description: 'Modern travel website with destination discovery, booking system, and travel planning features.',
      image: '/travel.png',
      technologies: ['React', 'TailwindCSS'],
      category: 'Full Stack',
      github: 'https://github.com/fung-yuan/tourest-demo',
      demo: '/tourest-demo/index.html',
      featured: false
    }
  ];

  const categories = ['All', 'Web App', 'Full Stack'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="electric-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work, featuring modern web applications and creative UI solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center">
            <Star className="text-portfolio-accent-pink mr-3" size={24} />
            Spotlight Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="glass-card p-6 hover-glow group transition-all duration-300 hover:scale-[1.02]">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        className="flex items-center px-3 py-2 bg-portfolio-glass-white border border-portfolio-glass-border rounded-lg text-sm hover:bg-white/20 transition-colors duration-300"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 border border-portfolio-glass-border text-white font-medium rounded-lg glass-card hover-glow transition-colors duration-300"
                      >
                        <Link size={16} className="mr-2" />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                    <p className="text-gray-300 leading-relaxed">{project.description}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-portfolio-glass-white border border-portfolio-glass-border rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="glass-card p-2 rounded-full">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    activeFilter === category
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

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card p-6 hover-glow group transition-all duration-300 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2">
                  <span className="px-2 py-1 text-xs bg-portfolio-glass-white border border-portfolio-glass-border rounded-full text-gray-300">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-lg font-semibold">{project.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-portfolio-glass-white border border-portfolio-glass-border rounded text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-400">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex space-x-3 pt-2">
                  <a
                    href={project.github}
                    className="flex items-center text-sm text-gray-400 hover:text-portfolio-electric-blue transition-colors duration-300"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-400 hover:text-portfolio-neon-purple transition-colors duration-300"
                  >
                    <Link size={16} className="mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
