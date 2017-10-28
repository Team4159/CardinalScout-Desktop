import React from 'react';
import './styles.css';

const Preform = ({ matchValue, teamValue, onChangeText } ) => (
  <div>
    <h1> Pre-Match Form </h1>
    <form>  
            Match#: <input onChange={(t) => {if(!isNaN(t.target.value)) onChangeText('match', t.target.value);}} 
        type="text" name="match#" value={matchValue} ></input> 
            Team#: <input onChange={(t) => {if(!isNaN(t.target.value)) onChangeText('team', t.target.value);}} 
        type="text" name="team#" value={teamValue} ></input> 
    </form>
  </div>
);

export default Preform;