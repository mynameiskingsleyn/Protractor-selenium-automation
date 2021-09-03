//page objects
var HeaderPage = function(){}

HeaderPage.prototype = Object.create({},{
  head: {get: function(){return element(by.id('page-header'))}},
  headImage:{get: function(){return element(by.css('#header-image'))}},
  headPar:{get: function(){return element(by.css('#head-par'))}}
});

module.exports = HeaderPage
