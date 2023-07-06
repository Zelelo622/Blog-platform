import React from "react";
import { Container } from "react-bootstrap";
import ArticleList from "../components/ArticleList";
import "../assets/style/Home.css";

const HomePage = () => {
  return (
    <>
      <div className="home">
        <Container>
          <ArticleList />
        </Container>
      </div>
    </>
  );
};

export default HomePage;
