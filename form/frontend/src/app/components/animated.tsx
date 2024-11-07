import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

// TypeScript interface for GLTF model
interface GLTFResult {
  scene: any;
}

const Model: React.FC = () => {
  const { scene } = useGLTF('../../assets/world.glb') as GLTFResult;
  const modelRef = useRef<any>(null);

  // Rotate model in animation loop
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.02; // Adjust speed as desired
    }
  });

  return <primitive ref={modelRef} object={scene} scale={[1.8, 1.8, 1.8]} />;
};

const Animated: React.FC = () => {
  return (
    <Canvas style={{  background: '#09093e' }}>
      <ambientLight />
      <directionalLight />
      <Model />
      <OrbitControls enableZoom={true} minDistance={2} maxDistance={10}/>
    </Canvas>
  );
};

export default Animated;
