import Review from '../src/components/Pages/Review'
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, ReactWrapper } from 'enzyme';
configure({adapter: new Adapter()});

it("renders without crashing", () => {
    shallow(<Review />);
});