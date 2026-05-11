'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TextRevealProps {
  children: React.ReactNode;
  delay?: number;
}

const TextReveal: React.FC<TextRevealProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.17, 0.55, 0.55, 1] as [number, number, number, number],
      }}
      style={{ overflow: 'hidden' }}
    >
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.6,
          delay: delay + 0.2,
          ease: [0.17, 0.55, 0.55, 1] as [number, number, number, number],
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default TextReveal;
