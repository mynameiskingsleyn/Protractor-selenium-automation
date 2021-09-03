//page objects
var BasePage = function(){}

BasePage.prototype = Object.create({},{
  homePageUrl: {get: function(){return 'http://local.superhero.com'}}
});

module.exports = BasePage
