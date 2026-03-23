"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { FadeInWhenVisible } from '@/components/animations/fade-in-when-visible';

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-bg">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 via-transparent to-neon-green/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <FadeInWhenVisible
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FadeInWhenVisible
              className="text-neon-green font-medium tracking-wide uppercase text-sm mb-4 text-neon-glow"
              delay={0.2}
            >
              Hello, I'm
            </FadeInWhenVisible>
            
            <FadeInWhenVisible
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-light-text mb-6"
              delay={0.4}
              duration={0.8}
            >
              Anurag Pal
            </FadeInWhenVisible>
            
            <FadeInWhenVisible
              className="text-xl md:text-2xl lg:text-3xl text-light-text/70 mb-8 max-w-3xl mx-auto"
              delay={0.6}
              duration={0.8}
            >
              Full-Stack Developer crafting exceptional digital experiences with modern technologies
            </FadeInWhenVisible>
            
            <FadeInWhenVisible
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              delay={0.8}
              duration={0.8}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('#projects')}
                className="min-w-[160px] bg-neon-green text-dark-bg hover:bg-neon-green/90 font-semibold neon-glow"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('#contact')}
                className="min-w-[160px] border-neon-green text-neon-green hover:bg-neon-green hover:text-dark-bg font-semibold"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </FadeInWhenVisible>
            
            <FadeInWhenVisible
              className="flex justify-center space-x-6"
              delay={1.0}
              duration={0.8}
            >
              {[
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Download, href: '#', label: 'Resume' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-medium-gray/30 hover:bg-neon-green/20 border border-medium-gray hover:border-neon-green transition-all text-light-text hover:text-neon-green"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </FadeInWhenVisible>
          </FadeInWhenVisible>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <FadeInWhenVisible
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        delay={1.2}
      >
        <motion.div
          className="w-6 h-10 border-2 border-neon-green/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-neon-green rounded-full mt-2"
            animate={{ height: [12, 6, 12] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </FadeInWhenVisible>
    </section>
  );
}