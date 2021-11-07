import React from 'react';
import Instructions from './Instructions';
import Score from './Score';
import Title from './Title';

export default function Header({ score, highScore, level }) {
  return (
    <div className='header'>
      <Title />
      <Instructions />
      <Score score={score} highScore={highScore} level={level} />
    </div>
  );
}
