var TestPage = require('../page-objects/test_page');

// xdescribe('Super Hero Page', function(){
//   var testPage;
//   //before each test case do something..
//   beforeEach(function(){
//     // browser.waitForAngularEnabled(false);
//     browser.ignoreSynchronization = true; // this is because this is not an angular app.
//     testPage = new TestPage();
//     browser.get('http://local.superhero.com');
//   });
//
//
//   // after each test case do something...
//   afterEach(function(){
//
//   })
//   it('should load the correct URL with correct title', function(){
//     var expTitle ='Superhero Roster';
//     var title = testPage.pageTitle
//     expect(title).toEqual(expTitle);
//
//   });
//
//   it('should have proper texts', function(){
//     // browser.ignoreSynchronization = true;
//     //browser.get('http://local.superhero.com');
//     const userText = 'tesing@yahoo.com';
//     const passText ='password';
//     //enter text into fileds
//     var username = testPage.emailFld;//element(by.id('loginEmail'));
//     var password = testPage.passwordFld;
//     var loginTitle = testPage.loginTitleTxt;//element(by.id('login-title'));
//     username.sendKeys(userText);
//     password.sendKeys(passText);
//
//     expect(username.getAttribute('value')).toEqual('tesing@yahoo.com');
//     expect(loginTitle.getText()).toEqual('Welcome. Please Log In.');
//
//   })
//
//   xit('should have proper login form labels', function(){
//     var expEmailLabel='Email address';
//     var expPassLabel='Password';
//     expect(testPage.emailLabel).toBe(expEmailLabel);
//     expect(testPage.passLabel).toBe(expPassLabel);
//   });
//
//
//
// })
