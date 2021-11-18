import Signup from '../src/components/Login/Signup'
import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

it("renders without crashing", () => {
    shallow(<Signup />);
});

it("renders logged in wo crashing", () => {
    const mockCallBack = jest.fn();

    const login = shallow((<Signup/>));
    const button = login.findWhere(node => {
        return node.type() === 'button' && node.text() === "Register";
    });
    button.props().onClick();
    expect
});

it('should render an email input tag', () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper.find('input[name="firstName"]').exists()).toBe(true);
});

it('should render an email input tag', () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper.find('input[name="lastName"]').exists()).toBe(true);
});

it('should render an email input tag', () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper.find('input[name="email"]').exists()).toBe(true);
});

it('should render a password input tag', () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper.find('input[type="password"]').exists()).toBe(true);
});

it('should render a register button', () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper.find('button[name="Register"]').exists()).toBe(true);
});

it('the default value for all fields should be empty', () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper.find('input[name="firstName"]').prop('value')).toBe('');
    expect(wrapper.find('input[name="lastName"]').prop('value')).toBe('');
    expect(wrapper.find('input[name="email"]').prop('value')).toBe('');
    expect(wrapper.find('input[type="password"]').prop('value')).toBe('');
});

it('on change of value in the field, the state of that field in the component should be updated', () => {
    const wrapper = shallow(<Signup />);

    /* if the simulated event value and the field value is same then the state is updating on event trigger */
    wrapper.find('input[name="firstName"]').simulate('change', {
        target: {
          value: 'firstName',
        },
      });
    expect(wrapper.find('input[name="firstName"]').prop('value')).toBe(
    'firstName'
    );
    wrapper.find('input[name="lastName"]').simulate('change', {
        target: {
          value: 'lastName',
        },
      });
    expect(wrapper.find('input[name="lastName"]').prop('value')).toBe(
        'lastName'
    );
    wrapper.find('input[name="email"]').simulate('change', {
      target: {
        value: 'email@id.com',
      },
    });
    expect(wrapper.find('input[name="email"]').prop('value')).toBe(
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


it("renders without crashing", () => {
  mount(
    <BrowserRouter>
        <Signup />
    </BrowserRouter>
);
});
