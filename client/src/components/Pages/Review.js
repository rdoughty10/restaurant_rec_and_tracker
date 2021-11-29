import React, {useState, useEffect} from 'react';
import Axios from 'axios';

import {Typography} from '@material-ui/core';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from '../Header/Header';
import StarRating from '../StarRating';
import './ReviewPage.css'
import { useLocation } from 'react-router-dom'
import PlaceDetailsReview from '../PlaceDetails/PlaceDetailsReview';



function Review() {
    const location = useLocation();
    const { restaurant } = location.state;

    const [rating, setRating] = useState(null)
    const [review, setReview] = useState('')

    const [loginStatus, setLoginStatus] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)
    const [error, setError] = useState("")

    Axios.defaults.withCredentials = true;

    console.log(restaurant)



    const submitReview = () => {    
        Axios.post('http://localhost:3001/api/reviews/new', {
            userID: currentUser,
            restaurantName: restaurant.restaurant.name,
            restaurantLat: restaurant.restaurant.latitude,
            restaurantLng: restaurant.restaurant.longitude,
            rating: rating,
            review: review,
        }).then((result) => {
            console.log(result);
            setError(result.data.message)
        })
    }
    

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


    return (
        <>
            <CssBaseline />
            <Header />
            <h2>{currentUser}{restaurant.restaurant.name}{restaurant.restaurant.latitude}{rating}{review}</h2>
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
                    
                    <label htmlfor="textReview" variant="h5"></label>
                    <textarea 
                      type="text"
                      placeHolder="Enter your review"
                      name="textReview"
                      multiline={true}
                      numberOfLines={3}
                      maxLength={140}
                      style={{width: "550px", height:"100px",
                        fontSize: 18,
                        textAlignVertical:"top",
                        fontFamily: "roboto"
                        }}
                      value = {review}
                      required
                      onChange={(e)=>{
                      setReview(e.target.value)
                      }}
                    />
                    <button onClick={submitReview} name="submitReview">Submit</button>
                    <h4>{error}</h4>
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