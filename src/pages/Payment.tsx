
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { ArrowLeft, Check, Copy, Clock, AlertCircle } from 'lucide-react';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds
  const [processing, setProcessing] = useState(false);
  
  // Get data from location state
  const { game, userId, zone, topUpOption, paymentMethod } = location.state || {};
  
  // Redirect to top-up page if no payment data
  useEffect(() => {
    if (!game || !topUpOption || !paymentMethod) {
      navigate('/top-up');
    }
  }, [game, topUpOption, paymentMethod, navigate]);
  
  // Countdown timer
  useEffect(() => {
    if (timeLeft <= 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [timeLeft]);
  
  // Format time as mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const handlePaymentConfirmation = () => {
    setProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      // Navigate to success page
      navigate('/success', { 
        state: { 
          game, 
          userId, 
          zone, 
          topUpOption, 
          paymentMethod,
          transactionId: `TRX${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`
        } 
      });
    }, 2000);
  };
  
  if (!game || !topUpOption || !paymentMethod) {
    return null; // Will redirect via useEffect
  }
  
  // Payment details based on payment method
  const getPaymentInstructions = () => {
    switch(paymentMethod.id) {
      case 1: // Credit/Debit Card
        return (
          <div className="animate-fade-in">
            <div className="glass-card rounded-lg p-5 mb-5">
              <h3 className="text-lg font-medium mb-3">Enter Card Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-1">Card Number</label>
                  <input 
                    type="text" 
                    placeholder="1234 5678 9012 3456" 
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-neon-blue focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-1">Expiry Date</label>
                    <input 
                      type="text" 
                      placeholder="MM/YY" 
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-neon-blue focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-1">CVC</label>
                    <input 
                      type="text" 
                      placeholder="123" 
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-neon-blue focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-1">Cardholder Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-neon-blue focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <button 
              onClick={handlePaymentConfirmation}
              disabled={processing}
              className={`w-full neon-button py-3 flex items-center justify-center ${processing ? 'opacity-70' : ''}`}
            >
              {processing ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                `Pay $${topUpOption.price.toFixed(2)}`
              )}
            </button>
          </div>
        );
        
      case 2: // Mobile Payment
        return (
          <div className="animate-fade-in">
            <div className="glass-card rounded-lg p-5 mb-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Scan QR Code</h3>
                <div className="flex items-center space-x-2 text-sm">
                  <Clock size={14} className="text-neon-purple" />
                  <span>Expires in {formatTime(timeLeft)}</span>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg mx-auto w-48 h-48 mb-5 flex items-center justify-center">
                <svg 
                  viewBox="0 0 24 24" 
                  width="100" 
                  height="100"
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                  className="text-black" 
                >
                  <path d="M3 3h6v6H3zM15 3h6v6h-6zM3 15h6v6H3zM15 15h6v6h-6zM7.5 11.5h1M12 9v1M12 14v1M15.5 11.5h1M11.5 12.5v-1h1v1z" strokeWidth="2" />
                </svg>
              </div>
              
              <div className="text-center mb-4">
                <p className="text-muted-foreground text-sm mb-2">Or pay with mobile number</p>
                <div className="flex items-center space-x-2 justify-center">
                  <input 
                    type="text" 
                    value="089123456789" 
                    readOnly
                    className="px-3 py-2 rounded bg-white/5 border border-white/10 text-center"
                  />
                  <button 
                    onClick={() => handleCopy("089123456789")}
                    className="p-2 rounded bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    {copied ? <Check size={16} className="text-neon-blue" /> : <Copy size={16} />}
                  </button>
                </div>
              </div>
              
              <div className="bg-neon-purple/10 border border-neon-purple/20 rounded-lg p-3 flex items-start space-x-3 mb-4">
                <AlertCircle size={18} className="text-neon-purple mt-0.5" />
                <p className="text-sm">
                  After completing payment via your mobile banking or e-wallet app, your account will be topped up automatically within 5 minutes.
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <button 
                onClick={() => navigate(-1)} 
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handlePaymentConfirmation} 
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                I've made the payment
              </button>
            </div>
          </div>
        );
        
      case 3: // E-Wallet
        return (
          <div className="animate-fade-in">
            <div className="glass-card rounded-lg p-5 mb-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Transfer to E-Wallet</h3>
                <div className="flex items-center space-x-2 text-sm">
                  <Clock size={14} className="text-neon-purple" />
                  <span>Expires in {formatTime(timeLeft)}</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-5">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount</span>
                  <span className="font-medium">${topUpOption.price.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">E-Wallet ID</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono">WALLET128456</span>
                    <button 
                      onClick={() => handleCopy("WALLET128456")}
                      className="p-1 rounded bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      {copied ? <Check size={14} className="text-neon-blue" /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Account Name</span>
                  <span>GameTopup Galaxy</span>
                </div>
              </div>
              
              <ol className="space-y-3 mb-5">
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue flex-shrink-0">1</span>
                  <span>Open your E-Wallet app and select "Send Money"</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue flex-shrink-0">2</span>
                  <span>Enter the E-Wallet ID and amount shown above</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue flex-shrink-0">3</span>
                  <span>Verify the recipient name is "GameTopup Galaxy"</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue flex-shrink-0">4</span>
                  <span>Complete the transaction and click "I've made the payment" below</span>
                </li>
              </ol>
              
              <div className="bg-neon-purple/10 border border-neon-purple/20 rounded-lg p-3 flex items-start space-x-3">
                <AlertCircle size={18} className="text-neon-purple mt-0.5" />
                <p className="text-sm">
                  After completing payment, your account will be topped up automatically within 5 minutes.
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <button 
                onClick={() => navigate(-1)} 
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handlePaymentConfirmation} 
                className="px-4 py-2 neon-button"
              >
                I've made the payment
              </button>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <Layout>
      <section className="py-12 px-6 md:px-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-8 flex items-center">
            <button onClick={() => navigate(-1)} className="p-2 rounded-full glass-card mr-4">
              <ArrowLeft size={18} />
            </button>
            <h1 className="text-2xl md:text-3xl font-bold text-gradient">
              Payment
            </h1>
          </div>
          
          {/* Payment summary */}
          <div className="glass-card rounded-xl p-6 md:p-8 mb-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-lg overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{game.name}</h2>
                <div className="flex space-x-2 text-sm">
                  <span className="text-muted-foreground">
                    ID: {userId} {zone && `• Zone: ${zone}`}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">Amount</span>
                <span>{topUpOption.amount}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">Bonus</span>
                <span>{topUpOption.bonus}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">Price</span>
                <span>${topUpOption.price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center pt-2 mt-2 border-t border-white/10">
                <span className="font-medium">Total</span>
                <span className="font-medium text-neon-blue">${topUpOption.price.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-muted-foreground text-sm mb-6">
              <span>Payment Method:</span>
              <div className="flex items-center space-x-2">
                {paymentMethod.icon}
                <span>{paymentMethod.name}</span>
              </div>
            </div>
            
            {/* Payment instructions */}
            {getPaymentInstructions()}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Payment;
