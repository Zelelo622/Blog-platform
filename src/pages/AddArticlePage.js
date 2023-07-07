import React from "react";
import AddArticleForm from "../components/AddArticleForm";
import { Container } from "react-bootstrap";
import "../assets/style/AddArticle.css";

const AddArticlePage = () => {
  return (
    <>
      <div className="addArticle">
        <Container>
          <AddArticleForm />
        </Container>
      </div>
    </>
  );
};

export default AddArticlePage;
