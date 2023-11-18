import { useState } from "react";
import Card from "./card";

const GameBoard = ({ CARDS, endGame }) => {
  const [clickedCards, setClickedCards] = useState([]);
  const [isGameOver, setGameOver] = useState(false);
  const [hasWin, setHasWin] = useState(false);

  function updateTheState(newCard) {
    // check if the code exists in the clicked cards
    // if so game over
    // else check winning
    // else shuffle the cards and update the state
    const AllClickedCards = [...clickedCards, newCard];
    if (clickedCards.some((card) => card == newCard)) {
      setGameOver(true);
    }
    else if(AllClickedCards.length === CARDS.length) {
        setHasWin(true);
    } 
    else {
      setClickedCards(AllClickedCards);
    }
  }

  CARDS = shuffelCards(CARDS);

  if (isGameOver) {
    return (
      <div>
        <h1>Game OVER</h1>
        <button onClick={endGame}>New Game</button>
      </div>
    );
  }
  else if(hasWin){
    return (
        <div>
          <h1>You win the Game</h1>
          <button onClick={endGame}>New Game</button>
        </div>
      );
  } 
  else {
    return (
      <div>
        {CARDS.map((card, index) => {
          return (
            <Card
              imageSrc={card.image}
              key={index}
              onClick={() => updateTheState(card.code)}
            />
          );
        })}
      </div>
    );
  }
};

function shuffelCards(cards) {
  for (let i = 0; i < cards.length; i++) {
    // const high = cards.length - 1;
    // const low = i;
    // const j = Math.floor(Math.random() * (1 + high - low)) + low;
    // newCards.push(cards[j]);
    const j = Math.floor(Math.random() * cards.length);
    const temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }
  return cards;
}

export default GameBoard;
