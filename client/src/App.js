import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState( [] );
  const [color, setColor] = useState( '' );
  const [length, setLength] = useState( '' );

  useEffect( () => {
    let URL = 'http://localhost:3000';

    if (color.length && length.length) {
      URL += '?color=' + color + '&length=' + length;
    } else if (color.length) {
      URL += '?color=' + color;
    } else if (length.length) {
      URL += '?length=' + length;
    }

    // fetch( 'http://localhost:3000/?color=pink&length=short') 
    fetch( URL ) 
    .then( response => response.json() )
    .then( 
      ( response ) => { 
        console.log( 'my items', items );
        setItems( response ); 
      },
      ( error ) => { console.log( error ) }
    )
  }, [ color, length ] /* dependency array. if [], then only re-render on page load, if no [], then refire useEffect hooks with any change to state of component or of parent */ ) 

  const arrayOfObjects = [];

  for (let i = 0; i < items.length; i++) {
    arrayOfObjects.push(
      <Card
        key = { items[i].id }
        item = { items[i] }
      />
    )
  }

  return (
    <div id = "container1">

      <div id = "container2">

        {/* color */}
        <select style = { { width: '100px' } } 
          onChange = { (event) => setColor(event.target.value) }
        >
          <option value="" selected>{ color.length ? "color" : "color" }</option>
          <option value="white">white</option>
          <option value="beige">beige</option>
          <option value="brown">brown</option>
          <option value="pink">pink</option>
          <option value="blue">blue</option>
          <option value="gray">gray</option>
          <option value="black">black</option>
        </select>

        {/* length */}
        <select style = { { width: '100px' } }
          onChange = { (event) => setLength(event.target.value) }
        >
          <option value="" selected>{ length.length ? "length" : "length" }</option>
          <option value="short">short</option>
          <option value="long">long</option>
        </select>

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
