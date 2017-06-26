import React from 'react';
import { shallow } from 'enzyme';
import SourceList from './../../src/scripts/components/Sources';


it('renders without crashing', () => {
  shallow(<SourceList />);
});
