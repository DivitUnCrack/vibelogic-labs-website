import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-vibecodex-dark min-h-screen text-slate-50 selection:bg-vibecodex-lime selection:text-black">
      {/* Custom Cursor Follower - Desktop Only */}
      <div 
        className="fixed w-8 h-8 rounded-full border border-vibecodex-lime pointer-events-none z-50 hidden md:block transition-transform duration-100 ease-out mix-blend-difference"
        style={{ 
          left: mousePosition.x, 
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      <Navigation />
      
      <main>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;