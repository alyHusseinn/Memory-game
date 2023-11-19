import { useState } from "react";
import Game from "./components/game/game";
import ChoiseLevel from "./components/screens/GameStart";
function App() {
  const [numOfCards, setNumOfCards] = useState(6);
  const [showGame, setShowGame] = useState(false);

  return (
    <div className="app">
      <header>
        <span>&clubs;</span>
        <h2> Memory Cards Game </h2>
        <span>&clubs;</span>
      </header>
      {showGame == false ? (
        <ChoiseLevel
          ChangeLevel={setNumOfCards}
          startGame={() => setShowGame(true)}
        />
      ) : (
        <Game NumOfCards={numOfCards} endGame={() => setShowGame(false)} />
      )}
    </div>
  );
}

export default App;
