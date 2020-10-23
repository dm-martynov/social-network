import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";

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
    sidebar: {},
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },
  _rerenderEntireTree() {
    console.log("State changed");
  },
  _addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 2,
    };
    this._state.profilePage.postsData.push(newPost);
    this._rerenderEntireTree(this._state);
    this._state.profilePage.newPostText = "";
  },
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    console.log(this._state.profilePage.newPostText);
    this._rerenderEntireTree(this._state);
  },
  _addMessage() {
    let newMessage = {
      id: 7,
      message: this._state.dialogsPage.newMessageBody,
    };

    this._state.dialogsPage.messagesData.push(newMessage);

    this._rerenderEntireTree(this._state);
    this._state.dialogsPage.newMessageBody = "";
  },
  _updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageBody = newText;
    console.log(newText);
    this._rerenderEntireTree(this._state);
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._rerenderEntireTree(this._state);
  },
};

export default store;
window.store = store;
