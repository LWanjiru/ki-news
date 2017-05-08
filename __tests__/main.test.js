import React from 'react';
import { shallow } from 'enzyme';
import Main from '../src/main';

describe('Main page contents', () => {
  const wrapper = shallow(<Main />);
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