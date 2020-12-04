import { ProfileType, PhotosType } from './../../types/types'

import { profileActionTypes } from './profile.constants'

export type ProfileActionTypes =
  | AddPostActionCreatorType
  | SetUserProfileType
  | SetStatusType
  | SaveProfileSuccessType
  | SavePhotosActionCreatorType
  | DeletePostType

type AddPostActionCreatorType = {
  type: typeof profileActionTypes.ADD_POST
  payload: string
}

export const addPost = (newPostText: string): AddPostActionCreatorType => {
  return {
    type: profileActionTypes.ADD_POST,
    payload: newPostText,
  }
}

type SetUserProfileType = {
  type: typeof profileActionTypes.SET_USER_PROFILE
  payload: ProfileType
}

export const setUserProfile = (profile: ProfileType): SetUserProfileType => {
  return {
    type: profileActionTypes.SET_USER_PROFILE,
    payload: profile,
  }
}

type SetStatusType = {
  type: typeof profileActionTypes.SET_STATUS
  payload: string
}

export const setStatus = (status: string): SetStatusType => {
  return {
    type: profileActionTypes.SET_STATUS,
    payload: status,
  }
}

type DeletePostType = {
  type: typeof profileActionTypes.DELETE_POST
  payload: number
}

export const deletePost = (postId: number): DeletePostType => {
  return {
    type: profileActionTypes.DELETE_POST,
    payload: postId,
  }
}

type SavePhotosActionCreatorType = {
  type: typeof profileActionTypes.SAVE_PHOTO_SUCCESS
  payload: PhotosType
}
export const savePhotoSuccess = (
  photos: PhotosType
): SavePhotosActionCreatorType => {
  return {
    type: profileActionTypes.SAVE_PHOTO_SUCCESS,
    payload: photos,
  }
}
type SaveProfileSuccessType = {
  type: typeof profileActionTypes.SAVE_PROFILE_SUCCESS
  payload: ProfileType
}
export const saveProfileSuccess = (
  profile: ProfileType
): SaveProfileSuccessType => {
  return {
    type: profileActionTypes.SAVE_PROFILE_SUCCESS,
    payload: profile,
  }
}
