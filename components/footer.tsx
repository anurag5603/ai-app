"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-bg border-t border-medium-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={scrollToTop}
              className="font-bold text-xl text-light-text hover:text-neon-green transition-colors"
            >
              Alex<span className="text-neon-green">.</span>
            </button>
          </motion.div>
          
          <motion.div
            className="flex items-center text-light-text/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span>Made with</span>
            <motion.div
              className="mx-1"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart className="w-4 h-4 text-neon-green fill-current" />
            </motion.div>
            <span>by Alex Thompson</span>
          </motion.div>
          
          <motion.div
            className="mt-4 md:mt-0 text-light-text/70 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            © 2024 All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
}