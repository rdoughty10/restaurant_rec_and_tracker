import React, {useState, useParams} from 'react';
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core';
import { CssBaseline, Grid } from '@material-ui/core';
import { getRestaurantData } from '../../api';
import Header from '../Header/Header';
import StarRating from '../StarRating';
import './ReviewPage.css'
import { useLocation } from 'react-router-dom'


const Review = () => {
    //const { restaurant } = useParams()
    const location = useLocation();
    const { restaurant } = location.state;

    const [rating, setRating] = useState(null)
    console.log(restaurant)

    return (
        <>
            <CssBaseline />
            <Header />
            <h1>{restaurant.restaurant.name}</h1>
            <Typography variant="h4">
                Leave a Review:
                {/* {restaurant.name} */}
            </Typography>
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={12}>
                    <div className="Review">
                        <StarRating setRatingForm={setRating}/>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}

export default Review;