// page Object file
var RosterPage = require('../page-objects/roster_page');
var LoginPage = require('../page-objects/login_page');
describe('Roster Page Test', function(){
  var loginPage;
  var rosterPage;
  var rosterHeader;
  var superHerosList;
  var heroInputLbl;
  var heroInputFld;
  var heroSubmitBtn;
  var heroNames;
  var heros;
  var numOfHeros;
  var heroCount;
  beforeEach(function(){
    // not angular site
    browser.ingoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    // create page object
    rosterPage = new RosterPage();
    loginPage = new LoginPage();
    //open url
    browser.get('http://local.superhero.com');
    rosterHeader = rosterPage.rosterHeader;
    superHerosList = rosterPage.superHerosList;
    heroInputLbl = rosterPage.heroInputLbl;
    heroInputFld = rosterPage.heroInputFld;
    heroSubmitBtn = rosterPage.heroSubmitBtn;
    heroNames = rosterPage.heros;
    heroCount = rosterPage.heroCount;

  });

  afterEach(function(){

  });

  it('should display all roster elements ', function(){
    var expRosterHeader = 'Build Your Superhero Roster:';
    var expHeroInputLbl = 'ADD A SUPERHERO';

    expect(rosterHeader.isDisplayed()).toBe(true); //toBeTruthy()
    expect(heroInputLbl.isDisplayed()).toBeTruthy();
    expect(heroInputFld.isDisplayed()).toBeTruthy();
    expect(heroSubmitBtn.isDisplayed()).toBeTruthy();
    expect(rosterHeader.getText()).toEqual(expRosterHeader);
    expect(heroInputLbl.getText()).toEqual(expHeroInputLbl);
    expect(heroInputFld.getText()).toEqual('');
    //console.log('ran should display all roster elements ')

    //console.log(superHerosList);
  });

  it('All heros must be listed', function(){
    heroCount.then(function(elements){
      var count = numOfHeros = elements;
      for(var i = 0; i < count; i++){

        var superHero = superHerosList.get(i);
        expect(superHero.isDisplayed()).toBe(true);
        var text = superHero.getText();
        //expect(text).not.toContain(heroNames[i]);
        expect(text).toContain(heroNames[i]);

      }
    });
  })

  it('Should add a hero on submit ', function(){
      loginPage.emailFld.sendKeys('tester@yahoo.com');
      loginPage.passwordFld.sendKeys('fakePassword');
      loginPage.loginBut.click();
      var newHero = 'kingsman mandigo';
      heroInputFld.sendKeys(newHero);
      expect(superHerosList.count()).toBe(5);
      heroSubmitBtn.click();
      superHerosList = rosterPage.superHerosList;
      expect(superHerosList.count()).toBe(6);
      expect(superHerosList.last().getText()).toEqual(newHero);
      //expect(superHerosList.last)
      //browser.sleep(10000);


  });


});
