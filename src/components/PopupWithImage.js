import React from 'react';

function PopupWithImage() {
  return(
    <div className="popup popup_dark-bg popup_type_pic">
    <div className="popup__container popup__container_pic">
      <button type="button" className="popup__close-button" aria-label="Close"></button>
      <img className="popup__photo" src="#" alt="#" />
      <p className="popup__photo-caption"></p>
    </div>
  </div>
  );
}

export default PopupWithImage;