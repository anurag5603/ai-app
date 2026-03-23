"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Palette,
  Zap
} from 'lucide-react';
import { FadeInWhenVisible } from '@/components/animations/fade-in-when-visible';
import { StaggerContainer, staggerItemVariants } from '@/components/animations/stagger-container';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code2,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    color: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400',
  },
  {
    title: 'Backend Development',
    icon: Database,
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'],
    color: 'from-green-500/20 to-emerald-500/20',
    iconColor: 'text-green-400',
  },
  {
    title: 'Web Technologies',
    icon: Globe,
    skills: ['REST APIs', 'WebSockets', 'PWAs', 'SEO', 'Performance'],
    color: 'from-purple-500/20 to-violet-500/20',
    iconColor: 'text-purple-400',
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Cross-platform'],
    color: 'from-pink-500/20 to-rose-500/20',
    iconColor: 'text-pink-400',
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Serverless'],
    color: 'from-orange-500/20 to-amber-500/20',
    iconColor: 'text-orange-400',
  },
  {
    title: 'Version Control',
    icon: GitBranch,
    skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Code Review'],
    color: 'from-red-500/20 to-pink-500/20',
    iconColor: 'text-red-400',
  },
  {
    title: 'Design & UX',
    icon: Palette,
    skills: ['Figma', 'Adobe XD', 'UI/UX', 'Prototyping', 'Design Systems'],
    color: 'from-indigo-500/20 to-blue-500/20',
    iconColor: 'text-indigo-400',
  },
  {
    title: 'Performance',
    icon: Zap,
    skills: ['Optimization', 'Lighthouse', 'Core Web Vitals', 'Caching', 'CDN'],
    color: 'from-yellow-500/20 to-orange-500/20',
    iconColor: 'text-yellow-400',
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light-text">Skills & Expertise</h2>
            <p className="text-light-text/70 text-lg max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and areas of expertise
            </p>
          </div>
        </FadeInWhenVisible>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={staggerItemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full bg-medium-gray/10 border-medium-gray/30 hover:border-neon-green/50 transition-all duration-300 overflow-hidden">
                <CardContent className="p-6">
                  <div className={`w-full h-2 bg-gradient-to-r ${category.color} rounded-full mb-4`} />
                  
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-medium-gray/30 rounded-lg flex items-center justify-center mr-3 group-hover:bg-neon-green/10 transition-colors">
                      <category.icon className={`w-6 h-6 ${category.iconColor} group-hover:text-neon-green transition-colors`} />
                    </div>
                    <h3 className="text-lg font-semibold text-light-text group-hover:text-neon-green transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        className="text-sm text-light-text/70 bg-medium-gray/20 px-3 py-1 rounded-full"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}