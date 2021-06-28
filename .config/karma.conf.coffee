module.exports = (config) ->
  config.set
    frameworks: ['mocha']

    files: [
      '*.coffee'
    ]

    coffeePreprocessor:
      options:
        sourceMap: true

    preprocessors:
      'plus.coffee': 'coverage'
      'test.coffee': 'coffee'

    coverageReporter:
      type: 'html'
      instrumenters:
        ibrik : require('ibrik')
      instrumenter:
        '**/*.coffee': 'ibrik'

    reporters: ['dots', 'coverage']

    plugins: [
      require('../../lib/index')
      'karma-mocha'
      'karma-coffee-preprocessor'
    ]

    singleRun: true