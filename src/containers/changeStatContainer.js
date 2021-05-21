import { connect } from "react-redux";
import SpecialInput from "../components/SpecialCreation/SpecialInput/SpecialInput";
import incrementStat from "../components/store/actions/incrementAction";
import decrementStat from "../components/store/actions/decrementAction";

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (id) => dispatch(incrementStat(id)),
    decrement: (id) => dispatch(decrementStat(id)),
  };
};

const SpecialInputConnected = connect(null, mapDispatchToProps)(SpecialInput);

export default SpecialInputConnected;
