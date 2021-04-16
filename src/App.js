import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';

const App = () => {

  const [data, setData] = useState();

  useEffect (() => {
    axios
    .get('https://swapi.dev/api/1')
    .then(function(res){
      setData(res.data);
    })
    .catch(function(err){
      console.log(err);
    })
  }, [])

  const ImageInfo = (props) => {
    <div>
      <h2>{props.characterName}</h2>
    </div>
  }

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <ImageInfo data = {data} />
      <Character />
    </div>
 );
}

export default App;
