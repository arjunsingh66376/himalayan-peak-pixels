import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Users, Leaf, Globe, Package } from 'lucide-react';
import bgImage from '../assets/mountain-valley.jpg';

const LivelihoodSection = () => {
  const navigate = useNavigate();

  const goToBulkOrder = () => {
    navigate('/bulk_order');  // Ensure this matches your route path to BulkOrderPage
  };
  const goAbout = () => {
    navigate('/About');  // Ensure this matches your route path to BulkOrderPage
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${bgImage})`
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Empowering Communities, 
              <span className="text-accent block">Delivering Excellence</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              From the pristine valleys of Uttarakhand to your doorstep, we bring you nature's purest offerings while supporting local communities.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="glass-card p-8 text-center hover-lift">
              <Users className="h-16 w-16 text-accent mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Villager Livelihood</h3>
              <p className="text-white/80 leading-relaxed">
                Supporting over 500+ mountain families with sustainable income through ethical sourcing partnerships.
              </p>
            </div>

            <div className="glass-card p-8 text-center hover-lift">
              <Leaf className="h-16 w-16 text-accent mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">100% Natural</h3>
              <p className="text-white/80 leading-relaxed">
                Raw and processed products without any harmful chemicals. Pure nature from mountain to market.
              </p>
            </div>

            <div className="glass-card p-8 text-center hover-lift">
              <Globe className="h-16 w-16 text-accent mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Fast Global Delivery</h3>
              <p className="text-white/80 leading-relaxed">
                Swift worldwide shipping ensuring fresh products reach you quickly, maintaining quality and potency.
              </p>
            </div>

            <div className="glass-card p-8 text-center hover-lift">
              <Package className="h-16 w-16 text-accent mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Bulk Orders</h3>
              <p className="text-white/80 leading-relaxed">
                Custom bulk solutions for businesses, retailers, and distributors with competitive wholesale pricing.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">500+</div>
              <div className="text-white/80">Families Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">100%</div>
              <div className="text-white/80">Chemical-Free</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">50+</div>
              <div className="text-white/80">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">2 days</div>
              <div className="text-white/80">Delivery Time</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Partner With Nature's Best
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Join our mission to bring authentic Uttarakhand treasures to the world while supporting mountain communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="glass" 
                  size="lg" 
                  className="text-lg px-8 py-4"
                  onClick={goToBulkOrder}
                >
                  Explore Bulk Orders
                </Button>
                <Button 
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 text-lg px-8 py-4"
                  onClick={goAbout}
                >
                  Know Our Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LivelihoodSection;
