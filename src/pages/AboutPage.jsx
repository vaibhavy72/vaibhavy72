import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { User, Brain, Briefcase, Code, CheckCircle } from 'lucide-react';

    const AboutPage = () => {
      const skills = [
        "3+ years in web development",
        "Expertise in Laravel, CodeIgniter, PHP",
        "Proficient with AI tools (ChatGPT, GitHub Copilot)",
        "Strong problem-solving and leadership",
        "Full-stack capabilities (React, JS, Bootstrap, MySQL, MongoDB)",
        "CMS: WordPress, Drupal"
      ];

      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
        >
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Me</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A dedicated and results-oriented Software Developer with a passion for creating efficient and scalable web solutions.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-primary/10 to-accent/10">
                  <div className="flex items-center space-x-3">
                    <User className="h-10 w-10 text-primary" />
                    <CardTitle>Vaibhav Anand Yadav</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    I am a Software Developer with over three years of hands-on experience in designing, developing, and deploying web applications. My journey in tech has equipped me with a versatile skill set, spanning both front-end and back-end technologies.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I thrive in collaborative environments and am adept at leveraging modern development practices and tools, including AI-powered assistants like ChatGPT and GitHub Copilot, to enhance productivity and code quality. My core strengths lie in problem-solving, leading development efforts, and delivering high-quality software that meets user needs and business objectives.
                  </p>
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
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-8 w-8 text-accent" />
                    <CardTitle>Key Highlights</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {skills.map((skill, index) => (
                      <li key={index} className="flex items-start">
                        <Code className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <h2 className="text-2xl font-semibold mb-4">My Philosophy</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              "I believe in continuous learning and adapting to new technologies to build innovative and impactful software. My goal is to contribute to projects that not only solve complex problems but also provide a seamless and enjoyable user experience."
            </p>
          </motion.div>
        </motion.div>
      );
    };

    export default AboutPage;