import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'khalidharrat212@gmail.com',
      href: 'mailto:khalidharrat212@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Available Worldwide',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/fung-yuan',
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/khalid-harrat-477744368/',
      color: 'hover:text-blue-400'
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="electric-text">Get In Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to connect? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 hover-glow rounded-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="text-portfolio-electric-blue mr-4" size={24} />
                    <div>
                      <h4 className="text-lg font-medium">Email</h4>
                      <a 
                        href="mailto:khalidharrat212@gmail.com" 
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        khalidharrat212@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="text-portfolio-electric-blue mr-4" size={24} />
                    <div>
                      <h4 className="text-lg font-medium">LinkedIn</h4>
                      <a 
                        href="https://www.linkedin.com/in/khalid-harrat-477744368/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        linkedin.com/in/khalid-harrat
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>
                <div className="space-y-4">
                  <a 
                    href="#projects" 
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="mr-2">→</span> View My Projects
                  </a>
                  <a 
                    href="#components" 
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="mr-2">→</span> See UI Components
                  </a>
                  <a 
                    href="#about" 
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="mr-2">→</span> Learn About Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
