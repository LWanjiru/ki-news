import React from 'react';
import { mount } from 'enzyme';
import SourceList from './../../src/scripts/components/Sources';


it('renders without crashing', () => {
  mount(<SourceList />);
});
