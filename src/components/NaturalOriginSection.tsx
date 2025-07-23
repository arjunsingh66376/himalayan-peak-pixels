import { Button } from './ui/button';
import { Leaf, Mountain, Heart, Users } from 'lucide-react';

const NaturalOriginSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image - Greenery/Nature */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                  Pure Mountain 
                  <span className="text-accent block">Treasures</span>
                </h2>
                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  Every product we offer originates from the pristine mountain resources of Uttarakhand, 
                  delivered to you in its purest natural form without any harmful chemicals.
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Leaf className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">100% Natural & Chemical-Free</h3>
                    <p className="text-white/80">Raw mountain resources preserved in their original form, ensuring maximum purity and potency.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mountain className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Authentic Mountain Origin</h3>
                    <p className="text-white/80">Sourced directly from the untouched valleys and forests of Uttarakhand's majestic mountains.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Users className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Empowering Village Communities</h3>
                    <p className="text-white/80">Your purchase creates sustainable employment opportunities for Uttarakhand villages, supporting local families.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Heart className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Honoring Women Harvesters</h3>
                    <p className="text-white/80">Behind every product are dedicated mountain women who carefully handpick these precious natural resources just for you.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button variant="glass" size="lg" className="text-lg px-8 py-4">
                  Discover Our Story
                </Button>
              </div>
            </div>

            {/* Right Side - Stats/Visual Element */}
            <div className="space-y-8">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                  Sustainable Impact
                </h3>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">Zero</div>
                    <div className="text-white/80">Harmful Chemicals Used</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">100%</div>
                    <div className="text-white/80">Mountain Sourced</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">1000+</div>
                    <div className="text-white/80">Women Empowered</div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white/10 rounded-lg border border-white/20">
                  <p className="text-white/90 text-center italic leading-relaxed">
                    "When you choose our products, you're not just buying natural treasures - 
                    you're supporting the hardworking women of Uttarakhand who climb mountains 
                    and brave the elements to bring you nature's best."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NaturalOriginSection;