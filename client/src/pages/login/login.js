import React, { useEffect, useState } from "react";
import "./login.css";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import NavBar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer.js";
import Axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState(false);

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      // si auth est false, alors le login status est false
      if (!response.data.auth) {
        setLoginStatus(false);
      } else {
        // on stocke localement le token
        localStorage.setItem("token", response.data.token);
        setLoginStatus(true);
      }
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      // si logged in est true, alors on affiche le nom de l'user
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].firstname);
      }
    });
  }, []);

  const userAuthenticated = () => {
    Axios.get("http://localhost:3001/isUserAuth", {
      headers: { "x-access-token": localStorage.getItem("token") },
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          <Col lg={{ span: 6, offset: 3 }}>
            <div className="login-form">
              <h1 className="login-title">Se connecter</h1>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Adresse mail</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Mot de passe</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mot de passe"
                  />
                </Form.Group>

                <Button
                  onClick={login}
                  variant="success"
                  style={{ backgroundColor: "#0f6860" }}
                >
                  Connexion
                </Button>
                <h1>
                  {loginStatus && (
                    <Button onClick={userAuthenticated}>
                      Check if Authenticated
                    </Button>
                  )}
                </h1>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Login;
