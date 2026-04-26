import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductsPage from "./pages/Productspage";
import NotFound from "./pages/NotFound";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactUsPage";
import BulkOrderPage from "./pages/BulkOrder";
import ProductCarouselPage from "./pages/ProductCarouselPage";
import { LikedProductsProvider } from "./context/LikedProductsContext";
import LikedProductsPage from "./pages/LikedProductsPage";

const queryClient = new QueryClient();
import ScrollToTop from "./components/ScrollToTop";
import PolicyPage from "./pages/PolicyPage";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop/>
      <LikedProductsProvider>

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/About" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/bulk_order" element={<BulkOrderPage/>}/>
          <Route path="/product/:id" element={<ProductCarouselPage />} />
          <Route path="/liked" element={<LikedProductsPage />} />
          <Route path="/shipping-info"     element={<PolicyPage />} />
          <Route path="/privacy-policy"    element={<PolicyPage />} />
          <Route path="/terms-conditions"  element={<PolicyPage />} />          
        
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LikedProductsProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;