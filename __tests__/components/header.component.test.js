import React from 'react';
import { shallow } from 'enzyme';
import Header from './../../src/scripts/components/Header';

it('renders the header component', () => {
  shallow(<Header />);
});
