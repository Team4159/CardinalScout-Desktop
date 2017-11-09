import React from 'react';
import {fnts, padding} from './styles.js';
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
    <div style ={padding}></div> 
    <button onClick={onSubmit} style = {{background: 'white', borderRadius: '7px'}}> Submit </button>

  </div> 
);

const ListOfData = ({ data, editData, deleteData }) =>  (
  <div>
    {
      Object.keys(data.data).map((key) => {
        if(key === 'cross' || key === 'reachTouchPad' || key === 'climb'){
          return (
            <form key={key} >
            <div style ={padding}></div> 
              {key}: yes <input type='radio' name={key} value='T' checked={data.data[key] === 'T'} 
                onClick={(t) => editData(data.id, key, t.target.value)}></input> 
              no <input type='radio' name={key} value='F' checked={data.data[key] === 'F' }
                onClick={(t) => editData(data.id, key, t.target.value)} ></input>
            </form>
          );
        }
        if(key === 'uid'){
          return (
            <text key={key} > uid: {data.data.uid} </text>
          );
        }
        return (
          <form key={key} >
          <div style ={padding}></div> 
            {key} <input type='text' name={key} value={data.data[key]} 
              onChange={(t) => editData(data.id, key, t.target.value)}></input>
              
          </form>
        );
      })
    }
    <br/>
    <button style = {{background: 'white', borderRadius: '7px'}} onClick={() => {if(confirm('do you want to delete this data?')) deleteData(data.id);}}> Delete </button>
  </div>
  // 
);

  

export default DataList;