import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let dialogsData = [
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
];

let messagesData = [
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
];

let postsData = [
  {
    id: 1,
    message: "Hi, how are ytou",
    likesCount: 12,
  },
  {
    id: 2,
    message: "Yo, it's my post",
    likesCount: 11,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App
      dialogsData={dialogsData}
      messagesData={messagesData}
      postsData={postsData}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
