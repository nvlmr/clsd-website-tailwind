import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Form, FormControl, Button,Container, Row, Col } from "react-bootstrap";
import AuthService from "../services/auth.service";
import "./Log.css";
const Login = () => {
  let navigate = useNavigate();

  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const email = e.target.value;
    setUsername(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    if (email && password) {
      AuthService.login(email, password).then(
        () => {
          navigate("/dashboard");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
      setMessage("Username and password are required!");
    }
  };

  return (
    <div className="login-container">
    <Container>
      <Row className="justify-content-center">
        <Col md={6} className="form-wrapper">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label></Form.Label>
            <FormControl
              type="text"
              placeholder="Email"
              value={email}
              onChange={onChangeUsername}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label></Form.Label>
            <FormControl
              type="password"
              placeholder="Password"
              value={password}
              onChange={onChangePassword}
            />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={loading}>
            {loading && (
              <span className="spinner-border spinner-border-sm"></span>
            )}
            <span>Login</span>
          </Button>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
        </Form>
        </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
