import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Internships from '@/components/Internships';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import MouseTrail from '@/components/MouseTrail';
import Preloader from '@/components/Preloader';
import ScrollToTopArrow from '@/components/ScrollToTopArrow';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>
      
      {!isLoading && (
        <>
          <MouseTrail />
          <Navigation />
          
          <main className="overflow-x-hidden">
            <Hero />
            <About />
            <Projects />
            <Internships />
            <Skills />
            <Contact />
            <ScrollToTopArrow />
          </main>

          <footer className="py-8 text-center text-muted-foreground">
            <div className="container mx-auto px-6">
              <p>&copy; 2024 Guntreddy Kula Prakash. Built with passion and modern web technologies.</p>
            </div>
          </footer>
        </>
      )}
    </>
  );
};

export default Portfolio;