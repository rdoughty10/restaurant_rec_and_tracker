import React, { useState, useEffect }  from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Axios from 'axios';

import { getRestaurantData } from '../../api';
import Header from '../Header/Header';
import Map from '../Map/Map';
import List from '../List/List';
import Search from '../Search/Search'
import 'regenerator-runtime/runtime'

const Home = () => {

  const [restaurants, setRestaurants] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude});
    })
  }, []);


  useEffect(() => {
    setIsLoading(true);

    console.log(coordinates, bounds);
    getRestaurantData(bounds.sw, bounds.ne).then((data) => {
      console.log(data);
      for (var i = 0; i < data?.length; i++) {
        if (!data[i].name){
          data.splice(i, 1);
        }
      }
      console.log(data)
      setRestaurants(data);
      setIsLoading(false);
    })
  }, [coordinates, bounds]);


  useEffect(() => {
    Axios.get('http://localhost:3001/api/user/get').then((response) => {
      console.log(response)
      if (response.data.loggedIn == true){
        setUser(response.data.user[0])
        setLoggedIn(true)
      }else{
        setUser({})
        setLoggedIn(false)
      }
    });
  }, [])

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{width: '100%'}}>
      <Grid item xs={12} md={4}>
          <List restaurants={restaurants}
                childClicked={childClicked}
                isLoading={isLoading}
          />
        </Grid>  
       <Grid item xs={12} md={8}>
          <Map 
            setCoordinates = {setCoordinates}
            setBounds = {setBounds}
            coordinates={coordinates}
            restaurants ={restaurants}
            setChildClicked={setChildClicked}
          />
        </Grid>
        
        <Grid item xs={12} md={12}>
          <Search 
          restaurants={restaurants}
          />
        </Grid>
        
      </Grid>
    </>
  
  );
}

export default Home