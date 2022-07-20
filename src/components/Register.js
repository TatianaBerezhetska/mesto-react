import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
    <div className="authorize">
      <h1 className="authorize__header">Регистрация</h1>
      <form className="authorize__form">
        <input className="authorize__input" type="type" placeholder="Email" name="email"></input>
        <input className="authorize__input" type="password" placeholder="Пароль" name="password"></input>
        <button className="authorize__submit">Зарегистрироваться</button>
      </form>
      <div className="authorize__redirect">
      <p>Уже зарегистрированы?</p>
      <Link className="authorize__link" to="/sign-in"> Войти</Link>
      </div>
      
    </div>
    
    </>
  );
}

export default Register;
