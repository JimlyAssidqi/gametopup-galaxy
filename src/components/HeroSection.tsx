
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] max-h-[900px] flex items-center justify-center px-6 md:px-10 overflow-hidden dot-pattern">
      {/* Background elements */}
      <div className="absolute top-40 -left-20 w-72 h-72 bg-neon-blue/20 rounded-full blur-[80px] animate-float" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-neon-purple/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '1s' }} />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-20">
        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-sm animate-fade-in">
            <span className="text-neon-blue">Baru</span> &middot; Top up instan untuk semua game favorit Anda
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Tingkatkan <span className="text-gradient">Pengalaman Gaming</span> Anda
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Layanan top-up game yang cepat, aman, dan terpercaya dengan tarif terbaik.
            Top up game favorit Anda dalam hitungan detik dan kembali ke yang terpenting - bermain!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link to="/top-up" className="neon-button w-full sm:w-auto flex items-center justify-center">
              Mulai Top Up <ArrowRight size={18} className="ml-2" />
            </Link>
            <a href="#featured-games" className="px-6 py-3 w-full sm:w-auto flex items-center justify-center text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors">
              Jelajahi Game
            </a>
          </div>
          
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-neon-blue">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
              <span className="text-sm">Layanan bintang 5</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-purple">
                <path d="M5.7 15.3a4 4 0 0 0 5.6 0l5.6-5.6a2 2 0 0 0-2.8-2.8L8 13"></path>
                <path d="M2 12a4 4 0 0 1 3.7-4"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              <span className="text-sm">Dukungan 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-blue">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span className="text-sm">Pengiriman Instan</span>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-neon-blue/20 to-transparent blur-lg rounded-full"></div>
            <div className="relative glass-card rounded-2xl overflow-hidden p-4 border-2 border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Pengalaman Gaming" 
                className="w-full h-auto rounded-lg object-cover"
                style={{ width: '500px', maxWidth: '100%' }}
              />
              <div className="absolute bottom-8 left-8 right-8 glass-card p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold">Populer Saat Ini</h3>
                    <p className="text-sm text-white/70">Mobile Legends</p>
                  </div>
                  <div className="bg-gradient-to-r from-neon-blue to-neon-purple p-3 rounded-lg shadow-neon-blue">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 8L18 14H6L12 8Z" fill="white"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
