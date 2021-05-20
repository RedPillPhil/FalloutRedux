import { connect } from "react-redux";
import SpecialOutput from "../components/SpecialCreation/SpecialOutput/SpecialOutput";

const mapStateToProps = (state) => {
  return {
    stats: state,
  };
};

const SpecialOutputConnected = connect(mapStateToProps)(SpecialOutput);

export default SpecialOutputConnected;
