import React from 'react'
import { AddMessageFormRedux } from './AddMessageForm/AddMessageForm'
import classes from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import { DialogsInitialStateType } from '../../redux/dialogs/dialogs.reducer'

type OwnPropsType = {
  dialogsPage: DialogsInitialStateType
  addNewMessage: (messageText: string) => void
}

export type NewMessageFormValuesType = {
  newMessageBody: string
}

const Dialogs: React.FC<OwnPropsType> = (props) => {
  const dialogsElements = props.dialogsPage.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ))

  const messagesElements = props.dialogsPage.messagesData.map((message) => (
    <Message message={message.message} key={message.id} id={message.id} />
  ))

  const addNewMessage = (values: NewMessageFormValuesType) => {
    props.addNewMessage(values.newMessageBody)
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  )
}

export default Dialogs
