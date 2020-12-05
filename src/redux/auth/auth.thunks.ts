import { ResultCodeForCaptcha } from './../../api/api'
import { AppStateType } from './../rootReducer'
import { ThunkAction } from 'redux-thunk'
import { stopSubmit } from 'redux-form'
import {
  loginLogoutAPI,
  ResultCodeEnum,
  securityCaptchaAPI,
} from '../../api/api'
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
  const data = await loginLogoutAPI.setAuth()
  if (data.resultCode === ResultCodeEnum.Success) {
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
  const data = await loginLogoutAPI.login(email, password, rememberMe, captcha)

  if (data.resultCode === ResultCodeEnum.Success) {
    dispatch(setAuthUserDataThunk())
  } else {
    if (data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
      dispatch(getCaptchaUrl())
    }
    const message = data.messages.length > 0 ? data.messages[0] : 'Some error'
    // @ts-ignore
    dispatch(stopSubmit('login', { _error: message }))
  }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const data = await securityCaptchaAPI.getCaptchaUrl()
  const captchaUrl = data.url
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = (): ThunkType => async (dispatch) => {
  const data = await loginLogoutAPI.logout()
  if (data.resultCode === ResultCodeEnum.Success) {
    dispatch(setUserData(null, null, null, false))
  }
}
