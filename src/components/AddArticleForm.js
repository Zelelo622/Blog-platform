import { observer } from "mobx-react";
import React, { useContext, useState } from "react";
import { Context } from "..";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../utils/consts";

const AddArticleForm = observer(() => {
  const { article } = useContext(Context);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [titleValid, setTitleValid] = useState(true);
  const [contentValid, setContentValid] = useState(true);
  const navigate = useNavigate();

  const handleAddArticle = () => {
    const lastId =
      article.articles.length > 0
        ? article.articles[article.articles.length - 1].id
        : 0;
    const newArticle = {
      id: lastId + 1,
      title: title,
      content: content,
    };
    if (title.trim() === "") {
      setTitleValid(false);
    }
    if (content.trim() === "") {
      setContentValid(false);
    }
    if (title.trim() !== "" && content.trim() !== "") {
      article.addArticle(newArticle);
      setTitle("");
      setContent("");
      navigate(HOME_ROUTE);
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
      <button className="addArticle__btn btn" onClick={handleAddArticle}>
        Добавить
      </button>
    </div>
  );
});

export default AddArticleForm;
