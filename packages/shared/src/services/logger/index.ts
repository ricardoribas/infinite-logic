import DevelopmentLogger from './impl/Development';
import ProductionLogger from './impl/Production';

export function createInstance(name: String) {
    return __DEV__ ? new DevelopmentLogger(name) : new ProductionLogger(name);
}

export default {
    createInstance
}
