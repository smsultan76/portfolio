// app/components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
  FiArrowDown,
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

                <span className="ml-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
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
                  flex-row
                  gap-3
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

                    <FiArrowDown className="transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.button>
                </Link>

                {/* CV Button */}
                <motion.button type="button" onClick={() => setShowCvPreview(true)}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-bold text-slate-700 shadow-lg
                    shadow-slate-900/5 backdrop-blur-sm transition-all duration-300 hover:border-blue-500 hover:text-blue-600 min-[480px]:w-auto sm:px-7 sm:py-4 sm:text-base 
                    dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-400 lg:px-8 lg:text-lg"
                  whileHover={{
                    scale: 1.025,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  {/* <span className="text-lg sm:text-xl">📄</span> */}
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
                PROFILE — FUTURISTIC GLASS ID
            ====================================================== */}
            <div className="order-2 flex w-full justify-center lg:justify-end px-4 sm:px-8 lg:px-15">
              <motion.div
                ref={profileRef}
                className="relative w-full max-w-[480px]"
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={profileVariants as any}
              >
                {/* Ambient Glow */}
                <motion.div
                  className="absolute -inset-8 rounded-[3rem] bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-fuchsia-500/20 blur-3xl"
                  animate={{
                    opacity: [0.35, 0.6, 0.35],
                    scale: [0.97, 1.03, 0.97],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Back Layer */}
                <motion.div
                  className="absolute -right-3 top-8 h-[88%] w-full rounded-[2.5rem] border border-violet-300/20 bg-violet-500/5 dark:border-violet-400/10"
                  animate={{
                    rotate: [2, 3, 2],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Main Card */}
                <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/65 p-2 shadow-[0_35px_100px_-30px_rgba(79,70,229,0.4)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/65">
                  <div className="relative min-h-[620px] overflow-hidden rounded-[2rem] bg-[#080b18]">
                    {/* Grid */}
                    <div
                      className="absolute inset-0 opacity-[0.08]"
                      style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)`,
                        backgroundSize: "30px 30px",
                      }}
                    />

                    {/* Background Orbs */}
                    <motion.div
                      className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-[90px]"
                      animate={{
                        x: [0, 20, 0],
                        y: [0, 15, 0],
                      }}
                      transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    <motion.div
                      className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-violet-600/20 blur-[100px]"
                      animate={{
                        x: [0, -15, 0],
                        y: [0, -20, 0],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Top Navigation */}
                    <div className="relative z-20 flex items-center justify-between px-5 pt-5 sm:px-7 sm:pt-7">

                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                          <span className="font-mono text-xs font-bold text-cyan-400">
                            SM
                          </span>
                        </div>

                        <div>
                          <p className="text-[8px] uppercase tracking-[0.25em] text-white/30">
                            Personal ID
                          </p>

                          <p className="font-mono text-[10px] text-white/70">
                            001 / DEV
                          </p>
                        </div>
                      </div>

                      {/* Status */}
                      <a href="/contact">
                        <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                            <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                          </span>

                          <span className="text-[8px] font-semibold uppercase tracking-wider text-emerald-300">
                            Online
                          </span>
                        </div>
                      </a>
                    </div>

                    {/* Profile Image */}
                    <div className="relative z-10 mt-9 flex justify-center">

                      {/* Outer Ring */}
                      <motion.div
                        className="absolute h-[265px] w-[265px] rounded-full border border-cyan-400/20 sm:h-[295px] sm:w-[295px]"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 18,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <span className="absolute -top-1 left-1/2 h-2 w-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400" />
                        <span className="absolute bottom-6 right-5 h-1.5 w-1.5 rounded-full bg-violet-400 shadow-lg shadow-violet-400" />
                      </motion.div>

                      {/* Second Ring */}
                      <motion.div
                        className="absolute h-[285px] w-[285px] rounded-full border border-dashed border-violet-400/10 sm:h-[315px] sm:w-[315px]"
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: 25,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />

                      {/* Image Frame */}
                      <div className="relative h-[225px] w-[225px] overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 p-[2px] shadow-[0_0_60px_rgba(59,130,246,0.25)] sm:h-[255px] sm:w-[255px]">

                        <div className="relative h-full w-full overflow-hidden rounded-[1.85rem] bg-slate-900">
                          <img
                            src="/profile2.png"
                            alt="Sultanum Mobin"
                            className="h-full w-full object-cover"
                          />

                          {/* Scan Overlay */}
                          <motion.div
                            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                            animate={{
                              top: ["0%", "100%", "0%"],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 via-transparent to-cyan-400/10" />
                        </div>
                      </div>

                      {/* Floating Badge */}
                      <motion.div
                        className="absolute -bottom-2 right-[8%] flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 shadow-2xl backdrop-blur-xl"
                        animate={{
                          y: [0, -6, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <span className="text-xs">✦</span>

                        <a href="contac">
                          <div>
                            <p className="text-[7px] uppercase tracking-wider text-white/40">
                              Status
                            </p>
                            <p className="text-[9px] font-semibold text-white">
                              Open to Work
                            </p>
                          </div>
                        </a>
                      </motion.div>
                    </div>

                    {/* Identity */}
                    <div className="relative z-10 mt-10 px-6 text-center sm:px-8">

                      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/10 bg-cyan-400/5 px-3 py-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

                        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-cyan-300">
                          Full Stack Developer
                        </span>
                      </div>

                      <h2 className="text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">
                        Sultanum Mobin
                      </h2>

                      <p className="mx-auto mt-2 max-w-[300px] text-xs leading-5 text-white/40">
                        Designing & engineering modern digital experiences.
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="relative z-10 mx-5 mt-7 grid grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] sm:mx-7">

                      <div className="border-r border-white/10 px-3 py-4 text-center">
                        <p className="font-mono text-sm font-bold text-white">
                          04+
                        </p>
                        <p className="mt-1 text-[7px] uppercase tracking-wider text-white/30">
                          Years
                        </p>
                      </div>

                      <div className="border-r border-white/10 px-3 py-4 text-center">
                        <p className="font-mono text-sm font-bold text-white">
                          30+
                        </p>
                        <p className="mt-1 text-[7px] uppercase tracking-wider text-white/30">
                          Projects
                        </p>
                      </div>

                      <div className="px-3 py-4 text-center">
                        <p className="font-mono text-sm font-bold text-white">
                          ∞
                        </p>
                        <p className="mt-1 text-[7px] uppercase tracking-wider text-white/30">
                          Ideas
                        </p>
                      </div>
                    </div>

                    {/* Bottom Code Line */}
                    <div className="relative z-10 mt-5 flex items-center justify-between px-6 pb-5 sm:px-7 sm:pb-6">

                      <div className="flex items-center gap-2">
                        <FiCode className="text-cyan-400" />

                        <span className="font-mono text-[8px] text-white/30">
                          build / create / innovate
                        </span>
                      </div>

                      <span className="font-mono text-[8px] text-white/20">
                        v2.026
                      </span>
                    </div>

                    {/* Bottom Light */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />
                  </div>
                </div>

                {/* Floating Left Icon */}
                <motion.div
                  className="absolute -left-5 top-32 hidden h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-slate-900/90 text-cyan-400 shadow-xl backdrop-blur-xl sm:flex"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FiCode className="text-lg" />
                </motion.div>

                {/* Floating Right Icon */}
                <motion.div
                  className="absolute -right-5 bottom-28 hidden h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-slate-900/90 text-violet-400 shadow-xl backdrop-blur-xl sm:flex"
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <FiSmartphone className="text-lg" />
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
