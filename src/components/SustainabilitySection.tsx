import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Leaf, Users, Mountain, Recycle, Heart, Globe } from 'lucide-react';

const SustainabilitySection = () => {
  const initiatives = [
    {
      icon: <Leaf className="h-8 w-8 text-success" />,
      title: "Carbon Neutral",
      description: "We offset 150% of our carbon footprint through reforestation programs in the Himalayas."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Fair Trade",
      description: "Direct partnerships with 200+ local families, ensuring fair wages and sustainable livelihoods."
    },
    {
      icon: <Mountain className="h-8 w-8 text-accent" />,
      title: "Habitat Protection",
      description: "5% of profits go toward protecting endangered Himalayan ecosystems and wildlife."
    },
    {
      icon: <Recycle className="h-8 w-8 text-muted-foreground" />,
      title: "Zero Waste",
      description: "100% biodegradable packaging made from recycled materials and plant-based plastics."
    }
  ];

  const stats = [
    { value: "500+", label: "Families Supported" },
    { value: "50,000", label: "Trees Planted" },
    { value: "99%", label: "Organic Certified" },
    { value: "15+", label: "Years Experience" }
  ];

  return (
    <section id="sustainability" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex justify-center mb-4">
            <Heart className="h-12 w-12 text-success" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Caring for Nature & People
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment goes beyond products. We're dedicated to preserving the Himalayan ecosystem 
            while supporting the communities that call these mountains home.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <Card 
              key={index} 
              className="glass-card hover-lift border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 rounded-full bg-background/50">
                    {initiative.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">
                      {initiative.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {initiative.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="glass-card p-8 md:p-12 text-center">
          <Globe className="h-16 w-16 text-primary mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-card-foreground mb-6">
            Our Promise to the Planet
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Every purchase supports sustainable harvesting practices, fair wages for mountain communities, 
            and conservation efforts that protect the pristine Himalayan wilderness for future generations. 
            Together, we're not just sharing nature's gifts – we're preserving them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4">
              Learn Our Impact
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4">
              Support Conservation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;