import Login from '../src/components/Login/Login'
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({adapter: new Adapter()});

it("renders without crashing", () => {
    shallow(<Login />);
});

it("renders logged in wo crashing", () => {
    const mockCallBack = jest.fn();

    const login = shallow((<Login/>));
    const button = login.findWhere(node => {
        return node.type() === 'button' && node.text() === "Login";
    });
    button.props().onClick();
});