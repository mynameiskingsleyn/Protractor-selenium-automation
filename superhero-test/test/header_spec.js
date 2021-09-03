// page Object file
var LoginPage = require('../page-objects/login_page');
var HeaderPage = require('../page-objects/header_page');
describe('Login Page Test', function(){
  var loginPage;
  var headerPage;
  beforeEach(function(){
    // not angular site
    browser.ingoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    // create page object
    loginPage = new LoginPage();
    headerPage = new HeaderPage();
    //open url
    browser.get('http://local.superhero.com');

  });

  afterEach(function(){

  });

  it('it displays all the elements', function(){
    loginPage.emailFld.sendKeys('tester@yahoo.com');
    loginPage.passwordFld.sendKeys('fakePassword');
    loginPage.loginBut.click();
    expect(headerPage.head.isDisplayed()).toBe(true);
    expect(headerPage.head.getText()).toBe('Superhero Roster');

    expect(headerPage.headImage.isDisplayed()).toBe(true);
    headerPage.headImage.getSize().then(function(eleSize){
      // console.log('element width is : '+eleSize.width);
      // console.log('element height is : '+eleSize.height);
      expect(eleSize.height).toEqual(315);
    })

    expect(headerPage.headPar.isDisplayed()).toBe(true);
    expect(headerPage.headPar.getText()).not.toBe('');

  })

});
