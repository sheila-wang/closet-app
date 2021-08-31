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
  }, [] ) 

  const arrayOfObjects = [];
  for (let i = 0; i < items.length; i++) {
    arrayOfObjects.push(
      <Card
        key = { i }
        data = { items[i] }
      />
    )
  }

  return (
    <div class = "container1">
      <div class = "container2">
        <div class = "search">search</div>
      </div>

      <div class = "container3">
        { arrayOfObjects }
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div>hello { props.data.id }</div>
  )
}

export default App;
