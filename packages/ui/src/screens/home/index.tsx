import React from 'react';
import {
  createAppContainer,
  NavigationContainerComponent
} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Sidebar from '@infinite/ui/src/components/navigation/Sidebar';
import { setTopLevelNavigator } from '@infinite/shared/src/services/navigation';

import Home from '@infinite/ui/src/screens/home/Home';
import KyudokuGame from '@infinite/ui/src/screens/kyudoku/Game';

const NavigationDrawer = createDrawerNavigator(
  {
    Home,
    KyudokuGame
  },
  {
    initialRouteName: 'Home',
    contentComponent: () => <Sidebar />
  }
);

const TopLevelNavigator = createAppContainer(NavigationDrawer);
const HomeNavigator = (): JSX.Element => (
  <TopLevelNavigator
    ref={(navigatorRef: NavigationContainerComponent): void => {
      setTopLevelNavigator(navigatorRef);
    }}
  />
);

export default HomeNavigator;
