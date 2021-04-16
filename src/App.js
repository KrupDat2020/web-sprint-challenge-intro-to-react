import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Characters from './components/Characters'

const App = () => {

  const [Characters, setCharacters] = useState(Characters);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/1');
    .then(function(res) {
      console.log(res.Characters)
      setCharacters(res.Characters)
    })
    .catch(err) {
      console.log(err);
    }
  }, []);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
