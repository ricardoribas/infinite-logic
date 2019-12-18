import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { InferProps } from 'prop-types';

import { CHILDREN_PROPS } from './shared/Props';

function Column({}: InferProps<typeof Column.propTypes>) {
  return (
    <View
      style={{
        flexDirection: 'column'
      }}
    />
  );
}

Column.propTypes = {
  ...CHILDREN_PROPS
};

export default Column;
