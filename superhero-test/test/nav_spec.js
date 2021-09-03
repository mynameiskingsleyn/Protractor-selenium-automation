// page Object file
var LoginPage = require('../page-objects/login_page');
var NavPage = require('../page-objects/nav_page');
describe('Login Page Test', function(){

  var loginPage;
  var navPage;

  beforeEach(function(){
    // not angular site
    browser.ingoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    // create page object
    loginPage = new LoginPage();
    navPage = new NavPage();
    //open url
    browser.get('http://local.superhero.com');
    loginPage.emailFld.sendKeys('tester@yahoo.com');
    loginPage.passwordFld.sendKeys('fakePassword');
    loginPage.loginBut.click();

  });

  afterEach(function(){

  });

  it('it displays all the elements', function(){
    expect(navPage.heroLnk.isDisplayed()).toBeTruthy();
    expect(navPage.homeLnk.isDisplayed()).toBeTruthy();
    expect(navPage.heroFactLnk.isDisplayed()).toBeTruthy();
    expect(navPage.logout.isDisplayed()).toBeTruthy();

    navPage.heroFactModalLnks.count().then(function(itemC){
      var count = itemC;
      for(var i = 0; i < count; i++){
        expect(navPage.heroFactModalLnks.get(i).isDisplayed()).toBe(false);
      }
    });

  })

  it('clicking the Hero facts drops down hero detail modal links', function(){
      navPage.heroFactLnk.click();
      navPage.heroFactModalLnks.count().then(function(itemC){
        var count = itemC;
        for(var i = 0; i < count; i++){
          expect(navPage.heroFactModalLnks.get(i).isDisplayed()).toBe(true);
        }
      });
  })

  it('should display modal on click', function(){

    navPage.heroFactModalLnks.count().then(function(itemC){
      var count = itemC;
      for(var i = 0; i < count; i++){
        // click the drop down to display links
        navPage.heroFactLnk.click();
        expect(navPage.heroFactModalLnks.get(i).isDisplayed()).toBe(true);
        //click a links
        navPage.heroFactModalLnks.get(i).click();
        browser.sleep(500);
        // get the modal id and vary it is open
        navPage.heroFactModalLnks.get(i).getAttribute('data-target')
                        .then(function(result){
                          var el = element(by.css(result));
                          expect(el.isDisplayed()).toBe(true);

                        });


        // close the link
        browser.actions().mouseMove({x:4,y:4}).click().perform();
        browser.sleep(500);
        //check that it closses..
        navPage.heroFactModalLnks.get(i).getAttribute('data-target')
                        .then(function(result){
                          var el = element(by.css(result));
                          expect(el.isDisplayed()).toBe(false);

                        });
      }
    });

  })


});
