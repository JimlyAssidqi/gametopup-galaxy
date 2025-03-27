
import React, { useState } from 'react';
import GameCard from './GameCard';
import { ChevronDown } from 'lucide-react';

// Sample game data
const gamesData = [
  {
    id: 1,
    name: "Mobile Legends",
    imageUrl: "https://images.unsplash.com/photo-1627856014029-0457d3d9d4bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "MOBA",
    popularity: 95
  },
  {
    id: 2,
    name: "PUBG Mobile",
    imageUrl: "https://images.unsplash.com/photo-1589241062272-c0a000072dfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    category: "Battle Royale",
    popularity: 92
  },
  {
    id: 3,
    name: "Genshin Impact",
    imageUrl: "https://images.unsplash.com/photo-1636487658608-8dd7577954e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "RPG",
    popularity: 89
  },
  {
    id: 4,
    name: "Free Fire",
    imageUrl: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    category: "Battle Royale",
    popularity: 85
  },
  {
    id: 5,
    name: "Call of Duty: Mobile",
    imageUrl: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "FPS",
    popularity: 83
  },
  {
    id: 6,
    name: "League of Legends: Wild Rift",
    imageUrl: "https://images.unsplash.com/photo-1624085132343-11aabc6c6b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1158&q=80",
    category: "MOBA",
    popularity: 79
  },
  {
    id: 7,
    name: "Minecraft",
    imageUrl: "https://images.unsplash.com/photo-1507457379470-08b800bebc67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    category: "Sandbox",
    popularity: 76
  },
  {
    id: 8,
    name: "Arena of Valor",
    imageUrl: "https://images.unsplash.com/photo-1614294149010-950b698f72c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "MOBA",
    popularity: 74
  }
];

// Category filter options
const categories = [
  "Semua",
  "MOBA",
  "Battle Royale",
  "RPG",
  "FPS",
  "Sandbox"
];

const GameGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [showFilter, setShowFilter] = useState(false);
  
  // Filter games by category
  const filteredGames = selectedCategory === "Semua" 
    ? gamesData 
    : gamesData.filter(game => game.category === selectedCategory);
  
  return (
    <section id="featured-games" className="py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            Game Populer
          </h2>
          
          {/* Category filter (mobile) */}
          <div className="relative md:hidden mt-4">
            <button 
              className="flex items-center justify-between w-full px-4 py-2 glass-card rounded-lg text-white"
              onClick={() => setShowFilter(!showFilter)}
            >
              <span>{selectedCategory}</span>
              <ChevronDown size={16} className={`transition-transform ${showFilter ? 'rotate-180' : ''}`} />
            </button>
            
            {showFilter && (
              <div className="absolute top-full left-0 right-0 mt-2 glass-card rounded-lg overflow-hidden z-20 animate-scale-in">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`w-full px-4 py-2 text-left hover:bg-white/10 transition-colors ${
                      category === selectedCategory ? 'bg-white/10 text-neon-blue' : 'text-white'
                    }`}
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowFilter(false);
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Category filter (desktop) */}
          <div className="hidden md:flex items-center space-x-2">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  category === selectedCategory 
                    ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white' 
                    : 'glass-card hover:bg-white/10 text-white'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Games grid */}
        <div className="game-grid">
          {filteredGames.map(game => (
            <GameCard 
              key={game.id} 
              id={game.id}
              name={game.name}
              imageUrl={game.imageUrl}
              category={game.category}
              popularity={game.popularity}
            />
          ))}
        </div>
        
        {/* View all button */}
        <div className="mt-10 text-center">
          <button className="neon-button">
            Lihat Semua Game
          </button>
        </div>
      </div>
    </section>
  );
};

export default GameGrid;
