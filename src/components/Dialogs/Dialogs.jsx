import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Dialogs.module.css";

const DialogItem = (props) => (
  <div className={classes.dialog + " " + classes.active}>
    <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
  </div>
);

const Message = (props) => (
  <div className={classes.dialog}>{props.message}</div>
);

const Dialog = (props) => (
  <div className={classes.dialogs}>
    <div className={classes.dialogItems}>
      <DialogItem name="Dimes" id="1" />
      <DialogItem name="Murad" id="2" />
      <DialogItem name="Yarik" id="3" />
      <DialogItem name="Savva" id="4" />
      <DialogItem name="Vasya" id="5" />
      <DialogItem name="LeMaman" id="6" />
    </div>
    <div className={classes.messages}>
      <Message message="Hi" />
      <Message message="Yo" />
      <Message message="Bitch" />
    </div>
  </div>
);

export default Dialog;
