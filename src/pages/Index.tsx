
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import PromoCarousel from '../components/PromoCarousel';
import GameGrid from '../components/GameGrid';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <PromoCarousel />
      <GameGrid />
      
      {/* How It Works Section */}
      <section className="py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="glass-card p-6 rounded-xl relative overflow-hidden">
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center">
                <span className="text-neon-blue font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-6">Select Your Game</h3>
              <p className="text-muted-foreground mb-6">
                Browse our wide selection of games and choose the one you want to top up.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Select Game" 
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
            
            {/* Step 2 */}
            <div className="glass-card p-6 rounded-xl relative overflow-hidden">
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-neon-purple/20 flex items-center justify-center">
                <span className="text-neon-purple font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-6">Enter Your Details</h3>
              <p className="text-muted-foreground mb-6">
                Enter your game ID and select the amount of credits you want to purchase.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Enter Details" 
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
            
            {/* Step 3 */}
            <div className="glass-card p-6 rounded-xl relative overflow-hidden">
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center">
                <span className="text-neon-blue font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-6">Make Payment</h3>
              <p className="text-muted-foreground mb-6">
                Choose your preferred payment method and complete the transaction securely.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" 
                alt="Make Payment" 
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/top-up" className="neon-button">
              Get Started Now <ChevronRight size={16} className="ml-1 inline" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 px-6 md:px-10 bg-gradient-to-b from-background to-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            What Gamers Say
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Join thousands of satisfied gamers who trust GameTopup Galaxy for their gaming needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="glass-card p-6 rounded-xl relative">
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <svg key={index} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-neon-blue">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-6">
                "The top-up process was incredibly fast and secure. I received my game credits instantly after payment. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="ml-3">
                  <h4 className="font-medium">Alex Johnson</h4>
                  <p className="text-xs text-muted-foreground">Mobile Legends Player</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="glass-card p-6 rounded-xl relative">
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <svg key={index} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-neon-blue">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-6">
                "Best rates I've found for PUBG Mobile. The customer service is excellent, and they resolved my issue within minutes."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="ml-3">
                  <h4 className="font-medium">Sarah Williams</h4>
                  <p className="text-xs text-muted-foreground">PUBG Mobile Player</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="glass-card p-6 rounded-xl relative">
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <svg key={index} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-neon-blue">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-6">
                "I've been using GameTopup Galaxy for over a year now. The process is always smooth, and I love the bonus credits on weekends!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="ml-3">
                  <h4 className="font-medium">Michael Chen</h4>
                  <p className="text-xs text-muted-foreground">Genshin Impact Player</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-neon-blue/20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-neon-purple/20 blur-[120px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="glass-card p-10 md:p-16 rounded-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Ready to Power Up Your Game?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of gamers who trust GameTopup Galaxy for fast, secure, and reliable game top-ups at the best rates.
            </p>
            <Link to="/top-up" className="neon-button text-lg px-8 py-4">
              Start Top Up Now
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
