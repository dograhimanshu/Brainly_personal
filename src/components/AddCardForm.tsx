
import React, { useState } from 'react';

const AddCardForm = ({ addCard }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title && !content) return;
    const newCard = { id: Date.now(), title, content };
    addCard(newCard);
    setTitle(''); setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="card bg-base-100 shadow p-4 space-y-2">
      <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" className="input input-bordered w-full" />
      <textarea value={content} onChange={e=>setContent(e.target.value)} placeholder="Note, YouTube/Tweet/Link URL..." className="textarea textarea-bordered w-full" />
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  )
};

export default AddCardForm;
