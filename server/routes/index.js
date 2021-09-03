var express = require('express');
const { compileClientWithDependenciesTracked } = require('jade');
var router = express.Router();

const { Pool, Client } = require('pg');
const pool = new Pool( {
  connectionString: 'postgres://gxzeyfzn:9DGCs3g_FQ6rkD4_BcMCJCMqVk13B3K1@chunee.db.elephantsql.com/gxzeyfzn'
} );


/* GET home page. */
router.get( '/', 
    // async await style
    async function( request, response, next ) {
      try {
        let myQuery = '';

        if (request.query.color) {
          myQuery = `
            SELECT *
            FROM dresses
            WHERE color = '${ request.query.color }'
          ;`;
        } else if (request.query.length) {
          myQuery = `
            SELECT *
            FROM dresses
            WHERE length = '${ request.query.length }'
          ;`;
        } else {
          myQuery = `
            SELECT *
            FROM dresses
          ;`;
        }

        // request.query is the color
        console.log( 'my request.query', request.query );
        const result = await pool.query( myQuery );
        response.send( result.rows );

      } catch ( error ) {
          console.log( 'my error ', error );
          next( error );
      }

      // next();
    }
);

/*
router.get( '/', 
  function( request, response, next ) {
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
  };
  
  response.send( myArray );
);
*/

module.exports = router;
