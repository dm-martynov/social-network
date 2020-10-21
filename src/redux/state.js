const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

let store = {
  _state: {
    profilePage: {
      postsData: [
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
      newPostText: "it-kama",
    },
    dialogsPage: {
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
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    debugger;
    this._rerenderEntireTree = observer;
  },
  _rerenderEntireTree() {
    console.log("State changed");
  },
  _addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.postsData.push(newPost);
    this._rerenderEntireTree(this._state);
    this._state.profilePage.newPostText = "";
  },
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._rerenderEntireTree(this._state);
  },
  _addMessage() {
    let newPost = {
      id: 7,
      message: this._state.dialogsPage.newPostText,
    };
    this._state.dialogsPage.messagesData.push(newPost);
    this._rerenderEntireTree(this._state);
    this._state.dialogsPage.newMessageBody = "";
  },
  _updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageBody = newText;
    this._rerenderEntireTree(this._state);
  },

  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        this._addPost();
        break;
      case UPDATE_NEW_POST_TEXT:
        this._updateNewPostText(action.newText);
        break;
      case ADD_MESSAGE:
        this._addMessage();
        break;
      case UPDATE_NEW_MESSAGE:
        this._updateNewMessageText(action.newText);
        break;
      default:
        console.log("nothing to dispatch");
    }
  },
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const addNewMessage = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const updateNewMessageText = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE,
    newText: text,
  };
};

export default store;
window.store = store;
