function ChoiseLevel({ ChangeLevel, startGame }) {
  return (
    <>
      <h1>Memory-Game</h1>
      <div className="level-choices">
        <h2>Choise the Level</h2>
        <div className="levels">
          <button
            onClick={() => {
              ChangeLevel(12);
              startGame();
            }}
          >
            Hard
          </button>
          <button
            onClick={() => {
              ChangeLevel(9);
              startGame();
            }}
          >
            Midium
          </button>
          <button
            onClick={() => {
              ChangeLevel(6);
              startGame();
            }}
          >
            Easy
          </button>
        </div>
      </div>
    </>
  );
}

export default ChoiseLevel;
