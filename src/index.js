import React from 'react';
import ReactDOM from 'react-dom';
import Auton from './components/auton';
import Teleop from './components/teleop';
import Preform from './components/preform';
import { Provider } from 'react-redux';
import createStore from './redux/config/configureStore';
const App = () => (
    <div>
        <Preform/>
        <Auton/>
        <Teleop/>
    </div>
);
const store = createStore();
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));