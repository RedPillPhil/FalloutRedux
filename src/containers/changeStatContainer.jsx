import { connect } from "react-redux";
import SpecialInput from "../components/CharacterCreation/SpecialInput/SpecialInput.jsx";

const mapStateToProps = (state) => {
  return {
    state: state.characterStats,
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
