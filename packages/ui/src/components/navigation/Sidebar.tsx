import React from 'react';
import { Drawer } from '@ui-kitten/components';
import { NOOP } from '@infinite/shared/src/utils/Functions';

const MENU_ROUTES = [
  {
    title: 'Home'
  }
];

const Sidebar: () => JSX.Element = () => {
  return <Drawer data={MENU_ROUTES} onSelect={NOOP} />;
};

export default Sidebar;
