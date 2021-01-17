import React from 'react'

import classes from './Message.module.css'

const Message = (props: any) => (
  <div className={classes.dialog}>{props.message}</div>
)

export default Message
