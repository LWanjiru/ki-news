import React from 'react';
import { shallow } from 'enzyme';
import ShowIframe from './../../src/scripts/components/showIframe'

describe('show frame component', () => {
  it('renders without crashing', () => {
    shallow(<ShowIframe />);
  });
});
