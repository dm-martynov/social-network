import { BaseThunkType } from './../store'
import { ResultCodeForCaptcha } from '../../api/index.api'

import { stopSubmit } from 'redux-form'
import { ResultCodeEnum } from '../../api/index.api'
import { securityCaptchaAPI } from '../../api/securityCaptcha.api'
import { authenticationAPI } from '../../api/authentication.api'
import { authActions, AuthActionTypes } from './auth.actions'
import { Action } from 'redux'

type AuthThunkType = BaseThunkType<AuthActionTypes>

export const setAuthUserDataThunk = (): AuthThunkType => async (dispatch) => {
  const data = await authenticationAPI.setAuth()
  if (data.resultCode === ResultCodeEnum.Success) {
    const { id, email, login } = data.data
    dispatch(authActions.setUserData(id, email, login, true))
  }
}

export const login = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string
): BaseThunkType<Action> => async (dispatch) => {
  const data = await authenticationAPI.login(
    email,
    password,
    rememberMe,
    captcha
  )

  if (data.resultCode === ResultCodeEnum.Success) {
    dispatch(setAuthUserDataThunk())
  } else {
    if (data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
      dispatch(getCaptchaUrl())
    }
    const message = data.messages.length > 0 ? data.messages[0] : 'Some error'
    dispatch(stopSubmit('login', { _error: message }))
  }
}

export const getCaptchaUrl = (): AuthThunkType => async (dispatch) => {
  const data = await securityCaptchaAPI.getCaptchaUrl()
  const captchaUrl = data.url
  dispatch(authActions.getCaptchaUrlSuccess(captchaUrl))
}

export const logout = (): AuthThunkType => async (dispatch) => {
  const data = await authenticationAPI.logout()
  if (data.resultCode === ResultCodeEnum.Success) {
    dispatch(authActions.setUserData(null, null, null, false))
  }
}
