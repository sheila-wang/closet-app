const request = require('supertest');
const server = 'http://127.0.0.1:3000';
// const server = 'http://localhost:3000'; did not work

describe( 'route integration', () => {
  describe( '/', () => {
    describe( 'GET', () => {
      it( 'responds with 200 status and application/json content', () => {
        return request( server )
          .get( '/' )
          .expect( 'Content-Type', /application\/json/ )
          .expect( 200 );
      } );
    } );
  } );
} );