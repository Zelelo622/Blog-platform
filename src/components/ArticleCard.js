import React from "react";
import { Link } from "react-router-dom";
import { ARTICLE_ROUTE } from "../utils/consts";
import { observer } from "mobx-react";

const ArticleCard = observer(({ article }) => {
  return (
    <Link to={ARTICLE_ROUTE + `/${article.id}`} className="home__link link">
      <div className="home__wrapper">
        <h2 className="home__title">{article.title}</h2>
        <p className="home__text">{article.content}</p>
      </div>
    </Link>
  );
});

export default ArticleCard;
