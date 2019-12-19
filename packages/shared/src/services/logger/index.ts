import DevelopmentLogger from './impl/Development';
import ProductionLogger from './impl/Production';
import AbstractLogger from './AbstractLogger';

export function createInstance(name: string): AbstractLogger {
  return __DEV__ ? new DevelopmentLogger(name) : new ProductionLogger(name);
}

export default {
  createInstance
};
