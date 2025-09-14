const SkillsSection = () => {
  const technicalSkills = [
    { name: "Java", level: 90 },
    { name: "Data Structures & Algorithms", level: 85 },
    { name: "AWS", level: 80 },
    { name: "React.js", level: 88 },
    { name: "Node.js", level: 82 },
    { name: "MongoDB", level: 78 },
    { name: "HTML/CSS", level: 92 },
    { name: "JavaScript", level: 88 },
  ];

  const softSkills = [
    "Problem Solving",
    "Leadership",
    "Teamwork", 
    "Communication",
    "Time Management",
    "Adaptability"
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="fade-in">
            <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="fade-in">
            <h3 className="text-2xl font-bold mb-8 text-center">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div 
                  key={skill} 
                  className="skill-card p-4 rounded-xl text-center fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;