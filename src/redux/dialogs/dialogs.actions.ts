import { InferActionTypes } from './../store'

export type DialogActionTypes = InferActionTypes<typeof dialogActions>

export const dialogActions = {
  addMessage: (newMessageBody: string) =>
    ({
      type: 'ADD_MESSAGE',
      payload: newMessageBody,
    } as const),
}
