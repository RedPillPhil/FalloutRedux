import React from "react";
import { connect } from "react-redux";
import "./Inventory.scss";

const Inventory = ({ inventory }) => {
  const convertedInventory = Object.entries(inventory);
  console.log(convertedInventory);
  return (
    <main className="inventory">
      {convertedInventory.map((item, index) => {
        return (
          <div key={index}>
            {item[1]}
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
