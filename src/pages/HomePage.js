import React from "react";
import { Container } from "react-bootstrap";
import ArticleList from "../components/ArticleList";
import "../assets/style/Home.css";
import { Link } from "react-router-dom";
import { ARTICLE_ADD_ROUTE } from "../utils/consts";

const HomePage = () => {
  return (
    <>
      <div className="home">
        <Container>
          <div className="home__btns">
            <Link to={ARTICLE_ADD_ROUTE} className="home__btn-add btn">Добавить статью</Link>
          </div>
          <ArticleList />
        </Container>
      </div>
    </>
  );
};

export default HomePage;
