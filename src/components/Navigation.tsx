import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
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
      return currentPath === '/';
    }
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
              className="h-10 w-auto"
              style={{ maxHeight: '40px', width: 'auto' }}
            />
          </Link>

          {/* DESKTOP NAVIGATION LINKS */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-white/90 hover:text-goldenYellow transition-colors ${
                isActive('/') ? 'underline decoration-goldenYellow' : ''
              }`}
            >
              Home
            </Link>

            <Link
              to="/products"
              className={`text-white/90 hover:text-goldenYellow transition-colors ${
                isActive('/products') ? 'underline decoration-goldenYellow' : ''
              }`}
            >
              Products
            </Link>

            <Link
              to="/bulk_order"
              className={`text-white/90 hover:text-goldenYellow transition-colors ${
                isActive('/bulk_order') ? 'underline decoration-goldenYellow' : ''
              }`}
            >
              Bulk Order
            </Link>

            <Link
              to="/liked"
              className={`text-white/90 hover:text-goldenYellow transition-colors ${
                isActive('/liked') ? 'underline decoration-goldenYellow' : ''
              }`}
            >
              Liked Product
            </Link>

            <Link
              to="/about"
              className={`text-white/90 hover:text-goldenYellow transition-colors ${
                isActive('/about') ? 'underline decoration-goldenYellow' : ''
              }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`text-white/90 hover:text-goldenYellow transition-colors ${
                isActive('/contact') ? 'underline decoration-goldenYellow' : ''
              }`}
            >
              Contact
            </Link>
          </div>

          {/* DESKTOP ACTION BUTTONS */}
          <div className="hidden md:flex items-center space-x-4">
            <ShoppingCart />

            {/* ✅ Shop Now → /products */}
            <Link to="/products">
              <Button variant="glass">Shop Now</Button>
            </Link>
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
              <Link
                to="/"
                className={`text-white/90 hover:text-white transition-colors py-2 ${
                  isActive('/') ? 'underline decoration-goldenYellow' : ''
                }`}
                onClick={handleNavLinkClick}
              >
                Home
              </Link>

              <Link
                to="/products"
                className={`text-white/90 hover:text-white transition-colors py-2 ${
                  isActive('/products') ? 'underline decoration-goldenYellow' : ''
                }`}
                onClick={handleNavLinkClick}
              >
                Products
              </Link>



              <Link
                to="/liked"
                className={`text-white/90 hover:text-white transition-colors py-2 ${
                  isActive('/liked') ? 'underline decoration-goldenYellow' : ''
                }`}
                onClick={handleNavLinkClick}
              >
                Liked Product
              </Link>

              <Link
                to="/about"
                className={`text-white/90 hover:text-white transition-colors py-2 ${
                  isActive('/about') ? 'underline decoration-goldenYellow' : ''
                }`}
                onClick={handleNavLinkClick}
              >
                About
              </Link>

              <Link
                to="/contact"
                className={`text-white/90 hover:text-white transition-colors py-2 ${
                  isActive('/contact') ? 'underline decoration-goldenYellow' : ''
                }`}
                onClick={handleNavLinkClick}
              >
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <ShoppingCart />

              {/* ✅ Mobile Shop Now → /products */}
              <Link to="/products" onClick={handleNavLinkClick}>
                <Button variant="glass">Shop Now</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;