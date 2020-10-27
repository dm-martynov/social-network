import React from "react";
import { Redirect } from "react-router-dom";

import DialogItem from "./DialogItem/DialogItem";

import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const newMessageElement = React.createRef();

  let dialogsElements = props.dialogsPage.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));

  let messagesElements = props.dialogsPage.messagesData.map((message) => (
    <Message message={message.message} key={message.id} id={message.id} />
  ));

  let onSendMessageClick = () => {
    props.addNewMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageText(body);
  };

  if (props.isAuth === false) {
    return <Redirect to={"/login"} />;
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
      <div>
        <div>
          <textarea
            value={props.dialogsPage.newMessageBody}
            onChange={onNewMessageChange}
            ref={newMessageElement}
          ></textarea>
        </div>

        <div>
          <button onClick={onSendMessageClick}>Add post</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
