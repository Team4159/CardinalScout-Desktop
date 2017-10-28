import React from 'react';
import './styles.css';
const Teleop = ({ gears, highBalls, lowBalls, onChange, submit, robotDeadTime, climb, reachTouchPad }) => (
  <div>
    <h1>Teleoperated Scouting</h1>
    <div className='row' >
      <text> Gears </text>
      <button onClick={() => onChange('teleopGears', parseInt(gears) + 1)}> + </button>
      <button onClick={() => {if(parseInt(gears) > 0) 
        onChange('teleopGears', parseInt(gears) - 1);}}> - </button>
      <form >manual input <input type='text' name='gearInput' value={gears} onChange={(t) => {
        if(!isNaN(t.target.value)) onChange('teleopGears', t.target.value);}} ></input> </form>
    </div>
    <div className='row' >
      <text> High goals </text>
      <button onClick={() => onChange('teleopBallsHigh', parseInt(highBalls) + 1)}> + </button>
      <button onClick={() => {if(parseInt(highBalls) > 0) 
        onChange('teleopBallsHigh', parseInt(highBalls) - 1);}}> - </button>
      <form >manual input <input type='text' name='highBallsInput' value={highBalls} onChange={(t) => {
        if(!isNaN(t.target.value)) onChange('teleopBallsHigh', t.target.value);}} ></input> </form>
    </div>
    <div className='row' >
      <text> Low goals </text>
      <button onClick={() => onChange('teleopBallsLow', parseInt(lowBalls) + 1)}> + </button>
      <button onClick={() => {if(parseInt(lowBalls) > 0) 
        onChange('teleopBallsLow', parseInt(lowBalls) - 1);}}> - </button>
      <form >manual input <input type='text' name='lowBallsInput' value={lowBalls} onChange={(t) => {
        if(!isNaN(t.target.value)) onChange('teleopBallsLow', t.target.value);}}></input> </form>
    </div>
    <form> 
      robot dead time: <input type='text' onChange={(t) => {if(!NaN(t.target.value)) onChange('robotDeadTime', t.target.value); }}
        value={robotDeadTime} />
    </form>
    <form> 
        attempt climb?: yes: <input type='radio' name='a-climb' value='T' 
        onClick={(t) => onChange('climb', t.target.value)} checked={climb == 'T'} ></input>
        no: <input type='radio' name='a-climb' value='F' checked={climb == 'F'}
        onClick={(t) => onChange('climb', t.target.value)}></input>
    </form>
    <form>
        reach touchpad? yes: <input type='radio' name='touchpad' value='T' checked={reachTouchPad== 'T'}
        onClick={(t) => onChange('reachTouchPad', t.target.value)}></input> 
        no: <input type='radio' name='touchpad' value='F' checked={reachTouchPad=='F'}
        onClick={(t) => onChange('reachTouchPad', t.target.value)} ></input>
    </form>
    <button onClick={submit} > submit </button>
  </div>
);
export default Teleop;