var express = require('express');
const { compileClientWithDependenciesTracked } = require('jade');
var router = express.Router();

/* GET home page. */
router.get( '/', 
  function( request, response, next ) {
    // response.render('index', { title: 'Express' });
    const myArray = [
      {
        id: 1,
        color: 'white'
      },

      {
        id: 2,
        color: 'black'
      }
    ]
    response.send( myArray );
  }
);

module.exports = router;
