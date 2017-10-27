import React from 'react';
import ReactDOM from 'react-dom';
import Auton from './components/auton';
import Teleop from './components/teleop';
import Preform from './components/preform';
const App = () => (
    <div>
        <Preform/>
        <Auton/>
        <Teleop/>
    </div>
);
ReactDOM.render(<App/>, document.getElementById('root'));