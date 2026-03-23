"use client"

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FadeInWhenVisible } from '@/components/animations/fade-in-when-visible';
import { StaggerContainer, staggerItemVariants } from '@/components/animations/stagger-container';
import { AnimatedCounter } from '@/components/animations/animated-counter';
import { motion } from 'framer-motion';

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
  'MongoDB', 'AWS', 'Docker', 'Tailwind CSS', 'Framer Motion', 'GraphQL'
];

const stats = [
  { number: 5, suffix: '+', label: 'Years Experience' },
  { number: 50, suffix: '+', label: 'Projects Completed' },
  { number: 20, suffix: '+', label: 'Happy Clients' },
  { number: 100, suffix: '%', label: 'Client Satisfaction' },
];
export function AboutSection() {

  return (
    <section id="about" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light-text">About Me</h2>
            <p className="text-light-text/70 text-lg max-w-2xl mx-auto">
              Get to know more about who I am, what I do, and what technologies I'm working with
            </p>
          </div>
        </FadeInWhenVisible>
        
        {/* Stats Section */}
        <FadeInWhenVisible delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-neon-green mb-2">
                  <AnimatedCounter
                    from={0}
                    to={stat.number}
                    suffix={stat.suffix}
                    duration={2 + index * 0.2}
                  />
                </div>
                <p className="text-light-text/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeInWhenVisible>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInWhenVisible
              delay={0.3}
              direction="left"
              distance={50}
            >
              <Card className="p-6 bg-medium-gray/10 border-medium-gray/30">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-semibold mb-4 text-light-text">Get to know me!</h3>
                  <div className="space-y-4 text-light-text/70">
                    <p>
                      I'm a <strong className="text-neon-green">Full-Stack Developer</strong> passionate about 
                      building exceptional digital experiences that live on the internet. I focus on creating 
                      solutions that are not only functional but also provide engaging user experiences.
                    </p>
                    <p>
                      With over 5 years of experience in web development, I've worked on a diverse range of 
                      projects from small business websites to large-scale enterprise applications. I enjoy 
                      the problem-solving aspect of development and love learning new technologies.
                    </p>
                    <p>
                      When I'm not coding, you can find me exploring new coffee shops, hiking nature trails, 
                      or contributing to open-source projects. I believe in continuous learning and sharing 
                      knowledge with the developer community.
                    </p>
                  </div>
                  <motion.div className="mt-6">
                    <motion.button
                      className="text-neon-green hover:text-neon-green/80 font-medium"
                      whileHover={{ x: 5 }}
                      onClick={() => {
                        const element = document.querySelector('#contact');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Contact me →
                    </motion.button>
                  </motion.div>
                </CardContent>
              </Card>
            </FadeInWhenVisible>
            
            <FadeInWhenVisible
              delay={0.5}
              direction="right"
              distance={50}
            >
              <Card className="p-6 bg-medium-gray/10 border-medium-gray/30">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-semibold mb-4 text-light-text">My Skills</h3>
                  <p className="text-light-text/70 mb-6">
                    Here are the technologies and tools I work with regularly:
                  </p>
                  <StaggerContainer className="flex flex-wrap gap-2" staggerDelay={0.05}>
                    {techStack.map((tech, index) => (
                      <motion.div
                        key={tech}
                        variants={staggerItemVariants}
                      >
                        <Badge 
                          variant="secondary" 
                          className="text-sm py-1 px-3 bg-neon-green/10 text-neon-green border-neon-green/30 hover:bg-neon-green/20"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </StaggerContainer>
                </CardContent>
              </Card>
            </FadeInWhenVisible>
          </div>
      </div>
    </section>
  );
}