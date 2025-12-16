import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Code, Brain, BrainCircuit, Network } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.Tech CSE @ IIIT Sri City",
      detail: "CGPA: 8.08"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack applications",
      detail: "React, Node.js, Express, MongoDB, etc."
    },
    {
      icon: Network,
      title: "AIML",
      description: "Machine Learning & Deep Learning",
      detail: "Python frameworks like TensorFlow, PyTorch, Scikit-learn, etc."
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description: "Analytical thinking",
      detail: "Creative solutions"
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
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
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a passionate Computer Science student at IIIT Sri City with a strong foundation in 
              web development and cloud technologies. I love solving complex problems and building 
              innovative solutions that make a difference.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="magnetic"
              >
                <Card className="glass glow-accent h-full">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{item.description}</p>
                    <p className="text-xs text-accent font-medium">{item.detail}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 glow-accent"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Core Strengths</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="font-semibold text-accent mb-3">Technical Skills</h4>
                <p className="text-sm text-muted-foreground">
                  Full-stack development with modern technologies, database design, 
                  and cloud infrastructure management.
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-accent mb-3">Problem Solving</h4>
                <p className="text-sm text-muted-foreground">
                  Analytical approach to complex challenges with creative and 
                  efficient solution development.
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-accent mb-3">Communication</h4>
                <p className="text-sm text-muted-foreground">
                  Strong presentation skills and collaborative mindset for 
                  effective team coordination.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;