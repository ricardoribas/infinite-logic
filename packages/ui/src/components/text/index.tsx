import React from 'react';
import { Text, TextProps } from '@ui-kitten/components';

// For more info check the docs: https://akveo.github.io/react-native-ui-kitten/docs/components/text/overview#text
const $Text: (props: TextProps) => JSX.Element = (props: TextProps) => {
  const { children } = props;

  return <Text {...props}>{children}</Text>;
};

export default $Text;
