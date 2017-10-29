import React from 'react';
import ReactDOM from 'react-dom';
import Auton from './containers/autonContainer';
import Teleop from './containers/teleopContainer';
import Preform from './containers/preformContainer';
import DataList from './containers/dataListContainer';
import ImportExport from './containers/import-exportContainer';
import { Provider } from 'react-redux';
import configureStore from './redux/config/configureStore';
const { remote } = window.require('electron');

const App = () => (
  <div>
    <Preform/>
    <Auton/>
    <Teleop/>
    <DataList/>
    <ImportExport/>
  </div>
);
const store = configureStore(JSON.parse(localStorage.myAppState));
const rootElement = document.querySelector(document.currentScript.getAttribute('data-container'));
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , rootElement);

remote.getCurrentWindow().on('close', () => {
  const state = store.getState();
  localStorage.myAppState = JSON.stringify(state);
});

//store.dispatch({ type: 'CLEAR_STORED_DATA'} );
//JSON.parse(localStorage.myAppState)
