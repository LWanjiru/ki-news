import React from 'react';
import renderer from 'react-test-renderer';
import ShowIframe from './../../src/scripts/components/showIframe'

describe('Show Iframe (Snapshot)', () => {
  it('renders an iframe', () => {
    const component = renderer.create(<ShowIframe />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
