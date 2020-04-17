import React from 'react'
import CharacterContainer from '../components/Characters.js'

const Character = props => {
    // console.log(props.characterName);
    return (
        <CharacterContainer>
            <img src={props.image}></img>
            <h2>{props.name}</h2>  
            <p>Species: {props.species}</p>        
        </CharacterContainer>
    )
}

export default Character