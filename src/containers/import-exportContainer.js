import ImportExport from '../components/import-export';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  storedData: state.storedData.stash,
  uid: state.storedData.uid
});
export default connect(
  mapStateToProps
)(ImportExport);