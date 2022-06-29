import React from 'react';
import addButton from '../images/Addbutton.svg';
import Card from './Card.js';
import api from './utils/Api.js';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [userName, setUserName] = React.useState();
  const [userDescription , setUserDescription ] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
    .then(({name, about, avatar}) => {
      setUserName(name);
      setUserDescription(about);
      setUserAvatar(avatar);
    })
    .catch((err) => {
      console.log(`Ошибка при запросе данных пользователя с сервера ${err}`);
    })
  }, [])

  React.useEffect(() => {
    api.getCards()
    .then((res) => {
      setCards(res);
    })
    .catch((err) => {
      console.log(`Ошибка при запросе данных карточек с сервера ${err}`);
    })
  }, [])

  return(
    <main className="content">
    <section className="profile">
      <button className="profile__edit-avatar" type="button" aria-label="Edit" onClick={onEditAvatar}></button>
      <img className="profile__pic" src={userAvatar} alt="Фото профиля" />
      <h1 className="profile__name">{userName}</h1>
      <button className="profile__edit" type="button" aria-label="Edit" onClick={onEditProfile}></button>
      <p className="profile__caption">{userDescription}</p>
      <button className="profile__add" type="button" onClick={onAddPlace}>
        <img className="profile__add-icon" src={ addButton } alt="Кнопка Добавить" />
      </button>
    </section>
    <section className="elements">
      {cards.map((card) => {
        return (
        <Card 
        key={card._id}
        card={card}
        handleClick={onCardClick}
        />
      )
      })}
    </section>
  </main>
  )
}

export default Main;