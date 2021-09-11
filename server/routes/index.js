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
http://localhost:3000/?color=pink SELECT by color
http://localhost:3000/?length=short SELECT by length
http://localhost:3000/?color=pink&length=short SELECT by color and length
*/

/* GET home page. */
router.get( '/', 
    // async await style
    async function( request, response, next ) {
      try {
        let myQuery = '';
        let values = [];

        // query by color and length
        if (request.query.color && request.query.length) {
          values = [ request.query.color, request.query.length ];

          myQuery = `
            SELECT *
            FROM dresses
            WHERE color = $1
            AND length = $2
          ;`;

          // query by color
        } else if (request.query.color) {
          values = [ request.query.color ];

          myQuery = `
            SELECT *
            FROM dresses
            WHERE color = $1
          ;`;

        // query by length
        } else if (request.query.length) {
          values = [ request.query.length ];

          myQuery = `
            SELECT *
            FROM dresses
            WHERE length = $1
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
          query: { color: 'pink', length: 'short' },
          body: {},
          cookies: [Object: null prototype] {},
          ...
        }
        */

        console.log( 'my request.query', request.query );

        // parameterized query
        // pool.query() returns an object, one key value pair is "rows" with value that is an array of objects
        const res = await pool.query( myQuery, values );
        response.send( res.rows );

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
        length: 'short'
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
