import { instance } from './index.api'

type GetCaptchaUrlResponseType = {
  url: string
}

export const securityCaptchaAPI = {
  getCaptchaUrl() {
    return instance
      .get<GetCaptchaUrlResponseType>(
        `GetCaptchaUrlResponseTypesecurity/get-captcha-url`
      )
      .then((res) => {
        return res.data
      })
  },
}
