import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Textarea } from '@/components/ui/textarea';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { useToast } from '@/components/ui/use-toast';
    import { Phone, Mail, Linkedin, MapPin, Send, FileText, MessageSquare } from 'lucide-react';

    const ContactPage = () => {
      const { toast } = useToast();
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      const [isSubmitting, setIsSubmitting] = useState(false);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call / localStorage saving
        try {
          // For now, save to localStorage
          const inquiries = JSON.parse(localStorage.getItem('contactInquiries') || '[]');
          inquiries.push({ ...formData, date: new Date().toISOString() });
          localStorage.setItem('contactInquiries', JSON.stringify(inquiries));
          
          toast({
            title: 'Message Sent!',
            description: 'Thank you for reaching out. I will get back to you soon.',
            variant: 'default',
          });
          setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
          toast({
            title: 'Error Sending Message',
            description: 'Something went wrong. Please try again or contact me directly.',
            variant: 'destructive',
          });
        } finally {
          setIsSubmitting(false);
        }
      };

      const contactDetails = [
        { icon: <Phone className="h-5 w-5 text-primary" />, text: '+91 9449231009', href: 'tel:+919449231009', label: 'Call Vaibhav' },
        { icon: <Mail className="h-5 w-5 text-primary" />, text: 'vaibhavy7227@gmail.com', href: 'mailto:vaibhavy7227@gmail.com', label: 'Email Vaibhav' },
        { icon: <Linkedin className="h-5 w-5 text-primary" />, text: 'linkedin.com/in/vaibhavy72', href: 'https://www.linkedin.com/in/vaibhavy72', target: '_blank', label: 'LinkedIn Profile' },
        { icon: <MapPin className="h-5 w-5 text-primary" />, text: 'vaibhavy72.web.app', href: 'https://vaibhavy72.web.app', target: '_blank', label: 'Portfolio Website' },
      ];

      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
        >
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind, a question, or just want to connect? Feel free to reach out.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="!text-2xl">Contact Information</CardTitle>
                  <CardDescription>You can reach me through the following channels:</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactDetails.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target={item.target || '_self'}
                      rel={item.target ? 'noopener noreferrer' : undefined}
                      aria-label={item.label}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-secondary transition-colors group"
                    >
                      {item.icon}
                      <span className="text-muted-foreground group-hover:text-primary">{item.text}</span>
                    </a>
                  ))}
                  <div className="border-t pt-6 space-y-4">
                     <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                        <a href="/resume.pdf" download="Vaibhav_Anand_Yadav_Resume.pdf">
                          Download Resume <FileText className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      <Button asChild className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:opacity-90 text-white">
                        <a href="https://wa.me/919449231009" target="_blank" rel="noopener noreferrer">
                          Chat on WhatsApp <MessageSquare className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="!text-2xl">Send Me a Message</CardTitle>
                  <CardDescription>Fill out the form below and I'll get back to you.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" name="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" name="subject" type="text" placeholder="Regarding..." value={formData.subject} onChange={handleChange} required />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" name="message" placeholder="Your message here..." rows={5} value={formData.message} onChange={handleChange} required />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      );
    };

    export default ContactPage;