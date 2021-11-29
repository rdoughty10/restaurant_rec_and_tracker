import React, {useState, useParams} from 'react';
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core';
import { CssBaseline, Grid } from '@material-ui/core';
import { getRestaurantData } from '../../api';
import Header from '../Header/Header';
import StarRating from '../StarRating';
import './ReviewPage.css'
import { useLocation } from 'react-router-dom'
import PlaceDetailsReview from '../PlaceDetails/PlaceDetailsReview';



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
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={5}>
                    <Typography variant="h3">
                        Leave a Review:
                    </Typography>
                    <Typography variant="h5">
                        Out of 5 Stars:
                    </Typography>
                    <Grid container spacing={3} style={{width: '100%'}}>
                        <Grid item xs={12} md={12}>
                            <div className="Review">
                                <StarRating setRatingForm={setRating}/>
                            </div>
                        </Grid>
                    </Grid>
                    <Typography variant="h5">
                        Additional Comments:
                    </Typography>
                </Grid>
                <Grid item xs={12} md={7}>
                    <PlaceDetailsReview 
                        restaurant={restaurant.restaurant}
                    />
                </Grid>
            
            </Grid>
        </>
    );
}

export default Review;