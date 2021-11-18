import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getRestaurantData = async (sw, ne) => {
    try{
      console.log(sw.lat, sw.lng, ne.lat, ne.lng);
      const { data: {data}} = await axios.get(URL, {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          // restaurant_tagcategory_standalone: '10591',
          // restaurant_tagcategory: '10591',
          // limit: '30',
          // currency: 'USD',
          // open_now: 'true',
          // lunit: 'km',
          // lang: 'en_US'
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key': '74f38dd001msh5b4e222b5decf7dp13c3ebjsn2c9550c13a60'
        }
      });
      return data;

    } catch (error){
        console.log(error);
    }
}