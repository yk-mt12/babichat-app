/* eslint-disable no-undef */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  transform: {
    '^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  testMatch: [
    '<rootDir>/src/**/*.Test.ts',
    '<rootDir>/src/**/*.Test.tsx',
    '<rootDir>/src/**/*.Test.js',
  ],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
}
