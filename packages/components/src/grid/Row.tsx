import React, { FunctionComponent, ReactNodeArray, ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';

type Props = {
  children: ReactNode | ReactNodeArray;
  style: ViewStyle | ViewStyle[];
};

const Row: FunctionComponent<Props> = ({ children, style }: Props) => (
  <View style={style}>{children}</View>
);

export default Row;
