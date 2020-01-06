import React, { FunctionComponent } from 'react';
import { View } from 'react-native';

import Text from '@infinite/ui/src/components/text';
import StopWatch from '@infinite/ui/src/components/clock/StopWatch';

const GameInfo: FunctionComponent<{}> = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        paddingLeft: 10,
        paddingRight: 20,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Text category="s1">Fast</Text>
      <Text category="s1">Mistakes 0/3</Text>
      <StopWatch />
    </View>
  );
};

export default GameInfo;
