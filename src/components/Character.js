// Write your Character component here
import React from 'react';

const Character = ({ characterInfo }) => {
    debugger
    // const [characterName] = props.characterName
    return (
        <div>
           {characterInfo.name};
           {characterInfo.height};
           {characterInfo.mass};
           {characterInfo.hair_color};
           {characterInfo.skin_color};
           {characterInfo.eye_color};
        </div>
    )};
export default Character 
