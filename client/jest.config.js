module.exports = {
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  moduleNameMapper: {
    '^~/(.+)': '<rootDir>/src/$1',
  },
  testMatch: ['<rootDir>/src/**/*.Test.ts', '<rootDir>/src/**/*.Test.tsx'],
}
