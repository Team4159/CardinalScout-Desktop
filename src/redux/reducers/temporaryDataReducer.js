import { SUBMIT_FORM, RESET_DATA, EDIT_DATA } from '../config/actionTypes';
import { dataToRender } from '../config/globalFunctions';
const initialState = {
    matchScoutData:  {
        match: '',
        team: '',
        autonGears: 0,
        autonBallsLow: 0,
        autonBallsHigh : 0,
        cross: 'F',
        teleopGears: 0,
        teleopBallsHigh: 0,
        teleopBallsLow: 0,
        reachTouchPad: 'F',
        climb: 'F',
        robotDeadTime: 0,
        comments: '',
    },
    editData: {
        id: 0,
        data: {
            match: '',
            team: '',
            autonGears: 0,
            autonBallsLow: 0,
            autonBallsHigh : 0,
            cross: 'F',
            teleopGears: 0,
            teleopBallsHigh: 0,
            teleopBallsLow: 0,
            reachTouchPad: 'F',
            climb: 'F',
            robotDeadTime: 0,
            comments: '',
        }
    }
};
const temporaryData = (state = initialState, action, stash) =>{
    switch (action.type) {
    case SUBMIT_FORM:{
        var data = Object.assign({}, state.matchScoutData, action.data);
        return Object.assign({}, state, {matchScoutData: data});
    }
    case RESET_DATA:
        return initialState;
    case EDIT_DATA:{
        if(!action.newData){
            return Object.assign({}, state, {editData: {id: action.id, data:dataToRender(stash, action.id)}});
        }
        var newData = Object.assign({}, state.editData.data, action.newData);
        var editData = Object.assign({}, state.editData, { data: newData });
        return Object.assign({}, state, {editData: editData});
    }
    default:
        return state;

    }
};
export default temporaryData;