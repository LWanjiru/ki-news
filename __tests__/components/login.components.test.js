import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../src/scripts/components/login';

describe('Login page contents', () => {
  const wrapper = shallow(<Login />);
  it('Should have a div present', () => {
    const divs = wrapper.find('div');
    expect(divs.length).toBe(5);
  });
  it('Should have a logo', () => {
    const logos = wrapper.find('img');
    expect(logos.length).toBe(1);
  });
  it('Should have a heading', () => {
    const h1s = wrapper.find('h1');
    expect(h1s.length).toBe(1);
  });
  it('Should have a welcome message', () => {
    const messages = wrapper.find('p');
    expect(messages.length).toBe(1);
  });
  it('Should have a login button', () => {
    const buttons = wrapper.find('button');
    expect(buttons.length).toBe(1);
  })
});