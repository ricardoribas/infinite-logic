import ILogger from '../Logger';
import AbstractLogger from '../AbstractLogger';

export default class ProductionLogger extends AbstractLogger
  implements ILogger {
  info(): void {
    /* Do nothing in production */
  }
  warn(): void {
    /* Do nothing in production */
  }
  error(): void {
    /* Do nothing in production */
  }
}
