'use client';

import React, { useRef, useState } from 'react';

interface ParallaxTiltProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

const ParallaxTilt: React.FC<ParallaxTiltProps> = ({ children, className = '', strength = 10 }) => {
  const [transform, setTransform] = useState('');
  const [transition, setTransition] = useState('');
  const elementRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = elementRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / strength;
    const rotateY = (centerX - x) / strength;

    setTransition('');
    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
    );
  };

  const handleMouseLeave = () => {
    setTransition('all 0.5s ease');
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div
      ref={elementRef}
      className={`parallax-tilt ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition,
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxTilt;
