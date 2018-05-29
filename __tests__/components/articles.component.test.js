import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import Articles from './../../src/scripts/components/Articles';

describe('Articles component and Iframe', () => {
  const component = shallow(<Articles />);
  it('renders without crashing', () => {
    mount(<Articles />);
  });
  it('renders the button containing the <ShowIframe /> component', () => {
    const wrapper = mount(
      <Articles />,
    );
    const button = wrapper.find('button');
    expect(button.length).toBe(1);
    expect(button.text()).toEqual('Click on an article to view in Iframe');
    button.simulate('click');
    expect(button.text()).toEqual('Close Frame');
    button.simulate('click');
    expect(button.text()).toEqual('Click on an article to view in Iframe');
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
    component.find('button').simulate('change', { target: {
      value: 'handleClick function' },
    });
    expect(toJson(component)).toMatchSnapshot();
  });
});
