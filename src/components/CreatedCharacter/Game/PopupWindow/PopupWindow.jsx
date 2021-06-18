import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./PopupWindow.scss";
import questsDescription from "../../../../constants/questsDescription.jsx";
import loadGame from "../../../../store/actions/loadGame.jsx";
import getLoot from "../../../../store/actions/getLoot.jsx";

const PopupWindow = ({ investigateIsShown, toggleWindow, state, getLoot }) => {
  const [windowNumber, setWindowNumber] = useState(1);

  const requirementAccess = (object, prop) => {
    return object[prop];
  };

  const mapLoot = () => {
    let roomLoot = requirementAccess(
      questsDescription.rookHouse,
      windowNumber
    ).loot;
    if (
      requirementAccess(questsDescription.rookHouse, windowNumber).loot !=
      undefined
    ) {
      getLoot(roomLoot.id, roomLoot.amount);
    }
  };

  useEffect(() => {
    mapLoot();
  }, [windowNumber]);
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
        <img src={questsDescription.rookHouse[windowNumber].image} />
        <p>{questsDescription.rookHouse[windowNumber].description}</p>
        <div className="point-description__buttons">
          {questsDescription.rookHouse[windowNumber].buttons.map(
            (button, index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    if (button.requirements == undefined) {
                      setWindowNumber(button.toWindow);
                    } else if (
                      requirementAccess(
                        state,
                        Object.entries(button.requirements)[0][0]
                      ) >= Object.entries(button.requirements)[0][1]
                    ) {
                      setWindowNumber(button.toWindow);
                    } else {
                      alert("You're not matching required parameters!");
                    }
                  }}
                >
                  {button.name}
                  {button.requirements != undefined
                    ? "[" +
                      Object.entries(
                        button.requirements
                      )[0][0].toLocaleUpperCase() +
                      ": " +
                      Object.entries(button.requirements)[0][1] +
                      "]"
                    : ""}
                </button>
              );
            }
          )}
        </div>
      </section>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.changeStat,
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
    getLoot: (id, amount) => {
      dispatch(getLoot(id, amount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopupWindow);
