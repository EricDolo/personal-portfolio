import { ExternalLink, Github, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ecommerceProject from '@/assets/Asset-Allocation-Featured.jpg';
import ecommerce from '@/assets/e-commerce.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Investment Projection & Reporting Tool',
      description: 'A full-stack software solution with payment integration, inventory management, and admin dashboard. Built for scalability and performance.',
      image: ecommerceProject,
      technologies: ['C#','.Net Framework','Rest API', 'Swagger', 'MSSQL', 'Postman'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      impact: 'Increased conversion rate by 35%'
    },
    {
      title: 'E-commerce Platform (upskilling)',
      description: 'A business site/e-commerce store with dashboard, real-time updates, multiple pages, map functionality, and sidebar features.',
      image: ecommerce,
      technologies: ['React', 'TypeScript', 'Axios', 'PostgreSQL', 'Node.js', 'Docker'],
      githubUrl: 'https://github.com/EricDolo/four-twenty-cartel/tree/four-twenty-cartel',
      impact: 'Improved team productivity by 50%'
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gradient">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`glass-card border-0 overflow-hidden hover:shadow-elevated smooth-transition group ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } lg:flex`}
              >
                {/* Project Image */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-110 smooth-transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                </div>

                {/* Project Content */}
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl md:text-3xl font-heading mb-3">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base text-muted-foreground leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0 space-y-6">
                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="glass-card border-primary/20 text-foreground"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Impact */}
                    <div className="flex items-center gap-2 text-primary">
                      <TrendingUp size={20} />
                      <span className="font-medium">{project.impact}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="glass-card hover:bg-primary hover:text-primary-foreground"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-2" />
                          View Code
                        </a>
                      </Button>
                    </div>

                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;