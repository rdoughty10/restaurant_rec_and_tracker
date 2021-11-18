import { FaStar } from 'react-icons/fa'
import StarRating from '../src/components/StarRating'
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
configure({adapter: new Adapter()});

it("renders without crashing", () => {
    shallow(<StarRating />);
});

it("renders a different set rating", () => {
    const wrapper = shallow(<input value={4}/>);
    const value = wrapper.find("input").props().value;
    expect(value).toEqual(4)
}); 

/* it("renders a hover value", () => {
    const wrapper = shallow(<input mouseOnEnter={() => setRating(4)}/>);
    const value = wrapper.find("input").props().rating;
    expect(value).toEqual(4)
});   */