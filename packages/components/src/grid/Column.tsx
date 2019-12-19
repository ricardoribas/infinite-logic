import React, { ReactNode, ReactNodeArray } from 'react';
import { View, ViewPropTypes } from 'react-native';
import { InferProps } from 'prop-types';

import { CHILDREN_PROPS } from '../shared/Props';

function Column({ children, style }: InferProps<typeof Column.propTypes>) {
  return <View style={style}>{children}</View>;
}

Column.propTypes = {
  ...CHILDREN_PROPS,
  style: ViewPropTypes.style
};

export default Column;
