import React, { Suspense, lazy } from 'react';
    import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
    import { AnimatePresence, motion } from 'framer-motion';
    import Navbar from '@/components/Navbar';
    import Footer from '@/components/Footer';
    import { Toaster } from '@/components/ui/toaster';
    import { ThemeProvider } from '@/contexts/ThemeContext';

    const HomePage = lazy(() => import('@/pages/HomePage'));
    const AboutPage = lazy(() => import('@/pages/AboutPage'));
    const SkillsPage = lazy(() => import('@/pages/SkillsPage'));
    const ExperiencePage = lazy(() => import('@/pages/ExperiencePage'));
    const ProjectsPage = lazy(() => import('@/pages/ProjectsPage'));
    const EducationPage = lazy(() => import('@/pages/EducationPage'));
    const ContactPage = lazy(() => import('@/pages/ContactPage'));

    const PageLoader = () => (
      <div className="flex justify-center items-center h-screen">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
        />
      </div>
    );

    const AnimatedRoutes = () => {
      const location = useLocation();
      return (
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      );
    };
    
    function App() {
      return (
        <ThemeProvider>
          <Router>
            <div className="flex flex-col min-h-screen bg-background text-foreground">
              <Navbar />
              <main className="flex-grow">
                <Suspense fallback={<PageLoader />}>
                  <AnimatedRoutes />
                </Suspense>
              </main>
              <Footer />
              <Toaster />
            </div>
          </Router>
        </ThemeProvider>
      );
    }

    export default App;