'use client';

import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaDownload, FaLanguage } from 'react-icons/fa';
import RevealOnScroll from '@/animations/RevealOnScroll';

interface StatProps {
  number: string;
  label: string;
}

type Language = 'en' | 'id';

interface AboutContent {
  title: string;
  heading: string;
  paragraphs: string[];
  button: string;
  stats: StatProps[];
}

const aboutContent: Record<Language, AboutContent> = {
  en: {
    title: 'About Me',
    heading: 'A passionate developer who loves to create',
    paragraphs: [
      "I'm a Software Developer passionate about building dynamic and user-friendly web applications. I have experience with Laravel, PHP, JavaScript, React, Next.js, MySQL, and modern web technologies, focusing on creating efficient and scalable solutions.",
      'I enjoy learning new technologies, solving real-world problems, and continuously improving my skills as a software engineer.',
    ],
    button: 'Download CV',
    stats: [
      { number: '5+', label: 'Years Experience' },
      { number: '50+', label: 'Projects Completed' },
      { number: '30+', label: 'Happy Clients' },
      { number: '10+', label: 'Awards Won' },
    ],
  },
  id: {
    title: 'Tentang Saya',
    heading: 'Developer yang antusias membangun solusi digital',
    paragraphs: [
      'Saya adalah seorang Software Developer yang memiliki passion dalam membangun aplikasi web yang dinamis dan mudah digunakan. Saya memiliki pengalaman menggunakan Laravel, PHP, JavaScript, React, Next.js, MySQL, dan teknologi web modern lainnya dengan fokus pada pembuatan solusi yang efisien dan scalable.',
      'Saya senang mempelajari teknologi baru, menyelesaikan permasalahan di dunia nyata, dan terus meningkatkan kemampuan saya sebagai seorang software engineer.',
    ],
    button: 'Unduh CV',
    stats: [
      { number: '5+', label: 'Tahun Pengalaman' },
      { number: '50+', label: 'Proyek Selesai' },
      { number: '30+', label: 'Klien Puas' },
      { number: '10+', label: 'Penghargaan' },
    ],
  },
};

const randomCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>/{}[]';

const AboutSection: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const content = aboutContent[language];

  return (
    <section id="about" className="about">
      <div className="container">
        <RevealOnScroll direction="up">
          <div className="about-header">
            <h2 className="section-title gradient-text">{content.title}</h2>
            <div className="language-toggle" aria-label="About section language">
              <FaLanguage className="language-icon" aria-hidden="true" />
              {(['en', 'id'] as Language[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`language-option ${language === item ? 'active' : ''}`}
                  onClick={() => setLanguage(item)}
                  aria-pressed={language === item}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <div className="about-content">
          <div className="about-text">
            <RevealOnScroll direction="right">
              <AnimatePresence mode="wait">
                <motion.div
                  key={language}
                  initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -12, filter: 'blur(8px)' }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <h3>
                    <DecryptedText text={content.heading} />
                  </h3>
                  {content.paragraphs.map((paragraph, index) => (
                    <motion.p
                      key={paragraph}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 0.8, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.12 + index * 0.08 }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </motion.div>
              </AnimatePresence>

              <a href="#" className="btn btn-primary">
                <FaDownload /> {content.button}
              </a>
            </RevealOnScroll>
          </div>

          <div className="about-stats">
            {content.stats.map((stat, index) => (
              <RevealOnScroll
                key={`${language}-${stat.label}`}
                direction="left"
                delay={index * 100}
              >
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

interface DecryptedTextProps {
  text: string;
}

const DecryptedText: React.FC<DecryptedTextProps> = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let frame = 0;
    const maxFrames = 24;

    const timer = setInterval(() => {
      frame++;

      setDisplayText(
        text
          .split('')
          .map((character, index) => {
            if (character === ' ') return ' ';
            if (index < (frame / maxFrames) * text.length) return character;

            return randomCharacters[Math.floor(Math.random() * randomCharacters.length)];
          })
          .join(''),
      );

      if (frame >= maxFrames) {
        setDisplayText(text);
        clearInterval(timer);
      }
    }, 26);

    return () => clearInterval(timer);
  }, [text]);

  return <span className="decrypted-text">{displayText}</span>;
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
