import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { ExternalLink, Code } from 'lucide-react';

    const projects = [
      {
        title: 'Klassroom Website & CMS',
        description: 'Developed a comprehensive website and content management system for an educational platform.',
        tech: ['PHP', 'Ember JS', 'Angular'],
        imageUrl: 'klassroom-project',
        liveLink: '#', // Replace with actual link
      },
      {
        title: 'Halo Wi-Fi CRM Dashboard',
        description: 'Built a CRM dashboard for managing Wi-Fi services and customer relations.',
        tech: ['Laravel', 'Bootstrap', 'Blade'],
        imageUrl: 'halo-wifi-crm',
        liveLink: '#',
      },
      {
        title: 'CARE Hospitals Website',
        description: 'Developed a patient-centric website for CARE Hospitals group.',
        tech: ['CodeIgniter', 'HTML', 'CSS', 'JS'],
        imageUrl: 'care-hospitals',
        liveLink: '#',
      },
      {
        title: 'ELV Projects Portfolio',
        description: 'Created a portfolio website showcasing various ELV (Extra Low Voltage) projects.',
        tech: ['CodeIgniter', 'HTML', 'CSS', 'JS'],
        imageUrl: 'elv-projects',
        liveLink: '#',
      },
      {
        title: 'Aster Hospitals Website',
        description: 'Developed a large-scale website for Aster Hospitals using Drupal.',
        tech: ['Drupal', 'PHP'],
        imageUrl: 'aster-hospitals',
        liveLink: '#',
      },
      {
        title: 'Aster International Institute for Oncology',
        description: 'Specialized website for Aster\'s oncology institute, built with Drupal.',
        tech: ['Drupal', 'PHP'],
        imageUrl: 'aster-oncology',
        liveLink: '#',
      },
      {
        title: 'Aster Medical Imaging',
        description: 'Website for Aster\'s medical imaging services, featuring AJAX functionalities.',
        tech: ['CodeIgniter 4', 'Bootstrap', 'JS', 'AJAX'],
        imageUrl: 'aster-imaging',
        liveLink: '#',
      },
    ];

    const ProjectsPage = () => {
      const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: (i) => ({
          opacity: 1,
          scale: 1,
          transition: {
            delay: i * 0.1,
            duration: 0.5,
            type: 'spring',
            stiffness: 100,
          },
        }),
      };

      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
        >
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              My <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of projects I've worked on, showcasing my skills and experience.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.custom
                key={project.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -5 }}
              >
                <Card className="h-full flex flex-col overflow-hidden group">
                  <div className="relative h-48 bg-muted overflow-hidden">
                    <img 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                     src="https://images.unsplash.com/photo-1632998772668-afc7ae2bc054" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="!text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex items-center mb-3">
                       <Code className="h-5 w-5 text-primary mr-2" />
                       <p className="text-sm font-semibold text-foreground">Key Technologies:</p>
                    </div>
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
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.custom>
            ))}
          </div>
        </motion.div>
      );
    };

    export default ProjectsPage;