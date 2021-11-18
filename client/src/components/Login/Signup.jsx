import React, {useState, useEffect} from 'react';
import Axios from 'axios';

import { Link } from 'react-router-dom'
import Header from '../Header/Header';
import { CssBaseline, Grid } from '@material-ui/core';

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
    const [error, setError] = useState("");

    const [loginStatus, setLoginStatus] = useState(false)
    const [currentUser, setCurrentUser] = useState("")

    const register = () => {
      if (!loginStatus){
        Axios.post('http://localhost:3001/api/user/new', {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        }).then((result) => {
          console.log(result);
          if(result.data.message){
            setError(result.data.message)
          }
        });
      }else{
        setError("Please logout before creating a new account")
      }
    }

    useEffect(() => {
      Axios.get('http://localhost:3001/api/user/get').then((response) => {
        console.log(response)
        if (response.data.loggedIn == true){
          setCurrentUser(response.data.user[0].firstName)
          setLoginStatus(true)
          setError("Logged in as " + response.data.user[0].firstName + ". Please logout before creating a new account.")
        }
      });
    }, [])

    return (
      <>
        <CssBaseline/>
        <Header/>
        <h1> Sign Up </h1>
        <p>Enter your your information to create an account.</p>
        <hr></hr>
        <h4>{error}</h4>
        <div className = "signup-form">
          {/* First Name Box */}
          <label htmlFor = "firstName"><b>First Name:</b></label>
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
          <label htmlFor = "lastName"> <b>Last Name:</b> </label>
            <input 
              type = "text"
              placeholder = "Enter Last Name"
              required 
              onChange={(e)=>{
                setLastName(e.target.value)
              }}
            />
          {/* Email Box */}
          <label htmlFor = "email"><b>Email: </b></label>
            <input
              type = "text"
              placeholder = "Enter Email"
              required
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
            />
          {/* Password Box */}
          <label htmlFor = "password"><b>Password: </b></label>
            <input
              type = "password"
              placeholder = "Enter Password"
              required 
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
            />
          <p>You adhere to our Terms and Privacy with the creation of your account.</p>

          <div className = "clearfix">
            <Link to="/login">
              <button type = "button" class="cancelbutton">Already have an account?</button>
            </Link>
            
            <button onClick={register}>Register</button>
            
          </div>
        </div>
      </>
    );
  }


export default Signup;