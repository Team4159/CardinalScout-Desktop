import React from 'react';
import {center} from './styles';

const Preform = ({ matchValue, teamValue, onChangeText, setUID, uid } ) => (
  <div style={center}>
    <h1> Pre-Match Form </h1>
    <form>  
            uid: <input type='text' 
        onChange={(t) => {if(t.target.value.length <= 4) setUID(t.target.value);} } value={uid} ></input>
            Match#: <input onChange={(t) => {if(!isNaN(t.target.value)) onChangeText('match', t.target.value);}} 
        type="text" name="match#" value={matchValue} ></input> 
            Team#: <input onChange={(t) => {if(!isNaN(t.target.value)) onChangeText('team', t.target.value);}} 
        type="text" name="team#" value={teamValue} ></input> 
    </form>
  </div>
);

export default Preform;