const SET_OVER = "SET_OVER";

const setOver = (id) => {
  return {
    type: SET_OVER,
    payload: id,
  };
};

export default setOver;
