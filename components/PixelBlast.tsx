'use client';

import { useEffect, useRef } from 'react';

interface PixelBlastProps {
  className?: string;
}

export default function PixelBlast({ className = '' }: PixelBlastProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: Array<{
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }> = [];

    const mouse = { x: 0, y: 0, radius: 150 };
    const colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#ec4899'];

    // Create grid of particles
    const gap = 40;
    for (let y = 0; y < height; y += gap) {
      for (let x = 0; x < width; x += gap) {
        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          size: 2,
          speedX: 0,
          speedY: 0,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = mouse.radius;
        const force = (maxDistance - distance) / maxDistance;

        if (distance < mouse.radius) {
          particle.speedX -= forceDirectionX * force * 3;
          particle.speedY -= forceDirectionY * force * 3;
        } else {
          particle.speedX += (particle.baseX - particle.x) * 0.05;
          particle.speedY += (particle.baseY - particle.y) * 0.05;
        }

        particle.speedX *= 0.85;
        particle.speedY *= 0.85;
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Draw particle
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = 0.6;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
