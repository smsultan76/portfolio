// app/components/Header.tsx
'use client';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-white/80 md:px-10 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800 dark:text-white transition-colors">
            <a href="">Sultanum Mobin</a>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Contact
            </a>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <span className="text-yellow-400">☀️</span>
              ) : (
                <span className="text-gray-600">🌙</span>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}