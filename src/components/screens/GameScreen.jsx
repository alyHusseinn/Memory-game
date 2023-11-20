import { useEffect, useState } from "react";
import Card from "../game/card";
import flipSound from '../../assets/sounds/flip.mp3';

const GameScreen = ({ cards, scoreMsg, hitCard,isGameOver, children }) => {

  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if(flipped && !isGameOver) {
      setTimeout(() => {
        setFlipped(false);
        playFlip();
      }, 1500)
    }
  }, [flipped, isGameOver])

  function handleHitCard(cardCode){
    setFlipped(true);
    playFlip();
    setTimeout(() => { // to update the img after flipping the card not when flipping
      hitCard(cardCode);
    }, 500)
  }

  const playFlip = () => {
      const audio = new Audio(flipSound);
      audio.volume = 0.2;
      audio.play();
  };


  return (
    <div className="game-screen">
      <div className="score">{scoreMsg}</div>
      <div className="cards-section">
        {cards.map((card, index) => {
          return (
            <Card
              imgSrc={card.image}
              flipped={flipped}
              key={index}
              isGameOver={isGameOver}
              handleHitCard={() => {handleHitCard(card.code) }}
            />
          );
        })}
      </div>
      {children}
      {isGameOver && <div className="overlay"></div>}
    </div>
  );
};

export default GameScreen;
