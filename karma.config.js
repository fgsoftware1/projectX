module.exports = function(config) {
    config.set({
      files: [
        '**/*.js'
      ],
      reporters: ['progress', 'coverage'],
      preprocessors: {
        '**/*.js': ['coverage']
      },
      coverageReporter: {
        dir: 'build/reports/coverage',
        instrumenterOptions: {
          istanbul: { noCompact: true }
        },
        reporters: [
          { type: 'html', subdir: 'report-html' },
          { type: 'lcov', subdir: 'report-lcov' },
          { type: 'cobertura', subdir: '.', file: 'cobertura.txt' },
          { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
          { type: 'teamcity', subdir: '.', file: 'teamcity.txt' },
          { type: 'text', subdir: '.', file: 'text.txt' },
          { type: 'text-summary', subdir: '.', file: 'text-summary.txt' },
        ]
      }
    });
  };