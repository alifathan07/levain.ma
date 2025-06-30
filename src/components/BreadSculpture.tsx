import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshWobbleMaterial, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const BreadSculpture = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.2) * 0.1;
    }

    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        {/* Main bread sculpture (now green) */}
        <mesh ref={meshRef} scale={[2.2, 1.8, 2.2]} position={[0, 0, 0]}>
          <torusKnotGeometry args={[1, 0.35, 128, 32]} />
          <MeshWobbleMaterial
            color="#4CAF50" // Green color
            factor={0.15}
            speed={0.3}
            roughness={0.7}
            metalness={0.2}
          />
        </mesh>

        {/* Greenish Sparkles */}
        <Sparkles
          count={40}
          scale={6}
          size={2}
          speed={0.4}
          opacity={0.6}
          color="#81C784" // Light green sparkle
        />

        {/* Flour dust particles */}
        <group>
          {Array.from({ length: 30 }).map((_, i) => (
            <Float
              key={i}
              speed={2 + Math.random()}
              rotationIntensity={0.5}
              floatIntensity={0.8}
            >
              <mesh
                position={[
                  Math.sin(i * 0.4) * (3 + Math.random() * 2),
                  Math.cos(i * 0.2) * (2 + Math.random()),
                  Math.sin(i * 0.6) * (2 + Math.random())
                ]}
                scale={0.03 + Math.random() * 0.04}
              >
                <sphereGeometry args={[1, 6, 6]} />
                <meshBasicMaterial
                  color="#FFFEF7"
                  transparent
                  opacity={0.4 + Math.random() * 0.3}
                />
              </mesh>
            </Float>
          ))}
        </group>

        {/* Ambient green glow orbs */}
        {Array.from({ length: 8 }).map((_, i) => (
          <Float
            key={`glow-${i}`}
            speed={0.8 + Math.random() * 0.5}
            rotationIntensity={0.1}
            floatIntensity={1.2}
          >
            <mesh
              position={[
                Math.cos(i * Math.PI / 4) * 4,
                Math.sin(i * Math.PI / 6) * 2,
                Math.sin(i * Math.PI / 4) * 3
              ]}
              scale={0.08}
            >
              <sphereGeometry args={[1, 8, 8]} />
              <meshBasicMaterial
                color={i % 2 === 0 ? "#A5D6A7" : "#66BB6A"} // Alternating green tones
                transparent
                opacity={0.3}
              />
            </mesh>
          </Float>
        ))}
      </Float>
    </group>
  );
};

export default BreadSculpture;
