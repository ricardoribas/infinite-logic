import { KeyValue } from '@infinite/shared/src/types';

import AppDictionary from './app/en';
import GameDictionary from './game/en';
import NavigationDictionary from './navigation/en';

const dictionary: KeyValue<string> = {
  ...AppDictionary,
  ...GameDictionary,
  ...NavigationDictionary
};

export default dictionary;
