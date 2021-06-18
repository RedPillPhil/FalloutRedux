const GET_LOOT = "GET_LOOT";

const getLoot = (id, amount) => {
  return {
    type: GET_LOOT,
    id: id,
    amount: amount,
  };
};

export default getLoot;
