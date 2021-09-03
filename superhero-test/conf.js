
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
    showColors: true
  }
}
