import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Environment } from '@react-three/drei';
import HeroSection from '../components/HeroSection';
import FloatingProducts from '../components/FloatingProducts';
import ProductCatalog from '../components/ProductCatalog';
import LivelihoodSection from '../components/LivelihoodSection';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      {/* Hero Section with 3D Background */}
      <div className="relative min-h-screen overflow-hidden">
        {/* 3D Canvas Background */}
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Suspense fallback={null}>
              <Environment preset="sunset" />
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <FloatingProducts />
              <OrbitControls 
                enableZoom={false} 
                enablePan={false} 
                autoRotate 
                autoRotateSpeed={0.5}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
            </Suspense>
          </Canvas>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10">
          <HeroSection />
        </div>
      </div>

      {/* Product Catalog */}
      <ProductCatalog />

      {/* Livelihood Section */}
      <LivelihoodSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;