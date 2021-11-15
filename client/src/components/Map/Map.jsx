import React, {PropTypes, Component} from 'react';

import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles'

const Map = ({setCoordinates, setBounds, coordinates, restaurants, setChildClicked}) => {
    
    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width:600px)');


    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys = {{key: 'AIzaSyCcR8xRQ3tXkH2Lxc4xAHy3zoin9xUijDk'}}
                defaultCenter = {coordinates}
                center = {coordinates}
                defaultZoom = {14}
                margin = {[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    setCoordinates({lat: e.center.lat, lng: e.center.lng})
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                }}
                onChildClick={(child) => setChildClicked(child)}
            >
                {restaurants?.map((restaurant, i) => (
                    <div
                        className = {classes.markerContainer}
                        lat={Number(restaurant.latitude)}
                        lng={Number(restaurant.longitude)}
                        key={i}
                    >
                    {
                        !isDesktop ? (
                            <LocationOnOutlinedIcon color="primary" fontSize="large" />
                        ) :
                        (
                            <Paper elevation={3} className={classes.paper}>
                                <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                                    {restaurant.name}
                                </Typography>
                                <Rating size="small" value={Number(restaurant.rating)} readOnly/>
                            </Paper> 
                        )
                        
                    }
                    
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    )
}

export default Map;