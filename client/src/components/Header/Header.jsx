import React, {useState} from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, MenuItem, InputLabel, FormControl, Select} from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';


const Header = () => {
    const classes = useStyles();
    const [more, setType] = useState('');

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Restaurant Recommendation and Tracking System
                </Typography>
                <FormControl className={classes.formControl}>
                <InputLabel>More</InputLabel>
                <Select value = {more} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="login">Login</MenuItem>
                    <MenuItem value="help">Help</MenuItem>
                    <MenuItem value="about">About/FAQ</MenuItem>
                </Select>
            </FormControl>
            </Toolbar>
        </AppBar>
    );
}


export default Header;