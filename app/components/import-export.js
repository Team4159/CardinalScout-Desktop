import React from 'react';
import { formatData, csvToObject } from '../redux/config/globalFunctions';
import {fnts} from './styles.js';
import {vista} from './styles.js';
const { dialog } = window.require('electron').remote;
const fs = window.require('electron').remote.require('fs');

const ImportExport = ({ storedData, saveImportedData, clearStoredData }) => (
  <div style = {fnts}>
    <h1> Import file, Export file </h1>
    <button  onClick={() => {readFile(saveImportedData);}} style = {{background: 'white', borderRadius: '7px'}}> import </button>
    <button onClick={() => writeFile(formatData(storedData) )} style = {{background: 'white', borderRadius: '7px'}}> export </button> <br/>
    <button onClick = { () => {if(confirm('do you want to delete all of your data?')) clearStoredData();} } style = {{background: 'white', borderRadius: '7px'}}> reset </button>
  </div>
);
const readFile = (f) => {
  dialog.showOpenDialog((fileNames) => {
    if(fileNames === undefined){
      alert('you didn\' select any files to open');
      return;
    }
    var a = fs.readFileSync(fileNames[0], 'utf8').split('\n');
    var b = a.filter((e) => (e !== ''));
    var c = b.map((e) => csvToObject(e));
    f(c);
  } );
};
const writeFile = (content) => {
  dialog.showSaveDialog((file) => {
    if(file === undefined){
      alert('you didn\' save the file');
      return;
    }
    const fileName = file+ '.csv';
    fs.writeFile(fileName, content, (err) =>{
      if(err){
        alert('error error!' + err.message);
      }
      alert('the file has successfully been saved');
    });
  });
};
export default ImportExport;