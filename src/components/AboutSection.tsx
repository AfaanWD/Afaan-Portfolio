const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 card-hover fade-in">
            <p className="text-lg md:text-xl leading-relaxed text-center">
              I am a <span className="text-primary font-semibold">Computer Science Engineering student</span> passionate about 
              AI, Web Development, and Cloud Computing. I love solving problems and building real-world projects 
              that create impact. My journey in technology has been driven by curiosity and a desire to innovate.
            </p>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8 stagger-animation">
              <div className="text-center fade-in">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">AI</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Artificial Intelligence</h3>
                <p className="text-muted-foreground">Building intelligent systems with TensorFlow and ML technologies</p>
              </div>
              
              <div className="text-center fade-in">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">💻</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                <p className="text-muted-foreground">Creating responsive and dynamic web applications</p>
              </div>
              
              <div className="text-center fade-in">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">☁️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Cloud Computing</h3>
                <p className="text-muted-foreground">Deploying scalable solutions on AWS and cloud platforms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;