import React from 'react';

export default function Score({ score, highScore, level }) {
  return (
    <div className='score'>
      <h2>Current Score: {score} </h2>
      <h2>High Score: {highScore} </h2>
      <h2>Level: {level} </h2>
    </div>
  );
}
