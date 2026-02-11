import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [glitchText, setGlitchText] = useState('Distorion');

  useEffect(() => {
    const interval = setInterval(() => {
      const chance = Math.random();
      if (chance > 0.9) {
        setGlitchText('D1st0r_ion');
        setTimeout(() => setGlitchText('Distorion'), 100);
      } else if (chance > 0.8) {
        setGlitchText('Di$tori0n');
        setTimeout(() => setGlitchText('Distorion'), 50);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-black to-black opacity-80 z-0"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay"></div>
      
      {/* Content */}
      <div className="z-10 text-center space-y-6 max-w-4xl px-4">
        <div className="inline-block border border-red-900/50 bg-red-950/20 px-3 py-1 rounded text-red-500 text-xs font-mono mb-4 tracking-widest animate-pulse">
          WARNING: SYSTEM POLLUTION DETECTED
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase relative select-none" data-text={glitchText}>
          <span className="relative z-10">{glitchText}</span>
          <span className="absolute top-0 left-0 -ml-[2px] text-red-500 opacity-70 animate-ping" style={{ animationDuration: '3s' }}>{glitchText}</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
          2250년 대한민국. <br className="md:hidden" />
          <span className="text-slate-200 font-semibold">이능</span>과 <span className="text-slate-200 font-semibold">뒤틀림</span>이 지배하는 세계.
        </p>

        <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center">
            <button 
                onClick={() => document.getElementById('world')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors clip-path-polygon"
                style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%)' }}
            >
                Enter Database
            </button>
            <div className="flex gap-4 text-xs font-mono text-gray-500">
                <span>LOC: SEOUL</span>
                <span>YEAR: 2250</span>
                <span>STATUS: CRITICAL</span>
            </div>
        </div>
      </div>

      {/* Footer Decoration */}
      <div className="absolute bottom-10 w-full flex justify-between px-10 font-mono text-xs text-gray-600">
         <div>[SYSTEM: ONLINE]</div>
         <div className="animate-bounce">SCROLL FOR INTEL ↓</div>
         <div>[VER: 4.2.0]</div>
      </div>
    </div>
  );
};

export default Hero;