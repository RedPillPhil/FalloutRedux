import React from "react";
import { connect } from "react-redux";
import "./PopupWindow.scss";
import questsDescription from "../../../../constants/questsDescription.jsx";

const PopupWindow = ({ investigateIsShown, toggleWindow }) => {
  return (
    <main
      className="popup-window"
      style={investigateIsShown ? { display: "block" } : { display: "none" }}
    >
      <div className="top-bar">
        <button className="top-bar__close-btn" onClick={toggleWindow}>
          x
        </button>
      </div>
      <section className="point-description">
        <img src={questsDescription[0].image} />
        <p>{questsDescription[0].description}</p>
        <div className="point-description__buttons">
          <button>LOOK AROUND</button>
          <button>GET INSIDE</button>
        </div>
      </section>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.changeStats,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setOver: () => {
      dispatch(setOver());
    },
    unsetOver: () => {
      dispatch(unsetOver());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopupWindow);
