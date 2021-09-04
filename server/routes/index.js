const { request } = require('express');
var express = require('express');
const { compileClientWithDependenciesTracked } = require('jade');
var router = express.Router();

// pool is elephantsql database, which is an object
const { Pool, Client } = require('pg');
const pool = new Pool( {
  connectionString: 'postgres://gxzeyfzn:9DGCs3g_FQ6rkD4_BcMCJCMqVk13B3K1@chunee.db.elephantsql.com/gxzeyfzn'
} );

/*
testing:
http://localhost:3000 SELECT *
http://localhost:3000/?color=white SELECT by color
http://localhost:3000/?length=short SELECT by length
http://localhost:3000/?color=white&length=short SELECT by color and length
*/

/* GET home page. */
router.get( '/', 
    // async await style
    async function( request, response, next ) {
      try {
        let myQuery = '';

        // query by color and length
        if (request.query.color && request.query.length) {
          myQuery = `
            SELECT *
            FROM dresses
            WHERE color = '${ request.query.color }'
            AND length = '${ request.query.length }'
          ;`;
        
        // query by color
        } else if (request.query.color) {
          myQuery = `
            SELECT *
            FROM dresses
            WHERE color = '${ request.query.color }'
          ;`;

        // query by length
        } else if (request.query.length) {
          myQuery = `
            SELECT *
            FROM dresses
            WHERE length = '${ request.query.length }'
          ;`;
        // query by no filter
        } else {
          myQuery = `
            SELECT *
            FROM dresses
          ;`;
        }

        /*
        console.log( 'my request', request );

        request = <ref *2> IncmoingMessage{
          headers: {
            host: 'localhost:3000',
            ...
          }
          method: 'GET',
          params: {},
          query: { color: 'white', length: 'short' },
          body: {},
          cookies: [Object: null prototype] {},
          ...
        }
        */

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
        color: 'white', 
        length: 'short'
      }, 

      {
        id: 3,
        color: 'white',
        length: 'long'
      },

      {
        id: 4,
        color: 'black',
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
