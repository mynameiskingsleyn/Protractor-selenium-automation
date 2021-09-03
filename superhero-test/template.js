// Test for Login page ..

// page Object file
var LoginPage = require('../page-objects/login_page');
describe('Login Page Test', function(){

  var loginPage

  beforeEach(function(){
    // not angular site
    browser.ingoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    // create page object
    loginPage = new LoginPage();
    //open url
    browser.get('http://local.superhero.com');

  });

  afterEach(function(){

  });

  it('', function(){

  })

});


//page objects
var LoginPage = function(){}

LoginPage.prototype = Object.create({},{
  elementName: {get: function(){return element(by.id(''))}}
});

module.exports = LoginPage
