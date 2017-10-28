import { SUBMIT_FORM, RESET_DATA, SAVE_EDIT_DATA,CLEAR_STORED_DATA, STASH, SET_UID, EDIT_DATA } from '../config/actionTypes';
import storedData from './storedDataReducer';
import temporaryData from './temporaryDataReducer';

const initialState = {
  storedData: storedData(undefined, {type: undefined}),
  temporaryData: temporaryData(undefined, {type: undefined})
};
function dataReducer(state = initialState, action){
  switch (action.type) {
  case SAVE_EDIT_DATA:
  case SET_UID:
  case CLEAR_STORED_DATA:
  case STASH:{
    return Object.assign({}, state,
      {storedData: storedData(state.storedData, action, state.temporaryData)});
  }
  case SUBMIT_FORM:
  case RESET_DATA:
  case EDIT_DATA:
    return Object.assign({}, state,
      {temporaryData: temporaryData(state.temporaryData, action, state.storedData.stash)});
  default:
    return state;

  }
}
export default dataReducer;