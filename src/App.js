import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import data from './mocks/handlers';
// 
const App = () => {

  const [swData, setSwData] = useState();

  useEffect (() => {
    axios
    .get('https://swapi.dev/api/people/1/')
    .then(function(res){
      setSwData(res.data);  
      //alert(res.data.Character);
    })
    .catch(function(err){  
      console.log('why isnt this working?');
    })
  }, [])


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Character characterInfo={{...swData}} />      
      {/* <ImageInfo data = {data} /> */}
    </div>
 );
  }
export default App;
