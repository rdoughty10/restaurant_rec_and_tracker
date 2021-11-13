import React, {useState, useEffect, createRef} from 'react';
import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select} from '@material-ui/core';
import useStyles from './styles'
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import { Button } from './ButtonSearch';


const Search = ({restaurants, childClicked, isLoading}) => {
    const classes = useStyles();
    const [type, setType] = useState('restaurants');
    //const [rating, setRating] = useState('');
    const [distance, setDistance] = useState('');
    const [price, setPrice] = useState('');
    const [elRefs, setElRefs]= useState([]);

    useEffect(() => {
        const refs = Array(restaurants?.length).fill().map((_ , i) => elRefs[i] || createRef());

        setElRefs(refs);
    }, [restaurants])

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
                        <MenuItem value="lessThanMile"> Less Than 1 Mile </MenuItem>
                        <MenuItem value="withinThree">Within 3 Miles</MenuItem>
                        <MenuItem value="withinFive">Within 5 Miles</MenuItem>
                        <MenuItem value="withinTen">Within 10 Miles</MenuItem>
                        <MenuItem value="withinTwentyFive">Within 25 Miles</MenuItem>
                        <MenuItem value="anyDistance">25+</MenuItem>
                    </Select>
                </FormControl>
                <Button />

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
                <Button />
                
                <Typography variant="h5">Result</Typography>

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