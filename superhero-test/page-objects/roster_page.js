//page objects
var RosterPage = function(){}

var getHeros = function(){
  return ['Wolverine','Iron Man','Deadpool','Thor','Spider-Man'];
}

var getHeroCount = function(){
  return element.all(by.css('#hero-list li.list-group-item')).count();
}

RosterPage.prototype = Object.create({},{
  rosterHeader: {get: function(){return element(by.id('roster-header'))}},
  superHerosList: {get: function(){return element.all(by.css('#hero-list > li.list-group-item'))}},
  heroInputLbl: {get: function(){return element(by.css('#addHero-form > div > label'))}},
  heroInputFld: {get: function(){return element(by.id('heroInput'))}},
  heroSubmitBtn: {get: function(){return element(by.css('#addHero-form > button'))}},
  heros:{get: function(){ return getHeros()}},
  heroCount:{get: function(){ return getHeroCount() }}
});

module.exports = RosterPage
