import React, { useContext } from "react";
import ArticleCard from "./ArticleCard";
import { observer } from "mobx-react";
import { Context } from "..";

const ArticleList = observer(() => {
  const { article } = useContext(Context);

  if (article.articles.length === 0) {
    return (
      <div className="home__list">
        <span className="home__title-empty">Пока статьи отсутствуют</span>
      </div>
    );
  }

  return (
    <div className="home__list">
      {article.articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
});

export default ArticleList;
