import { Award, Calendar, CheckCircle } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2025",
      type: "Global Certification",
      description: "Fundamental understanding of AWS Cloud services and architecture",
      icon: "☁️",
      verified: true
    },
    {
      title: "Automation Expert",
      issuer: "AccelQ",
      date: "2024",
      type: "Professional Certification",
      description: "Advanced automation testing and quality assurance practices",
      icon: "⚙️",
      verified: true
    },
    {
      title: "AI-ML Virtual Internship",
      issuer: "EduSkills",
      date: "2024",
      type: "Internship Certification",
      description: "Hands-on experience with AI/ML technologies and frameworks",
      icon: "🤖",
      verified: true
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto grid gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-card rounded-2xl p-6 md:p-8 card-hover fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon and Badge */}
                <div className="flex-shrink-0 flex flex-col items-center md:items-start">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-2xl mb-3">
                    {cert.icon}
                  </div>
                  {cert.verified && (
                    <div className="flex items-center gap-1 text-sm text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Verified
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-1">{cert.title}</h3>
                      <p className="text-lg font-medium">{cert.issuer}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2 mt-2 md:mt-0">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {cert.date}
                      </div>
                      <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full">
                        {cert.type}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground">{cert.description}</p>
                </div>

                {/* Award Icon */}
                <div className="flex-shrink-0 hidden md:flex items-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resume Download CTA */}
        <div className="text-center mt-16 fade-in">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Want to see more details?</h3>
            <p className="text-muted-foreground mb-6">Download my complete resume for detailed information about my certifications and achievements.</p>
            <a 
              href="/Afaan_Resume.pdf" 
              download
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-3 rounded-lg font-semibold btn-glow"
            >
              📄 Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;