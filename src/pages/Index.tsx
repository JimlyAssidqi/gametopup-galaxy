
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
            Cara Kerjanya
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="glass-card p-6 rounded-xl relative overflow-hidden">
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center">
                <span className="text-neon-blue font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-6">Pilih Game Anda</h3>
              <p className="text-muted-foreground mb-6">
                Jelajahi berbagai pilihan game kami dan pilih yang ingin Anda top-up.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Pilih Game" 
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
            
            {/* Step 2 */}
            <div className="glass-card p-6 rounded-xl relative overflow-hidden">
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-neon-purple/20 flex items-center justify-center">
                <span className="text-neon-purple font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-6">Masukkan Detail Anda</h3>
              <p className="text-muted-foreground mb-6">
                Masukkan ID game Anda dan pilih jumlah kredit yang ingin Anda beli.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Masukkan Detail" 
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
            
            {/* Step 3 */}
            <div className="glass-card p-6 rounded-xl relative overflow-hidden">
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center">
                <span className="text-neon-blue font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-6">Lakukan Pembayaran</h3>
              <p className="text-muted-foreground mb-6">
                Pilih metode pembayaran yang Anda inginkan dan selesaikan transaksi dengan aman.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" 
                alt="Lakukan Pembayaran" 
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/top-up" className="neon-button">
              Mulai Sekarang <ChevronRight size={16} className="ml-1 inline" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 px-6 md:px-10 bg-gradient-to-b from-background to-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            Kata Para Gamer
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan gamer puas yang mempercayai GameTopup Galaxy untuk kebutuhan gaming mereka
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
                "Proses top-up sangat cepat dan aman. Saya menerima kredit game saya langsung setelah pembayaran. Sangat direkomendasikan!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="ml-3">
                  <h4 className="font-medium">Alex Johnson</h4>
                  <p className="text-xs text-muted-foreground">Pemain Mobile Legends</p>
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
                "Tarif terbaik yang saya temukan untuk PUBG Mobile. Layanan pelanggannya sangat baik, dan mereka menyelesaikan masalah saya dalam hitungan menit."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="ml-3">
                  <h4 className="font-medium">Sarah Williams</h4>
                  <p className="text-xs text-muted-foreground">Pemain PUBG Mobile</p>
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
                "Saya sudah menggunakan GameTopup Galaxy selama lebih dari setahun. Prosesnya selalu lancar, dan saya suka bonus kredit di akhir pekan!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="ml-3">
                  <h4 className="font-medium">Michael Chen</h4>
                  <p className="text-xs text-muted-foreground">Pemain Genshin Impact</p>
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
              Siap Tingkatkan Game Anda?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan gamer yang mempercayai GameTopup Galaxy untuk top-up game yang cepat, aman, dan andal dengan tarif terbaik.
            </p>
            <Link to="/top-up" className="neon-button text-lg px-8 py-4">
              Mulai Top Up Sekarang
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
