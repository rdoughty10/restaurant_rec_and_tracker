import Header from '../src/components/Header/Header'
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { ExpansionPanelActions } from '@material-ui/core';
configure({adapter: new Adapter()});

it("renders without crashing", () => {
    shallow(<Header />);
});

