const config = {
  verbose: true,
};

module.exports = {
  collectCoverage: true,
  verbose: true,
  coverageDirectory: "coverage",
  coerageReporters: [
  "json",
  "text",
  "lcov",
  "html"
  ],
  watchman: true,
};
