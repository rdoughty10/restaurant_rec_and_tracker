import React, {useState, useEffect, createRef} from 'react';
import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select} from '@material-ui/core';
import useStyles from './styles'
import PlaceDetails from '../PlaceDetails/PlaceDetails';


const Search = ({restaurants, childClicked, isLoading}) => {
    const classes = useStyles();
    const [type, setType] = useState('restaurants');
    //const [rating, setRating] = useState('');
    const [distance, setDistance] = useState('');
    const [price, setPrice] = useState('');
    const [elRefs, setElRefs]= useState([]);
    const [result, setResult] = useState('')
    const [found, setFound] = useState('')


    useEffect(() => {
        const refs = Array(restaurants?.length).fill().map((_ , i) => elRefs[i] || createRef());

        setElRefs(refs);
    }, [restaurants])

    function getRandomNumber(min, max) {
        let a = max - min + 1;
        let b = Math.random() * a;
        let result = Math.floor(b) + min;
        return result;
    }


    function random(restaurants, distance) {
        for (var i = 0; i < restaurants?.length; i++){
            if (!(parseInt(restaurants[i].distance) * .621 <= parseInt(distance))){
                restaurants.splice(i,1);
            }
        }
        
        let index = getRandomNumber(0, restaurants?.length)
        if (restaurants?.length == 0) {
            setFound("No Restaurants Within this Distance")
        } else {
            setFound("");
            setResult(restaurants[index]);
        }
    }

    return (
        <div className={classes.container}>
            <h1>Restaurant Search</h1>
            {isLoading ? (
                <div className={classes.loading}>
                    <CircularProgress size="5rem"/>
                </div>
            ) : (
                <>
                <Typography variant="h4">Random Search</Typography>
                <FormControl className={classes.formControl}>
                    <InputLabel>Distance</InputLabel>
                    <Select value ={distance} onChange={(e) => setDistance(e.target.value)}>
                        <MenuItem value="1"> Less Than 1 Mile </MenuItem>
                        <MenuItem value="3">Within 3 Miles</MenuItem>
                        <MenuItem value="5">Within 5 Miles</MenuItem>
                        <MenuItem value="10">Within 10 Miles</MenuItem>
                        <MenuItem value="25">Within 25 Miles</MenuItem>
                        <MenuItem value="100">All</MenuItem>
                    </Select>
                </FormControl>
                <h4>{found}</h4>
                <button onClick={() => random(restaurants, distance)}>Search</button>


                <Typography variant="h4">Targeted Search</Typography>
                <FormControl className={classes.formControl}>
                    <InputLabel>Type of Cuisine</InputLabel>
                    <Select value = {type} onChange={(e) => setType(e.target.value)}>
                        <MenuItem value="fastFood">Fast Food</MenuItem>
                        <MenuItem value="asian">Asian Cuisine</MenuItem>
                        <MenuItem value="breakfast">Breakfast</MenuItem>
                        <MenuItem value="european">European</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel>Price</InputLabel>
                    <Select value = {price} onChange={(e) => setPrice(e.target.value)}>
                        <MenuItem value="cheap">Cheap $</MenuItem>
                        <MenuItem value="average">Average $$</MenuItem>
                        <MenuItem value="expensive">Expensive $$$</MenuItem>
                    </Select>
                </FormControl>
                {/* <Button /> */}

                {/* <Typography variant="h5">Result</Typography> */}
        
                <PlaceDetails
                    restaurant={result}
                />
                
                {/*display result*/}
                <Grid container spacing={2} className={classes.Search}>
                    {/* {restaurants?.map((restaurant,i) => (
                        <Grid item key = {i} xs={12}>
                            <PlaceDetails
                            restaurant={restaurant}
                            select={Number(childClicked) == i}
                            refProp={elRefs[i]}
                            />
                        </Grid>
                    ))} */}
                </Grid>
                </>
            )}
        </div>
    );

}
export default Search;