path = require('path')

module.exports = (config) ->
  config.set
    plugins: [ 'karma-coverage-istanbul-reporter' ]
    reporters: [ 'coverage-istanbul' ]
    coverageIstanbulReporter:
      reports: [
        'html'
        'lcov'
        'text-summary'
      ]
      files: [
        'www/**/*.js',
        'test/*.js'
      ],
      dir: path.join(__dirname, 'coverage')
      combineBrowserReports: true
      fixWebpackSourcePaths: true
      skipFilesWithNoCoverage: true
      'report-config': 
        html: 
          subdir: 'html'
        icov:
          subdir: 'icov-report'
      thresholds:
        emitWarning: false
        global:
          statements: 100
          lines: 100
          branches: 100
          functions: 100
        each:
          statements: 100
          lines: 100
          branches: 100
          functions: 100
          overrides: 'baz/component/**/*.js': statements: 98
      verbose: true
      singleRun: true
return