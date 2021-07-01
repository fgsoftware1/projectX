module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
  "\\\\node_modules\\\\"
  ],
  coverageReporters: [
  "json",
  "html",
  "lcov"
  ],
  moduleDirectories: [
  "node_modules"
  ],
  moduleFileExtensions: [
  "js",
  "jsx",
  "ts",
  "tsx",
  "json",
  "node"
  ],
  reporters: [
    "default"
  ],
  rootDir: ".",
  runner: "jest-runner",
  testEnvironment: "jest-environment-node",
  testPathIgnorePatterns: [
  "\\\\node_modules\\\\"
  ],
  testRunner: "jest-circus/runner",
  testURL: "http://localhost:8080",
  verbose: true,
  watchman: true,
};
