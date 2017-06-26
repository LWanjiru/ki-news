import React from 'react';
import { shallow } from 'enzyme';
import ShowIframe from './../../src/scripts/components/showIframe';

it('renders without crashing', () => {
  shallow(<ShowIframe />);
});
