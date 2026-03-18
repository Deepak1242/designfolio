import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';

const LiquidOrb = () => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.4;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.6;
    }
  });

  return (
    <Sphere ref={meshRef} args={[2.5, 128, 128]} scale={1.2}>
      <MeshDistortMaterial
        color="#0A84FF" // Cobalt Blue
        attach="material"
        distort={0.4}
        speed={5}
        roughness={0.2}
        metalness={0.9}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </Sphere>
  );
};

const MaestroHeroVisual = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-0 bg-[#020617] overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: false }}>
        <ambientLight intensity={1.2} />
        {/* Bright Cyan rim light */}
        <directionalLight position={[10, 10, 5]} intensity={4} color="#00E5FF" />
        <directionalLight position={[-10, -10, -5]} intensity={2} color="#ffffff" />

        <group position={[0, 0, -2]}>
          <LiquidOrb />
        </group>
      </Canvas>
      {/* Heavy frosted glass overlay for that ultra-premium, smooth agency UI look */}
      <div className="absolute inset-0 bg-[#050505]/30 backdrop-blur-[100px] z-10"></div>
    </div>
  );
};

export default MaestroHeroVisual;
