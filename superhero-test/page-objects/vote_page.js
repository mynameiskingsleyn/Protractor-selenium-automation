//page objects
var VotePage = function(){}

var getMovies = function(){
  return ['X-Men','Avengers','Deadpool',
        'Spider-Man Homecoming','Iron Man'];
}
var getMoviesVotes = function(){
  return ['10','5','22','12','1'];
}

VotePage.prototype = Object.create({},{
  voteHeader: {get: function(){return element(by.id('vote-header'))}},
  movieListChklbl: {get: function(){return element.all(by.css('#vote-form > .form-check > label'))}},
  movieListChkRad: {get: function(){return element.all(by.css('#vote-form > .form-check > input'))}},
  voteSubmitBtn: {get: function(){return element(by.css('#vote-form > button'))}},
  movieListHeader: {get:function(){return element.all(by.css('body > div.container-fluid > div:nth-child(6) > div > table > thead > tr > th'))}},
  movieListNames: {get: function(){return element.all(by.css('body > div.container-fluid > div:nth-child(6) > div > table > tbody > tr > td:nth-child(odd)'))}},
  movieListVotes: {get: function(){return element.all(by.css('body > div.container-fluid > div:nth-child(6) > div > table > tbody > tr > td:nth-child(even)'))}},
  movies:{get: function(){ return getMovies()}},
  moviesVotes:{get:function(){ return getMoviesVotes()}},
  voteSuccess: {get: function(){return element(by.id('vote-alert'))}},
  voteForm: {get: function(){return element(by.id('vote-form'))}}
});

module.exports = VotePage
