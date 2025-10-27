import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  const answer = "EVOLVE"; // The hidden word

  const handleGuess = () => {
    if (guess.trim().toUpperCase() === answer) {
      setMessage("✅ Correct! The word is EVOLVE!");
    } else {
      setMessage("❌ Try again!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", position: "relative" }}>
      <div className="y-axis axis-label">Conjugate</div>
      <div className="x-axis axis-label">Transverse</div>

      <h1>Contronym Puzzle</h1>
      <p>Enter your guess for the hidden word:</p>

      <div className="grid">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="cell"></div>
        ))}
      </div>

      <input
        className="guess-input"
        type="text"
        placeholder="Type your answer..."
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button onClick={handleGuess} style={{ marginLeft: "10px" }}>
        Submit
      </button>

      <p>{message}</p>
    </div>
  );
}
