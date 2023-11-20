import { useEffect, useState } from "react";
import Card from "../game/card";
import flipSound from '../../assets/sounds/flip.mp3';

const GameScreen = ({ cards, scoreMsg, hitCard }) => {

  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if(flipped === true) {
      setTimeout(() => {
        setFlipped(false);
        playFlip();
      }, 1500)
    }
  }, [flipped])

  function handleHitCard(cardCode){
    setFlipped(true);
    playFlip();
    setTimeout(() => {
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
              handleHitCard={() => {handleHitCard(card.code) }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GameScreen;
