import React from 'react';
import './styles.css';
const Auton = () => (
    <div>
        <h1>Autonomous Scouting</h1>
        <div className='row' >
            <text> Gears </text>
            <button> + </button>
            <button> - </button>
            <form >manual input <input type='text' name='gearInput'></input> </form>
        </div>
        <div className='row' >
            <text> High goals </text>
            <button> + </button>
            <button> - </button>
            <form >manual input <input type='text' name='gearInput'></input> </form>
        </div>
        <div className='row' >
            <text> Low goals </text>
            <button> + </button>
            <button> - </button>
            <form >manual input <input type='text' name='gearInput'></input> </form>
        </div>
    </div>
);
export default Auton;