/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
import { defaults } from 'ts-jest/presets/index.js';

import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  preset: 'ts-jest',
  ...defaults,
  automock: false,
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  collectCoverageFrom: [
    "**/*.{js,ts,tsx}",
    "!**/node_modules/**",
    "!**/coverage/**", 
  ],
  // coverageThreshold: { //!Включить позже, либо не включать совсем, посмотрим по мере написания тестов
  //   global: {
  //     branches: 80,
  //     functions: 80,
  //     lines: 80,
  //     statements: 80,
  //   },
  // },
  globals: {
    __IS_DEV__: true,
  },
  injectGlobals: true,
  verbose: true,
  maxConcurrency: 3,
  moduleFileExtensions: ["tsx", "ts", "js"],
  modulePaths: ["<rootDir>/src"],
   testMatch: [
    "<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)",
  ],
  rootDir: "../../",
  roots: ["<rootDir>/src"],
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  setupFilesAfterEnv: ["<rootDir>/config/jest/setupTest.ts"],
  moduleNameMapper: {
    "^.+\\.(svg)$": "<rootDir>/config/jest/__mocks__/svg.tsx",
    "\\.(scss|css|sass|less)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

export default config;
