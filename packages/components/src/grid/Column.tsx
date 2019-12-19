import React, { ReactNode } from 'react';
import { View, ViewPropTypes } from 'react-native';
import { InferProps } from 'prop-types';

import { CHILDREN_PROPS } from '../props';

function Column({
  children,
  style
}: InferProps<typeof Column.propTypes>): ReactNode {
  return <View style={style}>{children}</View>;
}

Column.propTypes = {
  ...CHILDREN_PROPS,
  style: ViewPropTypes.style
};

export default Column;
