import React from 'react';
import { shallow, render } from 'enzyme';
import Login from './../../src/scripts/components/Login';

describe('Login page', () => {
  const wrapper = shallow(<Login />);
  it('renders without crashing', () => {
    shallow(<Login />);
  });
  it('should render to static HTML', () => {
    expect(render(<Login />).text()).toEqual('Login with Google+');
  });
  it('Should render <GoogleLogin /> component', () => {
    const googleComponent = wrapper.find('GoogleLogin');
    expect(googleComponent.length).toBe(1);
  });
  it('Should have a div present', () => {
    const divs = wrapper.find('div');
    expect(divs.length).toBe(1);
  });
});
