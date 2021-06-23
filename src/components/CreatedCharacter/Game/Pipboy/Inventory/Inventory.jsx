import React from "react";
import { connect } from "react-redux";
import { inventoryPictures } from "../../../../../constants/inventoryImport.jsx";
import "./Inventory.scss";

const Inventory = ({ inventory }) => {
  const getObjectProperty = (object, prop) => {
    return object[prop];
  };

  const convertedInventory = Object.entries(inventory);

  return (
    <main className="inventory">
      {convertedInventory.map((item, index) => {
        return (
          <div
            className="inventory-item"
            key={index}
            style={{
              backgroundImage:
                "url('" + getObjectProperty(inventoryPictures, item[0]) + "')",
            }}
          >
            <h3>{item[1]}</h3>
            <p>{item[0]}</p>
          </div>
        );
      })}
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    inventory: state.changeStat.inventory,
  };
};

export default connect(mapStateToProps)(Inventory);
