import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    sections: [
      {
        title: 'Navigation',
        links: [
          { label: 'Home', href: '#home' },
          { label: 'About', href: '#about' },
          { label: 'Projects', href: '#projects' },
          { label: 'Skills', href: '#skills' },
          { label: 'Contact', href: '#contact' }
        ]
      },
      {
        title: 'Services',
        links: [
          { label: 'Web Development', href: '#' },
          { label: 'Frontend Development', href: '#' },
          { label: 'Backend Development', href: '#' },
          { label: 'UI/UX Design', href: '#' },
          { label: 'Consulting', href: '#' }
        ]
      },
      {
        title: 'Resources',
        links: [
          { label: 'Portfolio', href: '#projects' },
          { label: 'Resume', href: '#' },
          { label: 'Contact', href: '#contact' },
        ]
      }
    ]
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith('#')) {
      const element = document.getElementById(sectionId.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-background border-t border-border/50">
      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 accent-gradient text-white rounded-full shadow-glow hover:scale-110 smooth-transition"
      >
        <ArrowUp size={20} />
      </Button>

      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="text-2xl font-heading font-bold text-gradient mb-4">
                Eric Dolo
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Full-Stack Developer passionate about creating exceptional web experiences 
                with modern technologies and best practices.
              </p>
              <div className="flex gap-4">
                <a
                  href="mailto:doloeric37@gmail.com"
                  className="text-muted-foreground hover:text-primary smooth-transition"
                >
                  doloeric37@gmail.com
                </a>
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.sections.map((section) => (
              <div key={section.title}>
                <h3 className="font-heading font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-muted-foreground hover:text-primary smooth-transition text-left"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>© {currentYear} Eric Dolo. Made with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>and lots of coffee</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>
                Built with React & Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </footer>
  );
};

export default Footer;