import { useState } from "react"
import Game from "./components/game/game";
import ChoiseLevel from "./components/levelChoice";

function App() {

  const [numOfCards, setNumOfCards] = useState(6);
  const [showGame, setShowGame] = useState(false);

  return (

    <div className="app">
      {showGame == false? <ChoiseLevel ChangeLevel={setNumOfCards} startGame={() => setShowGame(true)}/>
      : <Game NumOfCards={numOfCards} endGame={() => setShowGame(false)}/>}
    </div>
  )
}

export default App
