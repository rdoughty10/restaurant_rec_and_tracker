import React, { useState, useEffect }  from 'react';
import { CssBaseline, Grid, Typography } from '@material-ui/core';
import Axios from 'axios';

import Header from '../Header/Header';
import 'regenerator-runtime/runtime'

const MyReviews = () => {

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

  if(loggedIn) {
    return (
        <>
        <CssBaseline />
        <Header />
        <Grid container spacing={3} style={{width: '100%'}}>
            <Grid item xs={12} md={12}>
                {/* <Typography variant="h5">
                    {user.firstName}'s Reviews:
                </Typography> */}
                <Grid item xs={12} md={12}>
                    <Grid item xs={12} md={6}>
                        {/* Name and 5 star rating */}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {/* Additional comments */}
                    </Grid>
                </Grid>
            </Grid>           
        </Grid>
        </>   
    );
    } else {
        return (
            <>
        <CssBaseline />
        <Header />
        <Grid container spacing={3} style={{width: '100%'}}>
            <Grid item xs={12} md={12}>
                <Typography variant="h4">
                    Please login to access your reviews.
                </Typography>
            </Grid> 
            <Grid item xs={12} md={12}>
                <Typography variant="h5">
                    The login button is in the top right of the screen.
                </Typography>
            </Grid>          
        </Grid>
        </>       
    );
    }
} 

export default MyReviews