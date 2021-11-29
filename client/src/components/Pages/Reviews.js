import React, { useState, useEffect }  from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Axios from 'axios';

import Header from '../Header/Header';
import 'regenerator-runtime/runtime'

const Reviews = () => {

  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false)



  useEffect(() => {
    Axios.get('http://localhost:3001/api/user/get').then((response) => {
      console.log(response)
      if (response.data.loggedIn == true){
        setUser(response.data.user[0])
        setLoggedIn(true)
      }else{
        setUser({})
        setLoggedIn(false)
      }
    });
  }, [])

  return (
    <>
      <CssBaseline />
      <Header />
      
    </>
  
  );
}

export default Reviews