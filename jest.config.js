module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  coverageReporters: ['lcov', 'text'],
  collectCoverageFrom: ['<rootDir>/src/**', '!<rootDir>/src/assets/**', '!<rootDir>/src/*']
}
