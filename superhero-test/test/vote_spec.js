var LoginPage = require('../page-objects/login_page');
var VotePage = require('../page-objects/vote_page');
describe('Login Page Test', function(){

  var loginPage;
  var votePage;
  var voteHeader;
  var movieListChklbls;
  var movieListChkRads;
  var voteSubmitBtn;
  var movieListHeader;
  var movieListNames;
  var movieListVotes;
  var movies;
  var moviesVotes;
  var voteSuccess;
  var voteForm;
  beforeEach(function(){
    // not angular site
    browser.ingoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    // create page object
    loginPage = new LoginPage();
    votePage = new VotePage();
    // open url
    browser.get('http://local.superhero.com');

    // initalize values with object value;
    movieListChklbls = votePage.movieListChklbl;
    movieListChkRads = votePage.movieListChkRad;
    voteSubmitBtn = votePage.voteSubmitBtn;
    movieListHeader = votePage.movieListHeader;
    movieListNames = votePage.movieListNames;
    movieListVotes = votePage.movieListVotes;
    movies = votePage.movies;
    moviesVotes = votePage.moviesVotes;
    voteSuccess = votePage.voteSuccess;
    voteForm = votePage.voteForm;

    // initialize reusables

    loginPage.emailFld.sendKeys('tester@yahoo.com');
    loginPage.passwordFld.sendKeys('fakePassword');
    loginPage.loginBut.click();
  });

  afterEach(function(){

  });

  it('should display all vote elements with right content', function(){
    voteHeader = votePage.voteHeader;
    expect(voteHeader.isDisplayed()).toBe(true);
    expect(voteSubmitBtn.isDisplayed()).toBe(true);
    expect(movieListHeader.first().isDisplayed()).toBe(true);
    expect(movieListHeader.first().getText()).toEqual('Movie');

    expect(movieListHeader.last().isDisplayed()).toBe(true);
    expect(movieListHeader.last().getText()).toEqual('Votes');
    expect(voteSuccess.isDisplayed()).toBe(false);

    movieListNames.count().then(function(itemCount){
      console.log(itemCount);
      for(var i = 0; i < itemCount; i++){
        //table with table names and votes
        expect(movieListNames.get(i).isDisplayed()).toBe(true);
        expect(movieListNames.get(i).getText()).toEqual(movies[i]);

        expect(movieListVotes.get(i).isDisplayed()).toBe(true);
        expect(movieListVotes.get(i).getText()).toBe(moviesVotes[i]);
        // radio button input and labels
        expect(movieListChklbls.get(i).isDisplayed()).toBe(true);
        expect(movieListChklbls.get(i).getText()).toBe(movies[i]);

        expect(voteForm.isDisplayed()).toBeTruthy();


      }
    });
    expect(movieListChkRads.first().isSelected()).toBe(true);


    //expect(voteHeader.isDisplayed).toBeTruthy();


  })

  it('should be able to select a movie to vote for', function(){
      expect(movieListChkRads.first().isSelected()).toBe(true);
      movieListChkRads.get(2).click();
      movieListChkRads = votePage.movieListChkRad;
      expect(movieListChkRads.get(2).isSelected()).toBe(true);

  });

  it('should be able to select a movie and vote for it', function(){
      // using Deadpool.
      var i = 3;
      movieListVotes.get(i).getText().then(function(vote){
        var current_vote = vote;
        var expected_vote = 1 + parseInt(vote);
        movieListChkRads.get(i).click();
        voteSubmitBtn.click();
        //browser.sleep(10000);
        expect(votePage.movieListVotes.get(i).getText()).toBe(""+expected_vote);
        expect(voteSuccess.isDisplayed()).toBe(true);
        expect(voteForm.isDisplayed()).toBe(false);
        });
  })

});
