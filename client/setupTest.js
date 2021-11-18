import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import 'regenerator-runtime/runtime'
import enableHooks from 'jest-react-hooks-shallow';

configure({ adapter: new Adapter() });
enableHooks(jest);
