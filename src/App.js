import GameBoard from './components/GameBoard';
import Header from './components/Header';
import React, { useState, useEffect, useRef } from 'react';
import randomize from './utils/randomize';
import shuffleArray from './utils/shuffleArray';
import ShowMessage from './components/ShowMessage';
import './styles/app.css';

function App() {
  const firstLoad = useRef(true);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [previouslyClickedCard, setPreviouslyClickedCard] = useState([]);
  const [level, setLevel] = useState(1);
  const [cardOrder, setCardOrder] = useState(() => randomize([], 4));
  const [showLevelUpMessage, setShowLevelUpMessage] = useState(false);
  const [showGameOverMessage, setShowGameOverMessage] = useState(false);

  useEffect(() => {
    //check if to level up
    checkIfLevelup();
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score]);

  //show level up message
  // useEffect(() => {
  //   if (!firstLoad.current) {
  //     setShowLevelUpMessage(true);
  //     setTimeout(() => {
  //       setShowLevelUpMessage(false);
  //     }, 1000);
  //   } else {
  //     firstLoad.current = false;
  //   }
  // }, [level]);

  // //initialize card order
  // useEffect(() => {

  //   console.log('randomshit', randomArray.usedIndexes);
  //   setCardOrder(() => randomArray.usedIndexes);
  //   console.log('the card order state: ', cardOrder);
  // }, []);

  console.log('cardorder', cardOrder);

  function hasCardBeenClicked(card) {
    let hasBeenClicked = false;
    previouslyClickedCard.forEach((cardInClickedCard) => {
      if (cardInClickedCard === card) {
        hasBeenClicked = true;
        return true;
      } else {
        return false;
      }
    });
    return hasBeenClicked;
  }
  function checkIfLevelup() {
    if (score >= level * 4) {
      setLevel((level) => level + 1);
      setCardOrder(shuffleArray(randomize(cardOrder, 4)));
      setShowLevelUpMessage(true);
      setTimeout(() => {
        setShowLevelUpMessage(false);
      }, 1000);
      return true;
    }
  }

  function handleLevelUp() {
    //craete looop
    //for every new level add 4 new cards using randomize function
  }

  function handleClick(e) {
    const clickedCard = e.currentTarget.id;
    //check if clicked card was previously clicked
    if (hasCardBeenClicked(clickedCard)) {
      setScore(0);
      setPreviouslyClickedCard([]);
      setCardOrder(randomize([], 4));
      setLevel(1);
      setShowGameOverMessage(true);
      setTimeout(() => {
        setShowGameOverMessage(false);
      }, 1500);
      return;
    }
    //increase score & push card to clicked card array
    setScore((score) => score + 1);
    setPreviouslyClickedCard([...previouslyClickedCard, clickedCard]);

    //use randomize to set random position
    setCardOrder(shuffleArray([...cardOrder]));
  }

  return (
    <div className='App'>
      <Header score={score} highScore={highScore} level={level} />
      <GameBoard handleClick={handleClick} cardOrder={cardOrder} />
      {showLevelUpMessage ? (
        <ShowMessage level={level} message='Level Up!' />
      ) : showGameOverMessage ? (
        <ShowMessage message='Game Over' />
      ) : null}
    </div>
  );
}

export default App;
