'use client';

import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaFigma,
  FaLaravel,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiMariadb,
  SiMysql,
  SiTailwindcss,
  SiNextdotjs,
  SiN8N,
} from 'react-icons/si';
import RevealOnScroll from '@/animations/RevealOnScroll';
import ParallaxTilt from '@/animations/ParallaxTilt';
import { skills } from '@/data/skills';

const iconMap: Record<string, React.ReactNode> = {
  FaReact: <FaReact />,
  SiNextdotjs: <SiNextdotjs />,
  SiTypescript: <SiTypescript />,
  SiJavascript: <SiJavascript />,
  FaNodeJs: <FaNodeJs />,
  FaPython: <FaPython />,
  SiMongodb: <SiMongodb />,
  SiPostgresql: <SiPostgresql />,
  SiTailwindcss: <SiTailwindcss />,
  FaDocker: <FaDocker />,
  FaGitAlt: <FaGitAlt />,
  FaFigma: <FaFigma />,
  FaLaravel: <FaLaravel />,
  SiMysql: <SiMysql />,
  SiMariadb: <SiMariadb />,
  SiN8N: <SiN8N />,
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <RevealOnScroll direction="up">
          <h2 className="section-title gradient-text">My Skills</h2>
        </RevealOnScroll>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <RevealOnScroll key={index} direction="scale" delay={index * 100}>
              <ParallaxTilt>
                <div
                  className="skill-card hover-glow"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = skill.color;
                    e.currentTarget.style.boxShadow = `0 10px 30px ${skill.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="skill-icon pulse-animation" style={{ color: skill.color }}>
                    {iconMap[skill.icon]}
                  </div>
                  <h3>{skill.name}</h3>
                  <div className="skill-bar">
                    <div
                      className="skill-progress shimmer"
                      style={{
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                      }}
                    ></div>
                  </div>
                  <span className="skill-percentage" style={{ color: skill.color }}>
                    {skill.level}%
                  </span>
                </div>
              </ParallaxTilt>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
