import React, { useState } from "react";
import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
  };

  return (
    <div>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <>
          <input
            type="text"
            className="popup__input popup__input_type_name"
            required
            id="username"
            name="username"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
          />
          <span id="username-error" className="popup__error"></span>
          <input
            type="text"
            className="popup__input popup__input_type_job"
            required
            id="caption"
            name="job"
            placeholder="О себе"
            minLength="2"
            maxLength="200"
          />
          <span id="caption-error" className="popup__error"></span>
        </>
      </PopupWithForm>

      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <>
          <input
            type="url"
            className="popup__input popup__input_type_avatar"
            required
            id="avatar"
            name="avatar"
            placeholder="Введите ссылку"
          />
          <span id="avatar-error" className="popup__error"></span>
        </>
      </PopupWithForm>

      <PopupWithForm
        name="add"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <>
          <input
            type="text"
            className="popup__input popup__input_type_place-name"
            required
            id="placename"
            name="placename"
            placeholder="Название"
            minLength="2"
            maxLength="30"
          />
          <span id="placename-error" className="popup__error"></span>
          <input
            type="url"
            className="popup__input popup__input_type_place-link"
            required
            id="placelink"
            name="placelink"
            placeholder="Ссылка на картинку"
          />
          <span id="placelink-error" className="popup__error"></span>
        </>
      </PopupWithForm>

      <PopupWithForm name="submit-action" title="Вы уверены?" buttonText="Да" />

      <ImagePopup
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
        selectedCard={selectedCard}
      />
    </div>
  );
}

export default App;
