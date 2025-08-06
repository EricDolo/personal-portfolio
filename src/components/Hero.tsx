import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import developerAvatar from '@/assets/developer-avatar.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
      <div className="absolute bottom-32 right-10 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Avatar */}
          <div className="mb-8 animate-scale-in">
            <img
              src={developerAvatar}
              alt="Eric Dolo"
              className="w-32 h-32 mx-auto rounded-full object-cover shadow-glow border-4 border-primary/20"
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-in-up">
            <span className="text-gradient">Eric Dolo</span>
            <br />
            <span className="text-foreground">Full-Stack Developer</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Building scalable web applications with modern technologies
            <br />
            Passionate about creating exceptional user experiences
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {['C#', 'Java', 'React', 'Node.js', 'TypeScript', 'Javascript', '.Net Framework', 'PostgreSQL', 'Azure'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 glass-card rounded-full text-sm font-medium text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button
              size="lg"
              className="accent-gradient text-white font-semibold px-8 py-3 glow-effect hover:scale-105 smooth-transition"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-card hover:bg-primary hover:text-primary-foreground px-8 py-3"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:bg-primary hover:text-primary-foreground smooth-transition hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:bg-primary hover:text-primary-foreground smooth-transition hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:alex@example.com"
              className="p-3 glass-card rounded-full hover:bg-primary hover:text-primary-foreground smooth-transition hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-muted-foreground hover:text-primary smooth-transition"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;