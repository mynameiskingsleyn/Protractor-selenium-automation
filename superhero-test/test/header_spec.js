// page Object file
var LoginPage = require('../page-objects/login_page');
var BasePage = require('../page-objects/base_page');
var HeaderPage = require('../page-objects/header_page');
describe('Header Page Test', function(){
  var loginPage;
  var headerPage;
  var basePage;
  beforeEach(function(){
    // not angular site
    browser.ingoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    // create page object
    loginPage = new LoginPage();
    headerPage = new HeaderPage();
    basePage = new BasePage();
    //open url
    browser.get(basePage.homePageUrl);

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
