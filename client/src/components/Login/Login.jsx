import React, {useState} from 'react';
import Axios from 'axios';

import Header from '../Header/Header';
import {Link} from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const getUser = () => (
      Axios.post('http://localhost:3001/api/user/get', {
        email: email,
        password: password,
      }).then(() => {
        alert("user found");
      })
    )


    return (
      <div className ="login">
        <Header/>
        <h1> Login </h1>
        <hr></hr>
        <div className = "login-form">
          {/* Email Box */}
          <label for = "email"><b>Email: </b></label>
            <input
              type = "text"
              placeholder = "Enter Email"
              required
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
            />
          {/* Password Box */}
          <label for = "password"><b>Password: </b></label>
            <input
              type = "password"
              placeholder = "Enter Password"
              required 
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
            />

          {/* Submit and Cancel Buttons */}
          <div class = "clearfix">
            <button type= "login" class= "signupbutton" onClick={getUser}>Login</button>
          </div>

          <p>Don't already have an account? Sign up today.</p>
          {/* Submit and Cancel Buttons */}
          <div class = "clearfix">
            <Link to='sign-up'>
              <button>Register</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }


export default Login;