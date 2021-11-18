import React, {useState, useEffect, createRef} from 'react';
import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select} from '@material-ui/core';
import useStyles from './styles'
import PlaceDetails from '../PlaceDetails/PlaceDetails';


const Search = ({restaurants, childClicked, isLoading}) => {
    const classes = useStyles();
    const [type, setType] = useState('restaurants');
    //const [rating, setRating] = useState('');
    const [distance, setDistance] = useState('');
    const [Tdistance, setTDistance] = useState('');
    const [price, setPrice] = useState('');
    const [elRefs, setElRefs]= useState([]);
    const [result, setResult] = useState('')
    const [randomFound, setrandomFound] = useState('')
    const [targetFound, settargetFound] = useState('')

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
        const randomRestaurants = [];
        for (var i = 0; i < restaurants?.length; i++){
            randomRestaurants[i] = restaurants[i];
        }        
        for (var i = 0; i < randomRestaurants?.length; i++){
            if (!(parseInt(randomRestaurants[i].distance) * .621 <= parseInt(distance))){
                randomRestaurants.splice(i,1);
                i--;
            }
        }
        
        let index = getRandomNumber(0, randomRestaurants?.length)
        if (randomRestaurants?.length == 0) {
            setrandomFound("No Restaurants Within this Distance")
        } else {
            if ((typeof randomRestaurants[index]) === "undefined"){
                setrandomFound("Error. Please search again.");
            } else {
                setrandomFound("");
                setResult(randomRestaurants[index]);
            }
        }
    }

    function target(restaurants, distance, foodtype, price) {
        const targetRestaurants = [];
        for (var i = 0; i < restaurants?.length; i++){
            targetRestaurants[i] = restaurants[i];
        }

        for (var i = 0; i < targetRestaurants?.length; i++){
            var cuisineType = false
            var distanceFound = false
            var priceLevel = false

            if (((parseInt(targetRestaurants[i].distance) * .621 <= parseInt(distance)))) {
                distanceFound = true;
            }

            for(var j = 0; j < targetRestaurants[i].cuisine?.length; j++) {
                if(targetRestaurants[i].cuisine[j].name === foodtype) {
                    cuisineType = true;
                }
            }

            if ((targetRestaurants[i].price_level === price)) {
                priceLevel = true;
            }
            
            if (!((distanceFound) && (cuisineType)  && (priceLevel))) {
                targetRestaurants.splice(i,1);
                i--;
            }

        }

        console.log(restaurants)
        console.log(targetRestaurants)
        let index = getRandomNumber(0, targetRestaurants?.length)
        if (targetRestaurants?.length == 0) {
            settargetFound("Error. No restaurants found with these criteria.")
        } else {
            if ((typeof targetRestaurants[index]) === "undefined"){
                settargetFound("Error. Please search again.");
            } else {
                settargetFound("");
                setResult(targetRestaurants[index]);
            }
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
                <h4>{randomFound}</h4>
                <button onClick={() => random(restaurants, distance)}>Search</button>


                <Typography variant="h4">Targeted Search</Typography>
                <FormControl className={classes.formControl}>
                    <InputLabel>Distance</InputLabel>
                    <Select value ={Tdistance} onChange={(e) => setTDistance(e.target.value)}>
                        <MenuItem value="1"> Less Than 1 Mile </MenuItem>
                        <MenuItem value="3">Within 3 Miles</MenuItem>
                        <MenuItem value="5">Within 5 Miles</MenuItem>
                        <MenuItem value="10">Within 10 Miles</MenuItem>
                        <MenuItem value="25">Within 25 Miles</MenuItem>
                        <MenuItem value="100">All</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel>Type of Cuisine</InputLabel>
                    <Select value = {type} onChange={(e) => setType(e.target.value)}>
                        <MenuItem value="American">American</MenuItem>
                        <MenuItem value="Mexican">Mexican</MenuItem>
                        <MenuItem value="Asian">Asian</MenuItem>
                        <MenuItem value="Italian">Italian</MenuItem>
                        <MenuItem value="Mediterranean">Mediterranean</MenuItem>
                        <MenuItem value="Deli">Deli</MenuItem>
                        <MenuItem value="Cafe">Cafe</MenuItem>
                        <MenuItem value="Vegan Options">Vegan Options</MenuItem>
                        <MenuItem value="Gluten Free Options">Gluten Free Options</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel>Price</InputLabel>
                    <Select value = {price} onChange={(e) => setPrice(e.target.value)}>
                        <MenuItem value="$">Cheap $</MenuItem>
                        <MenuItem value="$$ - $$$">Average $$-$$$</MenuItem>
                        <MenuItem value="$$$$">Expensive $$$$</MenuItem>
                    </Select>
                </FormControl>
                <h4>{targetFound}</h4>
                <button onClick={() => target(restaurants, Tdistance, type, price)}>Search</button>
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