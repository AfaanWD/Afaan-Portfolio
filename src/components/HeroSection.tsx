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
        {/* Profile Image - Blended with Background */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img 
              src={afaanProfile} 
              alt="Afaan Imran Profile" 
              className="w-48 h-48 md:w-72 md:h-72 object-cover animate-float"
              style={{
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                filter: 'contrast(1.1) brightness(1.1)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
          </div>
        </div>

        {/* Main Text */}
        <div className="space-y-6 fade-in">
          <h1 className="text-hero-sm md:text-hero font-black tracking-tight text-glow uppercase">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Afaan
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Passionate about AI | Web Dev & Blockchain Enthusiast
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button 
              size="lg" 
              className="btn-glow px-10 py-4 text-lg font-bold rounded-full"
              onClick={scrollToAbout}
            >
              Explore My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-10 py-4 text-lg font-bold border-2 border-foreground/20 hover:bg-foreground/10 rounded-full"
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