module.exports = {
  bail: 1,
  collectCoverage: true,
  collectCoverageFrom: ['src/**'],
  coverageDirectory: '__tests__/coverage',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testMatch: ['**/__tests__/**/*.test.js'],
};
