// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultJestConfig = require('../../jest.config');

module.exports = {
  ...defaultJestConfig,
  rootDir: '../..'
};
