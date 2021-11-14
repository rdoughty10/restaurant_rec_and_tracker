import React from 'react';
import {Rating} from '@material-ui/lab';
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
//import Rating from '@material-ui/lab/Rating';
import useStyles from './styles';
import { Link } from 'react-router-dom'


const PlaceDetails = ({restaurant, selected, refProp}) => {
    if (selected) refProp?.current?.scrollIntoView({behaviour: "smooth", block: "start"})
    const classes = useStyles();
    return (
        <Card elevation={6}>
            <CardMedia
                style={{height: 0}}
                title={restaurant.name}
            />
            <CardContent>
                <Typography gutterBottom variant='h5'>{restaurant.name}</Typography>
                <Box display='flex' justifyContent='space-between'>
                    <Typography variant='subtitle1'>Price</Typography>
                    <Typography gutterBottom variant='subtitle1'>{restaurant.price_level}</Typography>
                </Box>
                <Box display='flex' justifyContent='space-between'>
                    <Typography variant='subtitle1'>Ranking</Typography>
                    <Typography gutterBottom variant='subtitle1'>{restaurant.ranking}</Typography>
                </Box>
                {restaurant?.cuisine?.map(({name}) => (
                    <Chip key={name} size="small" label={name} className={classes.chip}/>
                ))}
                {restaurant?.address && (
                    <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
                        <LocationOnIcon /> {restaurant.address}
                    </Typography>
                )}
                {restaurant?.phone && (
                    <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.spacing}>
                        <PhoneIcon /> {restaurant.phone}
                    </Typography>
                )}
                <CardActions>
                    <Button size="small" color="primary">
                        <Link to= '/review' aboutProps={ restaurant }>
                        Leave a Review
                        </Link>
                    </Button>
                    <Button size="small" color="primary" onClick={() => window.open(restaurant.website, '_blank')}>
                        Website
                    </Button>
                </CardActions>
            </CardContent>    
        </Card>
    );
}

export default PlaceDetails;