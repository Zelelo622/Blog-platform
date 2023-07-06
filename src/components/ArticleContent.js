import React from "react";
import { useParams } from "react-router-dom";
import { articles } from "../utils/articleObj";

const ArticleContent = () => {
  const articleId = useParams();

  const article = articles.find((item) => item.id === parseInt(articleId.id));

  console.log(articleId.id);

  console.log(article);

  return (
    <div className="article__content">
      <h2 className="article__title">{article.title}</h2>
      <div className="article__text">{article.content}</div>
    </div>
  );
};

export default ArticleContent;
