'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, ExternalLink, Github, Globe } from 'lucide-react';

const projects = [
  {
    img: '/project/ecom.png',
    title: 'E-Commerce Platform',
    description: 'A Online Book Selling Website build with raw PHP and sslcommerz',
    technologies: ['PHP', 'HTML', 'CSS', 'JS'],
    category: 'Full Stack',
    live: 'https://boi-bazar.free.nf/',
    source: 'https://github.com/smsultan76/BookShop',
  },
  {
    img: '/project/school.png',
    title: 'School Management App',
    description: 'App with Students, Results, Teachers, Notice etc. Fully Dynamic',
    technologies: ['Laravel', 'Blade', 'JS', 'TailwindCSS', 'MySql'],
    category: 'Full Stack',
    live: 'https://sunriseschool.free.nf/',
    source: 'https://github.com/smsultan76',
  },
  {
    img: '/project/cms-backend.png',
    title: 'CMS - REST API',
    description: 'Role Based Authentication REST API built with NestJS and PostgreSQL',
    technologies: ['NestJS', 'PostgreSQL', 'Swagger'],
    category: 'Backend',
    source: 'https://github.com/smsultan76/CMS-Backend',
  },
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleImageClick = (imgUrl: string, index: number) => {
    setSelectedImage(imgUrl);
    setCurrentImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % projects.length;
    setSelectedImage(projects[nextIndex].img);
    setCurrentImageIndex(nextIndex);
  };

  const handlePrevImage = () => {
    const prevIndex = (currentImageIndex - 1 + projects.length) % projects.length;
    setSelectedImage(projects[prevIndex].img);
    setCurrentImageIndex(prevIndex);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      switch (e.key) {
        case 'Escape':
          handleCloseModal();
          break;
        case 'ArrowRight':
          handleNextImage();
          break;
        case 'ArrowLeft':
          handlePrevImage();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentImageIndex]);

  return (
    <>
      <section id="projects" className="min-h-screen py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Featured Projects
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Some of my recent work
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Project Image with Click to Preview */}
                <div 
                  className="relative h-48 overflow-hidden group cursor-pointer"
                  onClick={() => handleImageClick(project.img, index)}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/400x200/4F46E5/7C3AED?text=Project+Image';
                      e.currentTarget.className = 'absolute inset-0 w-full h-full object-cover bg-gradient-to-r from-blue-400 to-purple-500';
                    }}
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4">
                      <Maximize2 className="w-8 h-8 text-white mx-auto mb-2" />
                      <span className="text-white text-sm font-medium">Click to Preview</span>
                    </div>
                  </div>
                  
                  {/* Quick View Badge */}
                  <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Preview
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 text-sm px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm px-3 py-1 rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    {/* Live Demo Button */}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/30">
                          <Globe className="w-4 h-4" />
                          <span>Live Demo</span>
                          <svg
                            className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      </motion.a>
                    )}

                    {/* Source Code Button */}
                    <motion.a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <button className="w-full bg-transparent border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg">
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </button>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={handleCloseModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Main Image Container */}
              <div className="relative rounded-xl overflow-hidden bg-gray-900">
                <motion.img
                  key={selectedImage}
                  src={selectedImage}
                  alt="Project Preview"
                  className="w-full h-auto max-h-[70vh] object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Image Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-white text-xl font-bold">
                        {projects[currentImageIndex]?.title}
                      </h3>
                      <p className="text-gray-300 text-sm mt-1">
                        {projects[currentImageIndex]?.category} • Project {currentImageIndex + 1} of {projects.length}
                      </p>
                      <p className="text-gray-300 text-sm mt-2 max-w-lg">
                        {projects[currentImageIndex]?.description}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {projects[currentImageIndex]?.live && (
                        <a
                          href={projects[currentImageIndex].live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                      <a
                        href={projects[currentImageIndex]?.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <motion.button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>

              {/* Thumbnail Navigation */}
              <div className="flex gap-2 mt-4 overflow-x-auto py-2 scrollbar-hide">
                {projects.map((project, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setSelectedImage(project.img);
                      setCurrentImageIndex(index);
                    }}
                    className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === index
                        ? 'border-blue-500 ring-2 ring-blue-500/30 scale-105'
                        : 'border-transparent hover:border-white/50'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/80x64/4F46E5/7C3AED?text=Project';
                      }}
                    />
                  </motion.button>
                ))}
              </div>

              {/* Keyboard Shortcuts Hint */}
              <div className="text-center text-gray-400 text-sm mt-4">
                <p>← → Navigate • ESC Close • Click outside to close</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}