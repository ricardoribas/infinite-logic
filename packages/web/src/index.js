import { AppRegistry } from 'react-native';

import App from '@infinite/components/src/App';

AppRegistry.registerComponent('infinitelogic', () => App);
AppRegistry.runApplication('infinitelogic', {
  rootTag: document.getElementById('root')
});
