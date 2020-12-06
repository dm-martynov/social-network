import { BaseThunkType } from './../store'
import { appActions, AppActionTypes } from './app.actions'
import { setAuthUserDataThunk } from '../auth/auth.thunks'

type AppThunkType = BaseThunkType<AppActionTypes, void>

export const initializeApp = (): AppThunkType => {
  return (dispatch) => {
    const promise = dispatch(setAuthUserDataThunk())
    Promise.all([promise]).then(() => {
      dispatch(appActions.initializingSuccess())
    })
  }
}
