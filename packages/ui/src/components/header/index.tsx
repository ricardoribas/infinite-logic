import React from 'react';
import { TopNavigation, TopNavigationProps } from '@ui-kitten/components';

import { HeaderProps } from '@infinite/ui/src/shared/types/Header';
import { getLeftControl } from './Actions';

const Header: (props: TopNavigationProps & HeaderProps) => JSX.Element = ({
  title,
  style,
  type
}: TopNavigationProps & HeaderProps) => {
  return (
    <TopNavigation
      title={title}
      style={style}
      leftControl={getLeftControl(type)}
    />
  );
};

export default Header;
