'use client';

import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import RevealOnScroll from '@/animations/RevealOnScroll';
import ParallaxTilt from '@/animations/ParallaxTilt';
import { projects } from '@/data/projects';

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((project) => project.category === filter);

  const categories: string[] = ['all', 'frontend', 'backend', 'fullstack'];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <RevealOnScroll direction="up">
          <h2 className="section-title gradient-text">My Projects</h2>
        </RevealOnScroll>

        <RevealOnScroll direction="up">
          <div className="project-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn magnetic-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <RevealOnScroll key={project.id} direction="up" delay={index * 100}>
              <ParallaxTilt>
                <div
                  className="project-card"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div
                      className="project-overlay"
                      style={{
                        background: project.gradient,
                        opacity: hoveredProject === project.id ? 1 : 0,
                      }}
                    >
                      <a href={project.github} className="overlay-link">
                        <FaGithub />
                      </a>
                      <a href={project.live} className="overlay-link">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ParallaxTilt>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
