import React from 'react';
import { csv } from '../redux/config/globalFunctions';
const { dialog } = window.require('electron').remote;
const fs = window.require('electron').remote.require('fs');

const ImportExport = ({ storedData, uid }) => (
  <div>
    <h1> Import file, Export file </h1>
    <button> import </button>
    <button onClick={() => writeFile(formatData(storedData, uid) )} > export </button> <br/>
    <text> {formatData(storedData, uid) } </text>
  </div>
);
const formatData = (dataArray, uid) => {
  var s = '';
  dataArray.forEach((e) => {
    s += csv(e.data, uid, ',') + '\n';
  });
  return s;
};
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
export default ImportExport;