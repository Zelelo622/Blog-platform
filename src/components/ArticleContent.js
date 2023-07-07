import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { articles } from "../utils/articleObj";
import { observer } from "mobx-react";
import { Context } from "..";

const ArticleContent = observer(() => {
  const { article } = useContext(Context);
  const articleId = useParams();

  const selectedArticle = article.articles.find((item) => item.id === parseInt(articleId.id));

  return (
    <div className="article__content">
      <h2 className="article__title">{selectedArticle.title}</h2>
      <div className="article__text">{selectedArticle.content}</div>
    </div>
  );
});

export default ArticleContent;
