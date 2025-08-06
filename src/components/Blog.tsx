import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Building a Scalable API with Node.js and Express',
      excerpt: 'Learn how to design and implement a RESTful API that can handle thousands of requests per second using Node.js, Express, and best practices.',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['Node.js', 'API', 'Backend'],
      slug: 'building-scalable-api-nodejs'
    },
    {
      title: 'Modern React Patterns: Hooks, Context, and Performance',
      excerpt: 'Explore advanced React patterns including custom hooks, context optimization, and performance techniques for building maintainable applications.',
      date: '2024-01-08',
      readTime: '12 min read',
      tags: ['React', 'JavaScript', 'Performance'],
      slug: 'modern-react-patterns'
    },
    {
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'A comprehensive look at emerging technologies and trends that will shape web development in the coming year, from WebAssembly to AI integration.',
      date: '2024-01-01',
      readTime: '10 min read',
      tags: ['Web Development', 'Trends', 'Future'],
      slug: 'future-web-development-2024'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gradient">
              Latest Blog Posts
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sharing insights, tutorials, and thoughts about web development, technology trends, and best practices.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <Card
                key={post.slug}
                className="glass-card border-0 hover:shadow-glow smooth-transition group cursor-pointer hover:scale-[1.02]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary smooth-transition">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="glass-card border-primary/20 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="pt-2">
                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-primary hover:text-primary group-hover:translate-x-1 smooth-transition"
                    >
                      Read More
                      <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Want to read more articles and tutorials?
            </p>
            <Button
              size="lg"
              variant="outline"
              className="glass-card hover:bg-primary hover:text-primary-foreground px-8"
            >
              View All Posts
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16">
            <Card className="glass-card border-0 text-center">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold mb-4">
                  Stay Updated
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Get notified when I publish new articles about web development, tutorials, and industry insights.
                </p>
                <div className="flex max-w-md mx-auto gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 glass-card border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  />
                  <Button className="accent-gradient text-white">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;