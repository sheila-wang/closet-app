import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState( [] );

  useEffect( () => {
    fetch( 'http://localhost:3000') 
    .then( response => response.json() )
    .then( 
      ( response ) => { 
        console.log( 'my items', items );
        setItems( response ); 
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
    <div id = "container1">
      <div id = "container2">
        <div id = "search">search</div>
      </div>

      <div id = "container3">
        { arrayOfObjects }
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className = "card">
      <div>id: { props.data.id }</div>
      <div>color: { props.data.color }</div>
      <div>length: { props.data.length }</div>
    </div>
  )
}

export default App;
