import ILogger from '../ILogger';
import AbstractLogger from '../AbstractLogger';

export default class ProductionLogger extends AbstractLogger implements ILogger {
  info(...args: any[]): void {}
  warn(...args: any[]): void {}
  error(...args: any[]): void {}
}
