import { AppStateType } from './../rootReducer'
import { ThunkAction } from 'redux-thunk'
import { stopSubmit } from 'redux-form'
import { ProfileType } from '../../types/types'
import { profileActions, ProfileActionTypes } from './profile.actions'
import { profileAPI } from '../../api/profile.api'

type ThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ProfileActionTypes
>

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  const data = await profileAPI.getStatus(userId)
  dispatch(profileActions.setStatus(data))
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  const data = await profileAPI.updateStatus(status)
  if (data.resultCode === 0) {
    dispatch(profileActions.setStatus(status))
  }
}

export const savePhoto = (file: any): ThunkType => async (dispatch) => {
  const data = await profileAPI.savePhoto(file)
  if (data.resultCode === 0) {
    dispatch(profileActions.savePhotoSuccess(data.data.photos))
  }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (
  dispatch,
  getState: any
) => {
  const userId = getState().auth.userId
  const data = await profileAPI.saveProfile(profile)
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
  const data = await profileAPI.getProfile(userId)
  dispatch(profileActions.setUserProfile(data))
}
