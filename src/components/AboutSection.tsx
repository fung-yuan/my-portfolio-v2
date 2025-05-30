
import React from 'react';
import { Code, Star, Github } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { name: 'React', level: 95, color: 'from-blue-500 to-blue-600' },
    { name: 'Next.js', level: 90, color: 'from-black to-gray-800' },
    { name: 'Node.js', level: 85, color: 'from-green-500 to-green-600' },
    { name: 'MongoDB', level: 80, color: 'from-green-600 to-green-700' },
    { name: 'JavaScript', level: 85, color: 'from-green-600 to-green-700' },
    { name: 'Tailwind CSS', level: 95, color: 'from-cyan-500 to-cyan-600' }
  ];

  const technologies = [
    'React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS',
    'JavaScript', 'TypeScript', 'Git', 'GitHub', 'API Development', 'Responsive Design'
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="electric-text">About Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Self-taught full-stack developer passionate about creating exceptional web experiences through clean code and modern technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <div className="glass-card p-8 hover-glow">
              <div className="flex items-center mb-4">
                <Code className="text-portfolio-electric-blue mr-3" size={24} />
                <h3 className="text-2xl font-semibold">My Journey</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Started my development journey in January 2023 as a self-taught developer through 
                intensive online courses, tutorials, and project-based learning. I specialize in 
                full-stack development using modern tools like Next.js, React, and Node.js.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I focus on creating responsive UIs, optimizing performance, and building scalable 
                backend APIs. When I'm not coding, you'll find me contributing to open-source projects 
                and engaging with developer communities on GitHub and Discord.
              </p>
            </div>

            {/* Technologies */}
            <div className="glass-card p-6 hover-glow">
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Star className="text-portfolio-neon-purple mr-2" size={20} />
                Technologies I Work With
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-portfolio-glass-white border border-portfolio-glass-border rounded-full text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-6">
            <div className="glass-card p-8 hover-glow">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Github className="text-portfolio-accent-pink mr-3" size={24} />
                Skills & Expertise
              </h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 text-center hover-glow">
                <div className="text-3xl font-bold electric-text mb-2">15+</div>
                <div className="text-gray-300">Projects</div>
              </div>
              <div className="glass-card p-6 text-center hover-glow">
                <div className="text-3xl font-bold electric-text mb-2">2+ Years</div>
                <div className="text-gray-300">Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
