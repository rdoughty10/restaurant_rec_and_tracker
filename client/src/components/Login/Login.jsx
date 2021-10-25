import React, {useState} from 'react';
import Axios from 'axios';
/*
page for user login 
*/
/*
function for class 
*/
function Login() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitUser = () => (
      Axios.post('http://localhost:3001/api/insert/', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      }).then(() => {
        alert("successful insert");
      })
    )

    return (
      <div className ="login">
        <h1> Login </h1>
        <hr></hr>
        <div className = "login-form">
          {/* First Name Box */}
          <label for = "firstName"><b>First Name:</b></label>
          <input 
            type="text" 
            placeholder = "Enter First Name"
            name="firstName" 
            required
            onChange={(e)=>{
              setFirstName(e.target.value)
            }}
          />
          {/* Last Name Box */}
          <label for = "lastName"> <b>Last Name:</b> </label>
            <input 
              type = "text"
              placeholder = "Enter Last Name"
              required 
              onChange={(e)=>{
                setLastName(e.target.value)
              }}
            />
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
              type = "text"
              placeholder = "Enter Password"
              required 
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
            />

          {/* Submit and Cancel Buttons */}
          <div class = "clearfix">
            <button type= "login" class= "signupbutton">Login</button>
          </div>

          <p>Don't already have an account? Sign up today.</p>
          {/* Submit and Cancel Buttons */}
          <div class = "clearfix">
            <button 
              onClick = {(e) => {
              e.preventDefault();
              window.location.href='http://localhost:3000/signup';
            }
            }
              type= "button" 
              class= "signupbutton">
                Sign Up</button>
          </div>
        </div>
      </div>
    );
  }


export default Login;