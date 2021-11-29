import React, { useState, useEffect }  from 'react';
import { CssBaseline, Grid, Typography } from '@material-ui/core';
import Axios from 'axios';
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core';
import Header from '../Header/Header';
import 'regenerator-runtime/runtime'

const MyReviews = () => {

  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false)

  const [reviews, setReviews] = useState({});



  useEffect(() => {
    Axios.get('http://localhost:3001/api/user/get').then((response) => {
      console.log(response)
      if (response.data.loggedIn == true){
        Axios.post('http://localhost:3001/api/reviews/user', {
            userID: response.data.user[0].id,
        }).then((response) => {
            console.log(response)
            setReviews(response.data)
        })
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
        <h1> {user.firstName + " " + user.lastName}'s Reviews</h1>
        <CardContent>
            <Grid container spacing={3} style={{width: '100%'}}>
                {Array.from(reviews)?.map((review, i) => (
                    <Grid item xs={12} md={7}>
                        <Grid item xs={12} md={12}>
                            <h2> {review.restaurantName}</h2>
                            <Box display='flex' justifyContent='space-between'>
                                <Rating value={Number(review.rating)} readOnly/>
                            </Box>
                            {/*<h4> {review.rating}/5</h4>*/}
                            <Grid item xs={12} md={12}>
                                <p> Additional Comments:</p>
                            </Grid>  
                            <p> {review.review}</p>
                        </Grid>  
                    </Grid>  
                    
                ))}
                        
            </Grid>
        </CardContent>
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