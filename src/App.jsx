import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import DeveloperCli from './components/DeveloperCli';

function App() {
  const [cliMode, setCliMode] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'vscode');

  // Sync theme with document element and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-darker text-light min-h-screen font-sans selection:bg-primary/30 selection:text-primary relative scroll-smooth overflow-x-hidden transition-colors duration-500">
      {/* Background radial gradient overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-dark via-darker to-black -z-50 pointer-events-none transition-colors duration-500"></div>
      
      <Navbar cliMode={cliMode} setCliMode={setCliMode} theme={theme} setTheme={setTheme} />

      <main className="relative">
        <Hero onOpenCli={() => setCliMode(true)} />
        
        <div className="animate-on-scroll opacity-0">
          <About />
        </div>
        
        <div className="animate-on-scroll opacity-0">
          <Experience />
        </div>
        
        <div className="animate-on-scroll opacity-0">
          <Skills />
        </div>
        
        <div className="animate-on-scroll opacity-0">
          <Projects />
        </div>
      </main>

      <div className="animate-on-scroll opacity-0">
        <Contact />
      </div>

      <DeveloperCli
        isOpen={cliMode}
        onClose={() => setCliMode(false)}
        theme={theme}
        setTheme={setTheme}
        onTriggerAudit={() => {
          setCliMode(false);
          const target = document.getElementById('home');
          target?.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </div>
  );
}

export default App;
