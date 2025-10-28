import React from 'react';
import Game from './components/Game';

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Contronym Game</h1>
      <Game />
    </div>
  );
}
