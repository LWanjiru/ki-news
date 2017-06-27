import React from 'react';
// import expect from 'expect';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import Articles from './../../src/scripts/components/Articles';
import ShowIframe from './../../src/scripts/components/showIframe';

it('renders without crashing', () => {
  mount(<Articles />);
});
it('renders the <ShowIframe /> component', () => {
  const wrapper = shallow(<Articles />);
  const component = wrapper.find('ShowIframe');
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
it('should pass a selected value to the handleClick function', () => {
  const component = shallow(<Articles />);
  component.find('button').simulate('change', { target: {
    value: 'handleClick function' },
  });
  expect(toJson(component)).toMatchSnapshot();
});
it('should render an Iframe', () => {
  const wrapper = shallow(<Articles />);
  expect(wrapper.containsMatchingElement(<ShowIframe />)).toBe(true);
});
it('should change the state', () => {
  const button = shallow(<Articles />);
  expect(button.text()).toEqual('ArticlesClick Here To View Full Story in an Iframe<ShowIframe />');
  button.find('button').simulate('click');
  expect(button.text()).toEqual('ArticlesClose Frame<ShowIframe />');
});
