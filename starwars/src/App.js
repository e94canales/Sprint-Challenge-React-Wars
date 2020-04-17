import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Character from '../src/components/Character'
import ReactDOM from 'react-dom';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([])
  const [currentCharacterId, setCurrentCharacterId] = useState(null)

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then( response => {

        setCharacters(response.data.results)
      })
               
     
      .catch( error => {
        console.log('ATTENTION:', error);
        
      })
  }, [])

  
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className='charactersContainer'>

      {
        characters.map(char => {           
          return (
            <div key={char.id}>
              <Character name={char.name} species={char.species} image={char.image}/>
            </div>
          )
        })
      }

      </div>
    </div>
  );
}

export default App;
