var page = require('page');

var Router = function(){
  this.initFakeRoutes();
};

Router.prototype.initFakeRoutes = function() {

    page('/', function(){
      console.log('root page');
    });
    page('/button', function(){
      console.log('button page');
    });
    page('*', function(){
      console.log('not root page');
    });

    page();
};

Router.prototype.routeTo = function(path) {
  page(path);
}

module.exports = Router;