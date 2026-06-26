import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import { Hands } from '@mediapipe/hands';
import Scene3D from './Scene3D';
import ControlPanel from './ControlPanel';

export default function DrawingCanvas() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  
  const [color, setColor] = useState('#ec4899'); 
  const [thickness, setThickness] = useState(5);
  const [isEraser, setIsEraser] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [viewMode, setViewMode] = useState('2d'); 
  const [interactionMode, setInteractionMode] = useState('draw'); 

  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);

  useEffect(() => {
    const hands = new Hands({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });

    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.7,
    });

    hands.onResults(onResults);

    // Kamera kadrlarini kuzatish uchun barqaror tsikl
    const processVideo = async () => {
      if (webcamRef.current && webcamRef.current.video && webcamRef.current.video.readyState === 4) {
        try {
          await hands.send({ image: webcamRef.current.video });
        } catch (err) {
          console.error("MediaPipe xatosi:", err);
        }
      }
      requestRef.current = requestAnimationFrame(processVideo);
    };

    requestRef.current = requestAnimationFrame(processVideo);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      hands.close();
    };
  }, [color, thickness, isEraser, interactionMode]); // State-lar o'zgarganda yangilanishi uchun

  const onResults = (results) => {
    if (!canvasRef.current) return;
    const canvasCtx = canvasRef.current.getContext('2d');
    const width = canvasRef.current.width;
    const height = canvasRef.current.height;

    canvasCtx.clearRect(0, 0, width, height);

    if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
      const landmarks = results.multiHandLandmarks[0];

      const indexFingerTip = landmarks[8];  
      const indexFingerPip = landmarks[6];
      const middleFingerTip = landmarks[12]; 
      const thumbTip = landmarks[4];
      const pinkyTip = landmarks[20];

      const x = (1 - indexFingerTip.x) * width;
      const y = indexFingerTip.y * height;
      const z = (indexFingerTip.z) * -10; 

      // IMO (Imo-ishoralar)
      const isTwoFingersUp = indexFingerTip.y < indexFingerPip.y && middleFingerTip.y < landmarks[10].y;
      if (isTwoFingersUp) {
        setIsEraser(true);
      } else {
        setIsEraser(false);
      }

      const handSpan = Math.hypot(thumbTip.x - pinkyTip.x, thumbTip.y - pinkyTip.y);
      if (handSpan > 0.4) {
        setIsMenuOpen(true);
      }

      const isDrawingGesture = indexFingerTip.y < indexFingerPip.y && !isTwoFingersUp;

      if (isDrawingGesture && interactionMode === 'draw') {
        if (!isDrawing.current) {
          setLines((prev) => [
            ...prev,
            {
              points: [{ x: (x - width/2)/50, y: -(y - height/2)/50, z: z }], 
              color: isEraser ? '#0f172a' : color, 
              thickness: thickness 
            }
          ]);
          isDrawing.current = true;
        } else {
          setLines((prev) => {
            if (prev.length === 0) return prev;
            const updated = [...prev];
            const currentLine = updated[updated.length - 1];
            currentLine.points.push({ x: (x - width/2)/50, y: -(y - height/2)/50, z: z });
            return updated;
          });
        }

        canvasCtx.beginPath();
        canvasCtx.arc(x, y, thickness * (isEraser ? 2 : 1), 0, 2 * Math.PI);
        canvasCtx.fillStyle = isEraser ? 'rgba(255,0,0,0.5)' : color;
        canvasCtx.fill();
      } else {
        isDrawing.current = false;
      }

      // Pointer nuqtasi
      canvasCtx.beginPath();
      canvasCtx.arc(x, y, 8, 0, 2 * Math.PI);
      canvasCtx.fillStyle = '#00ffcc';
      canvasCtx.fill();
    }
  };

  const saveAsPNG = () => {
    const link = document.createElement('a');
    link.download = 'ai-drawing.png';
    link.href = canvasRef.current.toDataURL();
    link.click();
  };

  const clearCanvas = () => {
    setLines([]);
  };

  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center bg-slate-950 overflow-hidden">
      
      <div className="absolute inset-0 w-full h-full z-0">
        {viewMode === '2d' ? (
          <canvas
            ref={canvasRef}
            width={window.innerWidth}
            height={window.innerHeight}
            className="absolute top-0 left-0 w-full h-full bg-transparent z-10 pointer-events-none"
          />
        ) : (
          <Scene3D lines={lines} mode={interactionMode} />
        )}
      </div>

      <div className="absolute bottom-4 left-4 w-48 h-36 rounded-2xl overflow-hidden border-2 border-purple-500 shadow-2xl z-20">
        <Webcam
          ref={webcamRef}
          mirrored={true}
          videoConstraints={{ width: 640, height: 480, facingMode: "user" }}
          className="w-full h-full object-cover"
        />
      </div>

      {isMenuOpen && (
        <ControlPanel
          color={color}
          setColor={setColor}
          thickness={thickness}
          setThickness={setThickness}
          isEraser={isEraser}
          setIsEraser={setIsEraser}
          viewMode={viewMode}
          setViewMode={setViewMode}
          interactionMode={interactionMode}
          setInteractionMode={setInteractionMode}
          clearCanvas={clearCanvas}
          saveAsPNG={saveAsPNG}
          setIsMenuOpen={setIsMenuOpen}
        />
      )}

      {!isMenuOpen && (
        <button
          onClick={() => setIsMenuOpen(true)}
          className="absolute top-6 bg-slate-900 border border-slate-800 text-slate-300 px-4 py-2 rounded-xl text-sm shadow-xl z-30 animate-bounce"
        >
          ✋ Menyuni ochish
        </button>
      )}
    </div>
  );
}