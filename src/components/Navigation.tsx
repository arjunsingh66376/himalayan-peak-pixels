import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, User } from 'lucide-react';
import ShoppingCart from './ShoppingCart';
import { Link, useLocation } from 'react-router-dom';

// Import your logo file here
import logo from '../assets/logo.png';    // Adjust path if needed

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const handleNavLinkClick = () => setIsMenuOpen(false);

  // Helper function to check if a link is active
  const isActive = (path) => {
    if (path === '/') {
      // Special case for home page
      return currentPath === '/';
    }
    // For other paths, also treat subpaths as active (e.g. /products/123)
    return currentPath.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-white/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* LOGO & COMPANY NAME */}
          <Link to="/" className="flex items-center space-x-3 text-2xl font-serif font-bold text-white">
            <span>Himalayan Care</span>
            <img 
              src={logo}
              alt="Himalayan Care Logo"
              className="h-10 w-auto"        // Adjust logo height if needed
              style={{ maxHeight: '40px', width: 'auto' }} // Inline fallback style
            />
          </Link>

          {/* DESKTOP NAVIGATION LINKS */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/#home"
              className={`text-white/90 hover:text-goldenYellow transition-colors ${
                isActive('/') ? 'underline decoration-goldenYellow' : ''
              }`}
            >
              Home
            </a>

            <Link
              to="/products"
              className={`text-white/90 hover:text-goldenYellow transition-colors ${
                isActive('/products') ? 'underline decoration-goldenYellow' : ''
              }`}
            >
              Products
            </Link>

            <a
              href="/bulk_order"
              className={`text-white/90 hover:text-goldenYellow transition-colors ${
                isActive('/bulk_order') ? 'underline decoration-goldenYellow' : ''
              }`}
            >
              Bulk Order
            </a>

            <a
              href="/about"
              className={`text-white/90 hover:text-goldenYellow transition-colors ${
                isActive('/about') ? 'underline decoration-goldenYellow' : ''
              }`}
            >
              About
            </a>

            <a
              href="/contact"
              className={`text-white/90 hover:text-goldenYellow transition-colors ${
                isActive('/contact') ? 'underline decoration-goldenYellow' : ''
              }`}
            >
              Contact
            </a>
          </div>

          {/* DESKTOP ACTION BUTTONS */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <User className="h-5 w-5" />
            </Button>

            <ShoppingCart />

            <Button variant="glass">Shop Now</Button>
          </div>

          {/* MOBILE BURGER MENU BUTTON */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <div className="flex flex-col space-y-2">
              <a
                href="/#home"
                className={`text-white/90 hover:text-white transition-colors py-2 ${
                  isActive('/') ? 'underline decoration-goldenYellow' : ''
                }`}
                onClick={handleNavLinkClick}
              >
                Home
              </a>

              <Link
                to="/products"
                className={`text-white/90 hover:text-white transition-colors py-2 ${
                  isActive('/products') ? 'underline decoration-goldenYellow' : ''
                }`}
                onClick={handleNavLinkClick}
              >
                Products
              </Link>

              <a
                href="/#sustainability"
                className="text-white/90 hover:text-white transition-colors py-2"
                onClick={handleNavLinkClick}
              >
                Sustainability
              </a>

              <a
                href="/#about"
                className={`text-white/90 hover:text-white transition-colors py-2 ${
                  isActive('/about') ? 'underline decoration-goldenYellow' : ''
                }`}
                onClick={handleNavLinkClick}
              >
                About
              </a>

              <a
                href="/#contact"
                className={`text-white/90 hover:text-white transition-colors py-2 ${
                  isActive('/contact') ? 'underline decoration-goldenYellow' : ''
                }`}
                onClick={handleNavLinkClick}
              >
                Contact
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <User className="h-5 w-5" />
              </Button>

              <ShoppingCart />

              <Button variant="glass">Shop Now</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
