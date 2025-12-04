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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br md:px-12 from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants as any}
        >
          {/* Left Side - Text Content */}
          <div className="text-left">
            <motion.div variants={itemVariants as any}>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4 text-lg">
                👋 Hello, I'm
              </p>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              variants={itemVariants as any}
            >
              Sultanum{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Mobin
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              variants={itemVariants as any}
            >
              Full Stack Developer & passionate about creating{' '}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                efficient, scalable web applications
              </span>. I love turning complex problems into simple, beautiful designs.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              variants={itemVariants as any}
            >
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
              <a href="#projects">View My Projects</a>
              </motion.button>
              <motion.button
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/documents/Sultan-CV.pdf" download="Sultan-CV.pdf"> 📄 Download CV </Link>
              </motion.button>
            </motion.div>

            {/* Tech Stack Preview */}
            <motion.div
              className="flex items-center gap-4 text-gray-500 dark:text-gray-400"
              variants={itemVariants as any}
            >
              <span>Tech Stack:</span>
              <div className="flex gap-2">
                {['PHP', 'Laravel', 'NestJS', 'Python', 'NextJS'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="bg-white dark:bg-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200 dark:border-gray-600"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.1, color: "#3B82F6" }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side - Profile Picture with 3D Effects */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              className="relative"
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={profileVariants as any}
            >
              {/* Main Profile Container */}
              <motion.div
                className="relative w-96 h-96 lg:w-[500] lg:h-[550] rounded-2xl overflow-hidden"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl"></div>

                {/* 3D Container Effect */}
                <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-xl shadow-2xl">
                  {/* Profile Image Placeholder */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      {/* <div className=" bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-6xl font-bold shadow-2xl border-4 border-white dark:border-gray-800"> */}
                        <div className="relative h-72 w-72 md:w-96 md:h-96 bg-gradient-to-tr from-black to-purple-400 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                          <img
                            src="/profile.png"
                            alt="SM"
                          // className="w-full h-full object-cover"
                          />
                        {/* </div> */}
                      </div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="text-gray-600 dark:text-gray-300"
                      >
                        <p className="font-semibold text-lg">Sultanum Mobin</p>
                        <p className="text-sm">Full Stack Developer</p>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-400 rounded-full opacity-20"
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, -180, -360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </motion.div>

              {/* Background decorative elements */}
              <motion.div
                className="absolute -z-10 top-10 -right-10 w-32 h-32 bg-blue-300 dark:bg-blue-700 rounded-full opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
        </motion.div>
      </div>
    </section>
  );
}