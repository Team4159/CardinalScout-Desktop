import * as a from '../config/actionTypes';
import v4 from 'uuid/v4';
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
    id: v4()
  };
};
export const setUID = (uid) => {
  return {
    type: a.SET_UID,
    uid
  };
};
export const editData = (newData, id) => {
  return{
    type: a.EDIT_DATA,
    newData,
    id
  };
};

export const saveEditData = () => {
  return{
    type: a.SAVE_EDIT_DATA,
  };
};