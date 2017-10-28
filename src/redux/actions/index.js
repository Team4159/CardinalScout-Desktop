import * as a from '../config/actionTypes';
import short from 'short-uuid';
export const submit = (data) => {
  return {
    type: a.SUBMIT_FORM,
    data
  };
};
export const resetData= () => {
  return{
    type: a.RESET_DATA,
  };
};
export const resetStoredData= () => {
  return{
    type: a.CLEAR_STORED_DATA
  };
};
export const stash= () => {
  return {
    type: a.STASH,
    id: short().new()
  };
};
export const setUID = (uid) => {
  return {
    type: a.SET_UID,
    uid
  };
};
export const editData = (id, newData) => {
  return{
    type: a.EDIT_DATA,
    id,
    newData
  };
};

export const saveEditData = () => {
  return{
    type: a.SAVE_EDIT_DATA,
  };
};
export const saveState = () => ({
  type: a.SAVE_STATE
});