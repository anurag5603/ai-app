"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { FadeInWhenVisible } from '@/components/animations/fade-in-when-visible';
import { StaggerContainer, staggerItemVariants } from '@/components/animations/stagger-container';
import { motion } from 'framer-motion';

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alex.thompson@email.com',
      href: 'mailto:alex.thompson@email.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: 'https://maps.google.com/?q=San+Francisco,CA',
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light-text">Get In Touch</h2>
            <p className="text-light-text/70 text-lg max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you.
            </p>
          </div>
        </FadeInWhenVisible>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <FadeInWhenVisible
              delay={0.2}
              direction="left"
              distance={50}
            >
              <div className="space-y-8">
              <Card className="bg-medium-gray/10 border-medium-gray/30">
                <CardHeader>
                  <CardTitle className="text-light-text">Let's start a conversation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <StaggerContainer className="space-y-6" staggerDelay={0.1}>
                    {contactInfo.map((info, index) => (
                      <motion.a
                      key={info.label}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg bg-medium-gray/20 hover:bg-neon-green/10 border border-medium-gray/30 hover:border-neon-green/50 transition-all group"
                      variants={staggerItemVariants}
                      whileHover={{ x: 5 }}
                      >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-neon-green/10 rounded-lg flex items-center justify-center group-hover:bg-neon-green/20 transition-colors">
                          <info.icon className="w-6 h-6 text-neon-green" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-light-text">{info.label}</p>
                        <p className="text-light-text/70">{info.value}</p>
                      </div>
                      </motion.a>
                    ))}
                  </StaggerContainer>
                  
                  {/* Social Links */}
                  <div className="pt-6">
                    <p className="font-medium mb-4 text-light-text">Follow me on social media</p>
                    <StaggerContainer className="flex gap-4" staggerDelay={0.05}>
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-medium-gray/30 hover:bg-neon-green/20 border border-medium-gray hover:border-neon-green rounded-lg flex items-center justify-center transition-all text-light-text hover:text-neon-green"
                          variants={staggerItemVariants}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <social.icon className="w-5 h-5" />
                          <span className="sr-only">{social.label}</span>
                        </motion.a>
                      ))}
                    </StaggerContainer>
                  </div>
                </CardContent>
              </Card>
              </div>
            </FadeInWhenVisible>
            
            {/* Contact Form */}
            <FadeInWhenVisible
              delay={0.4}
              direction="right"
              distance={50}
            >
              <Card className="bg-medium-gray/10 border-medium-gray/30">
                <CardHeader>
                  <CardTitle className="text-light-text">Send me a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-light-text">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          className="bg-medium-gray/20 border-medium-gray/50 text-light-text placeholder:text-light-text/50 focus:border-neon-green"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-light-text">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          className="bg-medium-gray/20 border-medium-gray/50 text-light-text placeholder:text-light-text/50 focus:border-neon-green"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-light-text">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project..."
                        className="bg-medium-gray/20 border-medium-gray/50 text-light-text placeholder:text-light-text/50 focus:border-neon-green"
                        rows={6}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-neon-green text-dark-bg hover:bg-neon-green/90 font-semibold neon-glow"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </FadeInWhenVisible>
          </div>
      </div>
    </section>
  );
}