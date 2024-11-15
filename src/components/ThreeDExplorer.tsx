import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

export function ThreeDExplorer() {
  return (
    <div className="h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
      <Canvas>
        {/* Enhanced lighting for a 3D effect */}
        <ambientLight intensity={0.3} />
        <pointLight position={[-10, 10, 10]} intensity={0.6} />
        <spotLight position={[15, 20, 5]} angle={0.3} penumbra={1} intensity={1} castShadow />

        {/* 3D Sphere with animation */}
        <Suspense fallback={null}>
          <Sphere visible args={[1, 100, 200]} scale={2.5}>
            <MeshDistortMaterial
              color="#00BFFF"
              attach="material"
              distort={0.5} // Increased distortion for more dynamic effects
              speed={3} // Faster animation speed
              roughness={0.1} // Adding material texture
              metalness={0.5} // Adding a metallic sheen
            />
          </Sphere>
        </Suspense>

        {/* Smooth camera controls */}
        <OrbitControls enableZoom={true} enablePan={false} maxDistance={5} />
      </Canvas>

      {/* Text overlay for visual appeal */}
      <div className="absolute top-1/2 transform -translate-y-1/2 text-center px-4">
        <h1 className="text-white text-4xl font-bold tracking-wider animate-pulse">
          Explore the Eye in 3D
        </h1>
        <p className="text-gray-400 mt-2">
          Interact with this 3D visualization to learn more about eye health.
        </p>
      </div>
    </div>
  );
}
