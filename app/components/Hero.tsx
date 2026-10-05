// app/components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCode,
  FiLayers,
  FiSmartphone,
  FiX,
} from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi2';

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
  const [showCvPreview, setShowCvPreview] = useState(false);

  // Prevent background scrolling while CV preview is open
  useEffect(() => {
    if (showCvPreview) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [showCvPreview]);

  // Close CV preview with Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowCvPreview(false);
      }
    };

    if (showCvPreview) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [showCvPreview]);

  // Animation variants
  const containerVariants: AnimationVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants: AnimationVariants = {
    hidden: {
      y: 25,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  const profileVariants: AnimationVariants = {
    hidden: {
      scale: 0.85,
      rotateY: 25,
      opacity: 0,
    },
    visible: {
      scale: 1,
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.015,
      rotateY: 2,
      transition: {
        duration: 0.35,
      },
    },
  };

  const techStack = ['PHP', 'Laravel', 'NestJS', 'Python', 'NextJS'];

  return (
    <>
      {/* =========================================================
          HERO SECTION
      ========================================================== */}
      <section className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-gray-950">
        {/* Background Effects */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Blue Glow */}
          <div className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-600/10" />

          {/* Purple Glow */}
          <div className="absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-purple-400/20 blur-3xl dark:bg-purple-600/10" />

          {/* Cyan Glow */}
          <div className="absolute -bottom-40 left-1/3 h-[400px] w-[400px] rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-600/10" />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.035] dark:opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(#64748b 1px, transparent 1px), linear-gradient(90deg, #64748b 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {/* Main Container */}
        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-16">
          <motion.div
            className="grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-24"
            initial="hidden"
            animate="visible"
            variants={containerVariants as any}
          >
            {/* =====================================================
                LEFT SIDE - CONTENT
            ====================================================== */}
            <div className="order-1 text-left">
              {/* Availability Badge */}
              <motion.div variants={itemVariants as any}>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-bold text-blue-600 shadow-sm backdrop-blur-md dark:border-blue-900/60 dark:bg-gray-900/60 dark:text-blue-400 sm:text-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>

                  Available for opportunities
                </div>
              </motion.div>

              {/* Greeting */}
              <motion.div
                className="mb-5 flex items-center justify-start gap-3"
                variants={itemVariants as any}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600 shadow-sm dark:border-blue-900/50 dark:bg-blue-950/50 dark:text-blue-400">
                  <HiOutlineSparkles className="text-xl" />
                </span>

                <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  Hello, I&apos;m
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                className="mb-6 text-5xl font-black leading-[0.95] tracking-tight text-slate-900 dark:text-white sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.2rem]"
                variants={itemVariants as any}
              >
                Sultanum

                <span className="mt-2 block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                  Mobin
                </span>
              </motion.h1>

              {/* Main Description */}
              <motion.div
                className="mb-8 max-w-2xl"
                variants={itemVariants as any}
              >
                <p className="text-xl font-medium leading-relaxed text-slate-600 dark:text-slate-300 sm:text-2xl">
                  I build{' '}
                  <span className="font-bold text-slate-900 dark:text-white">
                    digital products
                  </span>{' '}
                  that solve real problems.
                </p>

                <p className="mt-4 text-base leading-7 text-slate-500 dark:text-slate-400 sm:text-lg">
                  From modern web platforms and mobile apps to scalable APIs
                  and custom software solutions, I turn ideas into{' '}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    fast, reliable, and user-friendly experiences.
                  </span>
                </p>
              </motion.div>

              {/* Service Tags */}
              <motion.div
                className="mb-9 flex flex-wrap justify-start gap-2"
                variants={itemVariants as any}
              >
                {/* Web Apps */}
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3.5 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-blue-600 dark:hover:text-blue-400">
                  <FiCode className="text-blue-500" />
                  Web Apps
                </div>

                {/* Mobile Apps */}
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3.5 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-300 hover:text-purple-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-purple-600 dark:hover:text-purple-400">
                  <FiSmartphone className="text-purple-500" />
                  Mobile Apps
                </div>

                {/* Custom Solutions */}
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3.5 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-emerald-600 dark:hover:text-emerald-400">
                  <FiLayers className="text-emerald-500" />
                  Custom Solutions
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="mb-9 flex flex-col justify-start gap-3 sm:flex-row"
                variants={itemVariants as any}
              >
                {/* Projects */}
                <Link href="#projects" className="w-full sm:w-auto">
                  <motion.button
                    type="button"
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-4 text-base font-bold text-white shadow-xl shadow-blue-600/20 transition-all duration-300 hover:shadow-blue-600/40 sm:px-8 sm:text-lg"
                    whileHover={{
                      scale: 1.03,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                  >
                    View My Projects

                    <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.button>
                </Link>

                {/* CV */}
                <motion.button
                  type="button"
                  onClick={() => setShowCvPreview(true)}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-7 py-4 text-base font-bold text-slate-700 shadow-lg shadow-slate-900/5 backdrop-blur-sm transition-all duration-300 hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-400 sm:w-auto sm:px-8 sm:text-lg"
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  <span className="text-xl">📄</span>

                  View CV

                  <FiArrowUpRight className="text-sm opacity-50 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.button>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                className="flex flex-col items-start gap-4 sm:flex-row sm:items-center"
                variants={itemVariants as any}
              >
                <span className="whitespace-nowrap text-sm font-medium text-slate-400 dark:text-slate-500">
                  Built with
                </span>

                <div className="flex flex-wrap justify-start gap-2">
                  {techStack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur-sm transition-colors hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-blue-600 dark:hover:text-blue-400 sm:text-sm"
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        delay: 0.8 + index * 0.08,
                        duration: 0.3,
                      }}
                      whileHover={{
                        y: -2,
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* =====================================================
                RIGHT SIDE - PROFILE

                MOBILE:
                Content first -> Profile below

                DESKTOP:
                Content left -> Profile right
            ====================================================== */}
            <div className="order-2 flex justify-start lg:justify-end">
              <motion.div
                ref={profileRef}
                className="relative w-full max-w-[390px] sm:max-w-[460px]"
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={profileVariants as any}
              >
                {/* Outer Glow */}
                <motion.div
                  className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [0.98, 1.02, 0.98],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Main Profile Card */}
                <div className="relative rounded-[2rem] border border-white/70 bg-white/70 p-2 shadow-2xl shadow-blue-900/10 backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/70">
                  <div className="relative overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950">
                    {/* Card Glow */}
                    <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-500/30 blur-3xl" />

                    <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-purple-500/25 blur-3xl" />

                    {/* Card Header */}
                    <div className="relative z-10 flex items-center justify-between px-5 pt-5 sm:px-8 sm:pt-8">
                      <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[10px] font-semibold tracking-wider text-white/80 backdrop-blur-md sm:text-xs">
                        FULL STACK DEVELOPER
                      </div>

                      <div className="flex items-center gap-2 text-[10px] text-white/60 sm:text-xs">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
                        Online
                      </div>
                    </div>

                    {/* Profile Image */}
                    <div className="relative z-10 flex justify-center px-5 pb-3 pt-8 sm:px-10 sm:pt-10">
                      <div className="relative">
                        {/* Rotating Ring */}
                        <motion.div
                          className="absolute -inset-3 rounded-full border border-dashed border-blue-300/40"
                          animate={{
                            rotate: 360,
                          }}
                          transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        />

                        {/* Image */}
                        <div className="relative h-56 w-56 overflow-hidden rounded-full border-[5px] border-white/90 bg-gradient-to-tr from-blue-600 to-purple-600 shadow-2xl shadow-blue-500/30 sm:h-72 sm:w-72 md:h-80 md:w-80">
                          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-white/10" />

                          <img
                            src="/profile2.png"
                            alt="Sultanum Mobin"
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {/* Floating Status */}
                        <motion.div
                          className="absolute bottom-2 right-0 flex items-center gap-2 rounded-full border border-white/20 bg-slate-900/90 px-3 py-2 text-[10px] font-semibold text-white shadow-xl backdrop-blur-md sm:bottom-3 sm:right-1 sm:text-xs"
                          animate={{
                            y: [0, -5, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        >
                          <span className="h-2 w-2 rounded-full bg-emerald-400" />
                          Open to work
                        </motion.div>
                      </div>
                    </div>

                    {/* Name */}
                    <div className="relative z-10 px-6 pb-7 text-center sm:px-8 sm:pb-8">
                      <h2 className="text-2xl font-bold text-white sm:text-3xl">
                        Sultanum Mobin
                      </h2>

                      <p className="mt-1 text-sm text-blue-200 sm:text-base">
                        Full Stack Developer
                      </p>
                    </div>

                    {/* Bottom Gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                  </div>
                </div>

                {/* Floating Code Icon */}
                <motion.div
                  className="absolute -left-4 top-16 hidden h-12 w-12 items-center justify-center rounded-2xl border border-white/60 bg-white/80 text-blue-600 shadow-xl backdrop-blur-md dark:border-slate-700 dark:bg-slate-800/80 dark:text-blue-400 sm:flex"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <FiCode className="text-xl" />
                </motion.div>

                {/* Floating Mobile Icon */}
                <motion.div
                  className="absolute -right-4 bottom-20 hidden h-12 w-12 items-center justify-center rounded-2xl border border-white/60 bg-white/80 text-purple-600 shadow-xl backdrop-blur-md dark:border-slate-700 dark:bg-slate-800/80 dark:text-purple-400 sm:flex"
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                >
                  <FiSmartphone className="text-xl" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            SCROLL INDICATOR
        ========================================================== */}
        <motion.div
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 md:flex"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2,
          }}
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
            Scroll
          </span>

          <motion.div
            className="h-8 w-5 rounded-full border border-slate-300 p-1 dark:border-slate-700"
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="mx-auto h-1.5 w-1.5 rounded-full bg-blue-500" />
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================================
          CV PREVIEW MODAL
      ========================================================== */}
      {showCvPreview && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-2 backdrop-blur-sm sm:p-4"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          onClick={() => setShowCvPreview(false)}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="relative flex h-[96vh] w-full max-w-6xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl dark:bg-slate-900 sm:h-[92vh] sm:rounded-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900 sm:px-6 sm:py-4">
              <div>
                <h2 className="text-sm font-bold text-slate-900 dark:text-white sm:text-lg">
                  Sultanum Mobin — CV
                </h2>

                <p className="hidden text-xs text-slate-500 sm:block">
                  CV Preview
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowCvPreview(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all hover:bg-red-50 hover:text-red-500 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-red-500/10 dark:hover:text-red-400 sm:h-10 sm:w-10"
                aria-label="Close CV preview"
              >
                <FiX className="text-xl" />
              </button>
            </div>

            {/* PDF Preview */}
            <div className="min-h-0 flex-1 bg-slate-100 dark:bg-slate-950">
              <iframe
                src="/documents/Sultan-CV.pdf#toolbar=0&navpanes=0&scrollbar=1"
                title="Sultanum Mobin CV Preview"
                className="h-full w-full border-0"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
