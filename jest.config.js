/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  transformIgnorePatterns: ["node_modules/(?!axios)"],
  preset: 'ts-jest',
  testEnvironment: 'node',
};