import React from 'react';

function Card() {
  return(
    <article className="element">
      <img className="element__photo" src="#" alt="#" />
      <div className="element__caption">
        <h2 className="element__description"></h2>
        <div className="element__like">
          <button type="button" className="element__like-button" aria-label="Close"></button>
          <p className="element__like-count">0</p>
        </div>
        
      </div>
      <button type="button" className="element__delete-button" aria-label="Delete"></button>
    </article>
  );
}

export default Card;