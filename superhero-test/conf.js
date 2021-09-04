const SpecReporter = require('jasmine-spec-reporter').SpecReporter
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  reportOnlyFailedSpecs: false,
  captureOnlyFailedSpecs: true,
  dest: 'target/screenshots',
  filename: 'my-report.html',
  reportTitle: "Superhero app Report",
  reportFailedUrl: true
});

exports.config ={
  framework:'jasmine2',

  selenuiumAddress:'http://localhost:4444/wd/hub',
  //selenuiumAddress:'http://192.168.33.10:4444/wd/hub',

  capabilities: {
    browserName: 'chrome',
  },

  specs:[
    './test/*_spec.js'
  ],


  jasmineNodeOpts: {
    showColors: true,
    silent: true,
    defaultTimeoutInterval: 360000,
    print () {},
  },
  // Setup the report before any tests start
  beforeLaunch: function() {
    return new Promise(function(resolve){
      reporter.beforeLaunch(resolve);
    });
  },

  // Close the report after all tests finish
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },
  logLevel: 'WARN',
  onPrepare: function () {
    jasmine.getEnv().addReporter(reporter);
    jasmine.getEnv().addReporter(
      new SpecReporter({
        spec: {
          displayStacktrace: true,
          displaySuccessful: true,
        },
        summary: {
          displayDuration: true,
        },
        colors:{
          //successful:'blue',
        }
      })
    );
  },

}
