
import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Check, ArrowRight, Download } from 'lucide-react';

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get data from location state
  const { game, userId, zone, topUpOption, paymentMethod, transactionId } = location.state || {};
  
  // Redirect to home if no transaction data
  useEffect(() => {
    if (!transactionId) {
      navigate('/');
    }
  }, [transactionId, navigate]);
  
  if (!transactionId) {
    return null; // Will redirect via useEffect
  }
  
  // Format date
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(date);
  };
  
  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center py-16 px-6 md:px-10">
        <div className="max-w-2xl w-full mx-auto">
          {/* Success Animation */}
          <div className="flex flex-col items-center justify-center mb-10">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center mb-6 animate-scale-in">
              <Check size={40} className="text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gradient animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Top-Up Successful!
            </h1>
            <p className="text-center text-muted-foreground animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Your game credits have been added to your account
            </p>
          </div>
          
          {/* Transaction Details */}
          <div className="glass-card rounded-xl p-6 md:p-8 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-xl font-semibold mb-6">Transaction Details</h2>
            
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-white/10">
                <span className="text-muted-foreground mb-1 sm:mb-0">Transaction ID</span>
                <span className="font-mono">{transactionId}</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-white/10">
                <span className="text-muted-foreground mb-1 sm:mb-0">Date & Time</span>
                <span>{formatDate(new Date())}</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-white/10">
                <span className="text-muted-foreground mb-1 sm:mb-0">Game</span>
                <span>{game.name}</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-white/10">
                <span className="text-muted-foreground mb-1 sm:mb-0">User ID</span>
                <span>{userId} {zone && `(Zone: ${zone})`}</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-white/10">
                <span className="text-muted-foreground mb-1 sm:mb-0">Top-Up</span>
                <div className="flex flex-col items-end">
                  <span>{topUpOption.amount}</span>
                  <span className="text-sm text-neon-blue">{topUpOption.bonus} bonus</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-white/10">
                <span className="text-muted-foreground mb-1 sm:mb-0">Payment Method</span>
                <div className="flex items-center space-x-2">
                  {paymentMethod.icon}
                  <span>{paymentMethod.name}</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3">
                <span className="text-muted-foreground mb-1 sm:mb-0">Amount Paid</span>
                <span className="text-xl font-semibold text-neon-blue">${topUpOption.price.toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          {/* Status Message */}
          <div className="glass-card p-4 rounded-lg flex items-center space-x-3 mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center flex-shrink-0">
              <Check size={20} className="text-white" />
            </div>
            <div>
              <p className="font-medium">Top-Up completed successfully</p>
              <p className="text-sm text-muted-foreground">
                Your game credits have been added to your account
              </p>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link to="/" className="w-full sm:w-auto neon-button flex items-center justify-center">
              Back to Home <ArrowRight size={16} className="ml-2" />
            </Link>
            <button className="w-full sm:w-auto px-6 py-3 glass-card hover:bg-white/10 rounded-lg transition-colors flex items-center justify-center">
              Download Receipt <Download size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Success;
