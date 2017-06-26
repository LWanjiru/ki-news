import React from 'react';
import { mount, shallow } from 'enzyme';
import SourceList from './../../src/scripts/components/Sources';


it('renders without crashing', () => {
  shallow(<SourceList />);
});
it('renders sources', () => {
  const sources = ['source1'];
  const wrapper = mount(
    <SourceList source={sources} />,
  );
  const a = wrapper.find('h5');
  expect(a.text()).toBe('source1');
});
