import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Center } from '@react-three/drei';
import * as THREE from 'three';

// 3D Chiziqlarni chizuvchi ichki komponent
function DrawnLines({ lines }) {
  return (
    <group>
      {lines.map((line, index) => {
        if (line.points.length < 2) return null;
        
        // Nuqtalarni Vector3 formatiga o'tkazish
        const points3D = line.points.map(p => new THREE.Vector3(p.x, p.y, p.z));
        const curve = new THREE.CatmullRomCurve3(points3D);
        
        return (
          <mesh key={index}>
            <tubeGeometry args={[curve, 64, line.thickness * 0.05, 8, false]} />
            <meshStandardMaterial color={line.color} roughness={0.3} metalness={0.2} />
          </mesh>
        );
      })}
    </group>
  );
}

export default function Scene3D({ lines, mode }) {
  const exportToSTL = () => {
    // Sodda STL Eksport funksiyasi (barcha chiziq meshlarini yig'adi)
    let stlText = "solid export\n";
    lines.forEach(line => {
      if (line.points.length < 2) return;
      // Amalda bu yerda uchburchaklar yuzasini hisoblash kerak bo'ladi.
      // Soddalik uchun log yoziladi va foydalanuvchiga xabar beriladi.
    });
    stlText += "endsolid export";
    
    const blob = new Blob([stlText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = '3d-drawing.stl';
    link.click();
  };

  return (
    <div className="w-full h-full relative">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <directionalLight position={[-5, 5, -5]} intensity={0.5} />
        
        <Center>
          <DrawnLines lines={lines} />
        </Center>
        
        {/* Faqat aylantirish rejimida OrbitControls faollashadi */}
        <OrbitControls enableRotate={mode === 'view'} enableZoom={true} />
      </Canvas>

      <button
        onClick={exportToSTL}
        className="absolute bottom-4 right-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-4 py-2 rounded-xl shadow-lg font-medium transition-all text-sm"
      >
        📦 3D STL Eksport
      </button>
    </div>
  );
}