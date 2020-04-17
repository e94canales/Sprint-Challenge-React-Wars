import styled from 'styled-components';
import Character from './Character';

const CharacterContainer = styled.div`
    /* display: flex; */
    /* background-color: rgb(194, 194, 194); */
    background-color: black;
    padding-bottom: 3%;
    margin: 5% 0;
    filter: drop-shadow(0 3px 4px gray);

    img {
        width: 100%;
        /* height: 300px; */
        
    }
    .info {
        padding: 5% 0;
        h2 {
            font-size: 1rem;
            /* color: darkblue; */
            color: darkgray;
            padding: 2% 0;
            margin: 0;
        }
        p {
            padding: 1.5% 0;
            margin: 0;
            font-size: .9rem;
            color: gray;

                .orange {
                color: rgb(185, 121, 1);
                }
        }
    }
    
    

`

export default CharacterContainer