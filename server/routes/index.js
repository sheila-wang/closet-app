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
        color: 'white',
        length: 'short'
      },

      {
        id: 2,
        color: 'black', 
        length: 'mid'
      }, 

      {
        id: 3,
        color: 'blue',
        length: 'long'
      },

      {
        id: 4,
        color: 'green',
        length: 'short'
      }, 

      {
        id: 5,
        color: 'red',
        length: 'mid'
      },

      {
        id: 6,
        color: 'pink',
        length: 'long'
      }
    ]
    response.send( myArray );
  }
);

module.exports = router;
