import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-gradient">Guntreddy</span>
            <br />
            <span className="text-foreground">Kula Prakash</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Web Developer • Problem Solver • AIML Enthusiast
          </motion.p>

          <motion.div
            className="flex items-center justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="magnetic glass glow-accent"
              asChild
            >
              <a
                href="https://github.com/SHADOWLORD6417"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="magnetic glass glow-accent"
              asChild
            >
              <a
                href="https://linkedin.com/in/guntreddy-kula-prakash"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            </Button>

            <Button
              size="lg"
              className="magnetic bg-gradient-primary hover:opacity-90 text-white"
              asChild
            >
              <a
                href="/KulaResume.pdf"
                download
                className="flex items-center space-x-2"
              >
                <Download className="h-5 w-5" />
                <span>Resume</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;