// app/page.tsx
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <title>Sultanum Mobin</title>
      <Header /> 
      <main>
        <Hero />
        <Skills />
        <Projects />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}