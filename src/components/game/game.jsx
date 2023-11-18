import { useEffect, useState } from "react";
import Loading from "./Loader";

function Game({NumOfCards}){
    const [Cards, setCards] = useState({});

    useEffect(() => {
        let isCardsAvailable = false;
        let deck_id = '';
        // to get the deck_id
        const getDeckId = async () => {
            await fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
            .then((res) => res.json())
            .then((res) => deck_id = res.deck_id)
            .catch((err) => console.error(err));
        }

        const getCards = async () => {
            await fetch(`https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${NumOfCards}`)
            .then((res) => res.json())
            .then((res) => {
                if(!isCardsAvailable){
                    setCards(res.cards);
                }
            })
            .catch((err) => console.error(err));
        }

        getDeckId().then(_ => getCards());

        return () => {
            isCardsAvailable = true;
        }
    },[NumOfCards]); // only use effect when the component is mounted

    if(Cards.length > 0) {
        return (
            <>
                <div>
                    the data have been fetched and it's ready for manipulation
                    {console.log(Cards)}
                </div>
            </>
        )
    }
    else {
        return <Loading/>;
    }
}

export default Game;