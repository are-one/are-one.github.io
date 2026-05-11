'use client';

import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  delay?: number;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  direction = 'up',
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return 'translateY(50px)';
      case 'down':
        return 'translateY(-50px)';
      case 'left':
        return 'translateX(50px)';
      case 'right':
        return 'translateX(-50px)';
      case 'scale':
        return 'scale(0.8)';
      default:
        return 'translateY(50px)';
    }
  };

  return (
    <div
      ref={elementRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : getTransform(),
        transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1)',
      }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
