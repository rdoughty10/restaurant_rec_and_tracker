import React, {useState} from 'react';
import Axios from 'axios';

import { Link } from 'react-router-dom'
import Header from '../Header/Header';

/*
page for user account creation 
*/
/*
function for class 
*/


function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitUser = () => (
      Axios.post('http://localhost:3001/api/user/new', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      }).then(() => {
        alert("successful registration");
      })
    )

    return (
      <div className ="signup">
        <Header/>
        <h1> Sign Up </h1>
        <p>Enter your your information to create an account.</p>
        <hr></hr>
        <div className = "signup-form">
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
              type = "password"
              placeholder = "Enter Password"
              required 
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
            />
          <p>You adhere to our Terms and Privacy with the creation of your account.</p>

          <div class = "clearfix">
            <button type = "button" class="cancelbutton">Cancel</button>
            <Link to='/home-signed-in'>
              <button>Register</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }


export default Signup;