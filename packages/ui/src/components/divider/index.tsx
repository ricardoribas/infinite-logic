import React from 'react';
import { Divider, DividerProps } from '@ui-kitten/components';

const $Divider: (props: DividerProps) => JSX.Element = ({
  style
}: DividerProps) => {
  return <Divider style={style} />;
};

export default $Divider;
