var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get( '/', 
  function(request, response, next) {
    // response.send('respond with a resource');
    response.send( 'world' );
  }
);

module.exports = router;
