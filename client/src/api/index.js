import axios from 'axios';


//const URL = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?restaurants&textquery&fields=address_component%2cadr_address%2cbusiness_status%2cformatted_address%2cgeometry%2cicon%2cicon_mask_base_uri%2cicon_background_color%2cname%2cphoto%2cplace_id%2cplus_code%2ctype%2curl%2cutc_offset%2cvicinity%2cformatted_phone_number%2cinternational_phone_number%2copening_hours%2cwebsite%2cprice_level%2crating%2creview%2cuser_ratings_total&locationbias=rectangle:';
//const URL = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?restaurants&textquery&fields=address_component&locationbias=circle%3a10000%4041.505550%2c-81.691498&key=AIzaSyCcR8xRQ3tXkH2Lxc4xAHy3zoin9xUijDk'
const URL = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=AIzaSyCcR8xRQ3tXkH2Lxc4xAHy3zoin9xUijDk'


// const options = {
//     params: {
//       bl_latitude: '11.847676',
//       tr_latitude: '12.838442',
//       bl_longitude: '109.095887',
//       tr_longitude: '109.149359'
//     },
//     headers: {
//       'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//       'x-rapidapi-key': 'KJwZZIJSFimhuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA'
//     }
//   };


const options = {
    method: 'get',
    url: 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=AIzaSyCcR8xRQ3tXkH2Lxc4xAHy3zoin9xUijDk',
    headers: { }
};


export const getRestaurantData = async () => {
    axios(options).then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
}