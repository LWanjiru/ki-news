import React from 'react';
import { shallow } from 'enzyme';
import Header from './../../src/scripts/components/Header'

describe('header', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });
});
