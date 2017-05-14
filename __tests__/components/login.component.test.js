import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Login from './../../src/scripts/components/login/login';

describe('Login main page', () => {
  const wrapper = shallow(<Login />);
  it('Should have a div present', () => {
    const divs = wrapper.find('div');
    expect(divs.length).toBe(1);
  });
});