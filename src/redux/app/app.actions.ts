import { appActionTypes } from './app.types'

type InitializingSuccessActionType = {
  type: typeof appActionTypes.SET_INITIALIZED
}

export const initializingSuccess = (): InitializingSuccessActionType => ({
  type: appActionTypes.SET_INITIALIZED,
})
