import axios from 'axios'
import { ProfileType } from '../types/types'

export enum ResultCodeEnum {
  Success = 0,
  Error = 1,
}

export enum ResultCodeForCaptcha {
  CaptchaIsRequired = 10,
}

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'a4a5d785-632f-415f-9622-2cc8a89c1cbb',
  },
})

export const getUsersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data
      })
  },
  deleteFollowing(userId: number) {
    return instance.delete(`follow/${userId}`).then((response) => response.data)
  },
  addFollowing(userId: number) {
    return instance.post(`follow/${userId}`).then((response) => {
      return response.data
    })
  },
}

type SetAuthResponseType = {
  data: { id: number; email: string; login: string }
  resultCode: ResultCodeEnum | ResultCodeForCaptcha
  messages: Array<string>
}

type LoginResponseType = {
  data: { userId: number }
  resultCode: ResultCodeEnum | ResultCodeForCaptcha
  messages: Array<string>
}

export const loginLogoutAPI = {
  setAuth() {
    return instance.get<SetAuthResponseType>('auth/me').then((res) => {
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
      .post<LoginResponseType>('auth/login', {
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

export const ProfileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/${userId}`).then((res) => {
      return res.data
    })
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/${userId}`).then((res) => {
      return res.data
    })
  },
  updateStatus(status: string) {
    return instance.put(`profile/status/`, { status: status }).then((res) => {
      return res.data
    })
  },
  savePhoto(photoFile: any) {
    const formData = new FormData()
    formData.append('image', photoFile)
    return instance
      .put(`profile/photo/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        return res.data
      })
  },

  saveProfile(profile: ProfileType) {
    return instance.put(`profile/`, profile).then((res) => {
      return res.data
    })
  },
}

export const securityCaptchaAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`).then((res) => {
      return res.data
    })
  },
}
