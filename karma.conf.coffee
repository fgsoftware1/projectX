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
    reporters: [ 'progress' ]
    port: 9876
    colors: true
    logLevel: config.LOG_INFO
    autoWatch: true
    browsers: ['Brave']
    singleRun: false
    concurrency: Infinity
  return