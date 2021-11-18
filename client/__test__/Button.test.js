import {Button} from '../src/components/Button'
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, ReactWrapper } from 'enzyme';
import { ExpansionPanelActions } from '@material-ui/core';
configure({adapter: new Adapter()});

it("renders without crashing", () => {
    shallow(<Button />);
});

// it("Renders new text", () => {
//     const wrapper = shallow(<Button text={"test"}/>)
//     const button = wrapper.findWhere(node => {
//         return node.type() === 'button' && node.text() === "test";
//     })
//     expect(button).toBe(true);
// })