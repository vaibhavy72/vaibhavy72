import React from 'react';
    import { Linkedin, Github, Mail, Phone, FileText } from 'lucide-react';

    const Footer = () => {
      const currentYear = new Date().getFullYear();
      return (
        <footer className="bg-secondary text-secondary-foreground py-12 mt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center space-x-6 mb-6">
              <a href="https://www.linkedin.com/in/vaibhavy72" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://vaibhavy72.web.app" target="_blank" rel="noopener noreferrer" aria-label="Portfolio Website" className="hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="mailto:vaibhavy7227@gmail.com" aria-label="Email Vaibhav" className="hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
              <a href="tel:+919449231009" aria-label="Call Vaibhav" className="hover:text-primary transition-colors">
                <Phone size={24} />
              </a>
              {/* Placeholder for resume download */}
              <a href="/resume.pdf" download="Vaibhav_Anand_Yadav_Resume.pdf" aria-label="Download Resume" className="hover:text-primary transition-colors">
                <FileText size={24} />
              </a>
            </div>
            <p className="text-sm">
              &copy; {currentYear} Vaibhav Anand Yadav. All rights reserved.
            </p>
            <p className="text-xs mt-2">
              Built with React, TailwindCSS, and Framer Motion. Hosted on Hostinger.
            </p>
          </div>
        </footer>
      );
    };

    export default Footer;