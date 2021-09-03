// Test for Login page ..

// page Object file
var LoginPage = require('../page-objects/login_page');
describe('Login Page Test', function(){
  var loginPage;
  var emailFld;
  var passFld;
  var loginSubmit;
  var loginErrMsg;
  var expLoginErrMsg;
  var loginSec;
  beforeEach(function(){
    // not angular site
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    loginPage = new LoginPage();
    browser.get('http://local.superhero.com');
    var loginTitle = 'Welcome. Please Log In.'
    emailFld = loginPage.emailFld;
    passFld = loginPage.passwordFld;
    loginSubmit = loginPage.loginBut;
    loginErrMsg = loginPage.loginErrMsg;
    loginSec = loginPage.loginSec;
    expLoginErrMsg = 'An e-mail and password are required.'
  });

  afterEach(function(){

  });

  it('it should display login section of page', function(){
    expect(loginSec.isDisplayed()).toBe(true);
  })

  it('it should display all login page element', function(){

    var loginTitle = loginPage.loginTitletxt;
    var emailLabel = loginPage.loginLbl;
    var passLabel = loginPage.passwordLbl;
    var rememberLbl = loginPage.rememberLbl;
    var loginLbl = loginPage.loginLbl;
    var emailFld = loginPage.emailFld;
    var passwordFld = loginPage.passwordFld;
    var loginBut = loginPage.loginBut;
    var rememberChk = loginPage.rememberChk;

      // verify that all fields are present
      expect(loginTitle.isDisplayed()).toBe(true); //toBeTruthy()
      expect(emailLabel.isDisplayed()).toBeTruthy();

      expect(passLabel.isDisplayed()).toBeTruthy();
      expect(rememberLbl.isDisplayed()).toBeTruthy();
      expect(emailFld.getAttribute('value')).toEqual('');

      expect(loginLbl.isDisplayed()).toBeTruthy();
      expect(emailFld.isDisplayed()).toBeTruthy();
      expect(emailFld.getAttribute('value')).toEqual('');

      expect(passwordFld.isDisplayed()).toBeTruthy();
      expect(passwordFld.getAttribute('value')).toEqual('');

      expect(rememberChk.isDisplayed()).toBeTruthy();
      expect(passwordFld.isSelected()).toBe(false);

      expect(loginErrMsg.isDisplayed()).toBe(false);

      expect(loginSec.isDisplayed()).toBe(true);

      expect(loginBut.isDisplayed()).toBeTruthy();
      //verify content
      var expLoginTitle = 'Welcome. Please Log In.';
      var expEmailLabel = 'Email address';
      var expPassLabel = 'Password';
      var expRememberLbl = 'Remember Login';



      expect(loginTitle.getText()).toEqual(expLoginTitle);
      expect(emailLabel.getText()).toEqual(expEmailLabel);
      expect(passLabel.getText()).toEqual(expPassLabel);
      expect(rememberLbl.getText()).toEqual(expRememberLbl);
      expect(loginErrMsg.getText()).toEqual('');
      //var loginTitleTxt = 'testing';//loginPage.loginTitleTxt.getText();
      //expect(title).toEqual(loginTitle);
  });

  it('it should display error message when no username and password is entered', function(){
    loginSubmit.click();
    expect(loginErrMsg.isDisplayed()).toBeTruthy();
    expect(loginErrMsg.getText()).toEqual(expLoginErrMsg);
  });

  it('it should display error message when no username  entered', function(){
      passFld.sendKeys('password');
      loginSubmit.click();
      expect(loginErrMsg.isDisplayed()).toBeTruthy();
  });
  it('it should display error message when no password  entered', function(){
    emailFld.sendKeys('testemail@yahoo.com');
    loginSubmit.click();
    expect(loginErrMsg.isDisplayed()).toBeTruthy();
  })

  it('should log user in', function(){
    emailFld.sendKeys('testemail@yahoo.com');
    passFld.sendKeys('password');
    loginSubmit.click();
    expect(loginErrMsg.isDisplayed()).toBe(false);
    expect(loginSec.isDisplayed()).toBe(false);
  });


});
