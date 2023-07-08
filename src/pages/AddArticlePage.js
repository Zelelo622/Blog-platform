import React from "react";
import { Container } from "react-bootstrap";
import "../assets/style/AddArticle.css";
import ArticleFormManager from "../components/ArticleFormManager";

const AddArticlePage = () => {
  return (
    <>
      <div className="addArticle">
        <Container>
          <ArticleFormManager />
        </Container>
      </div>
    </>
  );
};

export default AddArticlePage;
