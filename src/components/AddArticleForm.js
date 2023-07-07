import { observer } from "mobx-react";
import React, { useContext, useState } from "react";
import { Context } from "..";

const AddArticleForm = observer(() => {
  const { article } = useContext(Context);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddArticle = () => {
    const lastId =
      article.articles.length > 0 ? 
        article.articles[article.articles.length - 1].id : 0;
    const newArticle = {
      id: lastId + 1,
      title: title,
      content: content,
    };
    article.addArticle(newArticle);
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Заголовок"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Содержание"
      ></textarea>
      <button onClick={handleAddArticle}>Добавить</button>
    </div>
  );
});

export default AddArticleForm;
