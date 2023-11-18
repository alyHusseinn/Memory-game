import { useState } from "react";
import shuffelCards from "../../helper";
import GameScreen from "../screens/GameScreen";
import GameEnd from "../screens/GameEnd";

const GameBoard = ({ CARDS, endGame }) => {
  const [clickedCards, setClickedCards] = useState([]);

  CARDS = shuffelCards(CARDS);
  const scoreMsg = `Score: ${clickedCards.length} / ${CARDS.length}`;
  let isGameOver = new Set(clickedCards).size < clickedCards.length;
  let hasWin = clickedCards.length === CARDS.length;

  return (
    <>
      {isGameOver || hasWin ? (
        <GameEnd isGameOver={isGameOver} hasWin={hasWin} endGame={endGame} />
      ) : (
        <GameScreen
          cards={CARDS}
          hitCard={(cardCode) => setClickedCards([...clickedCards, cardCode])}
          scoreMsg={scoreMsg}
        />
      )}
    </>
  );
};

export default GameBoard;
