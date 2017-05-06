import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Feeds from '../../src/scripts/components/feeds';

describe('Feeds', () => {
  it('renders without crashing', () => {
    const divs = wrapper.find('div');
    expect(divs.length).toBe(1)
  });
  it('Should contain navigation', () => {
    const navs = wrapper.find('nav');
    expect(navs.length).toBe(2)
  })
});