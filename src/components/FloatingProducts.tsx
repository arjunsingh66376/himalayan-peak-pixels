import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Honey Jar Component
const HoneyJar = ({ position }: { position: [number, number, number] }) => {
  const jarRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (jarRef.current) {
      jarRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={jarRef} position={position}>
        {/* Jar Body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.35, 0.8, 8]} />
          <meshPhongMaterial color="#FFA500" transparent opacity={0.8} />
        </mesh>
        {/* Jar Lid */}
        <mesh position={[0, 0.45, 0]}>
          <cylinderGeometry args={[0.32, 0.32, 0.1, 8]} />
          <meshPhongMaterial color="#8B4513" />
        </mesh>
        {/* Honey inside */}
        <mesh position={[0, -0.05, 0]}>
          <cylinderGeometry args={[0.28, 0.32, 0.7, 8]} />
          <meshPhongMaterial color="#FFD700" transparent opacity={0.9} />
        </mesh>
      </group>
    </Float>
  );
};

// Herb Basket Component
const HerbBasket = ({ position }: { position: [number, number, number] }) => {
  const basketRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (basketRef.current) {
      basketRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <group ref={basketRef} position={position}>
        {/* Basket */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.3, 0.3, 8]} />
          <meshLambertMaterial color="#8B4513" />
        </mesh>
        {/* Herbs */}
        {[...Array(5)].map((_, i) => (
          <mesh key={i} position={[
            (Math.random() - 0.5) * 0.6,
            0.2 + Math.random() * 0.3,
            (Math.random() - 0.5) * 0.6
          ]}>
            <sphereGeometry args={[0.05]} />
            <meshLambertMaterial color="#228B22" />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

// Pine Cone Component
const PineCone = ({ position }: { position: [number, number, number] }) => {
  const coneRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (coneRef.current) {
      coneRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.2;
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.8} floatIntensity={0.6}>
      <group ref={coneRef} position={position}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.15, 0.25, 0.6, 6]} />
          <meshLambertMaterial color="#8B4513" />
        </mesh>
        {/* Pine cone scales */}
        {[...Array(8)].map((_, i) => (
          <mesh key={i} position={[
            Math.sin(i * Math.PI / 4) * 0.2,
            (i - 4) * 0.08,
            Math.cos(i * Math.PI / 4) * 0.2
          ]}>
            <boxGeometry args={[0.08, 0.08, 0.05]} />
            <meshLambertMaterial color="#654321" />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

// Wild Berry Jar Component
const BerryJar = ({ position }: { position: [number, number, number] }) => {
  const jarRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (jarRef.current) {
      jarRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.6) * 0.1;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.7}>
      <group ref={jarRef} position={position}>
        {/* Glass Jar */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.25, 0.3, 0.7, 8]} />
          <meshLambertMaterial color="#E6E6FA" transparent opacity={0.3} />
        </mesh>
        {/* Berries inside */}
        {[...Array(12)].map((_, i) => (
          <mesh key={i} position={[
            (Math.random() - 0.5) * 0.4,
            (Math.random() - 0.5) * 0.5,
            (Math.random() - 0.5) * 0.4
          ]}>
            <sphereGeometry args={[0.03]} />
            <meshLambertMaterial color={Math.random() > 0.5 ? "#DC143C" : "#4B0082"} />
          </mesh>
        ))}
        {/* Lid */}
        <mesh position={[0, 0.39, 0]}>
          <cylinderGeometry args={[0.27, 0.27, 0.08, 8]} />
          <meshLambertMaterial color="#FFD700" />
        </mesh>
      </group>
    </Float>
  );
};

const FloatingProducts = () => {
  return (
    <group>
      {/* Ambient lighting for the products */}
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#FFD700" />
      <pointLight position={[-5, -5, 5]} intensity={0.6} color="#87CEEB" />
      
      {/* Product instances */}
      <HoneyJar position={[-2, 1, -1]} />
      <HerbBasket position={[2, -0.5, -2]} />
      <PineCone position={[-1, -1.5, 1]} />
      <BerryJar position={[1.5, 1.5, 0.5]} />
      
      {/* Additional scattered products */}
      <HoneyJar position={[3, 0.5, -3]} />
      <PineCone position={[-3, 0, 2]} />
      <BerryJar position={[0, -2, -1]} />
      <HerbBasket position={[-1.5, 2, -0.5]} />
    </group>
  );
};

export default FloatingProducts;