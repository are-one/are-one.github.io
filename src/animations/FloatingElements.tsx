'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElement {
  icon: string;
  size: number;
  duration: number;
  delay: number;
  x: string;
  y: string;
}

const FloatingElements: React.FC = () => {
  const elements: FloatingElement[] = [
    { icon: '⚛️', size: 30, duration: 3, delay: 0, x: '10%', y: '20%' },
    { icon: '🚀', size: 40, duration: 4, delay: 1, x: '80%', y: '15%' },
    { icon: '💻', size: 35, duration: 3.5, delay: 0.5, x: '20%', y: '70%' },
    { icon: '🎨', size: 25, duration: 4.5, delay: 1.5, x: '70%', y: '75%' },
    { icon: '⚡', size: 20, duration: 3.2, delay: 2, x: '50%', y: '10%' },
    { icon: '🔧', size: 28, duration: 3.8, delay: 0.8, x: '90%', y: '50%' },
  ];

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none' as const,
        zIndex: 0,
      }}
    >
      {elements.map((el, index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            left: el.x,
            top: el.y,
            fontSize: el.size,
            opacity: 0.1,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {el.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
