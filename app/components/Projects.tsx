// app/components/Projects.tsx
const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with Laravel and React',
    technologies: ['Laravel', 'React', 'MySQL', 'TailwindCSS'],
    category: 'Full Stack',
  },
  {
    title: 'Task Management App',
    description: 'Real-time task management application with Next.js',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io'],
    category: 'Frontend',
  },
  {
    title: 'REST API Service',
    description: 'Scalable REST API built with NestJS and PostgreSQL',
    technologies: ['NestJS', 'PostgreSQL', 'Docker', 'Swagger'],
    category: 'Backend',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Some of my recent work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">{project.category}</span>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
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
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-6 flex space-x-4">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors">
                    Live Demo
                  </button>
                  <button className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 py-2 rounded-lg transition-colors">
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}