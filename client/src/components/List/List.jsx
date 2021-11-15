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
                <Grid container spacing ={2} className={classes.list}>
                    {restaurants?.map((restaurant, i) => (
                        <Grid item key = {i} xs={12} md={12}>
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