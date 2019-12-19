import React, { FunctionComponent, ReactNode, ReactNodeArray } from 'react';
import { View, ViewStyle } from 'react-native';

type Props = {
  children: ReactNode | ReactNodeArray;
  style: ViewStyle | ViewStyle[];
};

const Column: FunctionComponent<Props> = ({ children, style }: Props) => (
  <View style={style}>{children}</View>
);

export default Column;
