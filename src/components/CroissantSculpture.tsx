import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function CroissantSculpture(props: any) {
  const group = useRef<any>();
  // Load the croissant model from public/models/croissant.glb
  const { scene } = useGLTF('/models/croissant.glb');

  // Floating animation
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.005;
      group.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.15;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} scale={1.2} />
    </group>
  );
}

// Required for GLTF preloading
useGLTF.preload('/models/croissant.glb'); 