import React from "react";
import { updateNewMessageText, addNewMessage } from "../../redux/state";
import DialogItem from "./DialogItem/DialogItem";

import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const newMessageElement = React.createRef();

  const onMessageChange = () => {
    const text = newMessageElement.current.value;
    props.dispatch(updateNewMessageText(text));
  };

  const addMessageToState = () => {
    props.dispatch(addNewMessage());
  };

  let dialogsElements = props.dialogsPage.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.dialogsPage.messagesData.map((message) => (
    <Message message={message.message} id={message.id} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
      <div>
        <div>
          <textarea
            value={props.dialogsPage.newMessageBody}
            onChange={onMessageChange}
            ref={newMessageElement}
          ></textarea>
        </div>

        <div>
          <button onClick={addMessageToState}>Add post</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
