import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Card, Button } from 'react-bootstrap'

import "../Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = e =>{
      e.preventDefault();
  }

  return (
    <div className="Login">
        <div className="formImage">
            <Card.Img variant="top" src="../public/book.png" className="cardImage"  />
        </div>
        <div className="form">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email" className="email">
                    <Form.Control
                    autoFocus
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password" className="password">
                    <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()} className="submit">
                    Sign In
                </Button>
            </Form>
        </div>
    </div>
  );
}