import React from 'react';
import Hero from './components/Hero';
import WorldView from './components/WorldView';
import FactionSection from './components/FactionSection';
import StatusDashboard from './components/StatusDashboard';

const App: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-900 selection:text-white">
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center mix-blend-difference">
        <div 
            className="font-black text-xl tracking-tighter cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            DISTORION
        </div>
        <div className="hidden md:flex gap-6 font-mono text-xs">
           <button onClick={() => scrollToSection('world')} className="hover:text-red-500 uppercase transition-colors">Archive</button>
           <button onClick={() => scrollToSection('database')} className="hover:text-red-500 uppercase transition-colors">Database</button>
        </div>
      </nav>

      <main>
        <Hero />
        <StatusDashboard />
        <WorldView />
        <FactionSection />
      </main>

      <footer className="py-12 bg-black border-t border-zinc-900 text-center text-zinc-600 font-mono text-xs">
        <p>DISTORION PROJECT © 2250. ALL RIGHTS RESERVED.</p>
        <p className="mt-2">UNAUTHORIZED ACCESS WILL RESULT IN IMMEDIATE TERMINATION.</p>
      </footer>
    </div>
  );
};

export default App;