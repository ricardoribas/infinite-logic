import React, { FunctionComponent, useEffect, Fragment } from 'react';
import { View } from 'react-native';

// import { getMessage } from '@infinite/shared/src/services/vocabulary';
import { getMessage } from '@infinite/shared/src/services/vocabulary';
import GameSuccessFactory from '@infinite/ui/src/factories/game/Success';
import Text from '@infinite/ui/src/components/text';
import Button from '@infinite/ui/src/components/button';

const GameSucces: FunctionComponent<{}> = () => {
  return (
    <Fragment>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <View
          style={{
            alignItems: 'center',
            marginBottom: 25
          }}
        >
          <Text category="h2">{GameSuccessFactory.getWinningMessage()}</Text>
          <Text category="s1">Fast</Text>
          <Text category="h6">02:24</Text>
        </View>
        <Button
          style={{
            marginBottom: 10
          }}
          iconName="plus-outline"
        >
          {getMessage('gameCreate')}
        </Button>
        <Button appearance="ghost">{getMessage('goHome')}</Button>
      </View>
    </Fragment>
  );
};

export default GameSucces;
