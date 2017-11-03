import { STASH, SET_UID, SAVE_EDIT_DATA, CLEAR_STORED_DATA, SAVE_IMPORTED_DATA, DELETE_DATA } from '../config/actionTypes';

function editData(state, action, data){
  switch(action.type){
  case SAVE_EDIT_DATA:{
    if(data.id !== state.id){
      return state;
    }
    return Object.assign({}, state, {data: data.data});
  }
  default: return state;
  }
}
function deleteData(state, action){
  return state.filter((d) => (d.id !== action.id ));
}
function storedData(state={stash: [], uid: ''}, action, data){
  switch(action.type){
  case STASH:{
    var obj = {id: action.id, data: {...data.matchScoutData, uid: state.uid }};
    var ds = [...state.stash, obj];
    return Object.assign({}, state, {stash: ds});
  }
  case SET_UID:{
    return Object.assign({}, state, {uid: action.uid});
  }
  case SAVE_EDIT_DATA:{
    return Object.assign({}, state,
      {stash: state.stash.map(stashItem => editData(stashItem, action, data.editData))});
  }
  case CLEAR_STORED_DATA:{
    localStorage.myAppState = '';
    return Object.assign({}, state, {
      storedData: {stash: [], uid: ''}
    }); }
  case SAVE_IMPORTED_DATA: 
    return Object.assign({}, state,{
      stash: [ ...state.stash, ...action.dataArray]
    });
  case DELETE_DATA: 
    return Object.assign({}, state, {stash: deleteData(state.stash, action) } );
  default:
    return state;
  }
}

export default storedData;