/*
page for the creation of user accounts
*/
import './App.css';
import React, {useState} from 'react';
import Axios from 'axios';

/*
function for class 
*/
function Account() {
    //add functionality (add inputs to database)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitUser = () => {
    Axios.post('http://localhost:3001/api/insert/', {
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: password,
    }).then(() => {
      alert("successful insert")
    })
    return (
        <div className ="Account">
          <h1> Create an Account </h1>
          <p>Fill out this form to create an account.</p>
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
          {/* Username Box */}
          <label for = "username"><b>Username:</b> </label>
            <input 
            type = "text"
            placeholder = "Enter Username"
            required
            onChange={(e)=>{
                setUsername(e.target.value)
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
          {/* Password Box 
          <label for = "password"><b>Password: </b></label>
            <input
            type = "text"
            placeholder = "Enter Password"
            required 
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            />
          {/* ADD LINK for TERMS AND PRIVACY */}
          <p>You adhere to our <a href="#" style="color:dodgerblue">Terms and Privacy</a> with the creation of your account.</p>
        {/* Submit and Cancel Buttons */}
          <div class = "clearfix">
            <button type = "button" class="cancelbutton">Cancel</button>
            <button type= "submit" class= "signupbutton">Sign Up</button>
        </div>
      </div>
    </div>
  );
}}
export default Account;