import React from 'react';
import Proptypes from 'prop-types';
// const exampleData =  {
//   id: 123,
//   data: {
//     match: '50',
//     team: '4159',
//     autonGears: 1,
//     autonBallsLow: 50,
//     autonBallsHigh : 0,
//     cross: 'T',
//     teleopGears: 5,
//     teleopBallsHigh: 0,
//     teleopBallsLow: 100,
//     reachTouchPad: 'T',
//     climb: 'F',
//     robotDeadTime: 0,
//     comments: '',
//   }};
const DataList = ({ data, editData, onSubmit, dataList }) => (
  <div>
    <select size={dataList.length} value={data.id}>
      {
        dataList.map((d) => (
          <option key={d.id} value={d.id} onClick={() => editData(d.id, undefined)} > 
            match:{d.data.match} team:{d.data.team} </option>
        ))
      }
    </select>
    <ListOfData data={data} editData={(id, k, v) => editData(id, {[ k ]: v }) } />
    <button onClick={onSubmit} > submit </button>
  </div> 
);
DataList.propTypes = {
  dataList: Proptypes.array.isRequired
};

const ListOfData = ({ data, editData }) =>  (
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
  </div>
);
    
  

export default DataList;