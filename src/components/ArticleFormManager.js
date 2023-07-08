import { observer } from "mobx-react";
import React, { useContext, useState } from "react";
import { Context } from "..";
import { useNavigate } from "react-router-dom";
import { ARTICLE_ROUTE, HOME_ROUTE } from "../utils/consts";

const ArticleFormManager = observer(
  ({ titleEdit, contentEdit, editMode, setEdtiMode, selectedArticle }) => {
    const { article } = useContext(Context);
    const [title, setTitle] = useState(editMode ? titleEdit : "");
    const [content, setContent] = useState(editMode ? contentEdit : "");
    const [titleValid, setTitleValid] = useState(true);
    const [contentValid, setContentValid] = useState(true);
    const navigate = useNavigate();

    const validateForm = () => {
      let isValid = true;

      if (title.trim() === "") {
        setTitleValid(false);
        isValid = false;
      } else {
        setTitleValid(true);
      }

      if (content.trim() === "") {
        setContentValid(false);
        isValid = false;
      } else {
        setContentValid(true);
      }

      return isValid;
    };

    const handleAddArticle = () => {
      if (validateForm()) {
        const lastId =
          article.articles.length > 0
            ? article.articles[article.articles.length - 1].id
            : 0;
        const newArticle = {
          id: lastId + 1,
          title: title,
          content: content,
        };

        article.addArticle(newArticle);
        setTitle("");
        setContent("");
        navigate(HOME_ROUTE);
      }
    };

    const handleEditArticle = () => {
      if (validateForm()) {
        const updatedArticle = {
          ...selectedArticle,
          title: title,
          content: content,
        };

        article.updateArticle(updatedArticle);
        setEdtiMode(false);
      }
    };

    return (
      <div className="addArticle__wrapper">
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setTitleValid(true);
          }}
          placeholder="Заголовок"
          className={`${!titleValid && "is-invalid"} addArticle__input`}
        />
        <textarea
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
            setContentValid(true);
          }}
          placeholder="Содержание"
          className={`${!contentValid && "is-invalid"} addArticle__textarea`}
        ></textarea>
        {!editMode ? (
          <button className="addArticle__btn btn" onClick={handleAddArticle}>
            Добавить
          </button>
        ) : (
          <button className="addArticle__btn btn" onClick={handleEditArticle}>
            Сохранить
          </button>
        )}
      </div>
    );
  }
);

export default ArticleFormManager;
