import React from 'react';
import {Rating} from '@material-ui/lab';


const PlaceDetails = ({restaurant, selected, refProp}) => {
    if (selected) refProp?.current?.scrollIntoView({behaviour: "smooth", block: "start"})

    return (
        <>
        <h3>{restaurant.name}</h3>
        <h6>{restaurant.rating}</h6>
        </>
    );
}

export default PlaceDetails;