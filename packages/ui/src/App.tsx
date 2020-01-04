import React, { Component, ReactNode } from 'react';
import { SafeAreaView } from 'react-navigation';

import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light as lightTheme } from '@eva-design/eva';

import Navigator from '@infinite/ui/src/Navigator';

export default class App extends Component {
  render(): ReactNode {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={lightTheme}>
          <Navigator />
        </ApplicationProvider>
      </SafeAreaView>
    );
  }
}
