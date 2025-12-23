"use client";

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  angle: number;
  distance: number;
}

interface StarBackgroundProps {
  starCount?: number;
  mouseFollowStrength?: number;
}

export default function StarBackground({ 
  starCount = 100,
  mouseFollowStrength = 0.3
}: StarBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize stars
    const initializeStars = () => {
      const stars: Star[] = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.5 + 0.2,
          opacity: Math.random() * 0.5 + 0.2,
          angle: Math.random() * Math.PI * 2,
          distance: Math.random() * 50 + 20,
        });
      }
      starsRef.current = stars;
    };

    initializeStars();

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      starsRef.current.forEach((star) => {
        // Calculate mouse influence
        const dx = mouseX - star.x;
        const dy = mouseY - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;

        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * mouseFollowStrength;
          star.x += dx * force * 0.1;
          star.y += dy * force * 0.1;
        }

        // Orbital motion
        star.angle += 0.005 * star.speed;
        const orbitX = Math.cos(star.angle) * star.distance;
        const orbitY = Math.sin(star.angle) * star.distance;

        // Draw star with glow effect
        ctx.beginPath();
        
        // Outer glow
        const gradient = ctx.createRadialGradient(
          star.x + orbitX, star.y + orbitY, 0,
          star.x + orbitX, star.y + orbitY, star.size * 3
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.arc(star.x + orbitX, star.y + orbitY, star.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Star core
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity + 0.3})`;
        ctx.arc(star.x + orbitX, star.y + orbitY, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Twinkle effect
        star.opacity += (Math.random() - 0.5) * 0.02;
        star.opacity = Math.max(0.2, Math.min(0.7, star.opacity));

        // Boundary check
        if (star.x < -50) star.x = canvas.width + 50;
        if (star.x > canvas.width + 50) star.x = -50;
        if (star.y < -50) star.y = canvas.height + 50;
        if (star.y > canvas.height + 50) star.y = -50;
      });

      // Draw connecting lines between nearby stars
      for (let i = 0; i < starsRef.current.length; i++) {
        for (let j = i + 1; j < starsRef.current.length; j++) {
          const star1 = starsRef.current[i];
          const star2 = starsRef.current[j];
          const dx = (star1.x + Math.cos(star1.angle) * star1.distance) - 
                     (star2.x + Math.cos(star2.angle) * star2.distance);
          const dy = (star1.y + Math.sin(star1.angle) * star1.distance) - 
                     (star2.y + Math.sin(star2.angle) * star2.distance);
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(147, 51, 234, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(
              star1.x + Math.cos(star1.angle) * star1.distance,
              star1.y + Math.sin(star1.angle) * star1.distance
            );
            ctx.lineTo(
              star2.x + Math.cos(star2.angle) * star2.distance,
              star2.y + Math.sin(star2.angle) * star2.distance
            );
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [starCount, mouseFollowStrength]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}