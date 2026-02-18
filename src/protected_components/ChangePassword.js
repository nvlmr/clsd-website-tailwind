import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Form, FormControl, Button,Container, Row, Col } from "react-bootstrap";
import AuthService from "../services/auth.service";

const ChangePassword = () => {
let navigate = useNavigate();

const [oldPassword, setOldPassword] = useState("");
const [newPassword, setNewPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState("");

const onChangeOldPassword = (e) => {
const password = e.target.value;
setOldPassword(password);
};

const onChangeNewPassword = (e) => {
const password = e.target.value;
setNewPassword(password);
};

const onChangeConfirmPassword = (e) => {
const password = e.target.value;
setConfirmPassword(password);
};

const handlePasswordChange = (e) => {
e.preventDefault();


setMessage("");
setLoading(true);

if (oldPassword && newPassword && confirmPassword) {
  if (newPassword !== confirmPassword) {
    setLoading(false);
    setMessage("New password and confirm password do not match!");
    return;
  }
  AuthService.changePassword(oldPassword, newPassword).then(
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
  setMessage("All fields are required!");
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


    <Form onSubmit={handlePasswordChange}>
      <Form.Group controlId="formBasicOldPassword">
        <Form.Label></Form.Label>
        <FormControl
          type="password"
          placeholder="Old Password"
          value={oldPassword}
          onChange={onChangeOldPassword}
        />
      </Form.Group>

      <Form.Group controlId="formBasicNewPassword">
        <Form.Label></Form.Label>
        <FormControl
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={onChangeNewPassword}
        />
      </Form.Group>

      <Form.Group controlId="formBasicConfirmPassword">
        <Form.Label></Form.Label>
        <FormControl
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={onChangeConfirmPassword}
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={loading}>
        {loading && (
          <span className="spinner-border spinner-border-sm"></span>
        )}
        <span>Change Password</span>
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

export default ChangePassword;