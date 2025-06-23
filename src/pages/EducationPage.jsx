import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { GraduationCap, MapPin } from 'lucide-react';

    const educationData = [
      {
        degree: 'Master of Computer Applications (MCA)',
        institution: 'Bharati Vidyapeeth Deemed University',
        location: 'Pune',
        iconColor: 'text-primary',
      },
      {
        degree: 'Bachelor of Computer Applications (BCA)',
        institution: 'Rani Channamma University',
        location: 'Belgaum',
        iconColor: 'text-accent',
      },
    ];

    const languages = ['English', 'Hindi', 'Marathi', 'Kannada'];

    const EducationPage = () => {
      const cardVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: (i) => ({
          opacity: 1,
          x: 0,
          transition: {
            delay: i * 0.2,
            duration: 0.6,
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
              Education & <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Languages</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My academic background and linguistic capabilities.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {educationData.map((edu, index) => (
              <motion.custom
                key={edu.degree}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 ${edu.iconColor}`}>
                        <GraduationCap size={28} />
                      </div>
                      <div>
                        <CardTitle className="!text-xl md:!text-2xl">{edu.degree}</CardTitle>
                        <CardDescription className="text-base !text-foreground/80">{edu.institution}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="mr-2 h-5 w-5" />
                      <span>{edu.location}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.custom>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="!text-2xl md:!text-3xl text-center">Languages Known</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-4">
                  {languages.map((lang) => (
                    <motion.span
                      key={lang}
                      className="px-6 py-3 bg-primary/10 text-primary font-medium rounded-lg shadow-sm text-lg"
                      whileHover={{ scale: 1.1, backgroundColor: 'hsl(var(--primary)/0.2)' }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {lang}
                    </motion.span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      );
    };

    export default EducationPage;