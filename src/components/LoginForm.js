import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import {  Button } from 'react-bootstrap'

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
            <img variant="top" src="./book.png" alt="book" className="cardImage"  />
        </div>
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div >
                    <input
                    autoFocus
                    type="email"
                    placeholder="Email"
                    className="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <input
                    type="password"
                    className="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="links">
                    <span class="linkA"><a href="https://www.google.co.in/">Forgot password?</a></span>
                    <span class="linkB"><a href="https://www.google.co.in/">Forgot email?</a></span>
                </div>
                <button block size="lg" type="submit" disabled={!validateForm()} className="submit">
                    Sign In
                </button>
            </form>
        </div>
    </div>
  );
}