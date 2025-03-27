
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { ArrowLeft, AlertCircle, Info, CreditCard, Smartphone, Wallet } from 'lucide-react';

// Sample game data
const games = [
  { id: 1, name: "Mobile Legends", image: "https://images.unsplash.com/photo-1627856014029-0457d3d9d4bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
  { id: 2, name: "PUBG Mobile", image: "https://images.unsplash.com/photo-1589241062272-c0a000072dfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" },
  { id: 3, name: "Genshin Impact", image: "https://images.unsplash.com/photo-1636487658608-8dd7577954e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
  { id: 4, name: "Free Fire", image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" },
  { id: 5, name: "Call of Duty: Mobile", image: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
];

// Sample top-up options
const topUpOptions = [
  { id: 1, amount: "50 Diamonds", price: 0.99, bonus: "0 Bonus" },
  { id: 2, amount: "100 Diamonds", price: 1.99, bonus: "0 Bonus" },
  { id: 3, amount: "310 Diamonds", price: 4.99, bonus: "31 Bonus" },
  { id: 4, amount: "520 Diamonds", price: 9.99, bonus: "52 Bonus" },
  { id: 5, amount: "1060 Diamonds", price: 19.99, bonus: "106 Bonus" },
  { id: 6, amount: "2180 Diamonds", price: 39.99, bonus: "218 Bonus" },
];

// Payment methods
const paymentMethods = [
  { id: 1, name: "Credit/Debit Card", icon: <CreditCard className="text-neon-blue" size={24} /> },
  { id: 2, name: "Mobile Payment", icon: <Smartphone className="text-neon-purple" size={24} /> },
  { id: 3, name: "E-Wallet", icon: <Wallet className="text-neon-pink" size={24} /> },
];

const TopUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const gameIdParam = queryParams.get('game');
  
  const [selectedGame, setSelectedGame] = useState<number | null>(gameIdParam ? parseInt(gameIdParam) : null);
  const [userId, setUserId] = useState('');
  const [zone, setZone] = useState('');
  const [selectedTopUp, setSelectedTopUp] = useState<number | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<number | null>(null);
  const [step, setStep] = useState(1);
  
  // Set the selected game when URL parameter changes
  useEffect(() => {
    if (gameIdParam) {
      setSelectedGame(parseInt(gameIdParam));
    }
  }, [gameIdParam]);
  
  const game = selectedGame ? games.find(g => g.id === selectedGame) : null;
  const topUpOption = selectedTopUp ? topUpOptions.find(t => t.id === selectedTopUp) : null;
  const paymentMethod = selectedPayment ? paymentMethods.find(p => p.id === selectedPayment) : null;
  
  const handleGameSelect = (gameId: number) => {
    setSelectedGame(gameId);
    // Update URL
    navigate(`/top-up?game=${gameId}`);
  };
  
  const handleContinue = () => {
    if (step === 1 && selectedGame && userId && zone) {
      setStep(2);
    } else if (step === 2 && selectedTopUp) {
      setStep(3);
    } else if (step === 3 && selectedPayment) {
      // Navigate to payment page with all details
      navigate('/payment', { 
        state: { 
          game, 
          userId, 
          zone, 
          topUpOption, 
          paymentMethod 
        } 
      });
    }
  };
  
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  return (
    <Layout>
      <section className="py-12 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 flex items-center">
            <button onClick={handleBack} className="p-2 rounded-full glass-card mr-4">
              <ArrowLeft size={18} />
            </button>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              {step === 1 ? "Select Game & Enter ID" : step === 2 ? "Choose Top-Up Amount" : "Select Payment Method"}
            </h1>
          </div>
          
          {/* Progress bar */}
          <div className="relative mb-12">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-white/10 rounded-full"></div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full transition-all duration-300" style={{ width: `${(step / 3) * 100}%` }}></div>
            <div className="relative flex justify-between">
              {[1, 2, 3].map((s) => (
                <div 
                  key={s}
                  className={`w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-300 ${
                    s <= step ? 'bg-gradient-to-r from-neon-blue to-neon-purple' : 'glass-card'
                  }`}
                >
                  <span className={s <= step ? 'text-white' : 'text-muted-foreground'}>{s}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-6 md:p-8">
            {/* Step 1: Select Game & Enter ID */}
            {step === 1 && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Select Game</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {games.map((game) => (
                      <button
                        key={game.id}
                        onClick={() => handleGameSelect(game.id)}
                        className={`aspect-square rounded-lg overflow-hidden relative transition-all duration-300 ${
                          selectedGame === game.id ? 'ring-2 ring-neon-blue' : 'opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img 
                          src={game.image} 
                          alt={game.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                        <div className="absolute bottom-2 left-0 right-0 text-center text-white text-xs font-medium px-1">
                          {game.name}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-4">Enter Game ID</h2>
                  <div className="glass-card p-4 rounded-lg mb-4 flex items-start gap-3">
                    <Info size={18} className="text-neon-blue mt-1" />
                    <p className="text-sm text-muted-foreground">
                      To find your User ID, open the game and go to your profile. The ID number is usually displayed there.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="userId" className="block text-sm font-medium mb-2">
                        User ID
                      </label>
                      <input
                        type="text"
                        id="userId"
                        placeholder="Enter your User ID"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-neon-blue focus:outline-none transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="zone" className="block text-sm font-medium mb-2">
                        Zone ID (if applicable)
                      </label>
                      <input
                        type="text"
                        id="zone"
                        placeholder="Enter your Zone ID (optional for some games)"
                        value={zone}
                        onChange={(e) => setZone(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-neon-blue focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Step 2: Choose Top-Up Amount */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-lg overflow-hidden">
                    <img 
                      src={game?.image} 
                      alt={game?.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">{game?.name}</h2>
                    <p className="text-sm text-muted-foreground">
                      ID: {userId} {zone && `• Zone: ${zone}`}
                    </p>
                  </div>
                </div>
                
                <h3 className="text-lg font-medium mb-3">Select Amount</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {topUpOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedTopUp(option.id)}
                      className={`p-4 rounded-lg transition-all duration-300 ${
                        selectedTopUp === option.id 
                          ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white' 
                          : 'glass-card hover:bg-white/10'
                      }`}
                    >
                      <div className="text-lg font-medium mb-1">{option.amount}</div>
                      <div className="text-sm opacity-80">{option.bonus}</div>
                      <div className="mt-2 text-base font-medium">${option.price.toFixed(2)}</div>
                    </button>
                  ))}
                </div>
                
                <div className="glass-card p-4 rounded-lg flex items-start gap-3 mt-6">
                  <AlertCircle size={18} className="text-neon-purple mt-1" />
                  <p className="text-sm text-muted-foreground">
                    Please select the correct amount. Once purchased, diamonds will be automatically added to your account.
                  </p>
                </div>
              </div>
            )}
            
            {/* Step 3: Select Payment Method */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-lg overflow-hidden">
                    <img 
                      src={game?.image} 
                      alt={game?.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">{game?.name}</h2>
                    <div className="flex space-x-2 text-sm">
                      <span className="text-muted-foreground">
                        ID: {userId} {zone && `• Zone: ${zone}`}
                      </span>
                      <span className="text-neon-blue">
                        {topUpOption?.amount}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-4 rounded-lg mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">Amount</span>
                    <span>{topUpOption?.amount}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">Bonus</span>
                    <span>{topUpOption?.bonus}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">Price</span>
                    <span>${topUpOption?.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 mt-2 border-t border-white/10">
                    <span className="font-medium">Total</span>
                    <span className="font-medium text-neon-blue">${topUpOption?.price.toFixed(2)}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-medium mb-3">Select Payment Method</h3>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedPayment(method.id)}
                      className={`w-full p-4 rounded-lg flex items-center justify-between transition-all duration-300 ${
                        selectedPayment === method.id 
                          ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white' 
                          : 'glass-card hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {method.icon}
                        <span className="font-medium">{method.name}</span>
                      </div>
                      <div className={`w-5 h-5 rounded-full ${
                        selectedPayment === method.id 
                          ? 'bg-white' 
                          : 'border border-white/30'
                      }`}>
                        {selectedPayment === method.id && (
                          <div className="w-3 h-3 bg-neon-blue rounded-full m-1"></div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Continue button */}
            <div className="mt-8">
              <button
                onClick={handleContinue}
                disabled={
                  (step === 1 && (!selectedGame || !userId)) || 
                  (step === 2 && !selectedTopUp) || 
                  (step === 3 && !selectedPayment)
                }
                className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                  ((step === 1 && (!selectedGame || !userId)) || 
                  (step === 2 && !selectedTopUp) || 
                  (step === 3 && !selectedPayment))
                    ? 'bg-white/5 text-white/50 cursor-not-allowed'
                    : 'neon-button'
                }`}
              >
                {step === 3 ? 'Proceed to Payment' : 'Continue'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TopUp;
