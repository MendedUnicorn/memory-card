import React from 'react';
import '../styles/card.css';
import capitalize from '../utils/capitalize';

export default function Card({ pokemon, handleClick }) {
  const { name, image } = pokemon;

  return (
    <div onClick={handleClick} className='pokemon-card' id={pokemon.name}>
      <img className='pokemon-image' src={image} alt={name} />
      <h3 className='pokemon-name'>{capitalize(name)}</h3>
    </div>
  );
}
