import { useEffect, useState } from "react";
import Card from "../game/card";

const GameScreen = ({ cards, scoreMsg, hitCard }) => {

  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if(flipped === true) {
      setTimeout(() => {
        setFlipped(false);
      }, 1200)
    }
  }, [flipped])

  function handleHitCard(cardCode){
    setFlipped(true);
    setTimeout(() => {
      hitCard(cardCode)
    }, 500)
  }


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
