const ADD_MESSAGE = "ADD_MESSAGE";

let initialState = {
  messagesData: [
    {
      id: 1,
      message: "Hi",
    },
    {
      id: 2,
      message: "Yo",
    },
    {
      id: 3,
      message: "Yo",
    },
    {
      id: 4,
      message: "Yo",
    },
    {
      id: 5,
      message: "Yo",
    },
    {
      id: 6,
      message: "Yo",
    },
  ],
  dialogsData: [
    {
      id: 1,
      name: "Dimes",
    },
    {
      id: 2,
      name: "Murad",
    },
    {
      id: 3,
      name: "Yarik",
    },
    {
      id: 4,
      name: "Savva",
    },
    {
      id: 5,
      name: "Vasya",
    },
    {
      id: 6,
      name: "LeMaman",
    },
  ],
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 7,
        message: action.newMessageBody,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
      };

    default:
      return state;
  }
};

export const addNewMessageActionCreator = (newMessageBody) => {
  return {
    type: ADD_MESSAGE,
    newMessageBody,
  };
};
