import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { ArrowRight, Download } from 'lucide-react';
    import { Link } from 'react-router-dom';

    const HomePage = () => {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center min-h-[calc(100vh-10rem)] flex flex-col justify-center items-center"
        >
          <motion.div
            className="absolute inset-0 overflow-hidden -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="block">Hi, I'm Vaibhav Anand Yadav</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mt-2">
              Software Developer
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            A passionate Full-Stack Developer with 3+ years of experience crafting robust web applications and innovative solutions. Expertise in PHP (Laravel, CodeIgniter), React, and AI tools.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-primary-foreground shadow-lg">
              <Link to="/contact">
                Contact Me <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10 shadow-md">
              <a href="/resume.pdf" download="Vaibhav_Anand_Yadav_Resume.pdf">
                View Resume <Download className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
          <div className="mt-16">
            <p className="text-sm text-muted-foreground">Scroll down to explore more</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="mt-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto h-6 w-6 text-muted-foreground"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
            </motion.div>
          </div>
        </motion.div>
      );
    };

    export default HomePage;