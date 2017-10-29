import Auton from '../components/auton';
import { connect } from 'react-redux';
import { submit } from '../redux/actions';
const mapStateToProps = (state) => ({
  gears: state.temporaryData.matchScoutData.autonGears,
  lowBalls: state.temporaryData.matchScoutData.autonBallsLow,
  highBalls: state.temporaryData.matchScoutData.autonBallsHigh,
  cross: state.temporaryData.matchScoutData.cross
});

const mapDispatchToProps = (dispatch) => ({
  onChange: ( w, v ) => dispatch(submit({ [ w ]: v }))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auton);