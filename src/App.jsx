import { useState } from "react";
import { contronymOfTheDay } from "./data.js";

export default function App() {
  const { word, left, right, hint } = contronymOfTheDay;

  const [attempted, setAttempted] = useState(false);
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream text-gray-900">
      <h1 className="text-4xl font-bold mb-2">Contronym</h1>
      <h2 className="italic text-lg mb-8">The Majorana of Meaning</h2>

      <div className="relative w-96 h-64 flex flex-col items-center justify-end">
        {/* Axes */}
        <div className="absolute w-full h-0.5 bg-red-500 bottom-12" /> {/* x-axis red */}
        <div className="absolute h-full w-0.5 bg-gray-700 left-1/2 bottom-0" />

        {/* Axis Labels */}
        <span className="absolute bottom-2 left-8 italic text-sm">transverse</span>
        <span className="absolute bottom-2 right-8 italic text-sm">conjugate</span>

        {/* Parabola */}
        <svg className="absolute bottom-12" viewBox="0 0 400 200" width="400" height="200">
          <path d="M 50 150 Q 200 0 350 150" stroke="#4a8a8a" strokeDasharray="6 6" fill="none" />
        </svg>

        {/* Endpoint labels */}
        <span className="absolute left-8 top-12 italic">{left}</span>
        <span className="absolute right-8 top-12 italic">{right}</span>

        {/* Answer boxes */}
        <div className="absolute bottom-8 flex gap-1">
          {word.split("").map((letter, i) => (
            <div
              key={i}
              className="w-8 h-8 border border-gray-700 flex items-center justify-center font-mono text-lg bg-white"
            >
              {attempted ? letter : ""}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="absolute bottom-0 mt-2 flex gap-2">
          {!attempted && (
            <button
              className="px-2 py-1 border rounded bg-gray-200 hover:bg-gray-300 text-sm"
              onClick={() => setAttempted(true)}
            >
              Attempt Answer
            </button>
          )}
          {!showHint && (
            <button
              className="px-2 py-1 border rounded bg-gray-200 hover:bg-gray-300 text-sm"
              onClick={() => setShowHint(true)}
            >
              Show Hint
            </button>
          )}
        </div>

        {/* Hint */}
        {showHint && <p className="absolute bottom-0 text-xs italic text-gray-600 mt-2">{hint}</p>}
      </div>
    </div>
  );
}
