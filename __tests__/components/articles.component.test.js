import React from 'react';
import { shallow } from 'enzyme';
import Articles from './../../src/scripts/components/Articles';

describe('sources', () => {
  const wrapper = shallow(<Articles />);
  it('renders without crashing', () => {
    shallow(<Articles />);
  });
  it('renders the <ShowArticle /> component', () => {
    const component = wrapper.find('ShowArticle');
    expect(component.length).toBe(1);
  });
});
