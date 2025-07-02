const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
  collectCoverage: true,
  moduleNameMapper: {
    '^@/test/(.*)': '<rootDir>/test/$1',
    '^@/(.*)': '<rootDir>/src/$1'
  }
};