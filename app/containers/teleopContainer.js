import Teleop from '../components/teleop';
import { connect } from 'react-redux';
import { submit, stash, resetData, saveState } from '../redux/actions';
const mapStateToProps = (state) => ({
  gears: state.temporaryData.matchScoutData.teleopGears,
  lowBalls: state.temporaryData.matchScoutData.teleopBallsLow,
  highBalls: state.temporaryData.matchScoutData.teleopBallsHigh,
  robotDeadTime: state.temporaryData.matchScoutData.robotDeadTime,
  climb: state.temporaryData.matchScoutData.climb,
  reachTouchPad: state.temporaryData.matchScoutData.reachTouchPad,
  comments: state.temporaryData.matchScoutData.comments
});

const mapDispatchToProps = (dispatch) => ({
  onChange: ( w, v ) => dispatch(submit({ [ w ]: v })),
  submit: () => {
    dispatch(stash());
    dispatch(resetData());
    dispatch(saveState());
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Teleop);