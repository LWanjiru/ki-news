import React from 'react';
import { shallow } from 'enzyme';
import SourceList from './../../src/scripts/components/Sources'

describe('SourceList main pageheroku ', () => {
  it('renders without crashing', () => {
    shallow(<SourceList />);
  });
});
