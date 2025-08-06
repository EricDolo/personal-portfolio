import { Code2, Lightbulb, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that follows best practices and industry standards.'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Approaching complex challenges with creative solutions and analytical thinking.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with cross-functional teams to deliver exceptional products.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, efficiency, and outstanding user experience.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gradient">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with 3 years of experience in building software solutions and 
                modern web applications. My journey began with a Computer Systems Engineering Diploma from 
                Tshwane University of Technology, and I've since worked with software companies 
                to bring innovative digital solutions to life.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in C#, .Net Framework, React, Node.js, and cloud technologies, with a strong focus on 
                creating performant, accessible, and user-friendly applications. When I'm not 
                coding, you'll find me contributing to open-source projects, mentoring junior 
                developers, or exploring the latest web technologies.
              </p>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">3</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">GitHub Contributions</div>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card
                  key={highlight.title}
                  className="glass-card border-0 hover:shadow-glow smooth-transition hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <highlight.icon className="text-primary" size={24} />
                    </div>
                    <h3 className="font-heading font-semibold mb-2">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-heading font-semibold mb-8">Education & Certifications</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="glass-card px-6 py-4 rounded-lg">
                <div className="font-semibold">National Diploma - Engineering: Computer Systems</div>
                <div className="text-sm text-muted-foreground">Tshwane University of Technology</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;