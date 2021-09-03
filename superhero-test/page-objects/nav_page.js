//page objects
var NavPage = function(){}

NavPage.prototype = Object.create({},{
  heroLnk: {get: function(){return element(by.linkText('Heroes'))}},
  homeLnk: {get: function(){return element(by.css('#navbarSupportedContent > ul > li.nav-item.active > a'))}},
  heroFactLnk: {get: function(){return element(by.linkText('Hero Facts'))}},
  logoutLnk: {get: function(){return element(by.linkText('Logout'))}},
  heroFactModalLnks: {get: function(){return element.all(by.css('#heros-detail-modal-target > div > a'))}},
  heroFactModals: { get: function(){return element.all(by.css('.modal'))}}
});

module.exports = NavPage
