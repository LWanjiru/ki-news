import React from 'react';
import renderer from 'react-test-renderer';
import App from './../src/main';

describe('Main page', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <App />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
