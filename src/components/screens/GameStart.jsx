function ChoiseLevel({ ChangeLevel, startGame }) {
  return (
    <>
      
      <div className="choosing-level">
        <h2>Select the Level</h2>
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
