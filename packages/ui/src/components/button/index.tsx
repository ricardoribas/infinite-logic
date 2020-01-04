import React from 'react';
import { ImageStyle } from 'react-native';
import {
  Button,
  ButtonProps as UIKittenButtonProps,
  Icon,
  IconElement
} from '@ui-kitten/components';

type ButtonProps = {
  iconName?: string;
};

export const GetIconHandler = (name: string) => (
  style: ImageStyle
): IconElement => <Icon {...style} name={name} />;

// For more info check the docs: https://akveo.github.io/react-native-ui-kitten/docs/components/button/overview#button
const $Button: (props: UIKittenButtonProps & ButtonProps) => JSX.Element = ({
  iconName,
  children,
  ...props
}: UIKittenButtonProps & ButtonProps) => {
  return (
    <Button icon={iconName ? GetIconHandler(iconName) : undefined} {...props}>
      {children}
    </Button>
  );
};

export default $Button;
