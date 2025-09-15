import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import characterReference from "@/assets/character-reference.webp";
import { useEffect, useState } from "react";
import { removeBackground, loadImage } from "@/utils/backgroundRemoval";

const HeroSection = () => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string>("");
  
  useEffect(() => {
    const processImage = async () => {
      try {
        // Load the original image
        const response = await fetch(characterReference);
        const blob = await response.blob();
        const image = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(image);
        const url = URL.createObjectURL(processedBlob);
        setProcessedImageUrl(url);
      } catch (error) {
        console.error('Failed to process image:', error);
        // Fallback to original image
        setProcessedImageUrl(characterReference);
      }
    };
    
    processImage();
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Large Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="text-center transform scale-x-150">
            <h1 className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-black tracking-tighter opacity-10 select-none uppercase leading-none">
              HI, I'M
            </h1>
            <h1 className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-black tracking-tighter opacity-10 select-none uppercase leading-none">
              AFAAN
            </h1>
          </div>
        </div>
        
        {/* Character Image - Blended with Background */}
        <div className="relative flex justify-center items-center min-h-screen">
          <div className="relative z-20">
            <img 
              src={processedImageUrl || characterReference} 
              alt="Afaan Character Avatar" 
              className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-contain animate-float"
              style={{
                filter: 'contrast(1.2) brightness(1.1) drop-shadow(0 0 30px rgba(168, 85, 247, 0.4))'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Main Text Overlay - Positioned below character */}
        <div className="absolute bottom-24 left-0 right-0 text-center z-30 space-y-6 fade-in">
          <p className="text-xl md:text-2xl text-foreground max-w-2xl mx-auto font-bold">
            Passionate about Web Dev & AI
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