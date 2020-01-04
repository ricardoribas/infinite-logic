import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '@infinite/ui/src/screens/home';

const Navigator = createStackNavigator(
  {
    Home
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);

export default createAppContainer(Navigator);
