
import React from 'react';
import { Briefcase, Calendar, Building } from 'lucide-react';

const ExperienceSection = () => {
  const experienceData = [
    {
      title: "Full-Stack Developer",
      company: "Crescere Analytics",
      period: "January 2024 - June 2024",
      description: "Developed a scalable data platform using NextJS, PostgreSQL, and Zustand. Used Redux for global state and custom APIs for backend logic. Deployed the site on Vercel with integrated CI/CD and RDS for database management."
    },
    {
      title: "Frontend Developer",
      company: "Grateful PR",
      period: "September 2022 - December 2022",
      description: "Created customized websites using HTML, CSS, and JS. Developed reusable website sections and plugins to streamline client development and improve design consistency."
    },
    {
      title: "Frontend Developer",
      company: "Braindigit",
      period: "January 2020 - December 2021",
      description: "Designed an e-commerce app using Django and Bootstrap. Integrated MongoDB for data handling. Managed frontend-backend communication and collaborated with cross-functional teams for a seamless user experience."
    }
  ];

  return (
    <section id="experience" className="bg-portfolio-gray-light section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Experience</h2>
        
        <div className="space-y-8">
          {experienceData.map((job, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md timeline-item card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-heading font-semibold text-portfolio-navy mb-1">
                    {job.title}
                  </h3>
                  <div className="flex items-center text-portfolio-gray-dark">
                    <Building size={18} className="mr-2" />
                    <span>{job.company}</span>
                  </div>
                </div>
                <div className="mt-2 md:mt-0 flex items-center text-portfolio-accent">
                  <Calendar size={18} className="mr-2" />
                  <span>{job.period}</span>
                </div>
              </div>
              <p className="text-portfolio-gray-dark">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
