import React, { useState } from "react";
import ArticleContent from "../components/ArticleContent";
import { Container } from "react-bootstrap";
import "../assets/style/Article.css";

const ArticlePage = () => {
  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  return (
    <>
      <div className="article">
        <Container>
          <div className="article__btns">
            {!editMode ? (
              <button
                className="article__btn-edit btn"
                onClick={handleEditClick}
              >
                Редактировать
              </button>
            ) : (
              <button
                className="article__btn-edit btn"
                onClick={handleEditClick}
              >
                Отменить
              </button>
            )}
          </div>
          <ArticleContent editMode={editMode} setEditMode={setEditMode} />
        </Container>
      </div>
    </>
  );
};

export default ArticlePage;
