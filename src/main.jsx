import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

function ContronymGame() {
  const answer = "sanction"; // ✅ You can change this later
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [revealed, setRevealed] = useState(false);

  const handleGuess = () => {
    if (guess.trim().toLowerCase() === answer) {
      setMessage("✅ Correct! You found the Majorana of Meaning.");
      setRevealed(true);
    } else {
      setMessage("❌ Try again — the symmetry hasn’t stabilized yet.");
    }
  };

  return (
    <div className="game-container">
      <h1 className="title">Contronym</h1>
      <h2 className="subtitle">The Majorana of Meaning</h2>

      <div className="graph">
        {/* X-axis */}
        <div className="axis x-axis">
          <span className="axis-label x-label"><i>transverse</i></span>
        </div>

        {/* Y-axis */}
        <div className="axis y-axis">
          <span className="axis-label y-label"><i>conjugate</i></span>
        </div>

        {/* Parabola */}
        <svg className="parabola" viewBox="0 0 200 200">
          <path
            d="M 20 180 Q 100 20 180 180"
            stroke="black"
            fill="none"
            strokeWidth="2"
          />
        </svg>

        {/* Letter boxes */}
        <div className="letter-boxes">
          {"sanction".split("").map((_, i) => (
            <div key={i} className="letter-box">
              {revealed ? _.toUpperCase() : ""}
            </div>
          ))}
        </div>
      </div>

      {/* Guess section */}
      <div className="input-section">
        <input
          type="text"
          placeholder="Type your guess..."
          value={guess}
          onChange={(e) => setGuess(e.targe
