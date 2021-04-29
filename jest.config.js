module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js', '@testing-library/jest-dom/extend-expect'],
  testMatch: ['<rootDir>/**/?(*.)+(test).[jt]s?(x)'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  collectCoverage: true,
  coverageDirectory: './jest-coverage',
};
