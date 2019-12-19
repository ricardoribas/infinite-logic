import React, { ReactNode } from 'react';
import { View, ViewPropTypes } from 'react-native';
import { InferProps } from 'prop-types';

import { CHILDREN_PROPS } from '../shared/Props';

function Row({ children, style }: InferProps<typeof Row.propTypes>) {
  return <View style={style}>{children}</View>;
}

Row.propTypes = {
  ...CHILDREN_PROPS,
  style: ViewPropTypes.style
};

export default Row;
