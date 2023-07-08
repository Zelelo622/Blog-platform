import React, { useContext, useState, useEffect } from "react";
import { Context } from "..";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
import ArticleFormManager from "./ArticleFormManager";
import LikeSvg from "../assets/img/like.svg";

const ArticleContent = observer(({ editMode, setEditMode }) => {
  const { article } = useContext(Context);
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [likes, setLikes] = useState(0);
  const [hashtags, setHashtags] = useState("");

  const selectedArticle = article.articles.find(
    (item) => item.id === parseInt(id)
  );

  useEffect(() => {
    if (selectedArticle) {
      setTitle(selectedArticle.title);
      setContent(selectedArticle.content);

      if (selectedArticle.likes) {
        setLikes(selectedArticle.likes);
      } else {
        setLikes(0);
      }

      if (selectedArticle.hashtag) {
        setHashtags(selectedArticle.hashtag);
      } else {
        setHashtags("");
      }
    }
  }, [selectedArticle]);

  const handleLike = () => {
    const updatedArticle = {
      ...selectedArticle,
      likes: likes + 1,
    };
    article.updateArticle(updatedArticle);
  };

  return (
    <div className="article__content">
      <>
        {editMode ? (
          <ArticleFormManager
            titleEdit={title}
            contentEdit={content}
            hashtagsEdit={hashtags}
            editMode={editMode}
            setEditMode={setEditMode}
            selectedArticle={selectedArticle}
          />
        ) : (
          <>
            <h2 className="article__title">{title}</h2>
            <div className="article__text">{content}</div>
            <button className="article__like-btn btn" onClick={handleLike}>
              <img className="article__img" src={LikeSvg} alt="Лайк" />{" "}
              <span>{likes}</span>
            </button>
            <div className="article__hashtags">
              Hashtags: <span>{hashtags.split(",").join(", ")}</span>
            </div>
          </>
        )}
      </>
    </div>
  );
});

export default ArticleContent;
