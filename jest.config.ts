import type {Config} from 'jest';
import nextJest from 'next/jest'

const createJestConfig = nextJest({ dir: './' })

const customJestConfig: Config = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    './app/**/*.{ts,tsx}'
  ],
  coverageDirectory: "coverage",
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    'fonts': '<rootDir>/app/fonts.ts'
  },
  setupFiles: ['<rootDir>/jest.setup.tsx'],
  testEnvironment: "jsdom",
};

export default createJestConfig(customJestConfig);
