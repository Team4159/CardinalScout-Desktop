import React from 'react';
import {fnts} from './styles.js';
import {vista} from './styles.js';
const DataList = ({ data, editData, onSubmit, dataList, deleteData }) => (
  <div style = {fnts}>
    <h1> View/Edit Data </h1>
    <text> (click the data to view) </text><br/><br/>
    <select size={dataList.length + 1} value={data.id} >
      {
        dataList.map((d) => (
          <option key={d.id} value={d.id} onClick={() => editData(d.id, undefined)} > 
            match:{d.data.match} team:{d.data.team} </option>
        ))
      }
    </select>
    <ListOfData deleteData={deleteData} data={data} editData={(id, k, v) => editData(id, {[ k ]: v }) } />
    <button onClick={onSubmit} style = {vista}> submit </button>
  </div> 
);

const ListOfData = ({ data, editData, deleteData }) =>  (
  <div>
    {
      Object.keys(data.data).map((key) => {
        if(key === 'cross' || key === 'reachTouchPad' || key === 'climb'){
          return (
            <form key={key} >
              {key}: yes <input type='radio' name={key} value='T' checked={data.data[key] === 'T'} 
                onClick={(t) => editData(data.id, key, t.target.value)}></input> 
              no <input type='radio' name={key} value='F' checked={data.data[key] === 'F' }
                onClick={(t) => editData(data.id, key, t.target.value)} ></input>
            </form>
          );
        }
        return (
          <form key={key} >
            {key} <input type='text' name={key} value={data.data[key]} 
              onChange={(t) => editData(data.id, key, t.target.value)}></input>
          </form>
        );
      })
    }
    <button onClick={() => {if(confirm('do you want to delete this data?')) deleteData(data.id);}}> delete </button>
  </div>
);
    
  

export default DataList;