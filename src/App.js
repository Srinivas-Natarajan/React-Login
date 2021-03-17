import React, {useState} from 'react';
import LoginForm from './components/LoginForm';

import './App.css';

function App() {
  const admin = {
    email:"admin@gmail.com",
    password:"abcd"
  }

  const [user,setUser] = useState({name:"", email:""});
  const [error,setError] = useState("")

  const Login = details =>{
    if(details.email === admin.email && details.password === admin.password){
      console.log("Logged in!!");
      setUser({
        email:details.email,
      })
    }
    else{
      console.log("Dont match");
      setError("Incorrect Details");
    }
  }

  const Logout = () =>{
    console.log("Logout");
    setUser({
      email:"",
    })
  }

  return (
    <div className="App">
      { (user.email !== "")?(
        <div className="welcome">
          <h2>Welcome <span>{user.email}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
          <div>
            <div className="split left">
              <div class="centered">
                <img src="./book.png" alt="book pic"/>
                <h1>School Name</h1>
              </div>
            </div>
            <div className="split right">
              <div class="centered-form">
                <LoginForm Login={Login} error={error} />
              </div>
            </div>
          </div> 
      ) }
    </div>
  );
}

export default App;
