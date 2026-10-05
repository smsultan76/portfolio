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
  const profileRef = useRef<HTMLDivElement>(null);
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

  const containerVariants: AnimationVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: AnimationVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.65,
        ease: 'easeOut',
      },
    },
  };

  const profileVariants: AnimationVariants = {
    hidden: {
      scale: 0.9,
      rotateY: 15,
      opacity: 0,
    },
    visible: {
      scale: 1,
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.01,
      rotateY: 2,
      transition: {
        duration: 0.3,
      },
    },
  };

  const techStack = ['PHP', 'Laravel', 'NestJS', 'Python', 'NextJS'];

  return (
    <>
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-slate-50 dark:bg-gray-950">
        {/* =======================================================
            BACKGROUND
        ======================================================== */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-[350px] w-[350px] rounded-full bg-blue-400/20 blur-3xl sm:h-[450px] sm:w-[450px] dark:bg-blue-600/10" />

          <div className="absolute -right-40 top-1/3 h-[400px] w-[400px] rounded-full bg-purple-400/20 blur-3xl sm:h-[500px] sm:w-[500px] dark:bg-purple-600/10" />

          <div className="absolute -bottom-40 left-1/3 h-[350px] w-[350px] rounded-full bg-cyan-300/20 blur-3xl sm:h-[400px] sm:w-[400px] dark:bg-cyan-600/10" />

          <div
            className="absolute inset-0 opacity-[0.035] dark:opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(#64748b 1px, transparent 1px), linear-gradient(90deg, #64748b 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {/* =======================================================
            MAIN CONTAINER
        ======================================================== */}
        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-[1500px]
            px-5
            py-16
            sm:px-8
            sm:py-20
            md:px-10
            lg:px-12
            lg:py-24
            xl:px-16
            2xl:px-20
          "
        >
          <motion.div
            className="
              grid
              w-full
              grid-cols-1
              items-center
              gap-14
              lg:grid-cols-[minmax(0,1.05fr)_minmax(380px,0.95fr)]
              lg:gap-12
              xl:grid-cols-[minmax(0,1fr)_minmax(460px,0.9fr)]
              xl:gap-20
              2xl:gap-28
            "
            initial="hidden"
            animate="visible"
            variants={containerVariants as any}
          >
            {/* =====================================================
                LEFT CONTENT
            ====================================================== */}
            <div className="order-1 min-w-0 text-left">
              {/* Availability */}
              <motion.div variants={itemVariants as any}>
                <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3.5 py-2 text-xs font-bold text-blue-600 shadow-sm backdrop-blur-md sm:px-4 sm:text-sm dark:border-blue-900/60 dark:bg-gray-900/60 dark:text-blue-400">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>

                  Available for opportunities
                </div>
              </motion.div>

              {/* Greeting */}
              <motion.div
                className="mb-4 flex items-center gap-3 sm:mb-5"
                variants={itemVariants as any}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600 shadow-sm sm:h-10 sm:w-10 dark:border-blue-900/50 dark:bg-blue-950/50 dark:text-blue-400">
                  <HiOutlineSparkles className="text-lg sm:text-xl" />
                </span>

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 sm:text-sm sm:tracking-[0.2em] dark:text-slate-400">
                  Hello, I&apos;m
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                className="
                  mb-5
                  text-[clamp(3rem,9vw,6.5rem)]
                  font-black
                  leading-[0.9]
                  tracking-[-0.04em]
                  text-slate-900
                  sm:mb-6
                  dark:text-white
                "
                variants={itemVariants as any}
              >
                Sultanum

                <span className="mt-2 block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                  Mobin
                </span>
              </motion.h1>

              {/* Description */}
              <motion.div
                className="mb-7 max-w-[760px] sm:mb-8"
                variants={itemVariants as any}
              >
                <p className="text-[clamp(1.15rem,2.3vw,1.65rem)] font-medium leading-[1.5] text-slate-600 dark:text-slate-300">
                  I build{' '}
                  <span className="font-bold text-slate-900 dark:text-white">
                    digital products
                  </span>{' '}
                  that solve real problems.
                </p>

                <p className="mt-3 max-w-[700px] text-[clamp(0.95rem,1.5vw,1.15rem)] leading-7 text-slate-500 sm:mt-4 sm:leading-8 dark:text-slate-400">
                  From modern web platforms and mobile apps to scalable APIs
                  and custom software solutions, I turn ideas into{' '}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    fast, reliable, and user-friendly experiences.
                  </span>
                </p>
              </motion.div>

              {/* Service Tags */}
              <motion.div
                className="mb-7 flex flex-wrap gap-2 sm:mb-9"
                variants={itemVariants as any}
              >
                <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 sm:gap-2 sm:px-3.5 sm:py-2 sm:text-sm dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-blue-600 dark:hover:text-blue-400">
                  <FiCode className="shrink-0 text-blue-500" />
                  Web Apps
                </div>

                <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-300 hover:text-purple-600 sm:gap-2 sm:px-3.5 sm:py-2 sm:text-sm dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-purple-600 dark:hover:text-purple-400">
                  <FiSmartphone className="shrink-0 text-purple-500" />
                  Mobile Apps
                </div>

                <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-600 sm:gap-2 sm:px-3.5 sm:py-2 sm:text-sm dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-emerald-600 dark:hover:text-emerald-400">
                  <FiLayers className="shrink-0 text-emerald-500" />
                  Custom Solutions
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                className="
                  mb-8
                  flex
                  w-full
                  flex-col
                  gap-3
                  min-[480px]:flex-row
                  min-[480px]:flex-wrap
                  sm:mb-9
                "
                variants={itemVariants as any}
              >
                {/* Projects Button */}
                <Link
                  href="#projects"
                  className="w-full min-[480px]:w-auto"
                >
                  <motion.button
                    type="button"
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-gradient-to-r
                      from-blue-600
                      to-indigo-600
                      px-6
                      py-3.5
                      text-sm
                      font-bold
                      text-white
                      shadow-xl
                      shadow-blue-600/20
                      transition-all
                      duration-300
                      hover:shadow-blue-600/40
                      sm:px-7
                      sm:py-4
                      sm:text-base
                      lg:px-8
                      lg:text-lg
                    "
                    whileHover={{
                      scale: 1.025,
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

                {/* CV Button */}
                <motion.button
                  type="button"
                  onClick={() => setShowCvPreview(true)}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-slate-300
                    bg-white/80
                    px-6
                    py-3.5
                    text-sm
                    font-bold
                    text-slate-700
                    shadow-lg
                    shadow-slate-900/5
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:border-blue-500
                    hover:text-blue-600
                    min-[480px]:w-auto
                    sm:px-7
                    sm:py-4
                    sm:text-base
                    dark:border-slate-700
                    dark:bg-slate-900/70
                    dark:text-slate-200
                    dark:hover:border-blue-400
                    dark:hover:text-blue-400
                    lg:px-8
                    lg:text-lg
                  "
                  whileHover={{
                    scale: 1.025,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  <span className="text-lg sm:text-xl">📄</span>

                  View CV

                  <FiArrowUpRight className="text-sm opacity-50 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.button>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4"
                variants={itemVariants as any}
              >
                <span className="whitespace-nowrap text-xs font-medium text-slate-400 sm:text-sm dark:text-slate-500">
                  Built with
                </span>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {techStack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-white/80 px-2.5 py-1 text-[11px] font-semibold text-slate-600 shadow-sm backdrop-blur-sm transition-colors hover:border-blue-300 hover:text-blue-600 sm:px-3.5 sm:py-1.5 sm:text-sm dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-blue-600 dark:hover:text-blue-400"
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
                PROFILE
            ====================================================== */}
            <div className="order-2 flex w-full justify-center lg:justify-end">
              <motion.div
                ref={profileRef}
                className="
                  relative
                  w-full
                  max-w-[340px]
                  sm:max-w-[410px]
                  md:max-w-[450px]
                  lg:max-w-[500px]
                  xl:max-w-[540px]
                "
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={profileVariants as any}
              >
                {/* Outer Glow */}
                <motion.div
                  className="absolute -inset-3 rounded-[2rem] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl sm:-inset-5"
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

                {/* Main Card */}
                <div className="relative rounded-[1.5rem] border border-white/70 bg-white/70 p-1.5 shadow-2xl shadow-blue-900/10 backdrop-blur-xl sm:rounded-[2rem] sm:p-2 dark:border-slate-700/70 dark:bg-slate-900/70">
                  <div className="relative overflow-hidden rounded-[1.2rem] bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 sm:rounded-[1.6rem]">
                    {/* Card Glow */}
                    <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/30 blur-3xl sm:-right-20 sm:-top-20 sm:h-60 sm:w-60" />

                    <div className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-purple-500/25 blur-3xl sm:-bottom-24 sm:-left-20 sm:h-64 sm:w-64" />

                    {/* Card Header */}
                    <div className="relative z-10 flex items-center justify-between gap-3 px-4 pt-4 sm:px-7 sm:pt-7 md:px-8 md:pt-8">
                      <div className="min-w-0 rounded-full border border-white/10 bg-white/10 px-2.5 py-1.5 text-[8px] font-semibold tracking-[0.12em] text-white/80 backdrop-blur-md sm:px-3 sm:text-[10px] sm:tracking-wider md:text-xs">
                        FULL STACK DEVELOPER
                      </div>

                      <div className="flex shrink-0 items-center gap-1.5 text-[9px] text-white/60 sm:gap-2 sm:text-xs">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50 sm:h-2 sm:w-2" />
                        Online
                      </div>
                    </div>

                    {/* Profile Image */}
                    <div className="relative z-10 flex justify-center px-4 pb-2 pt-7 sm:px-8 sm:pt-9 md:px-10 md:pt-10">
                      <div className="relative">
                        {/* Rotating Ring */}
                        <motion.div
                          className="absolute -inset-2 rounded-full border border-dashed border-blue-300/40 sm:-inset-3"
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
                        <div
                          className="
                            relative
                            h-[clamp(175px,35vw,310px)]
                            w-[clamp(175px,35vw,310px)]
                            overflow-hidden
                            rounded-full
                            border-[4px]
                            border-white/90
                            bg-gradient-to-tr
                            from-blue-600
                            to-purple-600
                            shadow-2xl
                            shadow-blue-500/30
                            sm:border-[5px]
                          "
                        >
                          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-white/10" />

                          <img
                            src="/profile2.png"
                            alt="Sultanum Mobin"
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {/* Floating Status */}
                        <motion.div
                          className="absolute bottom-1 right-0 flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-900/90 px-2.5 py-1.5 text-[9px] font-semibold text-white shadow-xl backdrop-blur-md sm:bottom-2 sm:right-1 sm:gap-2 sm:px-3 sm:py-2 sm:text-xs"
                          animate={{
                            y: [0, -5, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 sm:h-2 sm:w-2" />
                          Open to work
                        </motion.div>
                      </div>
                    </div>

                    {/* Name */}
                    <div className="relative z-10 px-4 pb-6 text-center sm:px-6 sm:pb-7 md:px-8 md:pb-8">
                      <h2 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                        Sultanum Mobin
                      </h2>

                      <p className="mt-1 text-xs text-blue-200 sm:text-sm md:text-base">
                        Full Stack Developer
                      </p>
                    </div>

                    {/* Bottom Gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                  </div>
                </div>

                {/* Floating Code Icon */}
                <motion.div
                  className="absolute -left-4 top-16 hidden h-11 w-11 items-center justify-center rounded-2xl border border-white/60 bg-white/80 text-blue-600 shadow-xl backdrop-blur-md sm:flex lg:-left-5 lg:h-12 lg:w-12 dark:border-slate-700 dark:bg-slate-800/80 dark:text-blue-400"
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
                  <FiCode className="text-lg lg:text-xl" />
                </motion.div>

                {/* Floating Mobile Icon */}
                <motion.div
                  className="absolute -right-4 bottom-16 hidden h-11 w-11 items-center justify-center rounded-2xl border border-white/60 bg-white/80 text-purple-600 shadow-xl backdrop-blur-md sm:flex lg:-right-5 lg:h-12 lg:w-12 dark:border-slate-700 dark:bg-slate-800/80 dark:text-purple-400"
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
                  <FiSmartphone className="text-lg lg:text-xl" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 lg:flex"
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
              <div className="min-w-0">
                <h2 className="truncate text-sm font-bold text-slate-900 dark:text-white sm:text-lg">
                  Sultanum Mobin — CV
                </h2>

                <p className="hidden text-xs text-slate-500 sm:block">
                  CV Preview
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowCvPreview(false)}
                className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all hover:bg-red-50 hover:text-red-500 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-red-500/10 dark:hover:text-red-400 sm:h-10 sm:w-10"
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
