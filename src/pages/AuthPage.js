import React from "react";
import "../assets/style/Auth.css";
import Login from "../components/Login";
import { Container } from "react-bootstrap";

const AuthPage = () => {
  return (
    <>
      <div className="auth">
        <Container>
          <Login />
        </Container>
      </div>
    </>
  );
};

export default AuthPage;
