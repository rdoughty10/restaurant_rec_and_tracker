import Login from '../src/components/Login/Login'
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
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
    expect
});

it('should render an email input tag', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
});

it('should render a password input tag', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[type="password"]').exists()).toBe(true);
});

it('should render a submit button', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('button[name="login"]').exists()).toBe(true);
});

it('the default value for both fields should be empty', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[type="text"]').prop('value')).toBe('');
    expect(wrapper.find('input[type="password"]').prop('value')).toBe('');
});

it('on change of value in the field, the state of that field in the component should be updated', () => {
    const wrapper = shallow(<Login />);

    /* if the simulated event value and the field value is same then the state is updating on event trigger */

    wrapper.find('input[type="text"]').simulate('change', {
      target: {
        value: 'email@id.com',
      },
    });
    expect(wrapper.find('input[type="text"]').prop('value')).toBe(
      'email@id.com'
    );
    wrapper.find('input[type="password"]').simulate('change', {
      target: {
        value: 'somepassword',
      },
    });
    expect(wrapper.find('input[type="password"]').prop('value')).toBe(
      'somepassword'
    );
});

it('should render a register button', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('button[name="register"]').exists()).toBe(true);
});