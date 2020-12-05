import { Dispatch } from 'react'
import { AppStateType } from './../rootReducer'
import { ThunkAction } from 'redux-thunk'
import { stopSubmit } from 'redux-form'
import { ProfileAPI } from '../../api/api'
import { ProfileType } from '../../types/types'
import {
  savePhotoSuccess,
  setStatus,
  setUserProfile,
  ProfileActionTypes,
} from './profile.actions'

type ThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ProfileActionTypes
>

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  const data = await ProfileAPI.getStatus(userId)
  dispatch(setStatus(data))
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  const data = await ProfileAPI.updateStatus(status)
  if (data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export const savePhoto = (file: any): ThunkType => async (dispatch) => {
  const data = await ProfileAPI.savePhoto(file)
  if (data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.data.photos))
  }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (
  dispatch,
  getState: any
) => {
  const userId = getState().auth.userId
  const data = await ProfileAPI.saveProfile(profile)
  if (data.resultCode === 0) {
    dispatch(getUserProfile(userId))
  } else {
    const message = data.messages.length > 0 ? data.messages[0] : 'Some error'
    // @ts-ignore
    dispatch(stopSubmit('edit-profile', { _error: message }))
    return Promise.reject(message)
  }
}

export const getUserProfile = (userId: number): ThunkType => async (
  dispatch
) => {
  const data = await ProfileAPI.getProfile(userId)
  dispatch(setUserProfile(data))
}
