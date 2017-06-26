import React from 'react';
import { shallow } from 'enzyme';
import SourceList from './../../src/scripts/components/Sources';


it('renders without crashing', () => {
  shallow(<SourceList />);
});
it('renders sources', () => {
  const articles = ['article1'];
  const wrapper = mount(
    <SourceList articles={articles} />,
  );
  const a = wrapper.find('p');
  expect(a.text()).toBe('article1');
});
