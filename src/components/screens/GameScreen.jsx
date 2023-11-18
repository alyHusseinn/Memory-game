import Card from "../game/card";

const GameScreen = ({cards, scoreMsg, hitCard}) => {
    return (
        <div>
        <div className="score">
            {scoreMsg}
        </div>
        {cards.map((card, index) => {
          return (
            <Card
              imageSrc={card.image}
              key={index}
              onClick={() => hitCard(card.code)}
            />
          );
        })}
      </div>
    )
}

export default GameScreen;