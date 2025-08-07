import { useLikedProducts } from "@/context/LikedProductsContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import products from "../dataset/data"; // adjust if needed
import likedBg from "../assets/likedproductbg1.jpg"; // adjust if needed

export default function LikedProductsPage() {
  const { liked, toggle } = useLikedProducts();
  const likedProducts = products.filter((p) => liked.includes(p.id));

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <section
        className="py-20 flex-1 relative"
        style={{
          backgroundImage: `url(${likedBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-10 text-center text-white drop-shadow-lg">
            Liked Products
          </h2>
          {likedProducts.length === 0 ? (
            <div className="text-center py-24 text-white/95">
              <h3 className="text-2xl font-semibold mb-3">No products liked yet.</h3>
              <p className="text-muted-foreground mb-8">
                Go back to the <Link to="/products" className="text-primary underline">Products</Link> page and tap the ♥ like button.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {likedProducts.map((product) => (
                <Card
                  key={product.id}
                  className="flex flex-col w-[320px] h-[520px] bg-white/90 glass-card border hover-lift hover-glow overflow-hidden"
                >
                  {/* IMAGE AREA */}
                  <div className="relative h-[250px] w-full flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-4 right-4 bg-white/20 hover:bg-white/30"
                      onClick={(e) => {
                        e.preventDefault();
                        toggle(product.id);
                      }}
                    >
                      <Heart className="h-5 w-5 fill-red-500 text-red-500 transition-colors" />
                    </Button>
                  </div>
                  {/* INFO SECTION */}
                  <div className="flex-1 flex flex-col justify-between p-4 min-h-0">
                    <div>
                      <h3 className="text-xl font-semibold mb-1 line-clamp-1">{product.name}</h3>
                      <p className="text-muted-foreground text-sm mb-2 line-clamp-2">{product.description}</p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {product.tags && product.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                        ))}
                        {product.tags && product.tags.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{product.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                      {/* Rating and Reviews */}
                      <div className="flex items-center gap-1 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(product.rating)
                                ? 'text-goldenYellow fill-goldenYellow'
                                : 'text-muted-foreground'}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground pl-1">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>
                      {/* Price and Discount */}
                      <div className="flex items-center gap-2 mb-0">
                        <span className="text-lg font-bold text-primary">${product.price}</span>
                        {product.originalPrice && (
                          <>
                            <span className="text-md text-muted-foreground line-through">${product.originalPrice}</span>
                            <Badge variant="destructive" className="text-xs">
                              {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                            </Badge>
                          </>
                        )}
                      </div>
                      {!product.inStock && (
                        <Badge variant="destructive" className="text-xs mt-3">
                          Out of Stock
                        </Badge>
                      )}
                    </div>
                  </div>
                  {/* FOOTER BUTTON */}
                  <CardFooter className="p-4 pt-0">
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
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
