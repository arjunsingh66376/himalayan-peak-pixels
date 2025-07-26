import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Heart, ShoppingCart } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

import honey from '../assets/honey.jpg';
import turmeric from '../assets/turmeric.jpg';
import pinecone from '../assets/pinecone.jpg';
import root from '../assets/root.jpg';
import berry from '../assets/berry.jpg';
import mirchi from '../assets/mirchi.jpg';
import productdetailbg from '../../src/assets/productdetailbg.jpg';

const products = [
  { id: 1, name: "Wild Himalayan Honey", category: "Honey", price: 29.99, originalPrice: 39.99, rating: 4.9, reviews: 324, image: honey, description: "Pure, raw honey harvested from wild mountain flowers at 3000m altitude.", tags: ["Organic", "Raw", "Wildflower"], inStock: true },
  { id: 2, name: "Premium Turmeric Powder", category: "Herbs", price: 19.99, rating: 4.8, reviews: 156, image: turmeric, description: "High-curcumin turmeric from organic Himalayan farms, stone-ground fresh.", tags: ["Organic", "Anti-inflammatory", "Premium"], inStock: true },
  { id: 3, name: "Himalayan Pine Cones", category: "Forest Products", price: 15.99, rating: 4.7, reviews: 89, image: pinecone, description: "Naturally shed pine cones, perfect for crafts and natural decoration.", tags: ["Natural", "Eco-friendly", "Handpicked"], inStock: true },
  { id: 4, name: "Wild Ginseng Root", category: "Herbs", price: 89.99, originalPrice: 109.99, rating: 5.0, reviews: 45, image: root, description: "Rare wild ginseng root, aged 7+ years, sustainably harvested.", tags: ["Premium", "Rare", "Energy Boost"], inStock: false },
  { id: 5, name: "Mountain Berry Mix", category: "Berries", price: 24.99, rating: 4.6, reviews: 203, image: berry, description: "Dried mix of wild berries: juniper, sea buckthorn, and goji berries.", tags: ["Antioxidant", "Wild", "Superfood"], inStock: true },
  { id: 6, name: "Sacred Cordyceps", category: "Mushrooms", price: 149.99, rating: 4.9, reviews: 78, image: mirchi, description: "Premium cordyceps mushrooms from high-altitude Himalayan regions.", tags: ["Premium", "Adaptogen", "Energy"], inStock: true },
];

const natureBg = productdetailbg;

function clamp(number, min, max) {
  return Math.max(min, Math.min(number, max));
}

function ProductCarouselPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const initialIdx = products.findIndex((p) => p.id === Number(id));
  const [curr, setCurr] = useState(clamp(initialIdx, 0, products.length - 1));
  const [direction, setDirection] = useState(0);
  const [favorites, setFavorites] = useState([]);

  const product = products[curr];

  const handleNext = () => {
    setDirection(1);
    setCurr((prev) => (prev + 1) % products.length);
  };
  const handlePrev = () => {
    setDirection(-1);
    setCurr((prev) => (prev - 1 + products.length) % products.length);
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h2 className="text-3xl font-bold mb-3">Product Not Found</h2>
        <Button onClick={() => navigate("/")}>Go to All Products</Button>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{
        backgroundImage: `url(${natureBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navigation />

      <main className="flex-1 flex flex-col items-center px-4 relative z-0">
        {/* Blur overlay only for the background behind the content */}
        <div className="absolute inset-0 bg-gradient-to-bl from-emerald-900/60 via-green-900/40 to-yellow-100/20 backdrop-blur-sm -z-10" />

        {/* Carousel Container with "floating" spacing */}
        <div className="w-full flex flex-col justify-center items-center mt-24 mb-16">
          {/* Carousel Next/Prev Buttons */}
          <div className="absolute left-2 top-1/2 -translate-y-1/2 z-20">
            <Button
              onClick={handlePrev}
              variant="ghost"
              size="icon"
              className="bg-white shadow-md rounded-full p-2 hover:scale-110 transition-transform"
            >
              <ArrowLeft className="h-6 w-6 text-green-900" />
            </Button>
          </div>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 z-20">
            <Button
              onClick={handleNext}
              variant="ghost"
              size="icon"
              className="bg-white shadow-md rounded-full p-2 hover:scale-110 transition-transform"
            >
              <ArrowRight className="h-6 w-6 text-green-900" />
            </Button>
          </div>

          {/* Content Container */}
          <div
            className="max-w-4xl w-full mx-auto rounded-3xl shadow-2xl bg-black/60
              backdrop-blur-lg border-2 border-green-700 ring-4 ring-green-500/40
              flex flex-col md:flex-row overflow-hidden relative z-10"
            style={{ minHeight: 450 }}
          >
            {/* Product Image with animated carousel */}
            <div className="md:w-1/2 p-8 flex items-center justify-center relative">
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={product.id}
                  src={product.image}
                  alt={product.name}
                  initial={{
                    scale: 0.95,
                    x: direction > 0 ? 200 : -200,
                    rotateY: direction === 0 ? 0 : direction > 0 ? 45 : -45,
                    opacity: 0.7,
                  }}
                  animate={{
                    scale: 1.08,
                    x: 0,
                    rotateY: 0,
                    opacity: 1,
                    transition: { duration: 0.8, type: "spring", bounce: 0.36 },
                  }}
                  exit={{
                    scale: 0.9,
                    x: direction > 0 ? -150 : 150,
                    rotateY: direction > 0 ? -50 : 50,
                    opacity: 0.1,
                    transition: { duration: 0.3 },
                  }}
                  className="rounded-2xl shadow-xl bg-gradient-to-br from-yellow-100/60 via-lime-100/50 to-emerald-100/50
                    border-2 border-white/60 object-contain h-72 w-full
                    [transform-style:preserve-3d] [backface-visibility:hidden]"
                  style={{ willChange: "transform" }}
                />
              </AnimatePresence>
              <Button
                onClick={() => toggleFavorite(product.id)}
                size="icon"
                variant="ghost"
                className="absolute top-2 right-2 bg-white/80"
              >
                <Heart
                  className={`h-6 w-6 transition-all ${
                    favorites.includes(product.id)
                      ? "fill-red-500 text-red-500"
                      : "text-green-900"
                  }`}
                />
              </Button>
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-between gap-6 text-white">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-2 drop-shadow">
                  {product.name}
                </h2>
                <p className="font-medium mb-3">{product.description}</p>
                {/* Tags with solid gray background & white text, no hover */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs px-3 !bg-gray-600 !text-white"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                {/* Price and % OFF badge with solid red bg, no hover */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-white">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="line-through text-lg text-green-300">
                      ${product.originalPrice}
                    </span>
                  )}
                  {product.originalPrice && (
                    <Badge
                      variant="destructive"
                      className="text-xs !bg-red-800 !text-red-200"
                    >
                      {Math.round(
                        (1 - product.price / product.originalPrice) * 100
                      )}
                      % OFF
                    </Badge>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  className="flex-1 bg-gradient-to-br from-green-700 via-green-600 to-green-500 text-white font-bold shadow-xl rounded-full"
                  size="lg"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
                <div className="text-sm">
                  <span>
                    ⭐ {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Back button */}
          <div className="mt-8 z-10 relative">
            <Button variant="outline" onClick={() => navigate("/")}>
              ← Back to Products
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProductCarouselPage;
