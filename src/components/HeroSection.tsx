
import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-portfolio-white to-portfolio-accent-light"
    >
      <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-portfolio-navy mb-4">
            Hello, I'm <span className="text-portfolio-accent">Sujan Banjara</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-portfolio-gray-dark mb-8">
            Full Stack Engineer | AWS DevOps | JavaScript Enthusiast
          </h2>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <a 
              href="#contact" 
              className="bg-portfolio-accent hover:bg-portfolio-navy-light text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="border-2 border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
            >
              View My Work
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end animate-fade-in">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img 
              src="/lovable-uploads/ebf96171-5752-42d8-8104-009435d6025c.png" 
              alt="Sujan Banjara" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} className="text-portfolio-navy" />
      </a>
    </section>
  );
};

export default HeroSection;
