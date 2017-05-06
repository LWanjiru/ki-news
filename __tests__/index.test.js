import React from 'react';
import { shallow } from 'enzyme';
import Index from '../src/index';

describe('Index page contents', () => {
  const wrapper = shallow(<Index />);
  it('Should have a div present', () => {
    const divs = wrapper.find('div');
    expect(divs.length).toBe(1);
  });
  it('Should have a title', () => {
    const titles = wrapper.find('title');
    expect(titles.length).toBe(1);
  });
  it('Should have a heading', () => {
    const h1s = wrapper.find('h1');
    expect(h1s.length).toBe(1);
  })
});