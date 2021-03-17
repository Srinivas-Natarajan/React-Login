import React, { useState } from "react";

import "../styles/Login.css";

export default function LoginForm({Login,error}) {
  const [details, setDetails] = useState({email:"",password:""});

  const handleSubmit = e =>{
      e.preventDefault();
      Login(details)
  }

  return (
    <div className="Login">
        <div className="formImage">
            <img variant="top" src="../contact.png" alt="Contact" className="iconImage"  />
        </div>
        <div className="error">
        {(error !=="")?(
                <div>{error}</div>
            ):""}
        </div>
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div >
                    <input
                    type="email"
                    placeholder="Email"
                    className="email"
                    onChange={(e) => setDetails({...details, email:e.target.value})}
                    value={details.email}
                    />
                </div>
                <div>
                    <input
                    type="password"
                    className="password"
                    placeholder="Password"
                    onChange={(e) => setDetails({...details, password:e.target.value})}
                    value={details.password}
                    />
                </div>
                <div className="links">
                    <span class="linkA"><a href="https://www.google.co.in/">Forgot password?</a></span>
                    <span class="linkB"><a href="https://www.google.co.in/">Forgot email?</a></span>
                </div>
                <button block size="lg" type="submit" className="submit">
                    Sign In
                </button>
            </form>
        </div>
    </div>
  );
}