import * as React from 'react';
import reactTestRenderer from 'react-test-renderer';
import Hello from './Hello';

describe('Hello', () => {
  it('should be on the other side', () => {
    const tree = reactTestRenderer.create(<Hello />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
