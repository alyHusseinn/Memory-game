import { useState } from "react";
import shuffelCards from "../../helper";
import GameScreen from "../screens/GameScreen";
import GameEnd from "../screens/GameEnd";

const GameBoard = ({ CARDS, endGame }) => {
  const [clickedCards, setClickedCards] = useState([]);

  CARDS = shuffelCards(CARDS);
  const scoreMsg = `Score: ${clickedCards.length} / ${CARDS.length}`;
  let isGameOver = new Set(clickedCards).size < clickedCards.length;
  let hasWin = (clickedCards.length == CARDS.length);

  return (
    <>
      <GameScreen
          cards={CARDS}
          hitCard={(cardCode) => setClickedCards([...clickedCards, cardCode])}
          scoreMsg={scoreMsg}
          isGameOver={(isGameOver || hasWin) }
        >
          {(isGameOver || hasWin) && <GameEnd isGameOver={isGameOver} hasWin={hasWin} endGame={endGame} />}
      </GameScreen>
    </>
  );
};

export default GameBoard;
