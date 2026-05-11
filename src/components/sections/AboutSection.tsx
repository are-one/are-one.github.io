'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaDownload, FaUser } from 'react-icons/fa';
import RevealOnScroll from '@/animations/RevealOnScroll';
import { profile } from '@/data/profile';

interface StatProps {
  number: string;
  label: string;
}

const stats: StatProps[] = [
  { number: '5+', label: 'Years Experience' },
  { number: '50+', label: 'Projects Completed' },
  { number: '30+', label: 'Happy Clients' },
  { number: '10+', label: 'Awards Won' },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <RevealOnScroll direction="up">
          <h2 className="section-title gradient-text">About Me</h2>
        </RevealOnScroll>

        <div className="about-content">
          <div className="about-text">
            <RevealOnScroll direction="right">
              <h3>A passionate developer who loves to create</h3>
              <p>
                I'm a Full Stack Developer with a passion for building beautiful, functional, and
                user-friendly web applications. With expertise in React, Node.js, and modern web
                technologies, I bring ideas to life through clean code and innovative solutions.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge through technical writing.
              </p>

              <div className="about-details">
                <div className="detail-item">
                  <FaUser className="detail-icon" />
                  <div>
                    <h4>Name</h4>
                    <p>{profile.name}</p>
                  </div>
                </div>
                <div className="detail-item">
                  <FaUser className="detail-icon" />
                  <div>
                    <h4>Email</h4>
                    <p>{profile.email}</p>
                  </div>
                </div>
                <div className="detail-item">
                  <FaUser className="detail-icon" />
                  <div>
                    <h4>Location</h4>
                    <p>{profile.location}</p>
                  </div>
                </div>
              </div>

              <a href="#" className="btn btn-primary">
                <FaDownload /> Download CV
              </a>
            </RevealOnScroll>
          </div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <RevealOnScroll key={index} direction="left" delay={index * 100}>
                <div className="stat-card">
                  <h3>
                    <AnimatedNumber number={stat.number} />
                  </h3>
                  <p>{stat.label}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface AnimatedNumberProps {
  number: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const numericValue = parseInt(number);
    const duration = 2000;
    const steps = 50;
    const increment = numericValue / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current += increment;

      if (step >= steps) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, number]);

  return (
    <span ref={elementRef}>
      {count}
      {number.includes('+') ? '+' : ''}
    </span>
  );
};

export default AboutSection;
