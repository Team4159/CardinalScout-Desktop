export const display = (d, ch) => {
  var names = Object.keys(d);
  var data = Object.values(d);
  var str = '';
  for(var i = 0; i < names.length; i++){
    str += names[i] + ' = ' + data[i] + ch;
  }
  return str;
};
  
export const dataToRender = (d, id) =>{
  const renderData = d.find((value) =>{
    return value.id === id;
  }).data;
  return renderData;
};
  
export const csv = (d, uid, ch) => {
  var data = Object.values(d);
  var str = uid + ',';
  for(var i = 0; i < data.length; i++){
    str += data[i] + ch;
  }
  str = str.replace(/\s+/g, '');
  return str;
};