import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState( [] );

  useEffect( () => {
    fetch( 'http://localhost:3000') 
    .then( result => result.json() )
    .then( 
      ( result ) => { 
        console.log( 'my items', items );
        setItems( result ); 
      },
      ( error ) => { console.log( error ) }
    )
  }, [ ] ) 

  return (
    <div class = "container1">
      <div class = "container2">
        <div class = "search">search</div>
      </div>

      <div class = "container3">
        <div>hello1</div>
        <div>hello2</div>
        <div>hello3</div>
        <div>hello4</div>
        <div>hello5</div>
        <div>hello6</div>

      </div>
    </div>
  );
}

export default App;
