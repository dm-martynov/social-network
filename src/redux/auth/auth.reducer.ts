import { stopSubmit } from 'redux-form'
import { authAPI, securityAPI } from '../../api/api'
import { authActionTypes } from './auth.constants'

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null,
}

export type InitialStateType = typeof initialState

export const authReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case authActionTypes.SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      }
    }

    case authActionTypes.GET_CAPTCHA_URL_SUCCESS: {
      return {
        ...state,
        ...action.payload,
      }
    }

    default:
      return state
  }
}
