module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/.jest/styleMock.js',
  },
  setupTestFrameworkScriptFile: '<rootDir>/.jest/jestSetup.js',
}
