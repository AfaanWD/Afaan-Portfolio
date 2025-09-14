const ExperienceSection = () => {
  const experiences = [
    {
      title: "AI-ML Virtual Intern",
      company: "Edu-Skills (Google AI-ML)",
      period: "Apr 2024 – Jun 2024",
      description: "Worked with Technologies like TensorFlow, Android Studio, Google Play Services.",
      skills: ["TensorFlow", "Android Studio", "Google Play Services", "Machine Learning"]
    },
    {
      title: "Web Development Projects", 
      company: "Personal Projects",
      period: "Nov 2024 – Jan 2025",
      description: "Cloned Websites like Amazon, Spotify Using Front End and Back End Integration.",
      skills: ["React.js", "Node.js", "MongoDB", "Full Stack Development"]
    },
    {
      title: "Cloud Computing Practitioner",
      company: "Amazon Web Services",
      period: "Jan 2025 – Feb 2025", 
      description: "Worked with Different Cloud Services on Amazon Web Services",
      skills: ["AWS", "Cloud Computing", "EC2", "S3", "Lambda"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start gap-8 fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-background rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-card rounded-2xl p-6 card-hover">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                        <p className="text-lg font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full mt-2 md:mt-0 self-start">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;