import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Download, User, GraduationCap, Briefcase, Code, Cpu, Database, Layers, Server, Settings, Palette, Phone, Mail, Linkedin, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

const HomePage = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Palette className="h-6 w-6 text-primary" />,
      skills: ['React JS', 'HTML', 'CSS', 'JavaScript', 'Bootstrap']
    },
    {
      category: 'Backend',
      icon: <Server className="h-6 w-6 text-primary" />,
      skills: ['PHP', 'CodeIgniter', 'Laravel', 'REST API']
    },
    {
      category: 'Database & CMS',
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: ['MySQL', 'MongoDB', 'WordPress', 'Drupal']
    }
  ];

  const experiences = [
    {
      role: 'Software Developer',
      company: 'Apppiness Interactive Pvt. Ltd.',
      duration: 'Aug 2022 – Present'
    },
    {
      role: 'Jr Software Engineer',
      company: 'Bizmartech Demand Spot LLP',
      duration: 'Sept 2021 – March 2022'
    }
  ];

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Bharati Vidyapeeth Deemed University',
      location: 'Pune'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Rani Channamma University',
      location: 'Belgaum'
    }
  ];

  const projects = [
    {
      title: 'Klassroom Website & CMS',
      description: 'Developed a comprehensive website and content management system for an educational platform.',
      tech: ['PHP', 'Ember JS', 'Angular']
    },
    {
      title: 'Halo Wi-Fi CRM Dashboard',
      description: 'Built a CRM dashboard for managing Wi-Fi services and customer relations.',
      tech: ['Laravel', 'Bootstrap', 'Blade']
    },
    {
      title: 'CARE Hospitals Website',
      description: 'Developed a patient-centric website for CARE Hospitals group.',
      tech: ['CodeIgniter', 'HTML', 'CSS', 'JS']
    }
  ];

  const contactInfo = [
    { icon: <Phone className="h-5 w-5" />, label: 'Phone', value: '+91 9449231009' },
    { icon: <Mail className="h-5 w-5" />, label: 'Email', value: 'vaibhavy7227@gmail.com' },
    { icon: <Linkedin className="h-5 w-5" />, label: 'LinkedIn', value: 'linkedin.com/in/vaibhavy72' },
    { icon: <MapPin className="h-5 w-5" />, label: 'Location', value: 'Pune, Maharashtra, India' }
  ];

  // Add this at the top of the component, after the existing constants
  const SectionHeader = ({ title, link, accent = false }) => (
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-3xl font-bold">
        {accent ? (
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">{title}</span>
        ) : title}
      </h2>
      <Button variant="ghost" asChild className="group">
        <Link to={link} className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
          <span>View All</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </div>
  );
  
  // Update the return statement sections with new styling and navigation
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Hero Section - Enhanced with parallax effect */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        </motion.div>
        
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            <span className="block">Hi, I'm Vaibhav Yadav</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mt-2">
              Software Developer
            </span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            A passionate Full-Stack Developer with 3+ years of experience crafting robust web applications and innovative solutions.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-primary-foreground shadow-lg">
              <Link to="/contact">
                Contact Me <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 shadow-md">
              <a href="/resume.pdf" download="Vaibhav_Yadav_Resume.pdf">
                View Resume <Download className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
  
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        {/* About Section */}
        <section>
          <SectionHeader title="About Me" link="/about" accent={true} />
          <Card className="overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-4 leading-relaxed">
                I am a Software Developer with over three years of hands-on experience in designing, developing, and deploying web applications. My journey in tech has equipped me with a versatile skill set, spanning both front-end and back-end technologies.
              </p>
            </CardContent>
          </Card>
        </section>
  
        {/* Skills Section */}
        <section>
          <SectionHeader title="Skills" link="/skills" />
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      {category.icon}
                      <CardTitle>{category.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      {category.skills.map((skill, idx) => (
                        <li key={idx} className="text-muted-foreground">{skill}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
  
        {/* Experience Section */}
        <section>
          <SectionHeader title="Experience" link="/experience" />
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <span>{exp.role}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.duration}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
  
        {/* Projects Section */}
        <section>
          <SectionHeader title="Featured Projects" link="/projects" accent={true} />
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
  
        {/* Contact Section */}
        <section>
          <SectionHeader title="Contact" link="/contact" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="flex items-center space-x-4 py-6">
                    <div className="p-2 bg-primary/10 rounded-full">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <p className="text-sm text-muted-foreground">{info.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default HomePage;