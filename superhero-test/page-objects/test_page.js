var TestPage = function () {
}
var pTitle = ''
var getPageTitle = function(){
  browser.ignoreSynchronization = true;
  return browser.getTitle();
}
TestPage.prototype = Object.create({},{
  emailFld: {get: function(){ return element(by.id('loginEmail')) } },
  passwordFld: {get: function(){ return element(by.css('#loginPassword')) } },
  loginTitleTxt: {get: function(){ return element(by.id('login-title')) } },
  pageTitle:{get: function(){ return getPageTitle()}},
  emailLabel:{get: function(){ return element(by.css('#form-login > div:nth-child(1) > label'))}},
  passLabel:{get: function(){ return element(by.css('#form-login > div:nth-child(2) > label'))}},
  loginBut: {get: function(){ return element(by.buttonText('Login'))}}
});

module.exports = TestPage
