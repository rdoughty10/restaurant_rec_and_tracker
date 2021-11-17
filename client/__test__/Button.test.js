import {Button} from '../src/components/Button'
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({adapter: new Adapter()});

it("renders without crashing", () => {
    shallow(<Button />);
});

it("renders a different text", () => {
    const wrapper = shallow(<Button text={"Hello"}/>);
    const value = wrapper.find("button").text();
    expect(value).toEqual("Hello")
});

it("renders no text", () => {
    const wrapper = shallow(<Button text={""}/>);
    const value = wrapper.find("button").text();
    expect(value).toEqual("")
});

it("renders long text", () => {
    const wrapper = shallow(<Button text={"abasdklashdkldjsbclakjsahfkljdsabckljbac"}/>);
    const value = wrapper.find("button").text();
    expect(value).toEqual("abasdklashdkldjsbclakjsahfkljdsabckljbac")
});