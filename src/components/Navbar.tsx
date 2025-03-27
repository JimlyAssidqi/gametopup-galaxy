
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, User, ShoppingCart } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/70 backdrop-blur-md border-b border-white/10 py-3' : 'py-5'
      }`}
    >
      <nav className="max-w-[1920px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
          >
            <div className="h-9 w-9 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              GameTopup Galaxy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm transition-colors ${location.pathname === '/' ? 'text-white' : 'text-muted-foreground hover:text-white'}`}
            >
              Beranda
            </Link>
            <Link 
              to="/top-up" 
              className={`text-sm transition-colors ${location.pathname === '/top-up' ? 'text-white' : 'text-muted-foreground hover:text-white'}`}
            >
              Top Up
            </Link>
            <Link 
              to="/admin" 
              className={`text-sm transition-colors ${location.pathname === '/admin' ? 'text-white' : 'text-muted-foreground hover:text-white'}`}
            >
              Admin
            </Link>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-muted-foreground hover:text-white transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-muted-foreground hover:text-white transition-colors">
              <User size={20} />
            </button>
            <Link 
              to="/top-up" 
              className="neon-button py-2 px-4 text-sm"
            >
              Mulai Top Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-muted-foreground hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`text-sm py-2 transition-colors ${location.pathname === '/' ? 'text-white' : 'text-muted-foreground hover:text-white'}`}
              >
                Beranda
              </Link>
              <Link 
                to="/top-up" 
                className={`text-sm py-2 transition-colors ${location.pathname === '/top-up' ? 'text-white' : 'text-muted-foreground hover:text-white'}`}
              >
                Top Up
              </Link>
              <Link 
                to="/admin" 
                className={`text-sm py-2 transition-colors ${location.pathname === '/admin' ? 'text-white' : 'text-muted-foreground hover:text-white'}`}
              >
                Admin
              </Link>
              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex space-x-4">
                  <button className="p-2 text-muted-foreground hover:text-white transition-colors">
                    <Search size={20} />
                  </button>
                  <button className="p-2 text-muted-foreground hover:text-white transition-colors">
                    <User size={20} />
                  </button>
                </div>
                <Link 
                  to="/top-up" 
                  className="neon-button py-2 px-4 text-sm"
                >
                  Mulai Top Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
