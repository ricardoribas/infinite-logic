import React from 'react';
import { Text } from 'react-native';
import ShallowRenderer from 'react-test-renderer/shallow';
import Column from '@infinite/ui/src/components/grid/Column';

describe('Column Component', () => {
  it('Render with some children', () => {
    const shallowRenderer = ShallowRenderer.createRenderer();
    const wrapper = shallowRenderer.render(
      <Column>
        <Text>5</Text>
      </Column>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('Render with some styles and children', () => {
    const shallowRenderer = ShallowRenderer.createRenderer();
    const wrapper = shallowRenderer.render(
      <Column
        style={{
          backgroundColor: 'yellow'
        }}
      >
        <Text>child one</Text>
        <Text>child two</Text>
      </Column>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
