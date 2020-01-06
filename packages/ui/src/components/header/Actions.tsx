import React from 'react';
import { GestureResponderEvent } from 'react-native';
import {
  TopNavigationAction,
  Icon,
  StyledComponentProps
} from '@ui-kitten/components';

import { toggleDrawer, goBack } from '@infinite/shared/src/services/navigation';
import { HeaderType } from '@infinite/ui/src/shared/types/Header';

export const GetIconHandler = (name: string) => (
  style: StyledComponentProps
): JSX.Element => <Icon {...style} name={name} />;

const GetMenuAction = (
  name: string,
  onPress: (event: GestureResponderEvent) => void
): JSX.Element => (
  <TopNavigationAction icon={GetIconHandler(name)} onPress={onPress} />
);

const getBackIcon = (): JSX.Element =>
  GetMenuAction('arrow-back-outline', () => goBack());
const getMenuIcon = (): JSX.Element =>
  GetMenuAction('menu-outline', toggleDrawer);

export function getLeftControl(type: HeaderType): JSX.Element {
  switch (type) {
    case HeaderType.BACK:
      return getBackIcon();
    case HeaderType.MENU:
      return getMenuIcon();
  }
}

export default {
  getLeftControl
};
