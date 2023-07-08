import React, { useContext, useState, useEffect } from "react";
import { Context } from "..";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
import ArticleFormManager from "./ArticleFormManager";

const ArticleContent = observer(({ editMode, setEdtiMode }) => {
  const { article } = useContext(Context);
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const selectedArticle = article.articles.find(
    (item) => item.id === parseInt(id)
  );

  useEffect(() => {
    if (selectedArticle) {
      setTitle(selectedArticle.title);
      setContent(selectedArticle.content);
    }
  }, [selectedArticle]);


  return (
    <div className="article__content">
      <>
        {editMode ? (
          <ArticleFormManager
            titleEdit={title}
            contentEdit={content}
            editMode={editMode}
            setEdtiMode={setEdtiMode}
            selectedArticle={selectedArticle}
          />
        ) : (
          <>
            <h2 className="article__title">{selectedArticle.title}</h2>
            <div className="article__text">{selectedArticle.content}</div>
          </>
        )}
      </>
    </div>
  );
});

export default ArticleContent;
