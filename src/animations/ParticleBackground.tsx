'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  targetX: number;
  targetY: number;
  connections: Array<{ particle: Particle; distance: number; opacity: number }>;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Particle[] = [];
    const mousePosition = { x: 0, y: 0 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.x = e.clientX;
      mousePosition.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const createParticle = (): Particle => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        color: `hsl(${Math.random() * 60 + 230}, 70%, 60%)`,
        targetX: 0,
        targetY: 0,
        connections: [],
      };
    };

    const init = () => {
      particles.length = 0;
      const particleCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 8000));
      for (let i = 0; i < particleCount; i++) {
        const particle = createParticle();
        particle.targetX = particle.x;
        particle.targetY = particle.y;
        particles.push(particle);
      }
    };

    const updateParticle = (particle: Particle) => {
      const dx = mousePosition.x - particle.x;
      const dy = mousePosition.y - particle.y;
      const distanceToMouse = Math.sqrt(dx * dx + dy * dy);

      if (distanceToMouse < 200) {
        const force = (200 - distanceToMouse) / 200;
        particle.targetX = particle.x - dx * force * 0.02;
        particle.targetY = particle.y - dy * force * 0.02;
      } else {
        particle.targetX += particle.speedX;
        particle.targetY += particle.speedY;
      }

      particle.x += (particle.targetX - particle.x) * 0.1;
      particle.y += (particle.targetY - particle.y) * 0.1;

      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;
    };

    const drawParticle = (particle: Particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.globalAlpha = particle.opacity;
      ctx.fill();
      ctx.globalAlpha = 1;
    };

    const findConnections = (particle: Particle) => {
      particle.connections = [];
      particles.forEach((p) => {
        if (p === particle) return;
        const dx = particle.x - p.x;
        const dy = particle.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          particle.connections.push({
            particle: p,
            distance,
            opacity: 0.15 * (1 - distance / 150),
          });
        }
      });
    };

    const drawConnections = (particle: Particle) => {
      particle.connections.forEach((connection) => {
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(connection.particle.x, connection.particle.y);
        ctx.strokeStyle = particle.color;
        ctx.globalAlpha = connection.opacity;
        ctx.lineWidth = 0.5;
        ctx.stroke();
        ctx.globalAlpha = 1;
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#0a192f');
      gradient.addColorStop(0.5, '#112240');
      gradient.addColorStop(1, '#0a192f');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        updateParticle(particle);
        findConnections(particle);
      });

      particles.forEach((particle) => {
        drawConnections(particle);
        drawParticle(particle);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ParticleBackground;
