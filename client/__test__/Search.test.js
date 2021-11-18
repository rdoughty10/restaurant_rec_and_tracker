import Search from '../src/components/Search/Search';
import React from 'react';
import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, ExpansionPanelActions} from '@material-ui/core';
import {configure, shallow, mount} from 'enzyme';
import { BrowserRouter } from 'react-router-dom';



it("renders without crashing", () => {
    shallow(<Search />)
});

const restaurants = [
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


it("accepts restaurant without crashing", () => {
    shallow(<Search restaurants = {restaurants}/>);
});

it("accepts restaurants and isLoading without crashing", () => {
    shallow(<Search restaurants = {restaurants} isLoading = {true}/>);
});

// it("accounts for typography", () => {
//     const wrapper = mount(<Typography variant={"h4"}/>);
//     const value = wrapper.find("Typography").prop().variant;
//     expect(value).toEqual("h4")
// });

// describe('react unit tests', () => {

//     describe('full DOM tests', () => {
        // let reactWrapper: ReactWrapper;
        //     beforeEach(() => {
        //         reactWrapper = mount(<Search />);
        //     });


            // it('Child React Component html content would be rendered', () => {
            //     const reactWrapper = mount(<Search restaurants = {restaurants}/>);
            //     expect(reactWrapper.find(Typography).length).toBe(1);
            //     expect(reactWrapper.find(FormControl).length).toBe(2);
            //     expect(reactWrapper.find(InputLabel).length).toBe(3);
            //     expect(reactWrapper.find(Select).length).toBe(3);
            //     expect(reactWrapper.find(MenuItem).length).toBe(14);
            //     expect(reactWrapper.find(PlaceDetails).length).toBe(14);
            //     expect(reactWrapper.find(Grid).length).toBe(1);
            //    });
        
it("accepts restaurant without crashing", () => {
    mount(
        <BrowserRouter>
            <Search restaurants = {restaurants}/>
        </BrowserRouter>
    );
});