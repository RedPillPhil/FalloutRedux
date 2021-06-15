import React from "react";
import { connect } from "react-redux";
import "./PopupWindow.scss";
import questsDescription from "../../../../constants/questsDescription.jsx";

const PopupWindow = ({ isShown, toggleWindow }) => {
  return (
    <main
      className='popup-window'
      style={isShown ? { display: "block" } : { display: "none" }}
    >
      <div className='top-bar'>
        <button className='top-bar__close-btn' onClick={toggleWindow}>
          x
        </button>
      </div>
      <img src={questsDescription[0].image} />
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
