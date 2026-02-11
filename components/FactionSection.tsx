import React, { useState } from 'react';
import { FACTIONS, CHARACTERS } from '../constants';
import CharacterCard from './CharacterCard';

const FactionSection: React.FC = () => {
  const [activeFactionId, setActiveFactionId] = useState(FACTIONS[0].id);

  const activeFaction = FACTIONS.find(f => f.id === activeFactionId);
  const factionCharacters = CHARACTERS.filter(c => c.factionId === activeFactionId);

  return (
    <section id="database" className="py-24 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-white uppercase tracking-tighter">
            System <span className="text-zinc-600">Database</span>
        </h2>

        {/* Faction Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-zinc-800 pb-4">
          {FACTIONS.map(faction => (
            <button
              key={faction.id}
              onClick={() => setActiveFactionId(faction.id)}
              className={`px-6 py-3 font-mono text-sm tracking-widest transition-all duration-300 border-t-2 ${
                activeFactionId === faction.id
                  ? `bg-zinc-900 text-white ${faction.color.split(' ')[1]}` // Use border color class
                  : 'bg-transparent text-zinc-500 border-transparent hover:text-zinc-300'
              }`}
            >
              {faction.name}
            </button>
          ))}
        </div>

        {/* Faction Info */}
        {activeFaction && (
            <div className={`mb-12 p-6 rounded-lg border border-l-4 ${activeFaction.color} transition-all animate-fadeIn`}>
                <h3 className="text-2xl font-bold mb-2">{activeFaction.name}</h3>
                <div className="text-sm font-mono mb-4 opacity-70">LOCATION: {activeFaction.location}</div>
                <p className="text-lg leading-relaxed">{activeFaction.description}</p>
            </div>
        )}

        {/* Character Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {factionCharacters.map((char) => (
            <CharacterCard 
                key={char.code} 
                character={char} 
                faction={activeFaction!} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactionSection;