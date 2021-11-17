import Home from '../src/components/Pages/Home'
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, ReactWrapper } from 'enzyme';
import { ExpansionPanelActions } from '@material-ui/core';
configure({adapter: new Adapter()});

it("renders without crashing", () => {
    const home = shallow(<Home />);
});
