const SpecReporter = require('jasmine-spec-reporter').SpecReporter

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
  logLevel: 'WARN',
  onPrepare: function () {
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
          successful:blue,
        }
      })
    )
  },

}
