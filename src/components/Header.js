import React from "react";
import { Route, Link } from "react-router-dom";
import logo from "../images/logo.svg";


function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Место Россия" />
      <Route path="/sign-up">
        <Link className="header__link" to="/sign-in">Войти</Link>
      </Route>
      <Route path="/sign-in">
        <Link className="header__link" to="/sign-up">Регистрация</Link>
      </Route>
    </header>
  );
}

export default Header;