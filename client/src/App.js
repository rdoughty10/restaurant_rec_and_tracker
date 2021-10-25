import './App.css';
// import React, {useState, Component} from 'react';
// import Axios from 'axios';
// import { CssBaseline, Grid } from '@material-ui/core';

// import Header from './components/Header/Header';
// import Map from './components/Map/Map';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/Pages/About"
import Home from "./components/Pages/Home"
import Login from "./components/Login/Login"
import Signup from "./components/Login/Signup"

function App(){

  return (
    
      <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/login" exact component={Login}/>
            <Route path="/signup" exact component={Signup}/>
        </Switch>
      </Router> 


    // <>
    //   <CssBaseline />
    //   <Header />
    //   <Grid container spacing={3} style={{width: '100%'}}>
    //     <Grid item xs={12} md={4}>
    //       <h1> Items </h1>
    //     </Grid>
    //     <Grid item xs={12} md={8}>
    //       <Map/>
    //     </Grid>
    //   </Grid>
    // </>
  );
}

export default App;



// const [firstName, setFirstName] = useState('')
//   const [lastName, setLastName] = useState('')
//   const [username, setUsername] = useState('')
//   const [email, setEmail] = useState('')

//   const submitUser = () => {
//     Axios.post('http://localhost:3001/api/insert/', {
//       firstName: firstName,
//       lastName: lastName,
//       username: username,
//       email: email,
//     }).then(() => {
//       alert("successful insert")
//     })
//   }