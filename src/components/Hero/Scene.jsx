import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';

const AnimatedSphere = () => {
    const meshRef = useRef();

    useFrame((state) => {
        const { clock } = state;
        meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
        meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    });

    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <Sphere args={[1, 100, 200]} scale={2} ref={meshRef}>
                <MeshDistortMaterial
                    color="#3b82f6"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
};

const Scene = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={1} />
                <directionalLight position={[2, 1, 1]} intensity={2} />
                <pointLight position={[-10, 0, -20]} color="#8b5cf6" intensity={2} />
                <pointLight position={[0, -10, 0]} color="#3b82f6" intensity={1.5} />
                <AnimatedSphere />
            </Canvas>
        </div>
    );
};

export default Scene;
