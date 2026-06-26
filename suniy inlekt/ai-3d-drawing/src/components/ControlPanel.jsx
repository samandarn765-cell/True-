import React from 'react';
import { Palette, Eraser, Trash2, Camera, Move, PenTool, Eye } from 'lucide-react';

export default function ControlPanel({
  color,
  setColor,
  thickness,
  setThickness,
  isEraser,
  setIsEraser,
  viewMode,
  setViewMode,
  interactionMode,
  setInteractionMode,
  clearCanvas,
  saveAsPNG,
  setIsMenuOpen
}) {
  return (
    <div className="absolute top-6 mx-auto bg-slate-900/90 backdrop-blur-xl border border-slate-800 p-4 rounded-2xl shadow-2xl z-30 flex flex-wrap items-center gap-6 max-w-[90%] transition-all animate-in fade-in zoom-in-95 duration-200">
      
      {/* 1. Rejimlar paneli: 2D Canvas vs 3D Space */}
      <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
        <button
          onClick={() => setViewMode('2d')}
          className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
            viewMode === '2d' 
              ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md' 
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Camera size={16} />
          2D Canvas
        </button>
        <button
          onClick={() => setViewMode('3d')}
          className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
            viewMode === '3d' 
              ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md' 
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Eye size={16} />
          3D Space
        </button>
      </div>

      {/* 2. 3D Interaksiya rejimi (Faqat 3D yoniq bo'lganda chiqadi) */}
      {viewMode === '3d' && (
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 animate-in slide-in-from-left-2">
          <button
            onClick={() => setInteractionMode('draw')}
            className={`p-2 rounded-lg transition-all ${
              interactionMode === 'draw' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Havoda Chizish"
          >
            <PenTool size={18} />
          </button>
          <button
            onClick={() => setInteractionMode('view')}
            className={`p-2 rounded-lg transition-all ${
              interactionMode === 'view' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
            title="3D Kamerani Aylantirish"
          >
            <Move size={18} />
          </button>
        </div>
      )}

      {/* 3. Ranglar palitrasi */}
      <div className="flex items-center gap-2 bg-slate-950/50 px-3 py-1.5 rounded-xl border border-slate-800/60">
        {['#ec4899', '#3b82f6', '#10b981', '#f59e0b', '#ffffff'].map((c) => (
          <button
            key={c}
            onClick={() => { setColor(c); setIsEraser(false); }}
            style={{ backgroundColor: c }}
            className={`w-6 h-6 rounded-full border-2 transition-all duration-150 hover:scale-110 ${
              color === c && !isEraser ? 'scale-125 border-white shadow-lg' : 'border-transparent'
            }`}
          />
        ))}
        {/* Maxsus rang tanlagich */}
        <div className="relative w-6 h-6 rounded-full overflow-hidden border border-slate-700 flex items-center justify-center bg-slate-800 hover:scale-110 transition-transform">
          <Palette size={14} className="text-slate-400 absolute pointer-events-none" />
          <input 
            type="color" 
            value={color} 
            onChange={(e) => { setColor(e.target.value); setIsEraser(false); }} 
            className="w-8 h-8 opacity-0 cursor-pointer scale-150"
          />
        </div>
      </div>

      {/* 4. Qalinlik slayderi */}
      <div className="flex items-center gap-3 text-sm text-slate-300 bg-slate-950/50 px-3 py-1.5 rounded-xl border border-slate-800/60">
        <span className="font-medium text-xs text-slate-400 uppercase tracking-wider">Qalinlik</span>
        <input
          type="range"
          min="2"
          max="25"
          value={thickness}
          onChange={(e) => setThickness(Number(e.target.value))}
          className="w-24 h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-pink-500 focus:outline-none"
        />
        <span className="w-5 text-center font-mono text-xs text-pink-400">{thickness}</span>
      </div>

      {/* 5. Funksional asboblar (O'chirg'ich, Tozalash, Saqlash) */}
      <div className="flex items-center gap-2 border-l border-slate-800 pl-4">
        <button
          onClick={() => setIsEraser(!isEraser)}
          className={`p-2.5 rounded-xl transition-all duration-200 ${
            isEraser 
              ? 'bg-red-500 text-white shadow-lg shadow-red-500/30' 
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
          }`}
          title="O'chirg'ich rejimi"
        >
          <Eraser size={18} />
        </button>
        
        <button
          onClick={clearCanvas}
          className="p-2.5 bg-slate-800 hover:bg-red-950 text-slate-300 hover:text-red-400 rounded-xl transition-all duration-200"
          title="Butun ekranni tozalash"
        >
          <Trash2 size={18} />
        </button>

        {viewMode === '2d' && (
          <button
            onClick={saveAsPNG}
            className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-pink-400 rounded-xl transition-all duration-200 border border-slate-700/50"
            title="Skrinshot olish (PNG)"
          >
            <Camera size={18} />
          </button>
        )}
      </div>
      
      {/* 6. Panelni berkitish */}
      <button 
        onClick={() => setIsMenuOpen(false)}
        className="text-xs font-medium text-slate-500 hover:text-slate-400 hover:underline border-l border-slate-800 pl-4 self-stretch hidden sm:block"
      >
        Yopish
      </button>
    </div>
  );
}