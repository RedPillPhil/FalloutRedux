const SAVE_CHARACTER = "SAVE_CHARACTER";

const saveCharacter = (name) => {
  return {
    type: SAVE_CHARACTER,
    payload: name,
  };
};

export default saveCharacter;
