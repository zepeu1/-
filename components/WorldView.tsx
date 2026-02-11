import React from 'react';
import { TIMELINE } from '../constants';

const WorldView: React.FC = () => {
  return (
    <section id="world" className="py-24 bg-zinc-950 relative border-t border-zinc-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">
          <span className="text-red-600">HISTORY</span> ARCHIVE
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 h-full w-px bg-zinc-700 transform md:-translate-x-1/2"></div>

          {TIMELINE.map((event, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row items-start mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-black border-2 border-red-500 rounded-full transform -translate-x-[7px] md:-translate-x-1/2 mt-1.5 z-10"></div>
              
              {/* Content Space */}
              <div className="hidden md:block w-1/2"></div>
              
              {/* Content Box */}
              <div className="pl-12 md:pl-0 md:w-1/2 md:px-10">
                <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-lg backdrop-blur-sm hover:border-zinc-600 transition-colors">
                  <span className="text-red-500 font-mono text-sm tracking-wider mb-2 block">{event.year}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lore Summary */}
        <div className="mt-20 max-w-3xl mx-auto text-center space-y-4">
             <div className="p-8 border border-zinc-800 bg-black/40 rounded-xl">
                <h3 className="text-2xl font-bold text-white mb-4">The Collapse</h3>
                <p className="text-gray-400">
                    인류 생존율 약 <span className="text-red-500 font-bold">1%</span>. 
                    <br/>
                    오염체들이 지배하는 세상에서 살아남은 이들은 각자의 신념에 따라 세력(K.S.A, C.R.A, 백골교)을 형성했다.
                    <br/>
                    뒤틀림은 멈추지 않으며, 언제든 당신의 이성을 갉아먹을 준비가 되어있다.
                </p>
             </div>
        </div>
      </div>
    </section>
  );
};

export default WorldView;