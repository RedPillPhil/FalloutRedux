import { connect } from "react-redux";
import SpecialInput from "../components/SpecialCreation/SpecialInput/SpecialInput.jsx";

const mapStateToProps = (state) => {
  return {
    state: state.changeStat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (id) => dispatch(incrementStat(id)),
    decrement: (id) => dispatch(decrementStat(id)),
    saveStats: (name) => dispatch(saveCharacter(name)),
  };
};

const SpecialInputConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpecialInput);

export default SpecialInputConnected;
