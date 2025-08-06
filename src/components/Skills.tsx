import { Code, Database, Globe, Palette, Server, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      skills: [
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 80 }
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'RESTful APIs', level: 95 },
        { name: 'Microservices', level: 75 }
      ]
    },
    {
      title: 'Database & Cloud',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', level: 80 },
        { name: 'Docker', level: 80 },
      ]
    },
    {
      title: 'Design & UX',
      icon: Palette,
      skills: [
        { name: 'UI/UX Design', level: 70 },
        { name: 'Figma', level: 60 },
        { name: 'Responsive Design', level: 85 },
        { name: 'Accessibility', level: 85 },
        { name: 'User Research', level: 70 }
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Mobile-First Design', level: 80 },
        { name: 'Performance Optimization', level: 75 }
      ]
    },
    {
      title: 'Development Tools',
      icon: Code,
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'VS Code', level: 95 },
        { name: 'CI/CD', level: 80 },
        { name: 'Agile/Scrum', level: 85 }
      ]
    }
  ];

  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Project Management',
    'Client Communication',
    'Mentoring',
    'Technical Writing',
    'Architecture Design'
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gradient">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels across different technologies and frameworks.
            </p>
          </div>

          {/* Technical Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className="glass-card border-0 hover:shadow-glow smooth-transition"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <category.icon className="text-primary" size={20} />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2 bg-muted"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="text-center">
            <h3 className="text-2xl font-heading font-semibold mb-8">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {softSkills.map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 glass-card rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground smooth-transition cursor-default"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-heading font-semibold mb-8">Experience Highlights</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">2021-2022</div>
                <div className="font-semibold mb-1">Intern Developer</div>
                <div className="text-sm text-muted-foreground">S-Squared Software Solutions</div>
              </div>
              <div className="glass-card p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">2022-2024</div>
                <div className="font-semibold mb-1">Junior Developer</div>
                <div className="text-sm text-muted-foreground">S-Squared Software Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;