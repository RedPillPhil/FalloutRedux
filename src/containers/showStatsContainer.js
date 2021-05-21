import { connect } from "react-redux";
import SpecialOutput from "../components/SpecialCreation/SpecialOutput/SpecialOutput";

const mapStateToProps = (state) => {
  return {
    stats: state.changeStat,
  };
};

const SpecialOutputConnected = connect(mapStateToProps)(SpecialOutput);

export default SpecialOutputConnected;
