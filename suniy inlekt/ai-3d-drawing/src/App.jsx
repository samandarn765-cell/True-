import React from 'react';
import DrawingCanvas from './components/DrawingCanvas';

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden select-none">
      {/* Sarlavha / Informatsion HUD */}
      <div className="absolute top-4 left-6 z-40 pointer-events-none hidden md:block">
        <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
          AI Spatial Tracer v1.0
        </h1>
        <p className="text-xs text-slate-400 mt-0.5">
          Ko'rsatkich barmoq: Chizish | 2 barmoq: O'chirg'ich | Kaft: Menyu
        </p>
      </div>

      <DrawingCanvas />
    </div>
  );
}

export default App;