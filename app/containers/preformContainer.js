import Preform from '../components/preform';
import { connect } from 'react-redux';
import { submit, setUID } from '../redux/actions';
const mapStateToProps = (state) => ({
  matchValue: state.temporaryData.matchScoutData.match,
  teamValue: state.temporaryData.matchScoutData.team,
  uid: state.storedData.uid
});
const mapDispatchToProps = (dispatch) => ({
  onChangeText: (w, text) => dispatch(submit({[ w ]: text})),
  setUID: (text) => dispatch(setUID(text))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preform);