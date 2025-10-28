import React, { useState } from 'react';

const contronyms = [
  { word: 'dust', hint: 'Can mean to remove or to add', answer: 'dust' },
  { word: 'bolt', hint: 'Can mean to lock or to run', answer: 'bolt' },
  { word: 'sanction', hint: 'Can mean to approve or punish', answer: 'sanction' }
];

export default function Game() {
  const [index, setIndex] = useState(0);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess.toLowerCase() === contronyms[index].answer) {
      setMessage('Correct!');
    } else {
      setMessage('Try again!');
    }
  };

  const nextWord = () => {
    setIndex((index + 1) % contronyms.length);
    setGuess('');
    setMessage('');
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <p><strong>Hint:</strong> {contronyms[index].hint}</p>
      <form onSubmit={handleSubmit}>
        <input 
          value={guess} 
          onChange={(e) => setGuess(e.target.value)} 
          placeholder="Enter your guess" 
        />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
      <button onClick={nextWord}>Next</button>
    </div>
  );
}
