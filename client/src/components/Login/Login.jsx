import React, {useState, useEffect} from 'react';
import Axios from 'axios';

import Header from '../Header/Header';
import {Link} from 'react-router-dom';
import { CssBaseline, Grid } from '@material-ui/core';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [currentUser, setCurrentUser] = useState("");
    const [loginStatus, setLoginStatus] = useState(false);

    Axios.defaults.withCredentials = true;

    const login = () => (
      Axios.post('http://localhost:3001/api/user/get', {
        email: email,
        password: password,
      }).then((response) => {
        // console.log(response);
        if(response.data.message){
          setCurrentUser(response.data.message);
          setLoginStatus(false)
        }else{
          setCurrentUser("Logged in as " + response.data[0].firstName);
          setLoginStatus(true)
        }
      })
    )

    const logout = () => (
      Axios.get('http://localhost:3001/api/user/logout', {}).then(
        (response) => {
          console.log(response)
          if (!response.data.loggedIn){
            setLoginStatus(false)
            setCurrentUser("")
          }
        }
      )
    )

      
    useEffect(() => {
      Axios.get('http://localhost:3001/api/user/get').then((response) => {
        console.log(response)
        if (response.data.loggedIn == true){
          setCurrentUser("Logged in as " + response.data.user[0].firstName)
          setLoginStatus(true)
        }
      });
    }, [])


    if (loginStatus){
      return (
        <>
          <CssBaseline/>
          <Header/>
          <h1> Login </h1>
          <hr></hr>
          <div className = "login-form">
            <h5> {currentUser} </h5>
            {/* Email Box */}
            <label htmlFor = "email"><b>Email: </b></label>
              <input
                type = "text"
                value = {email}
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
                value = {password}
                placeholder = "Enter Password"
                required 
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
              />
  
            {/* Submit and Cancel Buttons */}
            <div className = "clearfix">
              <button onClick={logout} name="logout">Logout</button>
            </div>
  
            <p>Don't already have an account? Sign up today.</p>
            {/* Submit and Cancel Buttons */}
            <div className = "clearfix">
              <Link to='/sign-up'>
                <button name="register">Register</button>
              </Link>
            </div>
          </div>
          
        </>
      );
    }else{
      return (
        <>
          <CssBaseline/>
          <Header/>
          <h1> Login </h1>
          <hr></hr>
          <div className = "login-form">
            <h5> {currentUser} </h5>
            {/* Email Box */}
            <label htmlFor = "email"><b>Email: </b></label>
              <input
                type = "text"
                value = {email}
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
                value = {password}
                placeholder = "Enter Password"
                required 
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
              />
  
            {/* Submit and Cancel Buttons */}
            <div className = "clearfix">
              <button onClick={login} name="login">Login</button>
            </div>
  
            <p>Don't already have an account? Sign up today.</p>
            {/* Submit and Cancel Buttons */}
            <div className = "clearfix">
              <Link to='/sign-up'>
                <button name="register">Register</button>
              </Link>
            </div>
          </div>
          
        </>
      );
    }
    
  }


export default Login;