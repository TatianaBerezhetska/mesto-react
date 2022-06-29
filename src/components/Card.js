import React from 'react';

function Card({card, handleClick}) {

  function handleCardClick() {
    handleClick(card);
  }
  
  return(
    <article className="element">
      <img className="element__photo" src={card.link} alt={card.name} onClick={handleCardClick} />
      <div className="element__caption">
        <h2 className="element__description">{card.name}</h2>
        <div className="element__like">
          <button type="button" className="element__like-button" aria-label="Close"></button>
          <p className="element__like-count">{card.likes.length}</p>
        </div>
      </div>
      <button type="button" className="element__delete-button" aria-label="Delete"></button>
    </article>
  );
}

export default Card;