import React, { Component, ReactNode, Fragment } from 'react';
import { View } from 'react-native';

import Header from '@infinite/ui/src/components/header';
import Text from '@infinite/ui/src/components/text';
import { getMessage } from '@infinite/shared/src/services/vocabulary';
import { goToScreen } from '@infinite/shared/src/services/navigation';
import { HeaderType } from '@infinite/ui/src/shared/types/Header';

export default class Home extends Component {
  render(): ReactNode {
    return (
      <Fragment>
        <Header type={HeaderType.MENU} />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text category="h5" onPress={(): void => goToScreen('KyudokuGame')}>
            {getMessage('gameCreate')}
          </Text>
        </View>
      </Fragment>
    );
  }
}
