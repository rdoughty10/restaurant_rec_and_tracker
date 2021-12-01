import React, { useState, useEffect }  from 'react';
import Axios from 'axios';
import { CssBaseline, Grid, Typography, Box, CardContent, Card, CardMedia} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

import Header from '../Header/Header';
import 'regenerator-runtime/runtime'
import { useLocation } from 'react-router-dom'


const MyReviews = () => {

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
    
    <Grid container spacing={3} style={{width: '100%'}}>
        <Grid item xs={12} md={6}>
            {Array.from(reviews)?.map((review, i) => (
                <Card elevation={6}>
                <CardMedia
                    style={{height: 0}}
                    
                />
                <CardContent>    
                    <h2> {"Review " + (i+1) + ":"}</h2>
                    <Box display='flex' justifyContent='space-between'>
                        <Rating value={Number(review.rating)} readOnly/>
                    </Box>
                    {/*<h4> {review.rating}/5</h4>*/}
                    
                        <p> Additional Comments:</p>
                    
                    <p> {review.review}</p>
                </CardContent>
                </Card>
            ))}
        </Grid> 
        <Grid item xs={12} md={6}></Grid>
                
    </Grid>

            
        
        
        </>
    /* <Grid container spacing={3} style={{width: '100%'}}>
        {Array.from(reviews)?.map((review, i) => (
            <Grid item xs={12} md={12}>
                <h2> {"Review " + (i+1) + ":"}</h2>
                <h4> {review.rating}/5</h4>
                <p> {review.review}</p>

            </Grid>  
        ))}
                    
    </Grid>
    </>    */
);

} 

export default MyReviews