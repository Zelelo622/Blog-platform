import React from "react";
import ArticleContent from "../components/ArticleContent";
import { Container } from "react-bootstrap";
import "../assets/style/Article.css";

const ArticlePage = () => {
  return (
    <>
      <div className="article">
        <Container>
          <ArticleContent />
        </Container>
      </div>
    </>
  );
};

export default ArticlePage;
