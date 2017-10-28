import Preform from '../components/preform';
import { connect } from 'react-redux';
import { submit } from '../redux/actions';
const mapStateToProps = (state) => ({
  matchValue: state.temporaryData.matchScoutData.match,
  teamValue: state.temporaryData.matchScoutData.team
});
const mapDispatchToProps = (dispatch) => ({
  onChangeText: (w, text) => dispatch(submit({[ w ]: text}))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preform);