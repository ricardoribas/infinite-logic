const { defaults } = require('jest-config');

module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base)'
  ],
  coveragePathIgnorePatterns: ['node_modules'],
  coverageDirectory: '<rootDir>/coverage/',
  globals: {
    __DEV__: true
  }
};
