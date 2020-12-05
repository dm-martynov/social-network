import axios from 'axios'
import { UserType } from '../types/types'

export type APIResponseType<
  D = {},
  RC = ResultCodeEnum | ResultCodeForCaptcha
> = {
  data: D
  messages: Array<string>
  resultCode: RC
}

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'a4a5d785-632f-415f-9622-2cc8a89c1cbb',
  },
})

export enum ResultCodeEnum {
  Success = 0,
  Error = 1,
}

export enum ResultCodeForCaptcha {
  CaptchaIsRequired = 10,
}

export type GetItemsType = {
  items: Array<UserType>
  totalCount: number
  error: string | null
}
