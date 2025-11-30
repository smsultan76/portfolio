// app/components/Hero.tsx
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 transition-all duration-500 fade-in">
      <div className="container mx-auto px-6 text-center">
        <div className="slide-up">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
            SM
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
            Sultanum <span className="text-blue-600 dark:text-blue-400">Mobin</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Full Stack Developer passionate about creating efficient, scalable web applications. 
            I love turning complex problems into simple, beautiful designs with modern technologies.
          </p>
          
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              View My Work
            </button>
            <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}