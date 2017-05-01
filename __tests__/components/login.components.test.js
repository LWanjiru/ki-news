import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../src/scripts/components/login';

describe('Login main page', () => {
  const wrapper = shallow(<Login />);
  it('Should have a div present', () => {
    const divs = wrapper.find('div');
    expect(divs.length).toBe(5);
  });
});