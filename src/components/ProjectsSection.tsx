import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Object Detection & Tracking",
      description: "A Robust Real Time Object Detection Model Using TensorFlow Leveraging ML Capabilities.",
      technologies: ["TensorFlow", "Android Studio", "Google Play Services", "ML Kit"],
      image: "🤖",
      category: "AI/ML"
    },
    {
      title: "Student Portfolio Management System", 
      description: "A Digital Platform Designed to organize and Showcase Students Achievements, Academic's, Skills in One Place and a System that acts as a Digital Resume to connect HR'S and Companies.",
      technologies: ["HTML", "CSS", "JavaScript", "Java", "SQL"],
      image: "📚",
      category: "Web Development"
    },
    {
      title: "Amazon Clone",
      description: "Full-stack e-commerce website replicating Amazon's core functionality with responsive design and backend integration.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      image: "🛒",
      category: "Full Stack"
    },
    {
      title: "Spotify Clone",
      description: "Music streaming application with modern UI and backend integration for seamless user experience.",
      technologies: ["React.js", "Node.js", "MongoDB", "Audio APIs"],
      image: "🎵",
      category: "Full Stack"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-card rounded-2xl p-6 card-hover fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="text-4xl mb-4">{project.image}</div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button size="sm" variant="outline" className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  Code
                </Button>
                <Button size="sm" className="flex items-center gap-2 btn-glow">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;