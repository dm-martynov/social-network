import { InferActionTypes } from './../store'

export type AuthActionTypes = InferActionTypes<typeof authActions>

export const authActions = {
  setUserData: (
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean | null
  ) => {
    return {
      type: 'SET_USER_DATA',
      payload: { userId, email, login, isAuth },
    } as const
  },

  getCaptchaUrlSuccess: (captchaUrl: string) => {
    return {
      type: 'GET_CAPTCHA_URL_SUCCESS',
      payload: { captchaUrl },
    } as const
  },
}
