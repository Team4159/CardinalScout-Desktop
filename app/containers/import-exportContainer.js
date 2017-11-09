import ImportExport from '../components/import-export';
import { connect } from 'react-redux';
import { saveImportedData, saveState, clearStoredData } from '../redux/actions';

const mapStateToProps = (state) => ({
  storedData: state.storedData.stash,
  uid: state.storedData.uid
});
const mapDispatchToProps = (dispatch) => ({
  saveImportedData: (dataArray) => {
    dispatch(saveImportedData(dataArray));
    dispatch(saveState());
  },
  clearStoredData: () => dispatch(clearStoredData())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImportExport);