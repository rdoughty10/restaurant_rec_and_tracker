import React from 'react';
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core';
import { CssBaseline, Grid } from '@material-ui/core';
import { getRestaurantData } from '../../api';
import Header from '../Header/Header';
import StarRating from '../StarRating';
import './ReviewPage.css'

const Review = ({restaurant}) => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Typography variant="h4">
                Leave a Review:
                {/* {restaurant.name} */}
            </Typography>
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={7}>
                    <Typography variant="h6">
                        Out of 5 Stars
                    </Typography>
                    <div className="Review">
                        <StarRating />
                    </div>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Typography variant="h6">
                        Feedback
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}

export default Review;