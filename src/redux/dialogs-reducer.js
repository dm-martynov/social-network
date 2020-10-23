const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

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
  newMessageBody: "dick",
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 7,
        message: state.newMessageBody,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
        newMessageBody: "",
      };

    case UPDATE_NEW_MESSAGE:
      return {
        ...state,
        newMessageBody: action.newText,
      };

    default:
      return state;
  }
};

export const addNewMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE,
    newText: text,
  };
};
