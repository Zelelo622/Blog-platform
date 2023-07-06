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
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const login = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      setEmailValid(false);
    }
    if (password === "") {
      setPasswordValid(false);
    }
    if (email !== "" && password !== "") {
      user.setIsAuth(true);
      navigate(HOME_ROUTE);
    }
  };

  return (
    <div className="auth__container">
      <form className="auth__form" onSubmit={login}>
        <div className="auth__group">
          <label className="auth__label" htmlFor="email">
            Почта
          </label>
          <input
            className={`auth__input ${!emailValid && "is-invalid"}`}
            type="email"
            placeholder="Почта"
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailValid(true);
            }}
          />
        </div>
        <div className="auth__group">
          <label className="auth__label" htmlFor="password">
            Пароль
          </label>
          <input
            className={`auth__input ${!passwordValid && "is-invalid"}`}
            type="password"
            placeholder="Пароль"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordValid(true);
            }}
          />
        </div>
        <div className="auth__btn-wrapper">
          <button onClick={login} type="submit" className="login-button btn">
            Войти
          </button>
        </div>
      </form>
    </div>
  );
});

export default Login;
