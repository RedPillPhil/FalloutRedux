const UNSET_OVER = "UNSET_OVER";

const unsetOver = (id) => {
  return {
    type: UNSET_OVER,
    payload: id,
  };
};

export default unsetOver;
