import React, { useState, useEffect }  from 'react';
import { CssBaseline, Grid, Typography } from '@material-ui/core';
import Axios from 'axios';

import Header from '../Header/Header';
import 'regenerator-runtime/runtime'
import { useLocation } from 'react-router-dom'


const MyReviews = () => {

  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false)

  const [reviews, setReviews] = useState({});
  const location = useLocation();
  const { restaurant } = location.state;



  useEffect(() => {
    Axios.post('http://localhost:3001/api/reviews/restaurant', {
            restaurantName: restaurant.restaurant.name,
            restaurantLat: restaurant.restaurant.latitude,
            restaurantLng: restaurant.restaurant.longitude,
        }).then((response) => {
            console.log(response)
            setReviews(response.data)
        })
  }, [])

return (
    <>
    <CssBaseline />
    <Header />
    <h1> {restaurant.restaurant.name}'s Reviews</h1>
    <CardContent>
            <Grid container spacing={3} style={{width: '100%'}}>
                {Array.from(reviews)?.map((review, i) => (
                    <Grid item xs={12} md={7}>
                        <Grid item xs={12} md={12}>
                        <h2> {"Review " + i + ":"}</h2>
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
    /* <Grid container spacing={3} style={{width: '100%'}}>
        {Array.from(reviews)?.map((review, i) => (
            <Grid item xs={12} md={12}>
                <h2> {"Review " + i + ":"}</h2>
                <h4> {review.rating}/5</h4>
                <p> {review.review}</p>

            </Grid>  
        ))}
                    
    </Grid>
    </>    */
);

} 

export default MyReviews