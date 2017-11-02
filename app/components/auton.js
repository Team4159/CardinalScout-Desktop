import React from 'react';
import { fnts } from './styles.js';
import {vista} from './styles.js';

const Auton = ({ gears, lowBalls, highBalls, onChange, cross }) => (
  <div style={fnts} >
    <h1>Autonomous Scouting</h1>
    <div className='row' >
      <text> Gears </text>
      <button onClick={() => onChange('autonGears', parseInt(gears, 10) + 1) } style = {vista}> + </button>
      <button onClick={() => {if(parseInt(gears, 10) > 0) onChange('autonGears', parseInt(gears, 10) - 1);}}style = {vista}> - </button>
      <form >manual input <input type='text' name='gearInput' value={gears} onChange={(t) => {
        if(!isNaN(t.target.value)) onChange('autonGears', t.target.value);}}></input> 
      </form>
    </div>
    <div className='row' >
      <text > High goals </text>
      <button onClick={() => onChange('autonBallsHigh', parseInt(highBalls, 10) + 1)} style = {vista}> + </button>
      <button onClick={() => {if(parseInt(highBalls, 10) > 0) onChange('autonBallsHigh', parseInt(highBalls, 10) - 1);}}style = {vista}> - </button>
      <form >manual input <input type='text' name='ballHighInput' value={highBalls} onChange={(t) => {
        if(!isNaN(t.target.value)) onChange('autonBallsHigh', t.target.value);}}></input> </form>
    </div>
    <div className='row' >
      <text> Low goals </text>
      <button onClick={() => onChange('autonBallsLow', parseInt(lowBalls, 10) + 1)} style = {vista}> + </button>
      <button onClick={() => {if(parseInt(lowBalls, 10) > 0) onChange('autonBallsLow', parseInt(lowBalls, 10) - 1 );} } style = {vista}> - </button>
      <form >manual input <input type='text' name='ballsLowInput' value={lowBalls} onChange={(t) => {
        if(!isNaN(t.target.value)) onChange('autonBallsLow', t.target.value);}}></input> </form>
    </div>
    <form>
        Cross?: yes: <input type='radio' name='cross' value='T' checked={cross === 'T'}
        onClick={(t) => onChange('cross', t.target.value)}></input> 
        no: <input type='radio' name='cross' value='F' checked={cross === 'F'}
        onClick={(t) => onChange('cross', t.target.value)} ></input>
    </form>
  </div>
);
export default Auton;