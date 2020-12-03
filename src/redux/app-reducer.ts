import { setAuthUserDataThunk } from './auth-reducer'

const SET_INITIALIZED = 'SET_INITIALIZED'

let initialState = {
  initialized: false,
}

export const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_INITIALIZED: {
      return {
        ...state,
        initialized: true,
      }
    }

    default:
      return state
  }
}

export const initializingSuccess = () => {
  return {
    type: SET_INITIALIZED,
  }
}

export const initializeApp = () => (dispatch: any) => {
  const promise = dispatch(setAuthUserDataThunk())
  Promise.all([promise]).then(() => {
    dispatch(initializingSuccess())
  })
}
