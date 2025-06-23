import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { Briefcase, Calendar } from 'lucide-react';

    const experiences = [
      {
        role: 'Software Developer',
        company: 'Apppiness Interactive Pvt. Ltd.',
        duration: 'Aug 2022 – Present',
        description: 'Developed and maintained web applications, collaborated with cross-functional teams, and contributed to all phases of the development lifecycle.',
        logoColor: 'text-blue-500',
      },
      {
        role: 'Jr Software Engineer',
        company: 'Bizmartech Demand Spot LLP',
        duration: 'Sept 2021 – March 2022',
        description: 'Focused on backend development using PHP frameworks, API integration, and database management. Gained experience in agile methodologies.',
        logoColor: 'text-green-500',
      },
      {
        role: 'Intern',
        company: 'eStomi Technologies Pvt. Ltd.',
        duration: 'Dec 2020 – June 2021',
        description: 'Assisted senior developers in various projects, learned about software development best practices, and contributed to coding and testing tasks.',
        logoColor: 'text-purple-500',
      },
    ];

    const ExperiencePage = () => {
      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      };

      const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
          },
        },
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
              Professional <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Experience</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My journey through the tech industry, contributing to impactful projects and growing as a developer.
            </p>
          </header>

          <motion.div
            className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/30 before:to-accent/30 before:md:mx-auto md:before:ml-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative flex items-center md:justify-normal md:odd:flex-row-reverse group"
                variants={itemVariants}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-primary shadow-md md:absolute md:left-1/2 md:-translate-x-1/2 md:group-odd:left-auto md:group-odd:right-1/2 md:group-odd:translate-x-1/2">
                  <Briefcase className={`h-5 w-5 ${exp.logoColor}`} />
                </div>
                <div className="w-full md:w-[calc(50%-4rem)]">
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="!text-xl md:!text-2xl">{exp.role}</CardTitle>
                      <CardDescription className="text-base !text-foreground/80">{exp.company}</CardDescription>
                      <div className="flex items-center text-sm text-muted-foreground pt-1">
                        <Calendar className="mr-2 h-4 w-4" />
                        {exp.duration}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      );
    };

    export default ExperiencePage;