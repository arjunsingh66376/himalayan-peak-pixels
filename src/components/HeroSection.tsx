import { Button } from './ui/button';
import { ArrowRight, Leaf, Award, Truck } from 'lucide-react';
import heroImage from '../assets/uttarakhand-mountains.jpg';

// Snowflake component
const Snowflake = ({ delay, size, duration }: { delay: number; size: number; duration: number }) => (
  <div
    className="absolute text-white/60 pointer-events-none select-none"
    style={{
      left: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      fontSize: `${size}px`,
      animationDuration: `${duration}s`,
    }}
  >
    ❄
  </div>
);

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-slow"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url(${heroImage})`
        }}
      />
      
      {/* Snowfall Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className="absolute animate-[snowfall_linear_infinite] text-white/40"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${8 + Math.random() * 12}px`,
            }}
          >
            ❄
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Pure Uttarakhand
            <br />
            <span className="text-accent">Nature's Gifts</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Discover premium herbs, organic honey, and wild forest treasures 
            sourced sustainably from the pristine Uttarakhand mountains.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="glass" size="lg" className="text-lg px-8 py-4 group">
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4"
            >
              Learn Our Story
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="glass-card p-6 text-center hover-lift">
              <Leaf className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">100% Organic</h3>
              <p className="text-white/80">Naturally grown without chemicals</p>
            </div>
            
            <div className="glass-card p-6 text-center hover-lift">
              <Award className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
              <p className="text-white/80">Handpicked by local communities</p>
            </div>
            
            <div className="glass-card p-6 text-center hover-lift">
              <Truck className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Global Delivery</h3>
              <p className="text-white/80">Fresh products worldwide</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;