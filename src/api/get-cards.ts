async function getCards() {
  const cards = await fetch('https://api.nomoreparties.co/beatfilm-movies', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  return cards.json();
}

export { getCards };
