import React from 'react';
import { shallow } from 'enzyme';
import Header from './../../src/scripts/components/Header';

it('renders without crashing', () => {
  shallow(<Header />);
});
