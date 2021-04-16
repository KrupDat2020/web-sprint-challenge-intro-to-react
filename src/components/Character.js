// Write your Character component here
import React from 'react';

const Character = (props) => {
    const { characterName } = props;
    return (
        <div>
           <h1>{characterName}</h1>
        </div>
    )
}

export default Character
