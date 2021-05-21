import { connect } from "react-redux";
import SpecialOutput from "../components/SpecialCreation/SpecialOutput/SpecialOutput.jsx";

const mapStateToProps = (state) => {
  return {
    stats: state.changeStat,
  };
};

const SpecialOutputConnected = connect(mapStateToProps)(SpecialOutput);

export default SpecialOutputConnected;
