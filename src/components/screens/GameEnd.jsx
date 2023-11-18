const GameEnd = ({isGameOver, hasWin, endGame}) => {
  if (isGameOver) {
    return (
      <div>
        <h1>Game OVER</h1>
        <button onClick={endGame}>New Game</button>
      </div>
    );
  } else if (hasWin) {
    return (
      <div>
        <h1>You win the Game</h1>
        <button onClick={endGame}>New Game</button>
      </div>
    );
  }
};

export default GameEnd;
