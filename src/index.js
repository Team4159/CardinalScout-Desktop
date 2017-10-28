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
const { dialog } = window.require('electron').remote;
const fs = require('fs');

const App = () => (
  <div>
    <Preform/>
    <Auton/>
    <Teleop/>
    <DataList/>
    <ImportExport writeFile={writeFile} />
  </div>
);
const store = configureStore(JSON.parse(localStorage.myAppState));
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root'));

remote.getCurrentWindow().on('close', () => {
  const state = store.getState();
  localStorage.myAppState = JSON.stringify(state);
});

const writeFile = (content) => {
  dialog.showSaveDialog((fileName) => {
    if(fileName === undefined){
      alert('you didn\' save the file');
      return;
    }
    fs.writeFile(fileName, content, (err) =>{
      if(err){
        alert('error error!' + err.message);
      }
      alert('the file has successfully been saved')
    });
  });
};
//JSON.parse(localStorage.myAppState)