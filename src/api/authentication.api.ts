import { instance, APIResponseType } from './index.api'

type SetAuthResponseType = {
  id: number
  email: string
  login: string
}

type LoginResponseType = {
  userId: number
}

export const authenticationAPI = {
  setAuth() {
    return instance
      .get<APIResponseType<SetAuthResponseType>>('auth/me')
      .then((res) => {
        return res.data
      })
  },
  login(
    email: string,
    password: string,
    rememberMe = false,
    captcha: null | string = null
  ) {
    return instance
      .post<APIResponseType<LoginResponseType>>('auth/login', {
        email,
        password,
        rememberMe,
        captcha,
      })
      .then((res) => {
        return res.data
      })
  },
  logout() {
    return instance.delete('auth/login').then((res) => {
      return res.data
    })
  },
}
