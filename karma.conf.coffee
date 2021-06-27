module.exports = (config) ->
  config.set
    basePath: ''
    frameworks: [ 'mocha' ]
    files: []
    exclude: []
    preprocessors: {}
    reporters: [ 'progress' ]
    port: 9876
    colors: true
    logLevel: config.LOG_INFO
    autoWatch: true
    browsers: ['Brave']
    singleRun: false
    concurrency: Infinity
  return