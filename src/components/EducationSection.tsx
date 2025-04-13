
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const EducationSection = () => {
  const educationData = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "Tarrant County Community College",
      date: "Present",
      description: "Currently pursuing a degree in Computer Science with focus on software engineering and data structures."
    },
    {
      degree: "Application Development Program",
      institution: "YearUp United",
      date: "Ongoing",
      description: "Specialized program focused on modern application development methodologies and practical implementations."
    }
  ];

  return (
    <section id="education" className="bg-portfolio-gray-light section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Education</h2>
        
        <div className="space-y-8">
          {educationData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md timeline-item card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-heading font-semibold text-portfolio-navy mb-1">
                    {item.degree}
                  </h3>
                  <div className="flex items-center text-portfolio-gray-dark">
                    <GraduationCap size={18} className="mr-2" />
                    <span>{item.institution}</span>
                  </div>
                </div>
                <div className="mt-2 md:mt-0 flex items-center text-portfolio-accent">
                  <Calendar size={18} className="mr-2" />
                  <span>{item.date}</span>
                </div>
              </div>
              <p className="text-portfolio-gray-dark">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
