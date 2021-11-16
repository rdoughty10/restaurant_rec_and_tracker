import './App.css';
import React, { useState, useEffect }  from 'react';
// import Axios from 'axios';
// import { CssBaseline, Grid } from '@material-ui/core';

// import Header from './components/Header/Header';
// import Map from './components/Map/Map';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./components/Pages/About"
import Home from "./components/Pages/Home"
import SignUp from "./components/Pages/Sign-Up"
import Help from "./components/Pages/Help"
import LoginPage from "./components/Pages/LoginPage"
import Review from "./components/Pages/Review"

function App(){


  return (
    
      <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/help" exact component={Help} />
            <Route path="/sign-up" exact component={SignUp} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/review" exact component={Review} />
        </Switch>
      </Router> 

  );
}

export default App;

