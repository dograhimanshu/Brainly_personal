
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AddCardForm from './components/AddCardForm';
import CardFeed from './components/CardFeed';

function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [cards, setCards] = useState(() => {
    const saved = localStorage.getItem('cards');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  useEffect(() => {
    localStorage.setItem('darkMode', dark.toString());
  }, [dark]);

  const addCard = (card) => setCards([card, ...cards]);
  const deleteCard = (id) => setCards(cards.filter(c => c.id !== id));

  return (
    <div data-theme={dark ? "dark" : "light"}>
  <div className="min-h-screen bg-base-200 text-base-content">

        <Navbar toggleDark={() => setDark(!dark)} dark={dark} />
        <div className="container mx-auto p-4 grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 space-y-4">
            <AddCardForm addCard={addCard} />
            <CardFeed cards={cards} deleteCard={deleteCard} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
