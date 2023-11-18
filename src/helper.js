
function shuffelCards(cards) {
    for (let i = 0; i < cards.length; i++) {
      // const high = cards.length - 1;
      // const low = i;
      // const j = Math.floor(Math.random() * (1 + high - low)) + low;
      // newCards.push(cards[j]);
      const j = Math.floor(Math.random() * cards.length);
      const temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }
    return cards;
}

export default shuffelCards;