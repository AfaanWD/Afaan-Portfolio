import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import characterAvatar from "@/assets/character-avatar.jpeg";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Large Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black tracking-tighter opacity-10 select-none uppercase whitespace-nowrap">
            HI, I'M AFAAN
          </h1>
        </div>
        
        {/* Character Image - Blended with Background */}
        <div className="relative flex justify-center items-center min-h-screen">
          <div className="relative z-20">
            <img 
              src={characterAvatar} 
              alt="Afaan Character Avatar" 
              className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-contain animate-float"
              style={{
                mixBlendMode: 'screen',
                filter: 'contrast(1.2) brightness(1.1)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Main Text Overlay */}
        <div className="absolute bottom-32 left-0 right-0 text-center z-30 space-y-6 fade-in">
          <p className="text-xl md:text-2xl text-foreground max-w-2xl mx-auto font-bold">
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