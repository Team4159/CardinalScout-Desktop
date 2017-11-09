export const display = (d, ch) => {
  var names = Object.keys(d);
  var data = Object.values(d);
  var str = '';
  for(var i = 0; i < names.length; i++){
    str += names[i] + ' = ' + data[i] + ch;
  }
  return str;
};
export const csvToObject = (csv) => {
  var values = csv.split(',');
  var keys = ['match', 'team', 'autonGears', 
    'autonBallsLow', 'autonBallsHigh', 'cross', 'teleopGears', 
    'teleopBallsHigh', 'teleopBallsLow', 'reachTouchPad', 'climb', 
    'robotDeadTime', 'comments', 'uid'];
  var o = {};
  keys.forEach((key, index) => {
    o = Object.assign({}, o, { [ key]: values[index]});
  });
  return o;
};
export const formatData = (dataArray) => {
  var s = '';
  dataArray.forEach((e) => {
    s += csv(e.data, ',') + '\n';
  });
  return s;
};
export const dataToRender = (d, id) =>{
  const renderData = d.find((value) =>{
    return value.id === id;
  }).data;
  return renderData;
};
  
export const csv = (d, ch) => {
  var data = Object.values(d);
  var str = '';
  for(var i = 0; i < data.length; i++){
    str += data[i] + ch;
  }
  //str = str.replace(/\s+/g, '');
  return str;
};