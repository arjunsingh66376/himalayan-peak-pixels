import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, User } from 'lucide-react';
import ShoppingCart from './ShoppingCart';
import { Link } from 'react-router-dom'; // Import Link

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavLinkClick = () => {
    setIsMenuOpen(false); // Close mobile menu on navigation
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-white/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - can also be a Link to home */}
          <Link to="/" className="text-2xl font-serif font-bold text-white">
            Himalayan Care
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* For internal sections on the Home page, keep href="#id" if HomePage.tsx has those sections */}
            <a href="/#home" className="text-white/90 hover:text-goldenYellow transition-colors">
              Home
            </a>

            {/* Changed to Link for Productspage.tsx */}
            <Link to="/products" className="text-white/90 hover:text-goldenYellow transition-colors">
              Products
            </Link>

            {/* For other sections, if they are still within the HomePage or part of a multi-section page */}
            <a href="/#sustainability" className="text-white/90 hover:text-goldenYellow transition-colors">
              Sustainability
            </a>
            <a href="/#about" className="text-white/90 hover:text-goldenYellow transition-colors">
              About
            </a>
            <a href="/#contact" className="text-white/90 hover:text-goldenYellow transition-colors">
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
              {/* For internal sections on the Home page */}
              <a href="/#home" className="text-white/90 hover:text-white transition-colors py-2" onClick={handleNavLinkClick}>
                Home
              </a>
              {/* Changed to Link for Productspage.tsx */}
              <Link to="/products" className="text-white/90 hover:text-white transition-colors py-2" onClick={handleNavLinkClick}>
                Products
              </Link>
              <a href="/#sustainability" className="text-white/90 hover:text-white transition-colors py-2" onClick={handleNavLinkClick}>
                Sustainability
              </a>
              <a href="/#about" className="text-white/90 hover:text-white transition-colors py-2" onClick={handleNavLinkClick}>
                About
              </a>
              <a href="/#contact" className="text-white/90 hover:text-white transition-colors py-2" onClick={handleNavLinkClick}>
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