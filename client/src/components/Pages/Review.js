import React, {useState, useEffect} from 'react';
import Axios from 'axios';

import { Link } from 'react-router-dom'
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
    const [review, setReview] = useState('')

    const [loginStatus, setLoginStatus] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)
    const [error, setError] = useState("")
    

    useEffect(() => {
        Axios.get('http://localhost:3001/api/user/get').then((response) => {
          console.log(response)
          if (response.data.loggedIn == true){
            setCurrentUser(response.data.user[0].id)
            setLoginStatus(true)
          }else{
            setCurrentUser(null)
            setLoginStatus(false)
          }
        });
      }, [])

    console.log(restaurant)
    const submitReview = () => {
        if (loginStatus){
          Axios.post('http://localhost:3001/api/review/submit', {
            userID: currentUser,
            restaurantName: restaurant.restaurant.name,
            restaurantLat: restaurant.restaurant.latitude,
            restaurantLng: restaurant.restaurant.longitude,
            rating: rating,
            review: review,
          }).then((result) => {
            console.log(result);
          });
        }else{
          setError("Please login before creating a review")
        }
      }

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

                    <Grid item xs={12} md={12}>
                        <Typography variant="h5">
                            Additional Comments:
                        </Typography>
                    </Grid>
                    <label htmlFor = "textReview" variant="h5"></label>
                    <input 
                        type="text" 
                        placeholder = "Enter your review"
                        name="textReview" 
                        multiline={true} 
                        numberOfLines={10}
                        maxLength={1000}
                        style={{width: "550px", height:"100px",
                        fontSize: 18,
                        textAlignVertical:"top"
                        }}
                        value = {review}
                        required
                        onChange={(e)=>{
                        setReview(e.target.value)
                        }}
                    />
                    <button onClick={submitReview} name="submitReview">Submit</button>
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