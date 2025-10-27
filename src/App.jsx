import React, { useState } from "react";
import "./App.css";

export default function App() {
  const answer = "sanction"; // You can change this any time
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
