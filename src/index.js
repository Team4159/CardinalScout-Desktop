import React from 'react';
import ReactDOM from 'react-dom';
import Auton from './containers/autonContainer';
import Teleop from './containers/teleopContainer';
import Preform from './containers/preformContainer';
import { Provider } from 'react-redux';
import configureStore from './redux/config/configureStore';
const App = () => (
  <div>
    <Preform/>
    <Auton/>
    <Teleop/>
  </div>
);
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root'));