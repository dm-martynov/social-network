import { stopSubmit } from 'redux-form'
import { authAPI, securityAPI } from '../../api/api'
import { authActionTypes } from './auth.types'

export type InitialStateType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean | false
  captchaUrl: string | null
}

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
}

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
