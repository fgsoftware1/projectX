module.exports = (config) ->
  config.set
    basePath: ''
    frameworks: [ 'mocha' ]
    files: []
    exclude: []
    preprocessors: {},
    preprocessors: {
      "www/public/**/*.js": ["babel"],
      "tests/**/*.js": ["babel"]
    },
    babelPreprocessor: {
      options: {
        presets: ["@babel/preset-env"],
        sourceMap: "inline"
      },
    },
    reporters: [ 'progress' ],
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
      reporters: [
        // reporters not supporting the `file` property
        { type: 'html', subdir: 'html-report' },
        { type: 'lcov', subdir: 'lcov-report' },
      ]
    },
    port: 9876
    colors: true
    logLevel: config.LOG_INFO
    autoWatch: true
    browsers: ['brave']
    singleRun: false
    concurrency: Infinity
  return