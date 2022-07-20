import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="authorize">
      <h1 className="authorize__header">Вход</h1>
      <form className="authorize__form">
        <input className="authorize__input" type="email" placeholder="Email" name="email"></input>
        <input className="authorize__input" type="password" placeholder="Пароль" name="password"></input>
        <button className="authorize__submit">Войти</button>
      </form>
    </div>
  );
}

export default Login;