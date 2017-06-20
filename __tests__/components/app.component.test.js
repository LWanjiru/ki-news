import React from 'react';
import { shallow } from 'enzyme';
import App from './../../src/scripts/components/App';

describe('main page', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
