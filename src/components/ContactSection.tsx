
import React from 'react';
import { Github, Linkedin, Mail, Download, Twitter } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-portfolio-navy text-white section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-white after:bg-white">Get in Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Feel free to reach out through any of the following channels:
            </p>
            
            <div className="space-y-6">
              <a 
                href="mailto:banjara.sujan12@outlook.com" 
                className="flex items-center text-portfolio-accent-light hover:text-white transition-colors duration-300"
              >
                <Mail size={24} className="mr-3" />
                <span>banjara.sujan12@outlook.com</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/sbanjara/" 
                className="flex items-center text-portfolio-accent-light hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} className="mr-3" />
                <span>LinkedIn Profile</span>
              </a>
              
              <a 
                href="#" 
                className="flex items-center text-portfolio-accent-light hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={24} className="mr-3" />
                <span>X (Twitter)</span>
              </a>
              
              <a 
                href="https://github.com/Sujan135" 
                className="flex items-center text-portfolio-accent-light hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} className="mr-3" />
                <span>GitHub Profile</span>
              </a>
              
              <a 
                href="#" 
                className="flex items-center text-portfolio-accent-light hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={24} className="mr-3" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
          
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="bg-portfolio-navy-light border border-portfolio-accent-light rounded-md w-full p-3 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-accent"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="bg-portfolio-navy-light border border-portfolio-accent-light rounded-md w-full p-3 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-accent"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="bg-portfolio-navy-light border border-portfolio-accent-light rounded-md w-full p-3 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-accent"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="bg-portfolio-navy-light border border-portfolio-accent-light rounded-md w-full p-3 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-accent"
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-portfolio-accent hover:bg-portfolio-accent-light text-white px-6 py-3 rounded-md font-medium transition-colors duration-300 w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
