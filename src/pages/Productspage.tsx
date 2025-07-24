import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Star, ShoppingCart, Heart, Search } from 'lucide-react';
import honey from '../assets/honey.jpg';
import turmeric from '../assets/turmeric.jpg';
import pinecone from '../assets/pinecone.jpg';
import root from '../assets/root.jpg';
import berry from '../assets/berry.jpg';
import mirchi from '../assets/mirchi.jpg';
import tropicalFrameBg from '../assets/tropical.jpg';
import greenLeavesBg from '../assets/productsbg.jpg';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  tags: string[];
  inStock: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Wild Himalayan Honey",
    category: "Honey",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.9,
    reviews: 324,
    image: honey,
    description: "Pure, raw honey harvested from wild mountain flowers at 3000m altitude.",
    tags: ["Organic", "Raw", "Wildflower"],
    inStock: true
  },
  {
    id: 2,
    name: "Premium Turmeric Powder",
    category: "Herbs",
    price: 19.99,
    rating: 4.8,
    reviews: 156,
    image: turmeric,
    description: "High-curcumin turmeric from organic Himalayan farms, stone-ground fresh.",
    tags: ["Organic", "Anti-inflammatory", "Premium"],
    inStock: true
  },
  {
    id: 3,
    name: "Himalayan Pine Cones",
    category: "Forest Products",
    price: 15.99,
    rating: 4.7,
    reviews: 89,
    image: pinecone,
    description: "Naturally shed pine cones, perfect for crafts and natural decoration.",
    tags: ["Natural", "Eco-friendly", "Handpicked"],
    inStock: true
  },
  {
    id: 4,
    name: "Wild Ginseng Root",
    category: "Herbs",
    price: 89.99,
    originalPrice: 109.99,
    rating: 5.0,
    reviews: 45,
    image: root,
    description: "Rare wild ginseng root, aged 7+ years, sustainably harvested.",
    tags: ["Premium", "Rare", "Energy Boost"],
    inStock: false
  },
  {
    id: 5,
    name: "Mountain Berry Mix",
    category: "Berries",
    price: 24.99,
    rating: 4.6,
    reviews: 203,
    image: berry,
    description: "Dried mix of wild berries: juniper, sea buckthorn, and goji berries.",
    tags: ["Antioxidant", "Wild", "Superfood"],
    inStock: true
  },
  {
    id: 6,
    name: "Sacred Cordyceps",
    category: "Mushrooms",
    price: 149.99,
    rating: 4.9,
    reviews: 78,
    image: mirchi,
    description: "Premium cordyceps mushrooms from high-altitude Himalayan regions.",
    tags: ["Premium", "Adaptogen", "Energy"],
    inStock: true
  }
];

const categories = ["All", "Honey", "Herbs", "Forest Products", "Berries", "Mushrooms"];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products
    .filter(product => selectedCategory === "All" || product.category === selectedCategory)
    .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Tropical Frame Background */}
      {/* Changed h-[50vh] to h-screen for full viewport height */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${tropicalFrameBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 animate-fade-in">
            SHOP NOW
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
            Harvested by Nature, Handpicked for You
          </p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 rounded-full border-2 focus:border-primary"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full px-6 hover-lift"
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid with Green Leaves Background */}
      <section className="py-16 relative"
        style={{
          backgroundImage: `url(${greenLeavesBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
        {/* Adjusted bg-white/80 to bg-white/20 for more transparency (making image more visible) */}
        {/* You can choose a different value like /10, /30, etc., to fine-tune */}
        <div className="absolute inset-0 bg-white/10" /> 
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">
              {selectedCategory === "All" ? "All Products" : selectedCategory}
            </h2>
            <p className="text-muted-foreground">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="group hover-lift hover-glow glass-card border-border/50 overflow-hidden relative animate-fade-in bg-white/90 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  {/* Product Image */}
                  <div className="relative h-56 bg-gradient-mountain flex items-center justify-center overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {product.originalPrice && (
                      <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground">
                        Sale
                      </Badge>
                    )}
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                      onClick={() => toggleFavorite(product.id)}
                    >
                      <Heart 
                        className={`h-5 w-5 transition-colors ${
                          favorites.includes(product.id) 
                            ? 'fill-red-500 text-red-500' 
                            : 'text-white'
                        }`}
                      />
                    </Button>

                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <Badge variant="destructive" className="text-sm">
                          Out of Stock
                        </Badge>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    {/* Product Info */}
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {product.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {product.tags.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{product.tags.length - 2}
                          </Badge>
                        )}
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating)
                                  ? 'text-goldenYellow fill-goldenYellow'
                                  : 'text-muted-foreground'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl font-bold text-primary">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-lg text-muted-foreground line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                        {product.originalPrice && (
                          <Badge variant="destructive" className="text-xs">
                            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Button 
                    className="w-full group" 
                    disabled={!product.inStock}
                    variant={product.inStock ? "default" : "secondary"}
                  >
                    {product.inStock ? (
                      <>
                        <ShoppingCart className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                        Add to Cart
                      </>
                    ) : (
                      "Out of Stock"
                    )}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;