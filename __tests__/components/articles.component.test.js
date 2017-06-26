import React from 'react';
// import expect from 'expect';
import { shallow, mount } from 'enzyme';
import Articles from './../../src/scripts/components/Articles';

it('renders without crashing', () => {
  mount(<Articles />);
});
it('renders the <ShowArticle /> component', () => {
  const wrapper = shallow(<Articles />);
  const component = wrapper.find('ShowArticle');
  expect(component.length).toBe(1);
});
it('renders articles', () => {
  const articles = [''];
  const wrapper = mount(
    <Articles articles={articles} />,
  );
  const a = wrapper.find('p');
  expect(a.text()).toBe('');
});
