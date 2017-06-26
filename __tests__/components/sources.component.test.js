import React from 'react';
import { mount, shallow } from 'enzyme';
import SourceList from './../../src/scripts/components/Sources';


it('renders without crashing', () => {
  shallow(<SourceList />);
});
