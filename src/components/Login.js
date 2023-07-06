import { observer } from "mobx-react";
import React, { useContext, useState } from "react";
import { Context } from "..";
import { Link, useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../utils/consts";

const Login = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = () => {
    user.setIsAuth(true);
    navigate(HOME_ROUTE);
  };

  return (
    <div className="auth__container">
      <form className="auth__form">
        <div className="auth__group">
          <label className="auth__label" for="email">
            Почта
          </label>
          <input
            className="auth__input"
            type="email"
            placeholder="Почта"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="auth__group">
          <label className="auth__label" for="password">
            Пароль
          </label>
          <input
            className="auth__input"
            type="password"
            placeholder="Пароль"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="auth__btn-wrapper">
          <button onClick={click} type="submit" className="login-button">
            Войти
          </button>
        </div>
      </form>
    </div>
  );
});

export default Login;
