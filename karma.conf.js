var webpackConf = require('./webpack.config.js');
module.exports = function(config) {
  config.set({
    files: [
      // Each file acts as entry point for the webpack configuration
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'test/client/**/*.js'
    ],
    frameworks: ['mocha', 'chai'],
    preprocessors: {
      'test/client/**/*.js': ['webpack']
    },
    webpack: {
      module: webpackConf.module
    },
    webpackMiddleware: {
      noInfo: true
    },
    browsers: ['PhantomJS', 'Chrome'],
    plugins: [
      require('karma-webpack'),
      require('karma-mocha'),
       require('karma-chai'), 
      require('karma-phantomjs-launcher'),
      require('karma-chrome-launcher'),
      
      require('karma-spec-reporter')
    ],
  });
};
