import React from 'react';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import SourceList from './../../src/scripts/components/Sources';

// const sources = require('./../../src/scripts/components/Sources');

it('', () => {
  const wrapper = mount(<SourceList />);
  wrapper.instance().onSubmit();
});

it('renders without crashing', () => {
  shallow(<SourceList />);
});

it('simulates click events', () => {
  const onButtonClick = sinon.spy();
  const wrapper = shallow(<SourceList onButtonClick={onButtonClick} />);
  wrapper.find('button').at(0).simulate('click');
  expect(onButtonClick.calledOnce);
});
