import React from 'react';
import './styles.css';


const Auton = ({ gears, lowBalls, highBalls, onChange, cross }) => (
  <div>
    <h1>Autonomous Scouting</h1>
    <div className='row' >
      <text> Gears </text>
      <button onClick={() => onChange('autonGears', parseInt(gears) + 1) } > + </button>
      <button onClick={() => {if(parseInt(gears) > 0) onChange('autonGears', parseInt(gears) - 1);}}> - </button>
      <form >manual input <input type='text' name='gearInput' value={gears} onChange={(t) => {
        if(!isNaN(t.target.value)) onChange('autonGears', t.target.value);}}></input> 
      </form>
    </div>
    <div className='row' >
      <text > High goals </text>
      <button onClick={() => onChange('autonBallsHigh', parseInt(highBalls) + 1)} > + </button>
      <button onClick={() => {if(parseInt(highBalls) > 0) onChange('autonBallsHigh', parseInt(highBalls) - 1);}}> - </button>
      <form >manual input <input type='text' name='ballHighInput' value={highBalls} onChange={(t) => {
        if(!isNaN(t.target.value)) onChange('autonBallsHigh', t.target.value);}}></input> </form>
    </div>
    <div className='row' >
      <text> Low goals </text>
      <button onClick={() => onChange('autonBallsLow', parseInt(lowBalls) + 1)} > + </button>
      <button onClick={() => {if(parseInt(lowBalls) > 0) onChange('autonBallsLow', parseInt(lowBalls) - 1 );} }> - </button>
      <form >manual input <input type='text' name='ballsLowInput' value={lowBalls} onChange={(t) => {
        if(!isNaN(t.target.value)) onChange('autonBallsLow', t.target.value);}}></input> </form>
    </div>
    <form>
        Cross?: yes: <input type='radio' name='cross' value='T' checked={cross=='T'}
        onClick={(t) => onChange('cross', t.target.value)}></input> 
        no: <input type='radio' name='cross' value='F' checked={cross=='F'}
        onClick={(t) => onChange('cross', t.target.value)} ></input>
    </form>
  </div>
);
export default Auton;