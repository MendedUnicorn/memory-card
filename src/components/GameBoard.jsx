import React from 'react';
import data from '../data.json';
import Card from './Card';
import '../styles/gameBoard.css';

export default function GameBoard({ handleClick, cardOrder }) {
  return (
    <div className='gameboard'>
      {cardOrder.map((idx) => {
        return (
          <Card
            pokemon={data[idx]}
            key={data[idx].name}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
}
