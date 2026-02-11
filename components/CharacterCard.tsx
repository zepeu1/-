import React from 'react';
import { Character, Faction } from '../types';

interface CharacterCardProps {
  character: Character;
  faction: Faction;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, faction }) => {
  const imageUrl = `https://igx.kr/n/hM/${character.code}/1`;

  // Determine card style based on faction
  const borderColor = faction.id === 'POLLUTED' ? 'border-red-900' :
                      faction.id === 'KSA' ? 'border-cyan-900' :
                      faction.id === 'CULT' ? 'border-purple-900' : 'border-orange-900';

  const glowColor = faction.id === 'POLLUTED' ? 'group-hover:shadow-red-900/50' :
                    faction.id === 'KSA' ? 'group-hover:shadow-cyan-900/50' :
                    faction.id === 'CULT' ? 'group-hover:shadow-purple-900/50' : 'group-hover:shadow-orange-900/50';

  return (
    <div className={`group relative bg-zinc-900 border ${borderColor} rounded-lg overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl ${glowColor}`}>
      
      {/* Header / ID Strip */}
      <div className={`h-1 w-full ${faction.color.split(' ')[0].replace('text-', 'bg-')}`}></div>

      <div className="flex flex-col md:flex-row h-full">
        {/* Image Section */}
        <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden bg-black">
             <img 
                src={imageUrl} 
                alt={character.name}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
             />
             <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-zinc-900 to-transparent h-20"></div>
             
             {/* Rank Badge */}
             <div className="absolute top-2 left-2 bg-black/80 backdrop-blur border border-zinc-700 px-2 py-0.5 text-xs font-mono text-white">
                RANK: <span className={character.rank === '0급' ? 'text-red-500 font-bold' : 'text-gray-300'}>{character.rank}</span>
             </div>
        </div>

        {/* Info Section */}
        <div className="w-full md:w-3/5 p-5 flex flex-col justify-between">
            <div>
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{character.name}</h3>
                    <span className="text-xs font-mono text-zinc-500">{character.age}세 / {character.gender}</span>
                </div>
                
                <div className="text-xs font-mono text-zinc-400 mb-4 flex flex-wrap gap-2">
                    <span className="bg-zinc-800 px-1.5 py-0.5 rounded">{character.mbti}</span>
                    <span className="bg-zinc-800 px-1.5 py-0.5 rounded text-white">{character.role}</span>
                </div>

                <div className="mb-4">
                    <p className="text-sm text-gray-300 line-clamp-2 md:line-clamp-none mb-2">{character.description}</p>
                    <div className="text-xs text-zinc-500">
                        <span className="text-zinc-300 font-semibold">이능:</span> {character.ability}
                    </div>
                     <div className="text-xs text-zinc-500">
                        <span className="text-zinc-300 font-semibold">무기:</span> {character.weapon}
                    </div>
                </div>
            </div>

            <div className="mt-4 pt-4 border-t border-zinc-800">
                <p className="font-serif italic text-sm text-gray-400">"{character.quote}"</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;