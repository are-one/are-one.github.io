'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import TextReveal from '@/animations/TextReveal';
import ScrollReveal from '@/animations/ScrollReveal';
import TypewriterEffect from '@/animations/TypewriterEffect';
import MagneticHover from '@/animations/MagneticHover';
import { profile } from '@/data/profile';

const HeroSection: React.FC = () => {
  const roles = ['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Tech Innovator'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-content">
          <ScrollReveal direction="up">
            <TextReveal delay={0}>
              <p className="hero-greeting">👋 Hello, I'm</p>
            </TextReveal>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <TextReveal delay={0.3}>
              <h1 className="hero-name gradient-text-animated">{profile.name}</h1>
            </TextReveal>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <h2 className="hero-title">
              <TypewriterEffect texts={roles} speed={100} deleteSpeed={50} pauseTime={2000} />
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.6}>
            <TextReveal delay={0.8}>
              <p className="hero-description">
                I craft beautiful and functional web experiences with modern technologies.
                Passionate about creating innovative solutions that make a difference.
              </p>
            </TextReveal>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.8}>
            <div className="hero-buttons">
              <MagneticHover strength={0.3}>
                <motion.a
                  href="#projects"
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.a>
              </MagneticHover>

              <MagneticHover strength={0.3}>
                <motion.a
                  href="#contact"
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
              </MagneticHover>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={1}>
            <motion.div className="social-links">
              {profile.socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>
              ))}
            </motion.div>
          </ScrollReveal>
        </div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 1,
            type: 'spring',
            stiffness: 100,
            delay: 0.5,
          }}
        >
          <motion.div
            className="image-container glow-effect"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={profile.avatar}
              alt="Profile"
              className="profile-image"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        className="scroll-down"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FaArrowDown />
      </motion.a>
    </section>
  );
};

export default HeroSection;
