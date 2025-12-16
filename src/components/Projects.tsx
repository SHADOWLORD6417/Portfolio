import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      title: "WanderLust",
      description: "Full-stack rental application with JWT authentication, MongoDB integration, and file upload functionality.",
      technologies: ["React", "Node.js", "MongoDB", "JWT", "Express"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Expense Tracker",
      description: "Visual finance logging application with advanced filtering, categorization, and analytics dashboard.",
      technologies: ["React", "Chart.js", "Local Storage", "CSS3"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Instagram Real vs Fake Predictor",
      description: "Machine learning model using SVM algorithm to classify authentic vs fake Instagram accounts.",
      technologies: ["Python", "SVM", "Scikit-learn", "Pandas", "NumPy"],
      github: "https://github.com",
      live: null
    },
    {
      title: "StudySphere",
      description: "Comprehensive online learning platform with course management, progress tracking, and interactive features.",
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "ComplexOne",
      description: "Shopping mall website with booking system, product catalog, and modern user interface design.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A collection of projects showcasing my skills in web development, 
              machine learning, and problem-solving.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="magnetic"
              >
                <Card className="glass glow-accent h-full group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gradient">{project.title}</h3>
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          asChild
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                        {project.live && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                            asChild
                          >
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-gradient-primary text-white rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;