import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Character from '../src/components/Character'
import logoImg from '../src/images/rm.png'
import char from '../src/images/char.png'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then( response => {
        setCharacters(response.data.results)
      })
               
     
      .catch( error => {
        console.log('ATTENTION:', error);
        
      })
  }, [currentPage])



  
  return (
    <div className="App">
      <img className='char' src={char}/>
      <img className='logoImg' src={logoImg}/>

      <div className='buttons'>
        <button onClick={() => {
            if (currentPage == 1){
              return currentPage
            }
          setCurrentPage(currentPage - 1)
          console.log(currentPage - 1);
          }}>prev</button>
          <button onClick={() => {
          setCurrentPage(currentPage + 1)
          console.log(currentPage + 1);
          
        }}>next</button>
      </div>
      
      <div className='charactersContainer'>
      

      {
        characters.map(char => {           
          return (
            <div key={char.id}>
              <Character name={char.name} species={char.species} image={char.image} origin={char.origin.name}/>
            </div>
          )
        })
      }

      </div>
    </div>
  );
}

export default App;
