import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Heart, ShoppingCart } from "lucide-react";
import products from "../../src/dataset/data"; // Adjust path as needed
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import productdetailbg from "../assets/productdetailbg.jpg"; // Adjust as needed

const NAVBAR_HEIGHT = 80; // Change to your actual navbar's height in pixels!

function ProductCarouselPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const productId = Number(id);

  const product = products.find((p) => p.id === productId);
  const [imageIndex, setImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setImageIndex(0);
  }, [productId]);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
        <h2 className="text-3xl font-bold mb-3">Product Not Found</h2>
        <Button onClick={() => navigate("/")}>Go to All Products</Button>
      </div>
    );
  }

  const images = product.images || [];
  const totalImages = images.length;

  const handleNext = () => {
    setDirection(1);
    setImageIndex((prev) => (prev + 1) % totalImages);
  };

  const handlePrev = () => {
    setDirection(-1);
    setImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div
      className="min-h-screen flex flex-col relative "
      style={{
        backgroundImage: `url(${productdetailbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navigation />
      {/* ABSOLUTELY GUARANTEE CARD STARTS BELOW NAVBAR */}
      <div style={{ height: NAVBAR_HEIGHT }} />

      <main className="flex-1 flex flex-col items-center relative z-0 pb-16 px-4" style={{ minHeight: 0 }}>
        <div className="absolute inset-0 bg-gradient-to-bl from-emerald-900/60 via-green-900/40 to-yellow-100/20 backdrop-blur-sm -z-10" />

        <div className="w-full flex flex-col items-center flex-1">
          <div className="relative w-full flex justify-center items-center">

            {totalImages > 1 && (
              <>
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
              </>
            )}

            <div className="
                max-w-4xl w-full mx-auto rounded-3xl shadow-2xl bg-black/60
                backdrop-blur-lg border-2 border-green-700 ring-4 ring-green-500/40
                flex flex-col md:flex-row overflow-hidden relative z-10
                max-h-[80vh] min-h-[500px] overflow-y-auto
              ">
              {/* --- FIXED IMAGE CONTAINER --- */}
              <div className="md:w-1/2 p-8 flex items-center justify-center relative min-h-[18rem]">
                <div className="w-[320px] h-[320px] flex items-center justify-center relative">
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                      key={imageIndex}
                      src={images[imageIndex]}
                      alt={`${product.name} view ${imageIndex + 1}`}
                      initial={{ opacity: 0, x: direction > 0 ? 120 : -120 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction > 0 ? -120 : 120 }}
                      transition={{ duration: 0.5 }}
                      className="object-contain w-full h-full rounded-2xl shadow-xl"
                      style={{ willChange: "transform" }}
                    />
                  </AnimatePresence>
                  <Button
                    onClick={() => toggleFavorite(product.id)}
                    size="icon"
                    variant="ghost"
                    className="absolute top-2 right-2 bg-white/80"
                    aria-label="Toggle Favorite"
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
              </div>

              {/* Product Details */}
              <div className="md:w-1/2 p-8 flex flex-col justify-between gap-6 text-white">
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-2 drop-shadow">
                    {product.name}
                  </h2>
                  <p className="font-medium mb-3">{product.description}</p>
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
          </div>
          {/* Back button */}
          <div className="mt-8 z-10 relative mb-10">
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
