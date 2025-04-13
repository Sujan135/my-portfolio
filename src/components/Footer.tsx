
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-portfolio-navy-light text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Sujan Banjara</p>
            <p className="text-sm text-portfolio-accent-light">Full Stack Engineer</p>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a 
              href="#home" 
              className="text-portfolio-accent-light hover:text-white transition-colors duration-300"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-portfolio-accent-light hover:text-white transition-colors duration-300"
            >
              About
            </a>
            <a 
              href="#skills" 
              className="text-portfolio-accent-light hover:text-white transition-colors duration-300"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="text-portfolio-accent-light hover:text-white transition-colors duration-300"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-portfolio-accent-light hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </div>
          
          <button 
            onClick={scrollToTop} 
            className="bg-portfolio-accent p-3 rounded-full hover:bg-white hover:text-portfolio-navy transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <hr className="border-portfolio-accent-light my-6 opacity-30" />
        
        <div className="text-center">
          <p className="text-sm text-portfolio-accent-light">
            © {new Date().getFullYear()} Sujan Banjara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
