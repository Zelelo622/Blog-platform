import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { HOME_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../assets/style/Header.css";
import { observer } from "mobx-react";
import { Context } from "..";

const Header = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  const exit = () => {
    user.setIsAuth(false);
    navigate(LOGIN_ROUTE, { replace: true });
  };

  if (isLogin) {
    return null;
  }

  return (
    <>
      <header className="header">
        <Container>
          <div className="header__inner">
            <div className="header__left">
              <Link to={HOME_ROUTE} className="logo link">
                BLOG
              </Link>
            </div>
            <div className="header__right">
              <nav className="nav">
                <ul className="nav__list">
                  <>
                    <li className="nav__item">
                      <button className="nav__btn" onClick={exit}>
                        Выход
                      </button>
                    </li>
                  </>
                </ul>
              </nav>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
});

export default Header;
