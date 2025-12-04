// app/components/Hero.tsx
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

// Define proper TypeScript types for animations
type AnimationVariants = {
  hidden: {
    opacity?: number;
    y?: number;
    scale?: number;
    rotateY?: number;
  };
  visible: {
    opacity?: number;
    y?: number;
    scale?: number;
    rotateY?: number;
    transition: {
      duration?: number;
      delay?: number;
      delayChildren?: number;
      staggerChildren?: number;
      ease?: string;
      type?: string;
      stiffness?: number;
    };
  };
  hover?: {
    scale?: number;
    rotateY?: number;
    transition: {
      duration?: number;
    };
  };
};

export default function Hero() {
  const profileRef = useRef(null);

  // Animation variants with proper typing
  const containerVariants: AnimationVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: AnimationVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const profileVariants: AnimationVariants = {
    hidden: { scale: 0, rotateY: 180 },
    visible: {
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.05,
      rotateY: 10,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <>  </>
  );
}