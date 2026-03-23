"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { FadeInWhenVisible } from '@/components/animations/fade-in-when-visible';
import { StaggerContainer, staggerItemVariants } from '@/components/animations/stagger-container';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with advanced features like real-time inventory, payment processing, and order management.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=500',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    category: 'Full-Stack',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'AI Content Generator',
    description: 'An AI-powered application that generates high-quality content for blogs, social media, and marketing campaigns.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500',
    tags: ['Next.js', 'OpenAI API', 'TypeScript', 'Tailwind'],
    category: 'AI',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Task Management Dashboard',
    description: 'A collaborative project management tool with real-time updates, team collaboration features, and advanced analytics.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=500',
    tags: ['React', 'Socket.io', 'MongoDB', 'Express'],
    category: 'Web App',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Weather Forecast App',
    description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=500',
    tags: ['React Native', 'TypeScript', 'API Integration'],
    category: 'Mobile',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website with smooth animations and optimized performance.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    category: 'Web App',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'Blockchain Voting System',
    description: 'A secure and transparent voting system built on blockchain technology with smart contracts.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=500',
    tags: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
    category: 'Blockchain',
    liveUrl: '#',
    githubUrl: '#',
  },
];

const categories = ['All', 'Full-Stack', 'AI', 'Web App', 'Mobile', 'Blockchain'];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light-text">Featured Projects</h2>
            <p className="text-light-text/70 text-lg max-w-2xl mx-auto mb-8">
              Here are some of my recent projects that showcase my skills and passion for development
            </p>
          </div>
        </FadeInWhenVisible>
        
        {/* Category Filter */}
        <FadeInWhenVisible delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <StaggerContainer className="flex flex-wrap justify-center gap-2" staggerDelay={0.05}>
              {categories.map((category) => (
                <motion.div key={category} variants={staggerItemVariants}>
                  <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`min-w-[80px] ${
                    selectedCategory === category 
                      ? 'bg-neon-green text-dark-bg hover:bg-neon-green/90' 
                      : 'border-medium-gray text-light-text hover:border-neon-green hover:text-neon-green'
                  }`}
                >
                  <Filter className="w-3 h-3 mr-1" />
                  {category}
                  </Button>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </FadeInWhenVisible>
        
        {/* Projects Grid */}
        <FadeInWhenVisible delay={0.4}>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={staggerItemVariants}
                whileHover={{ y: -10 }}
                className="group"
                layout
              >
                <Card className="h-full overflow-hidden bg-medium-gray/10 border-medium-gray/30 hover:border-neon-green/50 transition-all duration-300">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-dark-bg/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex gap-2">
                          <Button size="sm" className="bg-neon-green text-dark-bg hover:bg-neon-green/90" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-1" />
                              Live
                            </a>
                          </Button>
                          <Button size="sm" variant="outline" className="border-neon-green text-neon-green hover:bg-neon-green hover:text-dark-bg" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-1" />
                              Code
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-light-text">{project.title}</h3>
                    <p className="text-light-text/70 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} className="text-xs bg-neon-green/10 text-neon-green border-neon-green/30">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}