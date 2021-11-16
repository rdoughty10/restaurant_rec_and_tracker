import React from 'react';
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core';
import { CssBaseline, Grid } from '@material-ui/core';
import { getRestaurantData } from '../../api';
import Header from '../Header/Header';
import StarRating from '../StarRating';
import './ReviewPage.css'

const Review = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Typography variant="h4">
                Leave a Review:
                {/* {restaurant.name} */}
            </Typography>
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={12}>
                    <div className="Review">
                        <StarRating />
                    </div>
                </Grid>
            </Grid>
        </>
    );
}

export default Review;