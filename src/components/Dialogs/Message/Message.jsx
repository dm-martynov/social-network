import React from "react";

import classes from "./Message.module.css";

const Message = (props) => (
  <div className={classes.dialog}>{props.message}</div>
);

export default Message;
