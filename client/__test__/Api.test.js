import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, ReactWrapper } from 'enzyme';
configure({adapter: new Adapter()});

import { getRestaurantData } from '../src/api/index.js';
const axios = require('axios');

jest.mock('axios');
const restuarant_mockresult = [
    {
        address: "12200 Mayfield Rd, Cleveland, OH 44106-1926",
        cuisine: [
            {key: '4617', name: 'Italian'},
            {key: '20069', name: 'Sicilian'},
            {key: '20076', name: 'Southern-Italian'},
            {key: '10665', name: 'Vegetarian Friendly'},
            {key: '10697', name: 'Vegan Options'},
            {key: '10992', name: 'Gluten Free Options'}],
        latitude: "41.50854",
        name: "Mia Bella Restaurant",
        num_reviews: "642",
        phone: "+1 216-795-2355",
        price_level: "$$ - $$$",
        ranking: "#9 of 1,528 Restaurants in Cleveland",
        rating: "4.5",
        raw_ranking: "4.402435779571533",
        website: "http://www.mblittleitaly.com",
    },
]


it('returns the title of the first album', async () => {
    const title = await getRestaurantData();  // Run the function
});

// it('returns list of restaurants' , async() => {
//     axios.get.mockResolvedValue({
//         data: [
//             {
//                 address: "12200 Mayfield Rd, Cleveland, OH 44106-1926",
//                 cuisine: [
//                     {key: '4617', name: 'Italian'},
//                     {key: '20069', name: 'Sicilian'},
//                     {key: '20076', name: 'Southern-Italian'},
//                     {key: '10665', name: 'Vegetarian Friendly'},
//                     {key: '10697', name: 'Vegan Options'},
//                     {key: '10992', name: 'Gluten Free Options'}],
//                 latitude: "41.50854",
//                 name: "Mia Bella Restaurant",
//                 num_reviews: "642",
//                 phone: "+1 216-795-2355",
//                 price_level: "$$ - $$$",
//                 ranking: "#9 of 1,528 Restaurants in Cleveland",
//                 rating: "4.5",
//                 raw_ranking: "4.402435779571533",
//                 website: "http://www.mblittleitaly.com",
//             }
//         ]
//     });

//     const restaurants = await getRestaurantData();
//     expect(restaurants).toEqual(restuarant_mockresult);
    
// })