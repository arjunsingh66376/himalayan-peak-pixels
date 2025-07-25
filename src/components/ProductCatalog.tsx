import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { useNavigate } from 'react-router-dom';

// Image imports (edit these paths as per your project)
import honey from '../assets/honey.jpg';
import turmeric from '../assets/turmeric.jpg';
import pinecone from '../assets/pinecone.jpg';
import root from '../assets/root.jpg';
import berry from '../assets/berry.jpg';
import mirchi from '../assets/mirchi.jpg';

const products = [
  {
    id: 1,
    name: "Wild Himalayan Honey",
    category: "Honey",
    image: honey,
  },
  {
    id: 2,
    name: "Premium Turmeric Powder",
    category: "Herbs",
    image: turmeric,
  },
  {
    id: 3,
    name: "Himalayan Pine Cones",
    category: "Forest Products",
    image: pinecone,
  },
  {
    id: 4,
    name: "Wild Ginseng Root",
    category: "Herbs",
    image: root,
  },
  {
    id: 5,
    name: "Mountain Berry Mix",
    category: "Berries",
    image: berry,
  },
  {
    id: 6,
    name: "Sacred Cordyceps",
    category: "Mushrooms",
    image: mirchi,
  },
];

const categories = ["All", "Honey", "Herbs", "Forest Products", "Berries", "Mushrooms"];

const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleViewAllProducts = () => {
    navigate('/products');
  };

  return (
    <section id="products" className="py-20 bg-product-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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
              className="px-6 py-2 rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid — animated floating cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {filteredProducts.map((product, index) => (
            <Card
              key={product.id}
              // 'animate-float' comes from your tailwind.config.ts!
              className={`animate-float flex flex-col rounded-2xl bg-white/90 w-[320px] h-[410px] mx-auto p-0 shadow-2xl shadow-gray-400/30`}
              style={{ animationDelay: `${index * 0.7}s` }}
            >
              <div className="relative flex flex-col items-center h-full w-full">
                {/* Optional: Blurred floating "halo" shadow */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[92%] w-[75%] h-6 bg-blue-200 opacity-25 blur-xl rounded-full z-0 pointer-events-none" />
                <CardContent className="flex flex-col h-full items-center justify-between p-0 w-full relative z-10">
                  <div className="w-full h-[330px] overflow-hidden rounded-t-2xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full px-6 pb-4 text-center flex flex-col items-center justify-center h-[80px]">
                    <h3 className="font-serif text-lg font-semibold text-gray-900 mb-1 truncate w-full">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-sm tracking-wide">
                      Abstract decoration
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-4"
            onClick={handleViewAllProducts}
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
