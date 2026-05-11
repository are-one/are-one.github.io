'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterEffectProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  texts,
  speed = 80,
  deleteSpeed = 40,
  pauseTime = 2000,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentText.length) {
            setDisplayText(currentText.substring(0, charIndex + 1));
            setCharIndex((prev) => prev + 1);
          } else {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          if (charIndex > 0) {
            setDisplayText(currentText.substring(0, charIndex - 1));
            setCharIndex((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed,
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentIndex, texts, speed, deleteSpeed, pauseTime]);

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          color: '#6c63ff',
          fontWeight: 'bold',
          marginLeft: '2px',
        }}
      >
        |
      </motion.span>
    </span>
  );
};

export default TypewriterEffect;
