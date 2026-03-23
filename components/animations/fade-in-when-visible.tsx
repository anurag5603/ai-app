"use client"

import React from 'react';
import { motion } from 'framer-motion';

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  className?: string;
  once?: boolean;
}

export function FadeInWhenVisible({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 40,
  className = '',
  once = true,
}: FadeInWhenVisibleProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance };
      case 'down':
        return { y: -distance };
      case 'left':
        return { x: distance };
      case 'right':
        return { x: -distance };
      default:
        return { y: distance };
    }
  };

  const getFinalPosition = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { y: 0 };
      case 'left':
      case 'right':
        return { x: 0 };
      default:
        return { y: 0 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...getInitialPosition(),
      }}
      whileInView={{
        opacity: 1,
        ...getFinalPosition(),
      }}
      viewport={{ once, margin: '-100px' }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth animation
      }}
    >
      {children}
    </motion.div>
  );
}