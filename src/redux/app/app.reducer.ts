import { AppActionTypes } from './app.actions'

type StateType = {
  initialized: boolean
}

const INITIAL_STATE: StateType = {
  initialized: false,
}

export const appReducer = (
  state: StateType = INITIAL_STATE,
  action: AppActionTypes
): StateType => {
  switch (action.type) {
    case 'SET_INITIALIZED':
      return {
        ...state,
        initialized: true,
      }

    default:
      return state
  }
}
