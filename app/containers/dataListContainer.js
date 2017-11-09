import DataList from '../components/dataList';
import { connect } from 'react-redux';
import { editData, saveEditData, saveState, resetData } from '../redux/actions';
const mapStateToProps = (state) => ({
  data: state.temporaryData.editData,
  dataList: state.storedData.stash
});
const mapDispatchToProps = (dispatch) => ({
  editData: (id, data) => dispatch(editData(id, data)),
  onSubmit: () => {
    dispatch(saveEditData());
    dispatch(resetData());
    dispatch(saveState());
  },
  
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataList);