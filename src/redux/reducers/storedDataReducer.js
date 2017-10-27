import { STASH, SET_UID, SAVE_EDIT_DATA, CLEAR_STORED_DATA } from '../config/actionTypes';

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
function storedData(state={stash: [], uid: ''}, action, data){
    switch(action.type){
    case STASH:{
        var obj = {id: action.id, data: data.matchScoutData};
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
    case CLEAR_STORED_DATA:
        return Object.assign({}, state, {
            storedData: {stash: [], uid: ''}
        });
    default:
        return state;
    }
}

export default storedData;