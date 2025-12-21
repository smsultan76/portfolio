// app/nfc-redirect/components/Background.tsx
"use client";

import { useEffect, useState } from 'react';

interface BackgroundProps {
  type: 'gradient' | 'particles' | 'none';
  enabled: boolean;
  mousePosition: { x: number; y: number };
}

export default function Background({ type, enabled, mousePosition }: BackgroundProps) {
  const [particles, setParticles] = useState<Array<{x: number, y: number, size: number}>>([]);

  useEffect(() => {
    if (type === 'particles' && enabled) {
      // Create initial particles
      const newParticles = Array.from({ length: 50 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
      }));
      setParticles(newParticles);
    }
  }, [type, enabled]);

  if (!enabled || type === 'none') {
    return null;
  }

  if (type === 'gradient') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900"
          style={{
            transform: `translate(
              ${(mousePosition.x / window.innerWidth - 0.5) * 20}px,
              ${(mousePosition.y / window.innerHeight - 0.5) * 20}px
            )`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.2),transparent_50%)]" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-purple-400/30 to-pink-400/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            filter: `blur(${particle.size / 2}px)`,
            transform: `translate(
              ${(mousePosition.x / window.innerWidth - 0.5) * particle.size * 10}px,
              ${(mousePosition.y / window.innerHeight - 0.5) * particle.size * 10}px
            )`,
            transition: 'transform 0.5s ease-out',
          }}
        />
      ))}
    </div>
  );
}