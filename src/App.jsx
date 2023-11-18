import { useState } from "react"
import Game from "./components/game/game";
import ChoiseLevel from "./components/levelChoice";

function App() {

  const [numOfCards, setNumOfCards] = useState(6);
  const [showGame, updateShowGame] = useState(false);

  return (

    <div className="app">
      <ChoiseLevel ChangeLevel={setNumOfCards}/>
      <Game NumOfCards={numOfCards}/>
    </div>
  )
}

export default App
