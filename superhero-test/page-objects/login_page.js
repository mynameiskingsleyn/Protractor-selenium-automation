var LoginPage = function(){}
var getPageTitle = function(){
  browser.ignoreSynchronization = true;
  return browser.getTitle();
}

LoginPage.prototype = Object.create({},{
  pageTitle:{get: function(){ return getPageTitle()}},
  loginTitletxt: {get: function(){ return element(by.id('login-title')) } },
  emailFld: {get: function(){ return element(by.id('loginEmail')) } },
  loginLbl:{get: function(){return element(by.xpath('//*[@id="form-login"]/div[1]/label'))}},
  passwordLbl:{get: function(){return element(by.css('#form-login > div:nth-child(2) > label'))}},
  passwordFld: {get: function(){ return element(by.css('#loginPassword')) } },
  rememberLbl: {get: function(){ return element(by.css('#form-login > div.form-check > label'))}},
  rememberChk: {get: function(){ return element(by.id('rememberLoginChk'))}},
  loginBut: {get: function(){ return element(by.buttonText('Login'))}},
  loginErrMsg: {get: function(){ return element(by.id('login-alert'))}},
  loginSec: {get: function(){ return element(by.id('overlay'))}}

});

module.exports = LoginPage
