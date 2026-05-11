'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticHoverProps {
  children: React.ReactNode;
  strength?: number;
}

const MagneticHover: React.FC<MagneticHoverProps> = ({ children, strength = 0.5 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      style={{ display: 'inline-block', cursor: 'pointer' }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticHover;
