import React from 'react';
import '../styles/showMessage.css';

export default function ShowMessage({ level, message }) {
  return (
    <div className='message'>
      <h2>{message}</h2>
      {level > 1 ? <h3>LVL {level}</h3> : null}
    </div>
  );
}
