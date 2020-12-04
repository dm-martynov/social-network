import { authActionTypes } from './auth.constants'

type SetUserDataActionPayloadType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean | null
}

type SetUserDataActionType = {
  type: typeof authActionTypes.SET_USER_DATA
  payload: SetUserDataActionPayloadType
}

export const setUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean | null
): SetUserDataActionType => {
  return {
    type: authActionTypes.SET_USER_DATA,
    payload: { userId, email, login, isAuth },
  }
}

type getCaptchaUrlSuccessActionType = {
  type: typeof authActionTypes.GET_CAPTCHA_URL_SUCCESS
  payload: { captchaUrl: string }
}

export const getCaptchaUrlSuccess = (
  captchaUrl: string
): getCaptchaUrlSuccessActionType => {
  return {
    type: authActionTypes.GET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl },
  }
}
