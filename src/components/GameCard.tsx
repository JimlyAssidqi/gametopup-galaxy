
import React from 'react';
import { Link } from 'react-router-dom';

interface GameCardProps {
  id: number;
  name: string;
  imageUrl: string;
  category: string;
  popularity: number; // 1-100
}

const GameCard: React.FC<GameCardProps> = ({ id, name, imageUrl, category, popularity }) => {
  return (
    <Link to={`/top-up?game=${id}`} className="block">
      <div className="glass-card rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-neon-blue">
        <div className="relative aspect-[4/5]">
          {/* Image */}
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          {/* Category tag */}
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs">
            {category}
          </div>
          
          {/* Popularity indicator */}
          <div className="absolute top-3 right-3 flex items-center space-x-1 px-2 py-1 rounded-full bg-black/40 backdrop-blur-sm">
            <span className="text-neon-blue">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </span>
            <span className="text-white text-xs">{popularity}%</span>
          </div>
          
          {/* Game name */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-semibold text-lg">{name}</h3>
          </div>
        </div>
        
        {/* Call to action button */}
        <div className="p-4 flex justify-between items-center bg-black/40">
          <span className="text-white text-sm">Top Up Now</span>
          <span className="w-6 h-6 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
