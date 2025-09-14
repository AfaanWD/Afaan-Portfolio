import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card/50 border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
          >
            Afaan Imran
          </button>

          {/* Tagline */}
          <p className="text-muted-foreground max-w-md">
            Building the future with AI, Web Development, and Cloud Technologies.
          </p>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a 
              href="mailto:afaanmrn@gmail.com"
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200 card-hover"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="#"
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200 card-hover"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="#"
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200 card-hover"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-6 w-full">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              © 2025 Afaan Imran. Made with <Heart className="w-4 h-4 text-red-500" /> and passion.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;