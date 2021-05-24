import { connect } from "react-redux";
import SingleStat from "../components/SingleStat/SingleStat.jsx";
import incrementStat from "../store/actions/incrementAction";
import decrementStat from "../store/actions/decrementAction";

const mapStateToProps = (state) => {
  return {
    stats: state.changeStat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (id) => dispatch(incrementStat(id)),
    decrement: (id) => dispatch(decrementStat(id)),
  };
};

const SingleStatConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleStat);

export default SingleStatConnected;
