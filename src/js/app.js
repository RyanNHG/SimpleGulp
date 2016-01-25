var $ = require('jquery');
var Router = require('./router');

$(document).ready(function(){
    
    var router = new Router();

    $('#button').click(function(){
      router.routeTo('/button');
    });

});
