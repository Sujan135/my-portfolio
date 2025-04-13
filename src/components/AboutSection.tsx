
import React from 'react';
import { User, MapPin, Briefcase, Code } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-white section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-lg mb-6 leading-relaxed">
              I'm a Full Stack Engineer and AWS DevOps professional based in Fort Worth, TX, with a strong foundation in JavaScript, Python, and modern frameworks like ReactJS and NextJS. I enjoy solving complex problems through efficient, scalable code and building solutions that make an impact.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              I aspire to grow as a top-tier software engineer, contribute to innovative tech products, and help lead the shift toward smarter, cloud-powered systems.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <div className="bg-portfolio-accent-light p-3 rounded-full">
                  <User size={20} className="text-portfolio-navy" />
                </div>
                <div>
                  <h3 className="font-medium">Name</h3>
                  <p>Sujan Banjara</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-portfolio-accent-light p-3 rounded-full">
                  <MapPin size={20} className="text-portfolio-navy" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p>Fort Worth, TX</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-portfolio-accent-light p-3 rounded-full">
                  <Briefcase size={20} className="text-portfolio-navy" />
                </div>
                <div>
                  <h3 className="font-medium">Experience</h3>
                  <p>4+ Years</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-portfolio-accent-light p-3 rounded-full">
                  <Code size={20} className="text-portfolio-navy" />
                </div>
                <div>
                  <h3 className="font-medium">Focus</h3>
                  <p>Full Stack Development</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-1 bg-portfolio-navy-light p-6 rounded-lg text-white flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>4+ years of experience in web development</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Expertise in JavaScript, ReactJS, NextJS</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Strong background in AWS DevOps</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Passionate about building scalable solutions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Dedicated to continuous learning and improvement</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
