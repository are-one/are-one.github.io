'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'rotate';
  delay?: number;
  duration?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const directionVariants = {
    up: { y: 60, opacity: 0 },
    down: { y: -60, opacity: 0 },
    left: { x: 60, opacity: 0 },
    right: { x: -60, opacity: 0 },
    scale: { scale: 0.8, opacity: 0 },
    rotate: { rotate: -10, scale: 0.9, opacity: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={directionVariants[direction]}
      animate={inView ? { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 } : {}}
      transition={{
        duration,
        delay,
        ease: [0.17, 0.55, 0.55, 1] as [number, number, number, number],
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
