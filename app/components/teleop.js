import React from 'react';
import {fnts} from './styles.js';
import {vista,radioOff} from './styles.js';
const Teleop = ({ gears, highBalls, lowBalls, onChange, submit, robotDeadTime, climb, reachTouchPad, comments }) => (
  <div style = {fnts}>
    <h1>Teleoperated Scouting</h1>
    <div className='row' >
      <text> Gears </text>
      <button onClick={() => onChange('teleopGears', parseInt(gears, 10) + 1)} style = {vista}> + </button>
      <button onClick={() => {if(parseInt(gears, 10) > 0) 
        onChange('teleopGears', parseInt(gears, 10) - 1);}} style = {vista}> - </button>
      <form >manual input <input type='text' name='gearInput' value={gears} onChange={(t) => {
        if(!isNaN(t.target.value)) onChange('teleopGears', t.target.value);}} ></input> </form>
    </div>
    <div className='row' >
      <text> High goals </text>
      <button onClick={() => onChange('teleopBallsHigh', parseInt(highBalls, 10) + 3)} style = {vista}> + </button>
      <button onClick={() => {if(parseInt(highBalls, 10) > 0) 
        onChange('teleopBallsHigh', parseInt(highBalls, 10) - 3);}} style = {vista}> - </button>
      <form >manual input <input type='text' name='highBallsInput' value={highBalls} onChange={(t) => {
        if(!isNaN(t.target.value)) onChange('teleopBallsHigh', t.target.value);}} ></input> </form>
    </div>
    <div className='row' >
      <text> Low goals </text>
      <button onClick={() => onChange('teleopBallsLow', parseInt(lowBalls, 10) + 10)} style = {vista}> + </button>
      <button onClick={() => {if(parseInt(lowBalls, 10) > 0) 
        onChange('teleopBallsLow', parseInt(lowBalls, 10) - 10);}} style = {vista}> - </button>
      <form >manual input <input type='text' name='lowBallsInput' value={lowBalls} onChange={(t) => {
        if(!isNaN(t.target.value)) onChange('teleopBallsLow', t.target.value);}}></input> </form>
    </div>
    <form> 
      robot dead time: <input type='text' onChange={(t) => { if(!isNaN(t.target.value)) 
        onChange('robotDeadTime', t.target.value);}}
      value={robotDeadTime} />
    </form>
    <text> attempted climb? </text>
    <button disabled={(climb === 'T') } style={(climb === 'T') ? radioOff:vista  }  onClick={() => onChange('climb', 'T') } > yes </button>
    <button disabled={(climb === 'F') } style={(climb === 'F') ? radioOff:vista  }  onClick={() => onChange('climb', 'F') } > no </button>
    <br/>
    <text> reach touch pad? </text>
    <button disabled={(reachTouchPad === 'T') } style={(reachTouchPad === 'T') ? radioOff:vista  }  onClick={() => onChange('reachTouchPad', 'T') } > yes </button>
    <button disabled={(reachTouchPad === 'F') } style={(reachTouchPad === 'F') ? radioOff:vista  }  onClick={() => onChange('reachTouchPad', 'F') } > no </button>

    <form>
      comments: <input type='text' value={comments} onChange={ (t) => onChange('comments', t.target.value) }></input>
    </form>
    <button onClick={submit} style = {{background: 'white', borderRadius: '7px'}} > submit </button>
  </div>
);
export default Teleop;