import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Leaf,
  Award,
  Truck,
  Shield
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-serif font-bold mb-4">
              Himalayan Care
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Bringing you the finest organic products from the pristine Himalayan mountains, 
              sustainably sourced and ethically traded.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:bg-primary-glow/20">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-glow/20">
                <Instagram className="h-5 w-5" />
              </Button>
              
              <Button variant="ghost" size="icon" className="hover:bg-primary-glow/20">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "Our Products",
                
                "About Us",
                "Blog",
                "Contact",
              
                "Wholesale",
                "Careers"
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              {[
                "FAQ",
                "Shipping Info",
               
               
                "Privacy Policy",
                "Terms of Service",
                
                "Support"
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">info@himalayancare.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">+91  6398067533</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-1" />
                <span className="text-primary-foreground/80">
                  Himalayan Foothills<br />
                  Natural Products Center
                </span>
              </div>
              
              {/* Newsletter Signup */}
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Newsletter</h4>
                <p className="text-sm text-primary-foreground/80 mb-3">
                  Get updates on new products and sustainability initiatives.
                </p>
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Your email" 
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                  />
                  <Button variant="secondary" size="sm">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="flex items-center space-x-3">
            <Leaf className="h-6 w-6 text-accent" />
            <span className="text-sm">100% Organic</span>
          </div>
          <div className="flex items-center space-x-3">
            <Award className="h-6 w-6 text-accent" />
            <span className="text-sm">Premium Quality</span>
          </div>
          <div className="flex items-center space-x-3">
            <Truck className="h-6 w-6 text-accent" />
            <span className="text-sm">Free Shipping</span>
          </div>
          <div className="flex items-center space-x-3">
            <Shield className="h-6 w-6 text-accent" />
            <span className="text-sm">Secure Payment</span>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-primary-foreground/80">
            © {currentYear} Himalayan Care. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm text-primary-foreground/80">
            <span>Made with ❤️ for Nature</span>
            <span>|</span>
            <span>Sustainably Sourced</span>
            <span>|</span>
            <span>Ethically Traded</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;