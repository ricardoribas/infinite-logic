import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { InferProps } from 'prop-types';

import { CHILDREN_PROPS } from './shared/Props';

function Row({}: InferProps<typeof Row.propTypes>) {
  return (
    <View
      style={{
        flexDirection: 'row'
      }}
    />
  );
}

Row.propTypes = {
  ...CHILDREN_PROPS
};

export default Row;
