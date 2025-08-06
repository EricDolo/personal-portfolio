import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'doloeric37@gmail.com',
      link: 'mailto:doloeric37@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+27 (063) 440-6631',
      link: 'tel:+27634406631'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Phillip Nel Park, Pretoria',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com',
      username: '@eric_dolo'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'www.linkedin.com/in/eric-dolo',
      username: 'in/eric-dolo'
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gradient">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="glass-card border-primary/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="glass-card border-primary/20"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="glass-card border-primary/20"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="glass-card border-primary/20 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full accent-gradient text-white font-semibold hover:scale-[1.02] smooth-transition"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.link}
                      className="flex items-center gap-4 p-4 glass-card rounded-lg hover:bg-primary hover:text-primary-foreground smooth-transition group"
                    >
                      <div className="w-12 h-12 bg-primary/20 group-hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center smooth-transition">
                        <info.icon className="text-primary group-hover:text-primary-foreground" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold">{info.label}</div>
                        <div className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">Connect Online</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 glass-card rounded-lg hover:bg-primary hover:text-primary-foreground smooth-transition group"
                    >
                      <div className="w-12 h-12 bg-primary/20 group-hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center smooth-transition">
                        <social.icon className="text-primary group-hover:text-primary-foreground" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold">{social.label}</div>
                        <div className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">
                          {social.username}
                        </div>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="glass-card border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full inline-block mr-2 animate-pulse" />
                  <span className="font-medium">Available for new projects</span>
                  <p className="text-sm text-muted-foreground mt-2">
                    Currently accepting freelance work and full-time opportunities
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;