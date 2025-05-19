import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const gltf = useGLTF("/models/3d_clipart_webdev.glb");
  return <primitive object={gltf.scene} scale={0.8} />;
}

const NexVibe3d = () => {
  return (
    <div className="w-full h-[40vh] md:h-[500px] cursor-pointer">
      <Canvas camera={{ position: [3, 2, 5] }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 3, 3]} intensity={0.9} />
        <Suspense fallback={
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="blue" />
          </mesh>
        }>
          <Model />
        </Suspense>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
};

export default NexVibe3d;
