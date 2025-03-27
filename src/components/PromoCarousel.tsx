
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample promo data
const promoData = [
  {
    id: 1,
    title: "Bonus 50% untuk Top-Up Pertama",
    description: "Dapatkan kredit tambahan 50% pada transaksi pertama Anda!",
    background: "bg-gradient-to-r from-neon-blue to-neon-purple",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
  },
  {
    id: 2,
    title: "Spesial Akhir Pekan: Diskon 20%",
    description: "Setiap akhir pekan, nikmati diskon spesial untuk semua game!",
    background: "bg-gradient-to-r from-neon-purple to-neon-pink",
    imageUrl: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 3,
    title: "Paket Bundel Spesial",
    description: "Beli paket bundel dan hemat hingga 30% untuk game favorit Anda!",
    background: "bg-gradient-to-r from-neon-pink to-neon-blue",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
];

const PromoCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % promoData.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex - 1 + promoData.length) % promoData.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  // Auto slide
  useEffect(() => {
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);
  
  // Pause auto slide on hover
  const handleMouseEnter = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };
  
  const handleMouseLeave = () => {
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };
  
  return (
    <section className="py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent inline-block">
          Promosi Spesial
        </h2>
        
        <div 
          className="relative overflow-hidden rounded-2xl glass-card h-[400px] md:h-[500px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Slides */}
          <div className="h-full">
            {promoData.map((promo, index) => (
              <div 
                key={promo.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <div className="absolute inset-0 bg-black/30 z-10"></div>
                <img 
                  src={promo.imageUrl} 
                  alt={promo.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className={`absolute bottom-0 left-0 right-0 p-8 z-20 ${promo.background}`}>
                  <div className="max-w-3xl">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{promo.title}</h3>
                    <p className="text-white/90 text-sm md:text-base mb-4">{promo.description}</p>
                    <button className="bg-white text-black font-medium py-2 px-6 rounded-lg hover:bg-white/90 transition-colors">
                      Klaim Sekarang
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-4 z-30 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center bg-black/20 backdrop-blur-sm border border-white/10 text-white hover:bg-black/30 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-4 z-30 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center bg-black/20 backdrop-blur-sm border border-white/10 text-white hover:bg-black/30 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
          
          {/* Dots indicator */}
          <div className="absolute bottom-28 left-0 right-0 z-30 flex justify-center space-x-2">
            {promoData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-white' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoCarousel;
