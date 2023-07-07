import React, { useContext, useEffect } from "react";
import { articles } from "../utils/articleObj";
import ArticleCard from "./ArticleCard";
import { observer } from "mobx-react";
import { Context } from "..";

const ArticleList = observer(() => {
  const { article } = useContext(Context);

  return (
    <div className="home__list">
      {article.articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
});

export default ArticleList;
