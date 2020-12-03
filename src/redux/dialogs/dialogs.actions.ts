import { dialogsActionTypes } from './dialogs.types'
type addNewMessageActionCreatorType = {
  type: typeof dialogsActionTypes.ADD_MESSAGE
  payload: string
}

export const addNewMessageActionCreator = (
  newMessageBody: string
): addNewMessageActionCreatorType => ({
  type: dialogsActionTypes.ADD_MESSAGE,
  payload: newMessageBody,
})
