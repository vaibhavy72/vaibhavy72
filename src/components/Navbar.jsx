import React, { useState } from 'react';
    import { Link, NavLink } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Menu, X, Code } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import { ThemeToggle } from '@/components/ThemeToggle';

    const navLinks = [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About' },
      { to: '/skills', label: 'Skills' },
      { to: '/experience', label: 'Experience' },
      { to: '/projects', label: 'Projects' },
      { to: '/education', label: 'Education' },
      { to: '/contact', label: 'Contact' },
    ];

    const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);

      const toggleMenu = () => setIsOpen(!isOpen);

      const activeLinkClass = "text-primary font-semibold relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-primary";
      const inactiveLinkClass = "hover:text-primary/80 transition-colors";

      return (
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-primary">
                {/* <Code className="h-8 w-8" /> */}
                <span>Vaibhav Yadav</span>
              </Link>
              <div className="hidden md:flex items-center space-x-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}
                  >
                    {link.label}
                  </NavLink>
                ))}
                <ThemeToggle />
              </div>
              <div className="md:hidden flex items-center">
                <ThemeToggle />
                <Button variant="ghost" size="icon" onClick={toggleMenu} className="ml-2">
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </div>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-background/95 shadow-lg absolute w-full"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => 
                      `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-secondary'}`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </nav>
      );
    };

    export default Navbar;