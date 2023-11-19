const GameEnd = ({isGameOver, hasWin, endGame}) => {
  if (isGameOver) {
    return (
      <div className="lose">
        <h1>Game OVER</h1>
        <button onClick={endGame}>New Game</button>
      </div>
    );
  } else if (hasWin) {
    return (
      <div className="win">
        <h1>You win the Game</h1>
        <button onClick={endGame}>New Game</button>
      </div>
    );
  }
};

export default GameEnd;
