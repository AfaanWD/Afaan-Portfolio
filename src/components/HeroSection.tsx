import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import afaanProfile from "@/assets/afaan-profile.jpeg";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-background"></div>
      
      <div className="container mx-auto px-4 text-center z-10">
        {/* Profile Image with Glow Effect */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img 
              src={afaanProfile} 
              alt="Afaan Imran Profile" 
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover profile-glow animate-float"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
        </div>

        {/* Main Text */}
        <div className="space-y-6 fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-glow">
            Hi there, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Afaan
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about AI | Web Dev & Blockchain Enthusiast
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button 
              size="lg" 
              className="btn-glow px-8 py-3 text-lg font-semibold"
              onClick={scrollToAbout}
            >
              Explore My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3 text-lg border-primary hover:bg-primary/10"
              asChild
            >
              <a href="/Afaan_Resume.pdf" download>
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown 
          className="w-8 h-8 text-primary cursor-pointer" 
          onClick={scrollToAbout}
        />
      </div>
    </section>
  );
};

export default HeroSection;