import React, {useState, useEffect, createRef} from 'react';
import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select} from '@material-ui/core';
import useStyles from './styles'
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({restaurants, childClicked, isLoading}) => {
    const classes = useStyles();
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');
    const [elRefs, setElRefs] = useState([]);

    useEffect(() => {
        const refs = Array(restaurants?.length).fill().map((_ , i) => elRefs[i] || createRef());

        setElRefs(refs);
    }, [restaurants])
    
    return (
        <div className={classes.container}>
            <h1>Restaurants</h1>
            {isLoading ? (
                <div className={classes.loading}>
                    <CircularProgress size="5rem"/>
                </div>
            ) : (
                <>
                <Typography variant="h4">Visited and Recommended Restaurants</Typography>
                <FormControl className={classes.formControl}>
                    <InputLabel>Type</InputLabel>
                    <Select value = {type} onChange={(e) => setType(e.target.value)}>
                        <MenuItem value="visited">Visited Restaurants</MenuItem>
                        <MenuItem value="recommended">Recommended Restaurants</MenuItem>
                    </Select>
                </FormControl>
                
                <FormControl className={classes.formControl}>
                    <InputLabel>Rating</InputLabel>
                    <Select value = {rating} onChange={(e) => setType(e.target.value)}>
                        <MenuItem value={0}>All</MenuItem>
                        <MenuItem value={3}>Above 3.0</MenuItem>
                        <MenuItem value={4}>Above 4.0</MenuItem>
                        <MenuItem value={4.5}>Above 4.5</MenuItem>
                    </Select>
                </FormControl>
            
                <Grid container spacing ={2} className={classes.list}>
                    {restaurants?.map((restaurant, i) => (
                        <Grid item key = {i} xs={12}>
                            <PlaceDetails 
                                restaurant={restaurant}
                                selected={Number(childClicked) == i}
                                refProp={elRefs[i]}
                            />
                        </Grid>
                    ))}
                </Grid>
                </>
            )}
        </div>
    );
}

export default List;