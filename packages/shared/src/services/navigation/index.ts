import {
  NavigationContainerComponent,
  NavigationActions
} from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';

let _navigator: NavigationContainerComponent; // eslint-disable-line no-underscore-dangle

const NAVIGATOR_DOCS =
  'https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html';

function assertNavigator(): void {
  if (!_navigator) {
    throw new Error(`You should set top level navigator in the app container. \
    For more info check expo docs: ${NAVIGATOR_DOCS}.
    `);
  }
}

export function setTopLevelNavigator(
  navigatorRef: NavigationContainerComponent
): void {
  _navigator = navigatorRef;
}

export function toggleDrawer(): void {
  assertNavigator();
  _navigator.dispatch(DrawerActions.toggleDrawer());
}

export function goBack(key?: string): void {
  assertNavigator();
  _navigator.dispatch(
    NavigationActions.back({
      key
    })
  );
}

export function goToScreen<T>(
  routeName: string,
  payload?: T,
  key?: string
): void {
  assertNavigator();
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params: payload,
      key
    })
  );
}

export default {
  toggleDrawer,
  goBack,
  setTopLevelNavigator
};
