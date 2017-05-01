import React from 'react';
// import { shallow } from 'enzyme';
import to_json from 'enzyme-to-json';
import Login from '../../src/scripts/components/login';
import renderer from 'react-test-renderer';

describe('Login component snapshots', () => {
  it('renders a snapshot', () => {
    const body = renderer.create(<Login/>).toJSON();
    expect(body).toMatchSnapshot();
  });
});
