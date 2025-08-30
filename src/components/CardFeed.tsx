
import React, { useState } from 'react';
import Card from './Card';

const CardFeed = ({ cards, deleteCard }) => {
  const [query, setQuery] = useState('');
  const filtered = cards.filter(c => c.title.toLowerCase().includes(query.toLowerCase()) || c.content.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search..." className="input input-bordered w-full mb-4" />
      <div className="space-y-4">
        {filtered.map(c => <Card key={c.id} card={c} deleteCard={deleteCard} />)}
      </div>
    </div>
  )
}

export default CardFeed;
