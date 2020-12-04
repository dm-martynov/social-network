import { AppStateType } from './../rootReducer'
import { ThunkAction } from 'redux-thunk'
import { stopSubmit } from 'redux-form'
import { authAPI, securityAPI } from '../../api/api'
import {
  getCaptchaUrlSuccess,
  setUserData,
  AuthActionTypes,
} from './auth.actions'

type ThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  AuthActionTypes
>

export const setAuthUserDataThunk = (): ThunkType => async (dispatch) => {
  const data = await authAPI.setAuth()
  if (data.resultCode === 0) {
    const { id, email, login } = data.data
    dispatch(setUserData(id, email, login, true))
  }
}

export const login = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string
): ThunkType => async (dispatch) => {
  const data = await authAPI.login(email, password, rememberMe, captcha)

  if (data.resultCode === 0) {
    dispatch(setAuthUserDataThunk())
  } else {
    if (data.resultCode === 10) {
      dispatch(getCaptchaUrl())
    }
    const message = data.messages.length > 0 ? data.messages[0] : 'Some error'
    // @ts-ignore
    dispatch(stopSubmit('login', { _error: message }))
  }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const data = await securityAPI.getCaptchaUrl()
  const captchaUrl = data.url
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = (): ThunkType => async (dispatch) => {
  const data = await authAPI.logout()
  if (data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false))
  }
}
