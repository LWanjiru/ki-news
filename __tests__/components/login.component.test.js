import React from 'react';
import expect from 'expect';
import { shallow, render } from 'enzyme';
import Login, { GoogleLogin } from './../../src/scripts/components/Login';

describe('Login page', () => {
  const wrapper = shallow(<Login />);
  it('renders without crashing', () => {
    shallow(<Login />);
  });
  it('should render to static HTML', () => {
    expect(render(<Login />).text()).toEqual('Login with Google+');
  });
  it('Should render <GoogleLogin /> component', () => {
    expect(<GoogleLogin />).toExist();
  });
  it('Should have a div present', () => {
    expect(wrapper.node.type).toBe('div');
  });
});
