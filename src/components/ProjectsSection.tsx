
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projectsData = [
    {
      title: "Analytics Platform Development",
      description: "Built a real-time analytics dashboard for Crescere Analytics using NextJS, PostgreSQL, Zustand, and Redux. Deployed with Vercel and AWS.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
      link: "#",
      github: "#",
      tags: ["NextJS", "PostgreSQL", "Zustand", "Redux", "AWS"]
    },
    {
      title: "E-Commerce Website",
      description: "Developed a feature-rich e-commerce platform with product catalog, shopping cart, and payment integration using modern web technologies.",
      image: "https://images.unsplash.com/photo-1556742208-999815fca738?auto=format&fit=crop&q=80&w=600",
      link: "#",
      github: "#",
      tags: ["ReactJS", "Node.js", "MongoDB", "Express", "Stripe"]
    },
    {
      title: "Portfolio Website",
      description: "Designed and implemented a responsive portfolio website to showcase professional achievements and technical skills.",
      image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&q=80&w=600",
      link: "#",
      github: "#",
      tags: ["JavaScript", "HTML5", "CSS3", "Responsive Design"]
    }
  ];

  return (
    <section id="projects" className="bg-white section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="bg-portfolio-gray-light rounded-lg overflow-hidden shadow-md card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-portfolio-navy mb-2">
                  {project.title}
                </h3>
                <p className="text-portfolio-gray-dark mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-white text-portfolio-navy px-2 py-1 rounded-md text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <a 
                    href={project.github} 
                    className="flex items-center text-portfolio-navy hover:text-portfolio-accent transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} className="mr-1" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.link} 
                    className="flex items-center text-portfolio-navy hover:text-portfolio-accent transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} className="mr-1" />
                    <span>Live Demo</span>
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
