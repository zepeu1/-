import React from 'react';
import { Activity, Users, Radio, TriangleAlert, Globe, Skull } from 'lucide-react';

const StatusDashboard: React.FC = () => {
  return (
    <section className="py-12 bg-black border-y border-zinc-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-900/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="flex items-center gap-2 mb-8 text-zinc-500 font-mono text-xs tracking-widest uppercase">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          Live Surveillance Feed
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Stat Card 1 */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded hover:bg-zinc-900/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-red-950/30 rounded text-red-500 group-hover:text-red-400 transition-colors">
                    <Skull className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-zinc-600">INFECTED RATIO</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1 tracking-tighter">
                24.8<span className="text-sm text-zinc-500">%</span>
            </div>
            <div className="text-xs text-red-500 flex items-center gap-1 font-mono">
                <Activity className="w-3 h-3" /> +1.2% this week
            </div>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded hover:bg-zinc-900/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-cyan-950/30 rounded text-cyan-500 group-hover:text-cyan-400 transition-colors">
                    <Users className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-zinc-600">SURVIVORS (EST)</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1 tracking-tighter">
                482,910
            </div>
            <div className="text-xs text-zinc-500 flex items-center gap-1 font-mono">
                <Globe className="w-3 h-3" /> Seoul Metropolitan
            </div>
          </div>

          {/* Stat Card 3 */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded hover:bg-zinc-900/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-yellow-950/30 rounded text-yellow-500 group-hover:text-yellow-400 transition-colors">
                    <TriangleAlert className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-zinc-600">THREAT LEVEL</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1 tracking-tighter text-shadow-red">
                DEFCON 1
            </div>
            <div className="text-xs text-yellow-500 flex items-center gap-1 font-mono animate-pulse">
                CRITICAL FAILURE IMMINENT
            </div>
          </div>

          {/* Stat Card 4 */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded hover:bg-zinc-900/50 transition-colors group">
             <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-purple-950/30 rounded text-purple-500 group-hover:text-purple-400 transition-colors">
                    <Radio className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-zinc-600">LATEST SIGNAL</span>
            </div>
            <div className="font-mono text-sm text-zinc-300 leading-relaxed overflow-hidden h-12 relative">
                <div className="animate-pulse">"Sector 7 breach detected. Requesting immediate backup from KSA..."</div>
            </div>
            <div className="text-xs text-zinc-600 flex items-center gap-1 font-mono mt-1">
                2 mins ago
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatusDashboard;