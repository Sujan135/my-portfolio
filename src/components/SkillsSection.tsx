
import React from 'react';
import { Code, Server, Database, Layout, Terminal, Users } from 'lucide-react';

const SkillsSection = () => {
  const skillsCategories = [
    {
      title: "Frontend",
      icon: <Layout className="w-6 h-6" />,
      skills: ["TypeScript", "JavaScript", "ReactJS", "Redux", "Zustand", "NextJS", "TailwindCSS", "Bootstrap5+", "HTML5", "CSS3"]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      skills: ["Express", "Django", "Python", "Node.js", "API Development", "JWT Authentication"]
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      skills: ["PostgreSQL", "MongoDB", "Database Design", "Query Optimization"]
    },
    {
      title: "DevOps",
      icon: <Terminal className="w-6 h-6" />,
      skills: ["AWS Services", "CI/CD pipelines", "Docker", "Git", "Version Control"]
    },
    {
      title: "Tools & IDEs",
      icon: <Code className="w-6 h-6" />,
      skills: ["VS Code", "PyCharm", "IntelliJ IDEA", "Google Workspace", "jQuery"]
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      skills: ["Communication", "Team Collaboration", "Problem-Solving", "Agile Development", "Time Management"]
    }
  ];

  return (
    <section id="skills" className="bg-white section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-portfolio-gray-light p-6 rounded-lg card-hover"
            >
              <div className="flex items-center mb-4">
                <div className="bg-portfolio-accent p-2 rounded-md text-white mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-portfolio-navy">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
