import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import ShowArticle from './../../src/scripts/components/showArticle';
import ShowIframe from './../../src/scripts/components/showIframe';

it('should pass a selected value to the handleClick function', () => {
  const component = shallow(<ShowArticle />);
  component.find('button').simulate('change', { target: {
    value: 'handleClick function' },
  });
  expect(toJson(component)).toMatchSnapshot();
});
it('should render an Iframe', () => {
  const wrapper = shallow(<ShowArticle />);
  expect(wrapper.containsMatchingElement(<ShowIframe />)).toBe(true);
});
it('should change the state', () => {
  const button = shallow(<ShowArticle />);
  expect(button.text()).toEqual('Click Here To View Full Story in an Iframe<ShowIframe />');
  button.find('button').simulate('click');
  expect(button.text()).toEqual('Close Frame');
});

