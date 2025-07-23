import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, User } from 'lucide-react';
import ShoppingCart from './ShoppingCart';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-white/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-serif font-bold text-white">
            Himalayan Care
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white/90 hover:text-goldenYellow transition-colors"> {/* Changed here */}
              Home
            </a>
            <a href="#products" className="text-white/90 hover:text-goldenYellow transition-colors"> {/* Changed here */}
              Products
            </a>
            <a href="#sustainability" className="text-white/90 hover:text-goldenYellow transition-colors"> {/* Changed here */}
              Sustainability
            </a>
            <a href="#about" className="text-white/90 hover:text-goldenYellow transition-colors"> {/* Changed here */}
              About
            </a>
            <a href="#contact" className="text-white/90 hover:text-goldenYellow transition-colors"> {/* Changed here */}
              Contact
            </a>
          </div>
          
          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <User className="h-5 w-5" />
            </Button>
            <ShoppingCart />
            <Button variant="glass">
              Shop Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-white/90 hover:text-white transition-colors py-2">
                Home
              </a>
              <a href="#products" className="text-white/90 hover:text-white transition-colors py-2">
                Products
              </a>
              <a href="#sustainability" className="text-white/90 hover:text-white transition-colors py-2">
                Sustainability
              </a>
              <a href="#about" className="text-white/90 hover:text-white transition-colors py-2">
                About
              </a>
              <a href="#contact" className="text-white/90 hover:text-white transition-colors py-2">
                Contact
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <User className="h-5 w-5" />
              </Button>
              <ShoppingCart />
              <Button variant="glass">
                Shop Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;