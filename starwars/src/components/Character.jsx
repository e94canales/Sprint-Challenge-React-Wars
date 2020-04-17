import React from 'react'
import CharacterContainer from '../components/Characters.js'

const Character = props => {
    // console.log(props.characterName);
    return (
        <CharacterContainer>
            <img src={props.image}></img>
            <div className='info'>
                <h2>{props.name}</h2>  
                <p>Species: <span className='orange'>{props.species}</span></p>
                <p>Origin: <span className='orange'>{props.origin}</span></p>    
            </div>      
        </CharacterContainer>
    )
}

export default Character