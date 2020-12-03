import { appActionTypes } from './app.types'

type StateType = {
  initialized: boolean
}

const INITIAL_STATE: StateType = {
  initialized: false,
}

export const appReducer = (
  state: StateType = INITIAL_STATE,
  action: any
): StateType => {
  switch (action.type) {
    case appActionTypes.SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      }

    default:
      return state
  }
}
