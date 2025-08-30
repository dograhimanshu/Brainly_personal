
import React, { useEffect, useState } from 'react';

const Card = ({ card, deleteCard }) => {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if(card.content.startsWith('http')) {
      // Simple YouTube thumbnail support
      if(card.content.includes('youtube.com') || card.content.includes('youtu.be')) {
        const idMatch = card.content.match(/(?:v=|\.be\/)([\w-]+)/);
        if(idMatch) {
          setPreview({ image: `https://img.youtube.com/vi/${idMatch[1]}/hqdefault.jpg`, url: card.content });
        }
      } else {
        // fallback generic preview (could integrate real link preview API)
        setPreview({ image: 'https://via.placeholder.com/400x200?text=Link', url: card.content });
      }
    }
  }, [card.content]);

  return (
    <div className="card bg-base-100 shadow-md p-4">
      <div className="flex justify-between items-start">
        <h2 className="font-bold mb-2">{card.title}</h2>
        <button onClick={()=>deleteCard(card.id)} className="btn btn-xs btn-error">Delete</button>
      </div>
      {preview ? (
        <a href={preview.url} target="_blank" rel="noopener noreferrer">
          <img src={preview.image} alt="preview" className="rounded mb-2" />
        </a>
      ) : (
        <p>{card.content}</p>
      )}
    </div>
  )
}

export default Card;
