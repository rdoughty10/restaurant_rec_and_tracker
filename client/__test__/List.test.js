import List from '../src/components/List/List'
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({adapter: new Adapter()});

it("renders without crashing", () => {
    shallow(<List />);
});
