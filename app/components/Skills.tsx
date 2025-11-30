// app/components/Skills.tsx
'use client';
import { useState } from 'react';

const skillsData = {
  languages: [
    { name: 'PHP', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'JavaScript', level: 88 },
    { name: 'C++', level: 75 },
    { name: 'Java', level: 70 },
    { name: 'C', level: 65 },
  ],
  frontend: [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'TailwindCSS', level: 85 },
    { name: 'Bootstrap', level: 80 },
    { name: 'Next.js', level: 75 },
  ],
  backend: [
    { name: 'Laravel', level: 88 },
    { name: 'NestJS', level: 70 },
  ],
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<'languages' | 'frontend' | 'backend'>('languages');

  return (
    <section id="skills" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Technologies I work with</p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12 space-x-4 slide-up">
          {Object.keys(skillsData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as any)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto slide-up">
          {skillsData[activeCategory].map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {skill.name}
                </h3>
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}