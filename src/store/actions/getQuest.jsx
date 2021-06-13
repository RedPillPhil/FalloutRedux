const GET_QUEST = "GET_QUEST";

const getQuest = (id) => {
  return {
    type: GET_QUEST,
    payload: id,
  };
};

export default getQuest;
