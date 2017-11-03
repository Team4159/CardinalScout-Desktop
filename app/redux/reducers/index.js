import { SUBMIT_FORM, RESET_DATA, SAVE_EDIT_DATA,CLEAR_STORED_DATA, STASH, SET_UID, EDIT_DATA, SAVE_STATE, SAVE_IMPORTED_DATA, DELETE_DATA } from '../config/actionTypes';
import storedData from './storedDataReducer';
import temporaryData from './temporaryDataReducer';

const initialState = {
  storedData: storedData(undefined, {type: undefined}),
  temporaryData: temporaryData(undefined, {type: undefined})
};
const  rootReducer = (state = initialState, action) => {
  switch (action.type) {
  case SAVE_EDIT_DATA:
  case SET_UID:
  case DELETE_DATA:
  case SAVE_IMPORTED_DATA:
  case STASH:{
    localStorage.myAppState = JSON.stringify(Object.assign({}, state,
      {storedData: storedData(state.storedData, action, state.temporaryData)}));
    return Object.assign({}, state,
      {storedData: storedData(state.storedData, action, state.temporaryData)});
  }
  case SUBMIT_FORM:
  case RESET_DATA:
  case EDIT_DATA:{
    localStorage.myAppState = JSON.stringify(Object.assign({}, state,
      {temporaryData: temporaryData(state.temporaryData, action, state.storedData.stash)}));
    return Object.assign({}, state,
      {temporaryData: temporaryData(state.temporaryData, action, state.storedData.stash)});
  }
  case SAVE_STATE:{
    localStorage.myAppState = JSON.stringify(state);
    return state;
  }
  case CLEAR_STORED_DATA:{
    localStorage.myAppState = '';
    return initialState;
  }  
  default:
    return state;

  }
};
export default rootReducer;