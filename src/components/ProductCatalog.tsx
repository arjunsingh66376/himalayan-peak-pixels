import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Star, ShoppingCart, Heart } from 'lucide-react';
//  images  import
 import honey from '../assets/honey.jpg' 
 import turmeric  from '../assets/turmeric.jpg' 
 import pinecone  from '../assets/pinecone.jpg' 
 import root from '../assets/root.jpg' 
 import berry from '../assets/berry.jpg' 
 import mirchi from '../assets/mirchi.jpg' 


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
    image:honey ,
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

const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Premium Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our carefully curated selection of pure, organic products 
            sourced directly from the pristine Himalayan region.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="px-6 py-2 rounded-full hover-lift"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover-lift hover-glow glass-card border-border/50 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative h-48 bg-gradient-mountain flex items-center justify-center overflow-hidden"> {/* Added overflow-hidden for good measure */}
  <img 
    src={product.image} 
    alt={product.name} 
    className="w-full h-full object-cover" // Added object-cover to ensure the image fills the space
  />
  {product.originalPrice && (
    <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground">
      Sale
    </Badge>
  )}
  <Button
    variant="ghost"
    size="icon"
    className="absolute top-4 right-4 bg-white/20 hover:bg-white/30"
    onClick={() => toggleFavorite(product.id)}
  >
    <Heart 
      className={`h-5 w-5 ${
        favorites.includes(product.id) 
          ? 'fill-destructive text-destructive' 
          : 'text-white'
      }`}
    />
  </Button>
</div>

                <div className="p-6">
                  {/* Product Info */}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {product.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {product.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-accent fill-accent'
                                : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {product.rating} ({product.reviews} reviews)
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

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8 py-4 hover-lift">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;