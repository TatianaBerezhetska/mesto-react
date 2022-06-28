import React from 'react';
import addButton from '../images/Addbutton.svg';

function Main() {
  return(
    <main className="content">
    <section className="profile">
      <button className="profile__edit-avatar" type="button" aria-label="Edit"></button>
      <img className="profile__pic" src="#" alt="Фото профиля" />
      <h1 className="profile__name"></h1>
      <button className="profile__edit" type="button" aria-label="Edit"></button>
      <p className="profile__caption"></p>
      <button className="profile__add" type="button">
        <img className="profile__add-icon" src={ addButton } alt="Кнопка Добавить" />
      </button>
    </section>
    <section className="elements">
    </section>
  </main>
  )
}

export default Main;