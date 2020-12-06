import { BaseThunkType } from './../store'

import { stopSubmit } from 'redux-form'
import { ProfileType } from '../../types/types'
import { profileActions, ProfileActionTypes } from './profile.actions'
import { profileAPI } from '../../api/profile.api'
import { Action } from 'redux'

type ProfileThunkType = BaseThunkType<ProfileActionTypes>

export const getStatus = (userId: number): ProfileThunkType => async (
  dispatch
) => {
  const data = await profileAPI.getStatus(userId)
  dispatch(profileActions.setStatus(data))
}

export const updateStatus = (status: string): ProfileThunkType => async (
  dispatch
) => {
  const data = await profileAPI.updateStatus(status)
  if (data.resultCode === 0) {
    dispatch(profileActions.setStatus(status))
  }
}

export const savePhoto = (file: File): ProfileThunkType => async (dispatch) => {
  const data = await profileAPI.savePhoto(file)
  if (data.resultCode === 0) {
    dispatch(profileActions.savePhotoSuccess(data.data.photos))
  }
}

export const saveProfile = (
  profile: ProfileType
): BaseThunkType<Action> => async (dispatch, getState) => {
  const userId = getState().auth.userId
  const data = await profileAPI.saveProfile(profile)

  if (data.resultCode === 0) {
    if (userId != null) {
      dispatch(getUserProfile(userId))
    } else {
      throw new Error("uerId can't be null")
    }
  } else {
    const message = data.messages.length > 0 ? data.messages[0] : 'Some error'

    dispatch(stopSubmit('edit-profile', { _error: message }))
    return Promise.reject(message)
  }
}

export const getUserProfile = (userId: number): ProfileThunkType => async (
  dispatch
) => {
  const data = await profileAPI.getProfile(userId)
  dispatch(profileActions.setUserProfile(data))
}
