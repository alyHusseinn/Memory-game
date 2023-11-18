function ChoiseLevel({ChangeLevel}){
    return (
    <>
        <h1>Memory-Game</h1>
        <div className="level-choices">
            <h2>Choise the Level</h2>
            <div className="levels">
                <button onClick={() => ChangeLevel(12)}>Hard</button>
                <button onClick={() => ChangeLevel(9)}>Midium</button>
                <button onClick={() => ChangeLevel(6)}>Easy</button>
            </div>
        </div>
    </>
    )
}

export default ChoiseLevel;