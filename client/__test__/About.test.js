import About from '../src/components/Pages/About'
import { shallow, configure, ReactWrapper } from 'enzyme';
import React from 'react';


it("renders without crashing", () => {
    shallow(<About />);
});