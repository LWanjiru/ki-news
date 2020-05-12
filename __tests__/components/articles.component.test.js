import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import Articles from './../../src/scripts/components/Articles';

describe('Articles component', () => {
  const component = shallow(<Articles />);
  it('renders without crashing', () => {
    mount(<Articles />);
  });
  it('renders articles', () => {
    const articles = [''];
    const wrapper = mount(
      <Articles articles={articles} />,
    );
  });
});
