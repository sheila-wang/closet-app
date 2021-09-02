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
        item = { items[i] }
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
  let url = "http://localhost:3000/images/" + props.item.id + ".jpg"

  return (
    <div className = "card">
      <img src = { url } alt = "dress"/>
      <div>id: { props.item.id }</div>
      <div>color: { props.item.color }</div>
      <div>length: { props.item.length }</div>
    </div>
  )
}

export default App;
